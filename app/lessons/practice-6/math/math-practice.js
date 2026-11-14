'use client';

import MathPractice from '../../math-practice';
import MathFigure from './figures';
import { mathQuestions, mathStorageKey } from '../../../../content/practice-6/math.mjs';

const test = {
  title: 'Practice 6',
  id: 'math-6',
  storageKey: mathStorageKey,
  questions: mathQuestions,
  nav: [{ label: 'Mathematics', current: true }],
  instructions: 'Choose one answer per question. Use the marked values and relationships in each figure.',
  intro: 'После проверки под каждым заданием откроется пошаговое решение на русском.',
};

export default function Practice6Math() {
  return <MathPractice test={test} MathFigure={MathFigure}/>;
}
