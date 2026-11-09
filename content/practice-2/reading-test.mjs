import {readingPassage} from './reading-passage.mjs';
import {readingQuestions} from './reading-questions.mjs';
import {readingEvidenceRu} from './reading-russian.mjs';
import {readingLecture,readingLectureRu} from './reading-lecture.mjs';
export const readingTest={
 id:'practice-2-reading',title:'Practice 2',sectionLabel:'Reading',storageKey:'act-space-practice-2-reading-v1',
 passage:readingPassage,questions:readingQuestions,lecture:readingLecture,lectureRu:readingLectureRu,evidenceRu:readingEvidenceRu,
 nav:[{label:'English',href:'/lessons/practice-2'},{label:'Mathematics',disabled:true},{label:'Reading',current:true},{label:'Science',disabled:true}],
 instructions:'Read the complete passage, then answer Questions 1–10 using what the author states or supports. Source-line ranges are shown above the paragraphs. In EXCEPT questions, choose the one option that does not fit. Odd questions use A–D; even questions use F, G, H, J.',
 introNote:'Reading belongs to Practice 2. English and Reading answers are saved separately in this browser. After checking, open the evidence, Russian support, and reading-skills lecture.',
 lectureTitle:'Мини-лекция: как читать и доказывать ответ',
 lectureTag:'reading-skills lecture',
 lectureLocked:'Your reading-skills mini-lecture unlocks after you check the test.',
 notebook:['Перед ответом уточни задачу: EXCEPT, деталь, значение слова, тон или цель абзаца.','Отметь, о какой группе или времени спрашивают. Не переноси действие современных пользователей на первых.','Для ответа найди цитату и прочитай соседнее предложение.','Слова alien и status quo объясняй через контекст, а не через первое словарное значение.','Образы periodic table и rewind button передают идеи; не читай их как буквальные научные утверждения.','Проверь, что неверный вариант делает с текстом: переворачивает смысл, добавляет факт, сужает или расширяет вывод.']
};
