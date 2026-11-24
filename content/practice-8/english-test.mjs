import { passage } from './english-passage.mjs';
import { questions, evidenceRu } from './english-questions.mjs';
import { lecture, lectureRu, vocabularyNotebook } from './english-lecture.mjs';
export const englishTest={
 id:'practice-8-english',title:'Practice 8',storageKey:'act-space-practice-8-english-v1',
 nav:[{label:'English',current:true},{label:'Reading',href:'/lessons/practice-8/reading'}],
 passage,questions,evidenceRu,lecture,lectureRu,numberParagraphs:true,readingNotebook:vocabularyNotebook,
 instructions:'Read the passage and answer Questions 31–45. Select an underlined phrase or numbered marker to find its question. After checking, evidence links return to the exact source sentence and highlight it.',
 lectureTitle:'Мини-конспект по ACT English',
 notebook:['Найди подлежащее и главный глагол, прежде чем выбирать знак или форму слова.','В вопросах о содержании проверяй цель именно этого абзаца.','Каждый вывод в разборе связан с конкретным предложением исходника.'],
};
