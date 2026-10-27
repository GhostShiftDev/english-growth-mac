const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  storeGet: (key) => ipcRenderer.invoke('store:get', key),
  storeSet: (key, value) => ipcRenderer.invoke('store:set', key, value),
  storeRemove: (key) => ipcRenderer.invoke('store:remove', key),
  storeAll: () => ipcRenderer.invoke('store:all'),
  printPDF: (html, filename) => ipcRenderer.invoke('print:pdf', { html, filename }),
  saveFile: (defaultName, mimeType, data) =>
    ipcRenderer.invoke('save:file', { defaultName, mimeType, data }),
  openFile: () => ipcRenderer.invoke('open:file'),
  openDataDir: () => ipcRenderer.invoke('app:openDataDir'),
  exportXLSX: (filename, sheets) => ipcRenderer.invoke('export:xlsx', { filename, sheets }),
});
