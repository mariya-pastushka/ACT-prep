import { passage } from './passage.mjs';
import { questions } from './english.mjs';
import { evidenceRu } from './russian-support.mjs';
import { lecture, lectureRu } from './lecture.mjs';
import { vocabularyNotebook } from './vocabulary.mjs';

export const englishTest = {
  id: 'practice-3',
  title: 'Practice 3',
  storageKey: 'act-space-practice-3-english-v1',
  nav: [
    { label: 'English', current: true },
    { label: 'Mathematics', disabled: true },
    { label: 'Reading', disabled: true },
    { label: 'Science', disabled: true },
  ],
  passage,
  questions,
  evidenceRu,
  lecture,
  lectureRu,
  numberParagraphs: true,
  readingNotebook: vocabularyNotebook,
  lectureTitle: 'Мини-лекция: грамматика и логика текста',
  notebook: [
    'Than сравнивает. Then показывает время или следующий шаг. Its показывает принадлежность. It’s можно развернуть.',
    'Двоеточие вводит список после законченной мысли. Точка с запятой отделяет самостоятельные части.',
    'Найди настоящее подлежащее. После can используй базовую форму. Прочитай параллельные действия с общим подлежащим.',
    'Для вопроса о цели текста сопоставь тезис, аргументы и финал. Для вставки прочитай оба соседних предложения.',
  ],
};
