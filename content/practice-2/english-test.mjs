import {practiceEnglish,englishQuestions} from './english.mjs';
import {lecture,lectureRu} from './lecture.mjs';
import {evidenceRu} from './russian-support.mjs';
export const englishTest={
 id:'practice-2',title:'Practice 2',storageKey:'act-space-practice-2-english-v1',
 passage:practiceEnglish,questions:englishQuestions,lecture,evidenceRu,lectureRu,numberParagraphs:true,
 nav:[{label:'English',current:true},{label:'Mathematics',disabled:true},{label:'Reading',href:'/lessons/practice-2/reading'},{label:'Science',disabled:true}],
 introNote:'This is a separate test. English and Reading are available for Practice 2. Each section and Practice 1 keep their answers saved separately.',
 insertions:[{afterParagraph:1,questionId:21,label:'[21] Review the order of Sentences 1–5 in this paragraph ↗︎'}],
 notebook:['Сначала найди подлежащее и глагол: самостоятельная основа помогает проверить границы предложения.','So соединяет причину и результат: “…, so …”. Перед therefore между самостоятельными частями нужна точка или точка с запятой.','Here не является подлежащим. Согласуй lie/ lies со словом opportunities.','Дополнительное описание в середине предложения отделяется двумя запятыми.','Спроси: кто выполняет действие в обороте Walking…? Затем найди этого участника в подлежащем.','Blankets → them. Проверяй число существительного перед выбором местоимения.','His offer должно иметь понятную отсылку. Порядок событий: предложение → согласие → первый день → экскурсия.','В вопросе LEAST ищи худший вариант. Для вывода о чувствах приводи конкретный жест или слово из текста.']
};
