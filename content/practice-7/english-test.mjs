import { passage } from './english-passage.mjs';
import { questions } from './english-questions.mjs';
import { evidenceRu } from './english-russian.mjs';
import { lecture, lectureRu, vocabularyNotebook } from './english-lecture.mjs';

export const englishTest = {
  id: 'practice-7-english',
  title: 'Practice 7',
  storageKey: 'act-space-practice-7-english-v1',
  nav: [
    { label: 'English', current: true },
    { label: 'Reading', href: '/lessons/practice-7/reading' },
  ],
  passage,
  questions,
  evidenceRu,
  lecture,
  lectureRu,
  numberParagraphs: true,
  readingNotebook: vocabularyNotebook,
  instructions: 'Read the passage and answer Questions 16–30. Select an underlined phrase or numbered marker to jump to its question. In Question 23 choose the LEAST relevant sentence, and in Question 25 choose the alternative that is NOT acceptable.',
  lectureTitle: 'Мини-конспект по ACT English',
  notebook: [
    'Проверь момент каждого действия, форму глагола и предмет, к которому относится местоимение.',
    'Найди главные основы перед выбором знака. Для NOT и LEAST перечитай требование вопроса перед кликом.',
    'При вставке читай соседние предложения. При переносе уточнения задай вопрос от слова, которое оно поясняет.',
  ],
};
