'use client';

import MathPractice from '../../math-practice';
import MathFigure from './figures';
import { mathQuestions, mathStorageKey } from '../../../../content/practice-7/math.mjs';

const test = {
  title: 'Practice 7', id: 'math-7', storageKey: mathStorageKey, questions: mathQuestions,
  nav: [
    { label: 'English', href: '/lessons/practice-7' },
    { label: 'Mathematics', current: true },
    { label: 'Reading', href: '/lessons/practice-7/reading' },
  ],
  instructions: 'Choose one answer per question. Use the marked values and relationships in each figure.',
  intro: 'После проверки под каждым заданием откроется подробное решение на русском: правило, вычисления, проверка и разбор возможной ошибки.',
};

export default function Practice7Math() {
  return <MathPractice test={test} MathFigure={MathFigure} />;
}
