// English Growth - Contenido mínimo (lección real: pedir y responder la hora)
const CONTENT = {
  appName: 'English Growth',

  lesson: {
    title: 'Unit 1 - Asking the Time',
    es: 'Pide la hora y responde en inglés. Aprende a preguntar "What time is it?" y a contestar con "It is three oclock."',
    points: [
      'Ask politely: "What time is it?"',
      'Answer: "It is three oclock."',
      'Ask with a person as subject: "What time is it for you?" (para seguir el tema)',
      'Use the correct hour and the word "o clock".',
    ],
    examples: [
      'Teacher: "What time is it?" Student: "It is three oclock."',
      'Student: "What time is it?" Teacher: "It is three oclock."',
      'Class: "What time is it?" Everyone: "It is three oclock."',
    ],
    vocab: ['Time, Clock, Hour, Minute, Oclock, Ask, Answer'],
    mistakes: [
      'Do not answer with just the hour: say "It is three oclock."',
      'Do not ask "How much is it?" when meaning time: ask "What time is it?"',
      "Do not forget the period between the hour and oclock: 'three oclock', not 'thre oclock'.",
    ],
  },

  questions: [
    { q: 'How do you ask for the time politely?', a: ['What time is it?', 'What is your name?', 'Where are you from?', 'How old are you?'], correct: 0 },
    { q: 'How do you correctly answer "What time is it?"', a: ['It is three oclock.', 'It is three.', 'It is 3 oclock.', 'It is three hours.'], correct: 0 },
    { q: 'How would you ask the time when the context already has a person? (Follow-up)', a: ['What time is it for you?', 'What time is it now?', 'What is the time?', 'When is the time?'], correct: 0 },
    { q: 'How do you say 8 oclock?', a: ['It is eight oclock.', 'It is eight.', 'It is 8 oclock.', 'It is eight hours.'], correct: 0 },
    { q: 'How do you say 12 oclock?', a: ['It is twelve oclock.', 'It is twelve.', 'It is 12 oclock.', 'It is twelve hours.'], correct: 0 },
  ],

  task: {
    tasks: [
      'Ask 3 classmates: "What time is it?"',
      'Answer 3 times correctly using "It is X oclock."',
      'Write a short dialogue (4 lines) about asking/answering the time.',
    ],
    wordBank: ['What time is it?, It is one oclock, It is two oclock, It is three oclock, It is four oclock, It is five oclock'],
    writing: 'Write a short dialogue (4 lines) asking for the time and answering it.',
    speaking: 'Practice asking and answering "What time is it?" with a partner.',
    answers: [
      '1. What time is it? / 2. It is one oclock / 3. It is two oclock / 4. It is three oclock',
    ],
  },
};

// Devuelve preguntas: las del task si se pide, o un set pequeño de repaso
function getQuestions(levelId, unitN) {
  // Para la versión mínima siempre devolvemos las preguntas del contenido
  let qs = CONTENT.questions || [];
  if (!qs || qs.length === 0) {
    qs = [
      { q: 'Review question.', a: ['A', 'B', 'C', 'D'], correct: 0 },
    ];
  }
  // Rotar opciones de forma simple (determinista)
  return qs.map((q, i) => {
    const opts = [...q.a];
    const shift = (q.q.length + i) % 4;
    const arr = [];
    for (let k = 0; k < opts.length; k++) arr.push(opts[(k + shift) % opts.length]);
    const correctIdx = arr.indexOf(q.a[q.correct]);
    return { ...q, a: arr, correct: correctIdx };
  });
}

window.CONTENT = CONTENT;
window.getQuestions = getQuestions;
