import { passage } from './english-passage.mjs';
import { questions } from './english-questions.mjs';
import { evidenceRu } from './english-russian.mjs';
import { lecture, lectureRu, vocabularyNotebook } from './english-lecture.mjs';

export const englishTest = {
  id: 'practice-4-english',
  title: 'Practice 4',
  storageKey: 'act-space-practice-4-english-v1',
  nav: [
    { label: 'English', current: true },
    { label: 'Mathematics', disabled: true },
    { label: 'Reading', href: '/lessons/practice-4/reading' },
    { label: 'Science', disabled: true },
  ],
  passage,
  questions,
  evidenceRu,
  lecture,
  lectureRu,
  numberParagraphs: true,
  readingNotebook: vocabularyNotebook,
  instructions: 'Read the passage and answer Questions 46–60. Select an underlined phrase or a numbered marker to jump to its question. In Questions 46 and 47, choose the least acceptable option.',
  lectureTitle: 'Мини-лекция: правила ACT English',
  notebook: [
    'Найди всё подлежащее и главный глагол. Простая запятая между ними не нужна.',
    'Для двух действий проверь общие слова, время и форму: she developed and published, she is applauded and ranked.',
    'Для LEAST ищи худшую подстановку. Для вставки перечитай предложения с обеих сторон.',
    'Перед выбором связки или границы абзаца скажи, какую мысль начинает следующая фраза.',
  ],
};
