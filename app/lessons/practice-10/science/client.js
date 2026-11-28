'use client';

import SciencePractice from '../../science/science-practice';
import { scienceQuestions } from '../../../../content/practice-10/science-questions.mjs';
import { scienceLecture, scienceVocabulary } from '../../../../content/practice-10/science-lecture.mjs';
import { PlanetsPassage, TabletPassage } from './science-sources';

const groups = [
 {id: 's10-planets', title: 'Planetary atmospheres', from: 1, to: 5, Passage: PlanetsPassage},
 {id: 's10-tablets', title: 'Effervescent tablets', from: 6, to: 12, Passage: TabletPassage},
];

const navigation = [
 {label: 'English', href: '/lessons/practice-10'},
 {label: 'Mathematics', href: '/lessons/practice-10/math'},
 {label: 'Reading', href: '/lessons/practice-10/reading'},
];

export default function Practice10Science() {
 return (
  <SciencePractice
   practiceNumber={10}
   subtitle="Planetary atmospheres and effervescent tablets"
   storageKey="act-space-practice-10-science-v1"
   groups={groups}
   questions={scienceQuestions}
   lecture={scienceLecture}
   vocabulary={scienceVocabulary}
   navigation={navigation}
  />
 );
}
