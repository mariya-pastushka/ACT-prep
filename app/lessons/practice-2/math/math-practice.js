'use client';
import MathPractice from '../../math-practice';
import MathFigure from './figures';
import {mathQuestions, mathStorageKey, chartIntroduction} from '../../../../content/practice-2/math.mjs';
import {mathLecture} from '../../../../content/practice-2/math-lecture.mjs';

const vocabulary=[['integer / sum / product','целое число / сумма / произведение'],['could NOT / does NOT','НЕ может / НЕ равно — ищем исключение'],['parallel / transversal','параллельные / секущая'],['volume / area / side of a box','объём / площадь / грань коробки'],['diameter / radius / shaded region','диаметр / радиус / закрашенная область'],['slope / x-intercept','наклон / x-координата пересечения с осью x'],['additional / for all m > 1,000','дополнительный / для всех m больше 1 000'],['altogether / percent of','вместе / процент от количества'],['twice as much / one third as much','вдвое больше / треть от количества'],['solution set / distance','множество решений / расстояние']];
const test = {
  title: "Practice 2",
  id: "math-2",
  questions: mathQuestions,
  storageKey: mathStorageKey,
  chartIntroduction,
  lecture: mathLecture,
  vocabulary,
  nav: [
    {label: "English", href: "/lessons/practice-2"},
    {label: "Mathematics", current: true},
    {label: "Reading", href: "/lessons/practice-2/reading"},
    {label: "Science", href: "/lessons/practice-2/science"},
  ],
  instructions: "Choose one answer per question. Odd questions use F, G, H, J, K. Even questions use A–E. Use the labels on each diagram rather than measuring the screen.",
  intro: "После проверки откроются пошаговые решения, рисунки с пояснениями и мини-лекция. Эта секция сохраняет ответы отдельно от остальных. Результат — число верных ответов из 15, без пересчёта в официальный балл ACT.",
};

export default function Practice2Math() {
  return <MathPractice test={test} MathFigure={MathFigure} />;
}
