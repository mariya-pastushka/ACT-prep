import { readingPassage } from './reading-passage.mjs';
import { readingQuestions } from './reading-questions.mjs';
import { readingEvidenceRu } from './reading-russian.mjs';
import { readingLecture, readingLectureRu, readingNotebook } from './reading-lecture.mjs';

export const readingTest = {
  id: 'practice-5-reading',
  title: 'Practice 5',
  sectionLabel: 'Reading',
  storageKey: 'act-space-practice-5-reading-v1',
  passage: readingPassage,
  questions: readingQuestions,
  evidenceRu: readingEvidenceRu,
  lecture: readingLecture,
  lectureRu: readingLectureRu,
  readingNotebook,
  nav: [
    { label: 'English', href: '/lessons/practice-5' },
    { label: 'Mathematics', href: '/lessons/practice-5/math' },
    { label: 'Reading', current: true },
  ],
  instructions: 'Read the passage and answer Questions 1–10. Line numbers match the supplied passage. In Question 1, choose the reaction the passage does NOT support.',
  lectureTitle: 'Мини-конспект по ACT Reading',
  lectureTag: 'reading strategies and vocabulary',
  lectureLocked: 'The reading strategies and vocabulary open after you check your answers.',
  notebook: [
    'Для NOT найди три подтверждения и проверь каждое слово оставшегося варианта.',
    'Для вывода выпиши текстовые подсказки и сформулируй, что они вместе делают вероятным.',
    'Для вопроса о чувствах отметь героя и момент. Для главной мысли проверь, охватывает ли ответ и начало, и конец абзаца.',
  ],
};
