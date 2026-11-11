import EnglishPractice from '../../english-practice';
import { readingTest } from '../../../../content/practice-3/reading-test.mjs';

export const metadata = {
  title: 'Practice 3 · Reading · ACT space',
  description: 'Conquering Jazz: ten reading questions with linked bilingual evidence and vocabulary practice.',
};

export default function Page() {
  return <EnglishPractice key={readingTest.id} test={readingTest} />;
}
