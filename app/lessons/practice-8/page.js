import EnglishPractice from '../english-practice';
import { englishTest } from '../../../content/practice-8/english-test.mjs';
import css from './english.module.css';

export const metadata={title:'Practice 8 · English · ACT space',description:'The Language of Cats: questions 31–45 with linked bilingual explanations and grammar review.'};
export default function Page(){return <div className={css.page}><EnglishPractice key={englishTest.id} test={englishTest}/></div>;}
