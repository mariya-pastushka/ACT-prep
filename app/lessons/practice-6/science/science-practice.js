'use client';

import { scienceStorageKey } from '../../../../content/practice-6/science-data.mjs';
import { scienceQuestions } from '../../../../content/practice-6/science-questions.mjs';
import { scienceLecture, scienceVocabulary } from '../../../../content/practice-6/science-lecture.mjs';
import SciencePractice from '../../science/science-practice';
import { VirusesPassage, SoilPassage, ClayPrediction, WetClayPrediction, ScienceNotes } from './science-sources';

const groups = [
  { id: 'virus-title', title: 'Origins of viruses', from: 1, to: 7, Passage: VirusesPassage },
  { id: 'soil-title', title: 'Wind and topsoil deflation', from: 8, to: 13, Passage: SoilPassage },
];

export default function PracticeSixScience() {
  return <SciencePractice practiceNumber={6} subtitle="Origins of viruses and topsoil deflation"
    storageKey={scienceStorageKey} groups={groups} questions={scienceQuestions} lecture={scienceLecture}
    vocabulary={scienceVocabulary} reviewFigures={{ 9: ClayPrediction, 13: WetClayPrediction }}>
    <ScienceNotes />
  </SciencePractice>;
}
