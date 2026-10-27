const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('node:path');
const fs = require('node:fs');
const Store = require('electron-store');
const XLSX = require('xlsx');

const store = new Store({
  name: 'english_growth_v2',
  defaults: {
    groups: [],
    support_lang: 'es',
  },
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'English Growth',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// ---------- IPC: store ----------
ipcMain.handle('store:get', (_, key) => store.get(key));
ipcMain.handle('store:set', (_, key, value) => store.set(key, value));
ipcMain.handle('store:remove', (_, key) => store.delete(key));
ipcMain.handle('store:all', () => store.store);

// ---------- IPC: export Excel (main process has node integration) ----------
ipcMain.handle('export:xlsx', async (_, { filename, sheets }) => {
  const wb = XLSX.utils.book_new();
  for (const sheet of sheets) {
    const ws = XLSX.utils.aoa_to_sheet(sheet.data);
    XLSX.utils.book_append_sheet(wb, ws, sheet.name);
  }
  const buf = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const result = await dialog.showSaveDialog({
    defaultPath: filename,
    filters: [{ name: 'Excel', extensions: ['xlsx'] }],
  });
  if (result.canceled) return null;
  fs.writeFileSync(result.filePath, Buffer.from(buf));
  return result.filePath;
});

// ---------- IPC: print to PDF ----------
ipcMain.handle('print:pdf', async (_, { html, filename = 'document.pdf' }) => {
  const printWin = new BrowserWindow({
    show: false,
    width: 900,
    height: 1200,
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  try {
    const doc = '<!DOCTYPE html><html><head><meta charset="utf-8">' +
      '<style>body{font-family:-apple-system,Helvetica,Arial,sans-serif;padding:24px;color:#111;}' +
      'h2{color:#0E7C86;} h3{margin-top:18px;} li{margin:5px 0;}</style></head><body>' +
      (html || '') + '</body></html>';
    await printWin.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(doc));
    const buffer = await printWin.webContents.printToPDF({ printBackground: true, pageSize: 'A4' });
    const safeName = String(filename).replace(/[\\/:*?"<>|]/g, '_');
    const pdfPath = path.join(app.getPath('documents'), safeName);
    fs.writeFileSync(pdfPath, buffer);
    return pdfPath;
  } finally {
    if (!printWin.isDestroyed()) printWin.destroy();
  }
});

// ---------- IPC: save file (json/backup) ----------
ipcMain.handle('save:file', async (_, { defaultName, mimeType, data }) => {
  const result = await dialog.showSaveDialog({
    defaultPath: defaultName,
    filters: [{ name: 'File', extensions: [defaultName.split('.').pop()], mimeTypes: [mimeType] }],
  });
  if (result.canceled) return null;
  fs.writeFileSync(result.filePath, data);
  return result.filePath;
});

// ---------- IPC: open file (backup restore) ----------
ipcMain.handle('open:file', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'JSON', extensions: ['json'] }],
  });
  if (result.canceled || result.filePaths.length === 0) return null;
  return fs.readFileSync(result.filePaths[0], 'utf-8');
});
