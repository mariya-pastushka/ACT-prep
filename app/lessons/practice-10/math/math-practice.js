'use client';

import MathPractice from '../../math-practice';
import { mathQuestions, mathStorageKey } from '../../../../content/practice-10/math.mjs';
import MathFigure from './figures';

const test = {
 id: 'math-10',
 title: 'Practice 10',
 storageKey: mathStorageKey,
 questions: mathQuestions,
 nav: [
  {label: 'English', href: '/lessons/practice-10'},
  {label: 'Mathematics', current: true},
  {label: 'Reading', href: '/lessons/practice-10/reading'},
  {label: 'Science', href: '/lessons/practice-10/science'},
 ],
 instructions: 'Choose one answer per question. Use the labels and values shown in each figure.',
 intro: 'После проверки под каждой задачей откроется решение на русском с формулой, шагами и проверкой ответа.',
};

export default function Practice10Math() {
 return <MathPractice test={test} MathFigure={MathFigure} />;
}
