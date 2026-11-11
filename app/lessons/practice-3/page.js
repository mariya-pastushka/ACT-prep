import EnglishPractice from '../english-practice';
import { englishTest } from '../../../content/practice-3/english-test.mjs';

export const metadata = {
  title: 'Practice 3 · English · ACT space',
  description: 'Give a Snake a Break: questions 31–45, linked bilingual explanations, a grammar mini-lecture, and vocabulary practice.',
};

export default function Page() {
  return <EnglishPractice key={englishTest.id} test={englishTest} />;
}
