import EnglishPractice from '../../english-practice';
import { readingTest } from '../../../../content/practice-10/reading-test.mjs';
import layout from '../../practice-9/reading/reading.module.css';

export const metadata = {
 title: 'Practice 10 · Reading · ACT space',
 description: 'From Kiva Han to Caribou Coffee: ten questions with linked bilingual evidence, reading strategies, and vocabulary.',
};

// The first line is the native jump target. Highlight the rest of its cited range too.
const rangeSelectors = readingTest.questions.flatMap(question =>
 question.evidenceLines
  .filter(([from, to]) => to > from)
  .map(([from, to]) => {
   const lines = Array.from({length: to - from + 1}, (_, index) => `#source-line-${from + index}`);
   return `[data-practice="practice-10-reading"]:has(#source-line-${from}:target) :is(${lines.join(',')})`;
  }),
);
const evidenceHighlight = `${rangeSelectors.join(',')} {
 background: #f4db85;
 border-radius: 3px;
 text-decoration: underline;
 text-decoration-color: #805096;
 text-decoration-thickness: 2px;
 text-underline-offset: 3px;
}`;

export default function Page() {
 return (
  <div className={layout.page} data-practice={readingTest.id}>
   <style>{evidenceHighlight}</style>
   <EnglishPractice key={readingTest.id} test={readingTest} splitReading />
  </div>
 );
}
