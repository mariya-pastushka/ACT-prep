'use client';

import MathPractice from '../../math-practice';
import MathFigure from './figures';
import { mathQuestions, mathStorageKey } from '../../../../content/practice-5/math.mjs';

const test = {
  title: 'Practice 5',
  id: 'math-5',
  storageKey: mathStorageKey,
  questions: mathQuestions,
  nav: [{ label: 'Mathematics', current: true }],
  instructions: 'Choose one answer per question. Use the marked values and relationships in each figure.',
  intro: 'После проверки под каждым заданием откроется пошаговое решение на русском.',
};

export default function Practice5Math() {
  return <MathPractice test={test} MathFigure={MathFigure}/>;
}
