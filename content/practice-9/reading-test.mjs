import { readingPassage } from './reading-passage.mjs';
import { readingQuestions, readingEvidenceRu } from './reading-questions.mjs';
import { readingLecture, readingLectureRu, readingNotebook } from './reading-lecture.mjs';

export const readingTest={
 id:'practice-9-reading',title:'Practice 9',sectionLabel:'Reading',storageKey:'act-space-practice-9-reading-v1',
 passage:readingPassage,questions:readingQuestions,evidenceRu:readingEvidenceRu,
 lecture:readingLecture,lectureRu:readingLectureRu,readingNotebook,
 nav:[{label:'English',href:'/lessons/practice-9'},{label:'Mathematics',href:'/lessons/practice-9/math'},{label:'Reading',current:true}],
 instructions:'Read the passage and answer Questions 1–10. On desktop and tablet, scroll the passage and questions separately. Printed lines match the supplied screenshots. After checking, select an evidence reference to return to the text.',
 introNote:'На телефоне текст расположен перед вопросами. После проверки откроются evidence на английском, пошаговые русские разборы, конспект и словарь.',
 lectureTitle:'Мини-конспект по Reading: увидеть чувства за словами и поступками',
 lectureTag:'reading strategies and vocabulary',
 lectureLocked:'The reading strategies and vocabulary open after you check your answers.',
 notebook:[
  'Выпиши цепочку чувств рассказчицы: неприятие возвращения → узнавание и тревога → обида → новое понимание матери.',
  'Для каждого вывода отдели наблюдение от его толкования: что героиня видит, как понимает сначала, как переосмысляет в финале.',
  'Отметь контраст not because she didn’t care, but because she did. Объясни, почему он меняет смысл прежнего молчания матери.',
  'Назови точку зрения и главную мысль всего отрывка. Не своди историю только к погоде, возрасту матери или одному эпизоду гнева.',
 ],
};
