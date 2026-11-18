import EnglishPractice from '../english-practice';
import { englishTest } from '../../../content/practice-5/english-test.mjs';

export const metadata = {
  title: 'Practice 5 · English · ACT space',
  description: 'Jimmy Carter, Humanitarian: ACT English questions 61–75 with linked evidence, Russian explanations, and a grammar and vocabulary review.',
};

export default function Page() {
  return <EnglishPractice key={englishTest.id} test={englishTest} />;
}
