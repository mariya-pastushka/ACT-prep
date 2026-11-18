import { passage } from './english-passage.mjs';
import { questions } from './english-questions.mjs';
import { evidenceRu } from './english-russian.mjs';
import { lecture, lectureRu, vocabularyNotebook } from './english-lecture.mjs';

export const englishTest = {
  id: 'practice-6-english',
  title: 'Practice 6',
  storageKey: 'act-space-practice-6-english-v1',
  nav: [
    { label: 'English', current: true },
    { label: 'Mathematics', href: '/lessons/practice-6/math' },
    { label: 'Reading', href: '/lessons/practice-6/reading' },
  ],
  passage,
  questions,
  evidenceRu,
  lecture,
  lectureRu,
  numberParagraphs: true,
  readingNotebook: vocabularyNotebook,
  instructions: 'Read the passage and answer Questions 1–15. Select an underlined phrase or numbered marker to jump to its question. Question 15 asks about the whole passage.',
  lectureTitle: 'Мини-конспект по ACT English',
  notebook: [
    'Проверь предлог, форму глагола и слова по обе стороны от подчёркивания.',
    'Перед выбором знака найди главную часть и прочитай связанный оборот целиком.',
    'Для перестановки найди, к чему относится местоимение. Для вопроса о цели сверь ответ с содержанием всего эссе.',
  ],
};
