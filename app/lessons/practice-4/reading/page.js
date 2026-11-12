import EnglishPractice from '../../english-practice';
import { readingTest } from '../../../../content/practice-4/reading-test.mjs';

export const metadata = {
  title: 'Practice 4 · Reading · ACT space',
  description: 'Fair-Weather Warning: ten ACT Reading practice questions with linked English and Russian evidence.',
};

export default function Page() {
  return <EnglishPractice key={readingTest.id} test={readingTest}/>;
}
