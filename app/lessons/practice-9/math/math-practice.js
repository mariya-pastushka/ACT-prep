'use client';

import MathPractice from '../../math-practice';
import MathFigure from './figures';
import { mathQuestions, mathStorageKey } from '../../../../content/practice-9/math.mjs';

const test = {
  title: 'Practice 9', id: 'math-9', storageKey: mathStorageKey, questions: mathQuestions,
  nav: [{ label: 'English', href: '/lessons/practice-9' }, { label: 'Mathematics', current: true }],
  instructions: 'Choose one answer per question. Use the marked values and relationships in each figure.',
  intro: 'После проверки под каждым вопросом откроется подробный разбор на русском: что дано, нужное правило или формула, решение по шагам, проверка и возможная ошибка.',
};

export default function Practice9Math() {
  return <MathPractice test={test} MathFigure={MathFigure} />;
}
