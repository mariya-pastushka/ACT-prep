import EnglishPractice from '../english-practice';
import {englishTest} from '../../../content/practice-2/english-test.mjs';
export const metadata={title:'Practice 2 · English · ACT space',description:'New Beginnings: questions 16–30, passage evidence, simple English explanations, step-by-step Russian support, and a bilingual grammar mini-lecture.'};
export default function Page(){return <EnglishPractice key={englishTest.id} test={englishTest}/>}
