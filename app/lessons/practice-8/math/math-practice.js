'use client';

import MathPractice from '../../math-practice';
import { mathQuestions, mathStorageKey } from '../../../../content/practice-8/math.mjs';
import MathFigure from './figures';

const test = {
 id: 'math-8',
 title: 'Practice 8',
 storageKey: mathStorageKey,
 questions: mathQuestions,
 nav: [
  {label: 'English', href: '/lessons/practice-8'},
  {label: 'Mathematics', current: true},
  {label: 'Reading', href: '/lessons/practice-8/reading'},
  {label: 'Science', href: '/lessons/practice-8/science'},
 ],
 instructions: 'Choose one answer per question. Read the scales and labels on the figures before calculating.',
 intro: 'После проверки под каждой задачей откроется решение на русском с формулой, пошаговыми вычислениями и проверкой ответа.',
 chartIntroduction: 'The graph provides information about the number of new clients five salespeople registered last month.',
};

export default function Practice8Math() {
 return <MathPractice test={test} MathFigure={MathFigure} />;
}
