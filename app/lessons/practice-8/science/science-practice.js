'use client';
import SciencePractice from '../../science/science-practice';
import {scienceStorageKey} from '../../../../content/practice-8/science-data.mjs';
import {scienceQuestions} from '../../../../content/practice-8/science-questions.mjs';
import {scienceLecture,scienceVocabulary} from '../../../../content/practice-8/science-lecture.mjs';
import {TurtlePassage,ScuteChoice,Interpolation} from './science-sources';
import css from './science.module.css';
const groups=[{id:'turtle-title',title:'Turtle shell studies',from:1,to:6,Passage:TurtlePassage}];
const navigation=[{label:'English',href:'/lessons/practice-8'},{label:'Reading',href:'/lessons/practice-8/reading'}];
const layouts={scutes:{Content:ScuteChoice,gridClass:css.choiceGrid,choiceClass:css.diagramChoice}};
export default function Practice8Science(){return <SciencePractice practiceNumber={8} subtitle="Turtle shell studies" storageKey={scienceStorageKey} groups={groups} questions={scienceQuestions} lecture={scienceLecture} vocabulary={scienceVocabulary} navigation={navigation} vocabularyTitle="Словарь к исследованию панцирей" choiceLayouts={layouts} reviewFigures={{4:Interpolation}}/>;}
