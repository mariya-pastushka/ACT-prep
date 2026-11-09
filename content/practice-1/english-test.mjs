import {practiceEnglish,englishQuestions} from './english.mjs';
import {lecture} from './lecture.mjs';
import {evidenceRu,lectureRu} from './russian-support.mjs';
export const englishTest={
 id:'practice-1',title:'Practice 1',storageKey:'act-space-practice-1-english-v1',
 passage:practiceEnglish,questions:englishQuestions,lecture,evidenceRu,lectureRu,
 nav:[{label:'English',current:true},{label:'Mathematics',href:'/lessons/practice-1/math'},{label:'Reading',disabled:true},{label:'Science',disabled:true}],
 introNote:'English and Mathematics are available. Reading and Science will be added when their materials are supplied. Your answers stay in this browser.',
 insertions:[{afterParagraph:3,questionId:13,label:'[13] Consider an additional sentence here ↗︎'}],
 notebook:['Become → became → become. После had нужна третья форма: had become.','У предложения должна быть самостоятельная основа — main clause. Оборот с -ing её не заменяет.','Определяющее слово или оборот — modifier — ставь рядом с тем, что оно описывает.','Один участник и два действия: обычно запятая перед and не нужна.','Связки выбирай по смыслу. LEAST означает «наименее»: в таком вопросе ищем плохую замену.','Составь свой пример на каждое правило. Объясни по-русски, почему он построен именно так.']
};
