// English Growth - contenido de lecciones
// Todo va dentro de un IIFE: no se crean variables globales que puedan chocar.
// Para agregar una leccion nueva en el futuro, agrega otro objeto al arreglo LESSONS.
// Los registros de alumnos/asistencia/tareas se guardan aparte y NO dependen de este archivo.
(function () {
  'use strict';

  var APP = {
    name: 'English Growth',
    version: '1.1.0',
    schemaVersion: 2,
  };

  var LESSONS = [
    {
      id: 'unit1-time',
      unit: 1,
      titleEs: 'Unidad 1 - Pedir la hora',
      titleEn: 'Asking the Time',
      objectiveEs: 'Al terminar, podras preguntar la hora y responder en ingles.',
      introEs:
        'Para pedir la hora decimos: "What time is it?" y para responder: "It is three o\'clock." ' +
        'En esta leccion practicaras esas dos frases y veras cuando se usa "o\'clock".',
      points: [
        { es: 'Para preguntar la hora decimos:', en: 'What time is it?' },
        { es: 'Para responder decimos:', en: "It is three o'clock." },
        { es: 'Usamos "o\'clock" solamente con horas exactas (de la 1 a las 12).', en: null },
        { es: 'Si hay minutos, no usamos "o\'clock":', en: 'It is three fifteen.' },
        { es: 'Para aclarar si es de manana o de tarde/noche:', en: 'It is three p.m.' },
      ],
      examples: [
        { es: 'Preguntar la hora:', en: 'What time is it?' },
        { es: 'Responder a las 3:00:', en: "It is three o'clock." },
        { es: 'Preguntar con educacion:', en: 'Excuse me, what time is it?' },
        { es: 'Responder con minutos (3:15):', en: 'It is three fifteen.' },
      ],
      vocab: [
        { en: 'time', es: 'hora / tiempo', phonEn: 'taim' },
        { en: 'clock', es: 'reloj', phonEn: 'klok' },
        { en: "o'clock", es: 'en punto', phonEn: "'oclok" },
        { en: 'hour', es: 'hora (duracion)', phonEn: 'aur' },
        { en: 'a.m.', es: 'de la manana (00:00 a 11:59)', phonEn: 'ei em' },
        { en: 'p.m.', es: 'de la tarde/noche (12:00 a 23:59)', phonEn: 'pi em' },
      ],
      mistakes: [
        { es: 'No uses "hours" para dar la hora. Lo correcto es:', en: "It is three o'clock." },
        { es: 'No olvides el apostrofo en "o\'clock".', en: null },
        { es: 'No uses "o\'clock" con minutos. Lo correcto es:', en: 'It is three fifteen.' },
        { es: 'No preguntes "How much is it?" para la hora. Lo correcto es:', en: 'What time is it?' },
      ],
      questions: [
        {
          q: 'Como pides la hora en ingles?',
          a: ['What time is it?', 'What is your name?', 'Where are you from?', 'How old are you?'],
          correct: 0,
        },
        {
          q: 'Son las 3:00. Como respondes?',
          a: ["It is three o'clock.", 'It is three hours.', 'It is three fifteen.', 'It is three days.'],
          correct: 0,
        },
        {
          q: 'Cuando se usa "o\'clock"?',
          a: ['Solo con horas exactas.', 'Con minutos.', 'Con dias.', 'Con precios.'],
          correct: 0,
        },
        {
          q: 'Como se dice 8:00?',
          a: ["It is eight o'clock.", 'It is eight hours.', 'It is eight thirty.', 'It is eight days.'],
          correct: 0,
        },
        {
          q: 'Cual oracion es correcta?',
          a: ["It is twelve o'clock.", 'It is twelve hours.', "It is twelve o'clock thirty.", 'It is twelve minutes.'],
          correct: 0,
        },
      ],
      task: {
        introEs: 'Resuelve los ejercicios. Puedes escribir tus respuestas en tu cuaderno.',
        exercises: [
          { es: 'Ejercicio 1: completa la pregunta:', en: '_____ time is it?' },
          { es: 'Ejercicio 2: escribe la respuesta para 3:00, 8:00 y 12:00 usando:', en: "It is ___ o'clock." },
          { es: 'Ejercicio 3: escribe un dialogo corto (4 lineas) preguntando y respondiendo la hora.', en: null },
        ],
        wordBank: [
          'What time is it?',
          "It is one o'clock.",
          "It is two o'clock.",
          "It is three o'clock.",
          "It is eight o'clock.",
          "It is twelve o'clock.",
        ],
        writingEs: 'Escribe un dialogo de 4 lineas entre un profesor y un alumno sobre la hora.',
        speakingEs: 'Practica con un companero: pregunta "What time is it?" y responde "It is ___ o\'clock."',
        answers: [
          { es: 'Ejercicio 1:', en: 'What' },
          { es: 'Ejercicio 2:', en: "It is three o'clock. / It is eight o'clock. / It is twelve o'clock." },
          {
            es: 'Ejercicio 3 (ejemplo):',
            en: 'A: What time is it? / B: It is three o\'clock. / A: Thank you. / B: You are welcome.',
          },
        ],
      },
    },
  ];

  function getLesson(lessonId) {
    if (!lessonId) return LESSONS[0];
    for (var i = 0; i < LESSONS.length; i++) {
      if (LESSONS[i].id === lessonId) return LESSONS[i];
    }
    return LESSONS[0];
  }

  // Devuelve una copia de las preguntas con las opciones rotadas (determinista).
  function getQuestions(lessonId) {
    var lesson = getLesson(lessonId);
    var qs = (lesson.questions || []).slice();
    return qs.map(function (q, i) {
      var opts = (q.a || []).slice();
      if (!opts.length) return { q: q.q, a: [], correct: 0 };
      var shift = (q.q.length + i) % opts.length;
      var rotated = [];
      for (var k = 0; k < opts.length; k++) rotated.push(opts[(k + shift) % opts.length]);
      return { q: q.q, a: rotated, correct: rotated.indexOf(q.a[q.correct]) };
    });
  }

  window.EG_CONTENT = {
    app: APP,
    lessons: LESSONS,
    getLesson: getLesson,
    getQuestions: getQuestions,
  };
})();
