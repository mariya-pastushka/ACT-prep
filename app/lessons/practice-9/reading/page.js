import EnglishPractice from '../../english-practice';
import { readingTest } from '../../../../content/practice-9/reading-test.mjs';
import css from './reading.module.css';

export const metadata={title:'Practice 9 · Reading · ACT space',description:'Going Home: ten ACT Reading questions, 71 original source lines, linked bilingual evidence, reading strategies and vocabulary.'};
export default function Page(){return <div className={css.page}><EnglishPractice key={readingTest.id} test={readingTest} splitReading/></div>;}
