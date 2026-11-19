import EnglishPractice from '../english-practice';
import { englishTest } from '../../../content/practice-7/english-test.mjs';

export const metadata = {
  title: 'Practice 7 · English · ACT space',
  description: 'Seurat’s Masterpiece: ACT English questions 16–30 with linked English evidence, Russian explanations, and a vocabulary review.',
};

export default function Page() {
  return <EnglishPractice key={englishTest.id} test={englishTest} />;
}
