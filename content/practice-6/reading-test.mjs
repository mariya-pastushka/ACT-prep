import { readingPassage } from './reading-passage.mjs';
import { readingQuestions } from './reading-questions.mjs';
import { readingEvidenceRu } from './reading-russian.mjs';
import { readingLecture, readingLectureRu, readingNotebook } from './reading-lecture.mjs';

export const readingTest = {
  id: 'practice-6-reading',
  title: 'Practice 6',
  sectionLabel: 'Reading',
  storageKey: 'act-space-practice-6-reading-v1',
  passage: readingPassage,
  questions: readingQuestions,
  evidenceRu: readingEvidenceRu,
  lecture: readingLecture,
  lectureRu: readingLectureRu,
  readingNotebook,
  nav: [
    { label: 'English', href: '/lessons/practice-6' },
    { label: 'Mathematics', href: '/lessons/practice-6/math' },
    { label: 'Reading', current: true },
    { label: 'Science', href: '/lessons/practice-6/science' },
  ],
  instructions: 'Read the passage and answer Questions 1–10. Line numbers match the supplied passage. Select a line reference in the review to find the evidence.',
  lectureTitle: 'Мини-конспект по ACT Reading',
  lectureTag: 'reading strategies and vocabulary',
  lectureLocked: 'The reading strategies and vocabulary open after you check your answers.',
  notebook: [
    'Для главной мысли проверь, что вариант охватывает именно тот абзац или весь отрывок, о котором спрашивают.',
    'Связывай каждое ведомство с его обязанностью, а число с его единицей и периодом.',
    'При выводе сохраняй слова first, major, no fewer than и later. Они задают границы того, что можно утверждать.',
  ],
};
