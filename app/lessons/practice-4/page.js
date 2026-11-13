import EnglishPractice from '../english-practice';
import { englishTest } from '../../../content/practice-4/english-test.mjs';

export const metadata = {
  title: 'Practice 4 · English · ACT space',
  description: 'Zora Neale Hurston, Independent Woman: English questions 46–60 with linked English and Russian explanations, grammar practice, and vocabulary.',
};

export default function Page() {
  return <EnglishPractice key={englishTest.id} test={englishTest} />;
}
