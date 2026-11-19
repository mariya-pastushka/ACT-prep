import EnglishPractice from '../../english-practice';
import { readingTest } from '../../../../content/practice-7/reading-test.mjs';

export const metadata = {
  title: 'Practice 7 · Reading · ACT space',
  description: 'Totem poles: ten ACT Reading questions with original line references, linked bilingual explanations, and a vocabulary review.',
};

export default function Page() {
  return <EnglishPractice key={readingTest.id} test={readingTest} splitReading />;
}
