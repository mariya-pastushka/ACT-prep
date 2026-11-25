import EnglishPractice from '../english-practice';
import { englishTest } from '../../../content/practice-9/english-test.mjs';
import css from './english.module.css';

export const metadata={title:'Practice 9 · English · ACT space',description:'Visiting Mackinac Island: questions 46–60, linked bilingual evidence, grammar review and vocabulary.'};
export default function Page(){return <div className={css.page}><EnglishPractice key={englishTest.id} test={englishTest}/></div>;}
