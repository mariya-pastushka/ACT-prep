import EnglishPractice from '../english-practice';
import {englishTest} from '../../../content/practice-1/english-test.mjs';
export default function Practice(){return <EnglishPractice key={englishTest.id} test={englishTest}/>}