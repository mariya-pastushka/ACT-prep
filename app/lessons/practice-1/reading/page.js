import EnglishPractice from '../../english-practice';
import {readingTest} from '../../../../content/practice-1/reading-test.mjs';
export const metadata={title:'Practice 1 · Reading · ACT space',description:'A Well-Worn Jacket: the full prose-fiction passage, 10 questions, source-line evidence, clear English and Russian explanations, vocabulary, and a mini-lecture.'};
export default function Page(){return <EnglishPractice key={readingTest.id} test={readingTest}/>}
