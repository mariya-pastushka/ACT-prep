import { readingPassage } from './reading-passage.mjs';
import { readingQuestions } from './reading-questions.mjs';
import { readingEvidenceRu } from './reading-russian.mjs';
import { readingLecture, readingLectureRu, readingNotebook } from './reading-lecture.mjs';

export const readingTest = {
  id: 'practice-8-reading',
  title: 'Practice 8',
  sectionLabel: 'Reading',
  storageKey: 'act-space-practice-8-reading-v1',
  passage: readingPassage,
  questions: readingQuestions,
  evidenceRu: readingEvidenceRu,
  lecture: readingLecture,
  lectureRu: readingLectureRu,
  readingNotebook,
  nav: [
    { label: 'English', href: '/lessons/practice-8' },
    { label: 'Mathematics', href: '/lessons/practice-8/math' },
    { label: 'Reading', current: true },
    { label: 'Science', href: '/lessons/practice-8/science' },
  ],
  instructions: 'Read the passage and answer Questions 1–10. Line numbers match the supplied screenshots. Select a line reference in the review to find the evidence.',
  lectureTitle: 'Мини-конспект по ACT Reading',
  lectureTag: 'reading strategies and vocabulary',
  lectureLocked: 'The reading strategies and vocabulary open after you check your answers.',
  notebook: [
    'Отмечай временные подсказки before и later. Для каждого факта подпиши нужную планету и миссию.',
    'Для слова в контексте подставь вариант в полное предложение. Для научного термина прочитай следующее пояснение.',
    'В выводах сохраняй условие If и связывай причину с тем результатом, который назвал автор.',
  ],
};
