'use client';

import SciencePractice from '../../science/science-practice';
import {scienceStorageKey} from '../../../../content/practice-9/science-data.mjs';
import {scienceQuestions} from '../../../../content/practice-9/science-questions.mjs';
import {scienceLecture,scienceVocabulary} from '../../../../content/practice-9/science-lecture.mjs';
import {BloodPassage,GasPassage,VesselChoice,PressureChoice,QuestionExtras,VolumeInterpolation,DiameterOrder,MatchExperiments,PressureComplements,ParticleCompression,ReverseNitrogen,NeonPrediction} from './science-sources';
import css from './science.module.css';

const groups=[{id:'vessel-title',title:'Vasoconstriction',from:1,to:6,Passage:BloodPassage},{id:'gas-title',title:'Gas compression',from:7,to:11,Passage:GasPassage}];
const layouts={vessels:{Content:VesselChoice,gridClass:css.choiceGrid,choiceClass:css.diagramChoice},pressure:{Content:PressureChoice,gridClass:css.choiceGrid,choiceClass:css.diagramChoice}};
const reviewFigures={1:VolumeInterpolation,4:DiameterOrder,5:MatchExperiments,6:PressureComplements,8:ParticleCompression,9:ReverseNitrogen,10:NeonPrediction};

export default function Practice9Science(){return <div className={css.page}><SciencePractice practiceNumber={9} subtitle="Vasoconstriction and gas compression" storageKey={scienceStorageKey} groups={groups} questions={scienceQuestions} lecture={scienceLecture} vocabulary={scienceVocabulary} choiceLayouts={layouts} QuestionExtras={QuestionExtras} reviewFigures={reviewFigures} vocabularyTitle="Словарь: сосуды, давление, газы и работа с данными"/></div>;}
