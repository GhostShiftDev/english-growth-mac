// English Growth - contenido (una sola leccion: pedir y responder la hora)
// IMPORTANTE: todo va dentro de un IIFE para NO crear variables globales
// que choquen con las del script de index.html.
(function () {
  'use strict';

  var CONTENT = {
    appName: 'English Growth',
    version: '1.0.1',

    lesson: {
      title: "Unit 1 - Asking the Time",
      es: 'Aprende a preguntar la hora y a responder en ingles: "What time is it?" - "It is three o\'clock."',
      points: [
        'To ask the time: "What time is it?"',
        'To answer: "It is three o\'clock."',
        'Use "o\'clock" only for exact hours (one to twelve).',
        'With minutes, do not use "o\'clock": "It is three fifteen."',
        'You can add "a.m." or "p.m.": "It is three p.m."',
      ],
      examples: [
        'A: "What time is it?"  B: "It is three o\'clock."',
        'A: "Excuse me, what time is it?"  B: "It is eight o\'clock."',
        'A: "What time is it?"  B: "It is twelve o\'clock."',
        'A: "What time is it?"  B: "It is three fifteen."',
      ],
      vocab: ["time", "clock", "hour", "o'clock", "a.m.", "p.m.", "What time is it?", "It is ..."],
      mistakes: [
        'Do not say "It is three hours" to tell the time. Say "It is three o\'clock."',
        'Do not forget the apostrophe in "o\'clock".',
        'Do not use "o\'clock" with minutes: say "three fifteen", not "three fifteen o\'clock".',
        'Do not ask "How much is it?" for the time. Ask "What time is it?"',
      ],
    },

    questions: [
      {
        q: 'How do you ask for the time?',
        a: ['What time is it?', 'What is your name?', 'Where are you from?', 'How old are you?'],
        correct: 0,
      },
      {
        q: 'It is 3:00. How do you answer "What time is it?"',
        a: ["It is three o'clock.", 'It is three hours.', 'It is three fifteen.', 'It is three days.'],
        correct: 0,
      },
      {
        q: 'When do you use "o\'clock"?',
        a: ['Only for exact hours.', 'For minutes.', 'For days.', 'For prices.'],
        correct: 0,
      },
      {
        q: 'How do you say 8:00?',
        a: ["It is eight o'clock.", 'It is eight hours.', 'It is eight thirty.', 'It is eight days.'],
        correct: 0,
      },
      {
        q: 'Which sentence is correct?',
        a: ["It is twelve o'clock.", 'It is twelve hours.', "It is twelve o'clock thirty.", 'It is twelve minutes.'],
        correct: 0,
      },
    ],

    task: {
      tasks: [
        'Exercise 1: Complete the question: "_____ time is it?"',
        'Exercise 2: Answer for 3:00, 8:00 and 12:00 using "It is ___ o\'clock."',
        'Exercise 3: Write a short dialogue (4 lines) asking and answering the time.',
      ],
      wordBank: [
        'What time is it?',
        'It is one o\'clock.',
        'It is two o\'clock.',
        'It is three o\'clock.',
        'It is eight o\'clock.',
        'It is twelve o\'clock.',
      ],
      writing: 'Write a 4-line dialogue between a teacher and a student about the time.',
      speaking: 'Practice with a partner: ask "What time is it?" and answer with "It is ___ o\'clock."',
      answers: [
        'Exercise 1: What',
        'Exercise 2: It is three o\'clock. / It is eight o\'clock. / It is twelve o\'clock.',
        'Exercise 3: A: What time is it?  B: It is three o\'clock.  A: Thank you.  B: You are welcome.',
      ],
    },
  };

  // Devuelve una copia de las preguntas con las opciones rotadas (determinista).
  function getQuestions() {
    var qs = (CONTENT.questions || []).slice();
    return qs.map(function (q, i) {
      var opts = (q.a || []).slice();
      var shift = (q.q.length + i) % opts.length;
      var rotated = [];
      var k;
      for (k = 0; k < opts.length; k++) rotated.push(opts[(k + shift) % opts.length]);
      return {
        q: q.q,
        a: rotated,
        correct: rotated.indexOf(q.a[q.correct]),
      };
    });
  }

  // Solo se exponen dos propiedades, sin declarar const/let globales.
  window.CONTENT = CONTENT;
  window.getQuestions = getQuestions;
})();
