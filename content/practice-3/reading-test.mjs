import { readingPassage } from './reading-passage.mjs';
import { readingQuestions } from './reading-questions.mjs';
import { readingEvidenceRu } from './reading-russian.mjs';
import { readingLecture, readingLectureRu, readingNotebook } from './reading-lecture.mjs';

export const readingTest = {
  id: 'practice-3-reading',
  title: 'Practice 3',
  sectionLabel: 'Reading',
  storageKey: 'act-space-practice-3-reading-v1',
  passage: readingPassage,
  questions: readingQuestions,
  evidenceRu: readingEvidenceRu,
  lecture: readingLecture,
  lectureRu: readingLectureRu,
  readingNotebook,
  nav: [
    { label: 'English', href: '/lessons/practice-3' },
    { label: 'Mathematics', href: '/lessons/practice-3/math' },
    { label: 'Reading', current: true },
    { label: 'Science', href: '/lessons/practice-3/science' },
  ],
  instructions: 'Read the passage and answer Questions 1–10. The line numbers match the supplied passage, even when the text wraps differently on your screen.',
  lectureTitle: 'Мини-лекция: как находить доказательства в Reading',
  lectureTag: 'reading-skills lecture',
  lectureLocked: 'The reading strategies and vocabulary open after you check your answers.',
  notebook: [
    'Подчеркни ограничение в вопросе. Для most нужен признак сравнения, для initially — доказательство из начала истории.',
    'Чтобы объяснить образ, прочитай соседние предложения и замени его простой фразой.',
    'После ошибки запиши одну цитату и объясни, почему она поддерживает точную формулировку ответа.',
  ],
};
