import EnglishPractice from '../english-practice';
import { englishTest } from '../../../content/practice-6/english-test.mjs';

export const metadata = {
  title: 'Practice 6 · English · ACT space',
  description: 'Crocheting Makes a Good Hobby: 15 ACT English questions with linked evidence, Russian explanations, and a vocabulary review.',
};

export default function Page() {
  return <EnglishPractice key={englishTest.id} test={englishTest} />;
}
