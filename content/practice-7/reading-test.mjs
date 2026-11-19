import { readingPassage } from './reading-passage.mjs';
import { readingQuestions } from './reading-questions.mjs';
import { readingEvidenceRu } from './reading-russian.mjs';
import { readingLecture, readingLectureRu, readingNotebook } from './reading-lecture.mjs';

export const readingTest = {
  id: 'practice-7-reading',
  title: 'Practice 7',
  sectionLabel: 'Reading',
  storageKey: 'act-space-practice-7-reading-v1',
  passage: readingPassage,
  questions: readingQuestions,
  evidenceRu: readingEvidenceRu,
  lecture: readingLecture,
  lectureRu: readingLectureRu,
  readingNotebook,
  nav: [
    { label: 'English', href: '/lessons/practice-7' },
    { label: 'Reading', current: true },
  ],
  instructions: 'Read the passage and answer Questions 1–10. Line numbers match the supplied screenshots. Questions 2, 5, and 6 ask for the choice that is NOT answered or is an EXCEPTION.',
  lectureTitle: 'Мини-конспект по ACT Reading',
  lectureTag: 'reading strategies and vocabulary',
  lectureLocked: 'The reading strategies and vocabulary open after you check your answers.',
  notebook: [
    'Для NOT и EXCEPT найди три подтверждения, затем проверь весь оставшийся вариант.',
    'Для main idea связывай основные части отрывка. Для function назови, что автор делает в конкретном абзаце.',
    'Сверяй группу с её местом или действием. В выводах сохраняй might, some и almost.',
  ],
};
