import { passage } from './english-passage.mjs';
import { questions, evidenceRu } from './english-questions.mjs';
import { lecture, lectureRu, vocabularyNotebook } from './english-lecture.mjs';

export const englishTest={
 id:'practice-10-english',title:'Practice 10',storageKey:'act-space-practice-10-english-v1',
 nav:[{label:'English',current:true}],passage,questions,evidenceRu,lecture,lectureRu,
 numberParagraphs:true,readingNotebook:vocabularyNotebook,
 instructions:'Read the complete passage and answer Questions 61–75. Original errors are intentional. Keep the printed sentence numbers in mind for Question 63. After checking, use “Show in text” to return to a precise evidence sentence and highlight it.',
 introNote:'После проверки откроются английские evidence и подробные русские разборы: объяснение правила, ход решения, новый пример и разбор других вариантов. Кнопки ведут к нужным предложениям с подсветкой.',
 lectureTitle:'Мини-конспект: что усвоить после Practice 10 English',
 notebook:[
  'Для №62 найди личную форму глагола в каждом варианте. Объясни разницу между has provided и having provided.',
  'Для №63 выпиши новый порядок исходных номеров: 1 → 3 → 4 → 2 → 5. Свяжи though с контрастом, а this question — с конкретным вопросом.',
  'Запиши пары: Even though …, … / …, but …; such … as …; whose / who’s; regardless of / in lieu of.',
  'Для №68 проверь обе задачи перехода: завершить тему звёздности и подготовить другую причину. Для №75 сравни предложенную вставку с основной целью эссе.',
 ],
};
