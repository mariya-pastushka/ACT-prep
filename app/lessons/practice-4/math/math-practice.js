'use client';

import MathPractice from '../../math-practice';
import MathFigure from './figures';
import { mathQuestions, mathStorageKey } from '../../../../content/practice-4/math.mjs';

const test = {
  title: 'Practice 4',
  id: 'math-4',
  storageKey: mathStorageKey,
  questions: mathQuestions,
  nav: [
    { label: 'English', href: '/lessons/practice-4' },
    { label: 'Mathematics', current: true },
    { label: 'Reading', href: '/lessons/practice-4/reading' },
    { label: 'Science', href: '/lessons/practice-4/science' },
  ],
  instructions: 'Choose one answer per question. Use the marked values and relationships in each figure.',
  intro: 'После проверки под каждым заданием откроется пошаговое решение на русском.',
};

export default function Practice4Math() {
  return <MathPractice test={test} MathFigure={MathFigure} />;
}
