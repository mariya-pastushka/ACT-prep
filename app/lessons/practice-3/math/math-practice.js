'use client';

import MathPractice from '../../math-practice';
import MathFigure from './figures';
import { mathQuestions, mathStorageKey } from '../../../../content/practice-3/math.mjs';

const test = {
  title: 'Practice 3',
  id: 'math-3',
  storageKey: mathStorageKey,
  questions: mathQuestions,
  nav: [
    { label: 'English', href: '/lessons/practice-3' },
    { label: 'Mathematics', current: true },
    { label: 'Reading', href: '/lessons/practice-3/reading' },
    { label: 'Science' },
  ],
  instructions: 'Choose one answer per question. Odd questions use A–E. Even questions use F, G, H, J, K. Use the labels and relationships shown in the diagrams.',
  intro: 'После проверки под каждым заданием откроется решение на русском. Ответы сохраняются отдельно для этой секции.',
};

export default function Practice3Math() {
  return <MathPractice test={test} MathFigure={MathFigure} />;
}
