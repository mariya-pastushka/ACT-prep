import { readingPassage } from './reading-passage.mjs';
import { readingQuestions, readingEvidenceRu } from './reading-questions.mjs';
import { readingLecture, readingLectureRu, readingNotebook } from './reading-lecture.mjs';

export const readingTest = {
 id: 'practice-10-reading',
 title: 'Practice 10',
 sectionLabel: 'Reading',
 storageKey: 'act-space-practice-10-reading-v1',
 passage: readingPassage,
 questions: readingQuestions,
 evidenceRu: readingEvidenceRu,
 lecture: readingLecture,
 lectureRu: readingLectureRu,
 readingNotebook,
 nav: [
  {label: 'English', href: '/lessons/practice-10'},
  {label: 'Mathematics', href: '/lessons/practice-10/math'},
  {label: 'Reading', current: true},
  {label: 'Science', href: '/lessons/practice-10/science'},
 ],
 instructions: 'Read the passage and answer Questions 1–10. On desktop and tablet, scroll the passage and questions separately. After checking, select a line reference to highlight that part of the source.',
 introNote: 'После проверки откроются evidence на английском и пошаговые разборы на русском. В конце есть конспект, словарь и короткие задания.',
 lectureTitle: 'Мини-конспект по Reading: как находить опору для ответа',
 lectureTag: 'reading strategies and vocabulary',
 lectureLocked: 'The reading strategies and vocabulary open after you check your answers.',
 notebook: [
  'Запиши, как меняется роль кофейни в каждом месте и в каждую эпоху. Объясни, как из этих примеров складывается главная мысль текста.',
  'Свяжи даты и события. Вспомни, чем кофейня 1475 года отличается от мест встреч 1554 года и зачем автор упоминает автомобиль в послевоенном абзаце.',
  'Для №6 выпиши описание интерьера и его символический смысл. Для №9 найди маркер мнения критиков и точно передай их претензию.',
  'Выбери пять слов из словаря и употреби их в своих предложениях. Попробуй объяснить eschew, clientele и ubiquitous своими словами.',
 ],
};
