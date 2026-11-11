import {readingPassage} from './reading-passage.mjs';
import {readingQuestions} from './reading-questions.mjs';
import {readingEvidenceRu} from './reading-russian.mjs';
import {readingLecture,readingLectureRu} from './reading-lecture.mjs';
import {readingNotebook} from './reading-notebook.mjs';
export const readingTest={
 id:'practice-1-reading',title:'Practice 1',sectionLabel:'Reading',storageKey:'act-space-practice-1-reading-v1',
 passage:readingPassage,questions:readingQuestions,lecture:readingLecture,lectureRu:readingLectureRu,evidenceRu:readingEvidenceRu,readingNotebook,
 nav:[{label:'English',href:'/lessons/practice-1'},{label:'Mathematics',href:'/lessons/practice-1/math'},{label:'Reading',current:true},{label:'Science',href:'/lessons/practice-1/science'}],
 instructions:'Read the complete prose-fiction passage, then answer Questions 1–10. Follow the narrator’s details and keep each character’s thoughts separate. Source-line labels stay the same on every device. Odd questions use A–D; even questions use F, G, H, J.',
 introNote:'Reading belongs to Practice 1. Each section saves its answers separately in this browser. After checking, open the evidence, the detailed Russian explanations, and your reading-skills notebook.',
 lectureTitle:'Мини-лекция: как читать рассказ и доказывать ответ',
 lectureTag:'reading skills + vocabulary',
 lectureLocked:'Your mini-lecture, vocabulary notebook, and extra exercises unlock after you check the test.',
 notebook:[
  'Для каждого ответа назови человека, момент и цитату. Одного совпавшего слова недостаточно.',
  'Inference — маленький вывод из данных, а не новый эпизод. Например: сзади ↔ в первом ряду → не сидят рядом.',
  'Проверяй working / finished, quite / most, likely / guaranteed: одно слово может сделать вариант неверным.',
  'Normally → but not this year; anticipating → instead; mockery → vanishing smiles. Эти связки помогают восстановить изменение ожиданий.',
  'Material, performance и response — разные уровни. Впечатляющий голос не доказывает оригинальность песни.',
  'Выбери пять новых слов и составь с ними предложения. Сравни свою фразу с контекстом в рассказе, чтобы сохранить нужное значение.'
 ]
};
