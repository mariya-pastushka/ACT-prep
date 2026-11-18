import EnglishPractice from '../../english-practice';
import { readingTest } from '../../../../content/practice-5/reading-test.mjs';

export const metadata = {
  title: 'Practice 5 · Reading · ACT space',
  description: 'The Year of the Unicorn: ten ACT Reading questions with linked evidence, Russian explanations, and a vocabulary review.',
};

export default function Page() {
  return <EnglishPractice key={readingTest.id} test={readingTest} splitReading />;
}
