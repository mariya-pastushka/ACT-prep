'use client';

import { scienceStorageKey } from '../../../../content/practice-4/science-data.mjs';
import { scienceQuestions } from '../../../../content/practice-4/science-questions.mjs';
import { scienceLecture, scienceVocabulary } from '../../../../content/practice-4/science-lecture.mjs';
import SciencePractice from '../../science/science-practice';
import styles from '../../trial/trial.module.css';
import shared from '../../practice-1/practice.module.css';
import base from '../../practice-1/science/science.module.css';
import { ConvectionPassage, PlatingPassage, Cylinder } from './science-sources';
import css from './science.module.css';

const groups = [
  { id: 'convection-title', title: 'Convection', from: 1, to: 5, Passage: ConvectionPassage },
  { id: 'plating-title', title: 'Precious metal plating', from: 6, to: 11, Passage: PlatingPassage },
];

function CylinderChoice({ choice }) {
  return <span><Cylinder label={choice.label}/></span>;
}

function Temperatures({ choice }) {
  const [bottom, top] = choice.text;
  return <span className={base.pairCells}><span aria-label={`Bottom: ${bottom}`}>{bottom}</span><span aria-label={`Top: ${top}`}>{top}</span></span>;
}

const choiceLayouts = {
  cylinders: { gridClass: css.cylinderChoices, choiceClass: css.cylinderChoice, Content: CylinderChoice },
  temperatures: { Content: Temperatures },
};

function QuestionExtras({ question }) {
  if (question.statements) {
    return <div className={css.statements}>
      {question.statements.map(statement => <div key={statement}>{statement}</div>)}
    </div>;
  }
  if (question.visual === 'temperatures') {
    return <div className={base.pairHeader}><span>Bottom end</span><span>Top / exposed-to-air end</span></div>;
  }
  return null;
}

export default function PracticeFourScience() {
  return <SciencePractice practiceNumber={4} subtitle="Convection and precious metal plating"
    storageKey={scienceStorageKey} groups={groups} questions={scienceQuestions} lecture={scienceLecture}
    vocabulary={scienceVocabulary} choiceLayouts={choiceLayouts} QuestionExtras={QuestionExtras}>
    <article className={`${styles.strategy} ${shared.ruSupport}`}>
      <h3>Что определяет массу покрытия при электролизе</h3>
      <p>В №7 ключ следует предположению задания о площади контакта. Для электролиза с током действует закон Фарадея. При постоянном токе заряд равен произведению тока на время. Если ток, время и доля заряда, которая идёт на осаждение того же металла, одинаковы, масса осаждённого металла тоже одинакова. Чтобы выяснить эффект площади в реальном опыте, нужно измерить массу при разных площадях и одинаковых остальных условиях.</p>
      <div className={base.sourceLinks} lang="en">
        <a href="https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer">OpenStax · Mechanisms of heat transfer</a>
        <a href="https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis">OpenStax · Electrolysis and metal deposition</a>
      </div>
    </article>
  </SciencePractice>;
}
