import { readingPassage } from './reading-passage.mjs';
import { readingQuestions } from './reading-questions.mjs';
import { readingEvidenceRu } from './reading-russian.mjs';
import { readingLecture, readingLectureRu, readingNotebook } from './reading-lecture.mjs';

export const readingTest = {
  id: 'practice-4-reading',
  title: 'Practice 4',
  sectionLabel: 'Reading',
  storageKey: 'act-space-practice-4-reading-v1',
  passage: readingPassage,
  questions: readingQuestions,
  evidenceRu: readingEvidenceRu,
  lecture: readingLecture,
  lectureRu: readingLectureRu,
  readingNotebook,
  nav: [
    { label: 'English', href: '/lessons/practice-4' },
    { label: 'Mathematics', disabled: true },
    { label: 'Reading', current: true },
    { label: 'Science', disabled: true },
  ],
  instructions: 'Read the passage and answer Questions 1–10. Line references match the supplied passage even when the text wraps differently on your screen.',
  lectureTitle: 'Мини-лекция: как находить доказательства в Reading',
  lectureTag: 'reading-skills lecture',
  lectureLocked: 'The reading strategies and vocabulary open after you check your answers.',
  notebook: [
    'Раздели измерение и вывод. Отметь все звенья между ними.',
    'Для слова в контексте подставь вариант и перечитай предложение целиком.',
    'Для EXCEPT сверь три доказательства. Для primarily перечитай финал и проверь масштаб выбранного ответа.',
  ],
};
