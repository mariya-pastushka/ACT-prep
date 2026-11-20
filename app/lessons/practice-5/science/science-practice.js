'use client';

import { scienceStorageKey } from '../../../../content/practice-5/science-data.mjs';
import { scienceQuestions } from '../../../../content/practice-5/science-questions.mjs';
import { scienceLecture, scienceVocabulary } from '../../../../content/practice-5/science-lecture.mjs';
import SciencePractice from '../../science/science-practice';
import { OrganicPassage, PendulumPassage, MeltingDifferences, ScienceNotes } from './science-sources';

const groups = [
  { id: 'organic-title', title: 'Organic compounds', from: 1, to: 5, Passage: OrganicPassage },
  { id: 'pendulum-title', title: 'Pendulum experiments', from: 6, to: 11, Passage: PendulumPassage },
];

export default function PracticeFiveScience() {
  return <SciencePractice practiceNumber={5} subtitle="Organic compounds and pendulum experiments"
    storageKey={scienceStorageKey} groups={groups} questions={scienceQuestions} lecture={scienceLecture}
    vocabulary={scienceVocabulary} reviewFigures={{ 5: MeltingDifferences }}>
    <ScienceNotes />
  </SciencePractice>;
}
