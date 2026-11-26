import EnglishPractice from '../english-practice';
import { englishTest } from '../../../content/practice-10/english-test.mjs';
import css from './english.module.css';

export const metadata={title:'Practice 10 · English · ACT space',description:'Fun with Karaoke: questions 61–75 with linked bilingual evidence, clear Russian explanations, grammar review and vocabulary.'};
export default function Page(){return <div className={css.page}><EnglishPractice key={englishTest.id} test={englishTest}/></div>;}
