import EnglishPractice from '../../english-practice';
import { readingTest } from '../../../../content/practice-8/reading-test.mjs';

export const metadata = {
  title: 'Practice 8 · Reading · ACT space',
  description: 'The Pioneer Mission to Venus: ten ACT Reading questions with original source lines, bilingual explanations, and a vocabulary review.',
};

export default function Page() {
  return <EnglishPractice key={readingTest.id} test={readingTest} splitReading />;
}
