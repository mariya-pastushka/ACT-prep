import EnglishPractice from '../../english-practice';
import { readingTest } from '../../../../content/practice-6/reading-test.mjs';

export const metadata = {
  title: 'Practice 6 · Reading · ACT space',
  description: 'The Civilian Conservation Corps: ten ACT Reading questions with numbered source lines and bilingual explanations.',
};

export default function Page() {
  return <EnglishPractice key={readingTest.id} test={readingTest} splitReading />;
}
