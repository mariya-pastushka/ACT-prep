import EnglishPractice from '../../english-practice';
import {readingTest} from '../../../../content/practice-2/reading-test.mjs';
export const metadata={title:'Practice 2 · Reading · ACT space',description:'Information Stupor-highway: the complete social-science passage, 10 questions, source-line evidence, bilingual explanations, and a reading-skills mini-lecture.'};
export default function Page(){return <EnglishPractice key={readingTest.id} test={readingTest}/>}
