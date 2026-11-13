'use client';

import { scienceStorageKey } from '../../../../content/practice-3/science-data.mjs';
import { scienceQuestions } from '../../../../content/practice-3/science-questions.mjs';
import { scienceLecture, scienceVocabulary } from '../../../../content/practice-3/science-lecture.mjs';
import SciencePractice from '../../science/science-practice';
import styles from '../../trial/trial.module.css';
import shared from '../../practice-1/practice.module.css';
import base from '../../practice-1/science/science.module.css';
import { CometsPassage, CottonPassage, GrowthGraph } from './science-sources';

const groups = [
  { id: 'comets-title', title: 'The Small Comet debate', from: 1, to: 7, Passage: CometsPassage },
  { id: 'cotton-title', title: 'Cotton fiber growth', from: 8, to: 13, Passage: CottonPassage },
];

export default function PracticeThreeScience() {
  return <SciencePractice practiceNumber={3} subtitle="The Small Comet debate and cotton fiber growth"
    storageKey={scienceStorageKey} groups={groups} questions={scienceQuestions} lecture={scienceLecture}
    vocabulary={scienceVocabulary} reviewFigures={{ 13: GrowthGraph }}>
    <article className={`${styles.strategy} ${shared.ruSupport}`}>
      <h3>Как эти термины используют в астрономии</h3>
      <p>Для вопросов 1–7 пользуйся схемой и формулировками из задания. В астрономии метеор — свечение при входе метеороида в атмосферу. Метеороид может быть частицей, оставленной кометой. Магнитосфера — область влияния магнитного поля Земли, её форма и границы меняются под действием солнечного ветра.</p>
      <div className={base.sourceLinks} lang="en">
        <a href="https://science.nasa.gov/solar-system/meteors-meteorites/facts/">NASA · Meteors and Meteorites</a>
        <a href="https://science.nasa.gov/heliophysics/focus-areas/magnetosphere-ionosphere/">NASA · Magnetospheres</a>
      </div>
    </article>
  </SciencePractice>;
}
