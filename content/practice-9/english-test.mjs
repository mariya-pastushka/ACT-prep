import { passage } from './english-passage.mjs';
import { questions, evidenceRu } from './english-questions.mjs';
import { lecture, lectureRu, vocabularyNotebook } from './english-lecture.mjs';

export const englishTest={
 id:'practice-9-english',title:'Practice 9',storageKey:'act-space-practice-9-english-v1',
 nav:[{label:'English',current:true},{label:'Mathematics',href:'/lessons/practice-9/math'}],
 passage,questions,evidenceRu,lecture,lectureRu,numberParagraphs:true,readingNotebook:vocabularyNotebook,
 instructions:'Read the passage and answer Questions 46–60. Original errors are intentional. Select an underlined phrase or numbered marker to find its question. After checking, use “Show in text” to return to the exact evidence sentence and highlight it.',
 introNote:'После проверки откроются английские evidence и подробные русские разборы: правило, ход рассуждения, примеры и объяснение остальных вариантов. Кнопки «Показать в тексте» ведут к источнику с подсветкой.',
 lectureTitle:'Мини-конспект: что нужно усвоить после Practice 9',
 notebook:[
  'Выпиши исправленные фразы stepping back in time, get to the island, an item for sale. Отметь, какие слова связаны по смыслу и грамматически.',
  'Для №51 найди две основы и покажи границу между самостоятельными предложениями. Для №59 убери of the island’s environs и согласуй глагол с privacy.',
  'Сравни where и in which с which в №55. Объясни, почему месту требуется значение «в котором».',
  'Для №52, №53 и №60 сформулируй задачу вопроса одним предложением: функция детали, переход или цель всего эссе.',
 ],
};
