'use client';
import SciencePractice from '../../science/science-practice';
import {scienceStorageKey,sciencePreviousStorageKey} from '../../../../content/practice-8/science-data.mjs';
import {scienceQuestions} from '../../../../content/practice-8/science-questions.mjs';
import {scienceLecture,scienceVocabulary} from '../../../../content/practice-8/science-lecture.mjs';
import {TurtlePassage,ScuteChoice,Interpolation} from './science-sources';
import css from './science.module.css';
import {BloodPassage,GenotypeChoice,CrossThree,AllAB,OAlleleCarriers,BloodCount} from './blood-sources';
const groups=[{id:'turtle-title',title:'Turtle shell studies',from:1,to:6,Passage:TurtlePassage},{id:'blood-title',title:'Blood-type inheritance',from:7,to:12,Passage:BloodPassage}];
const navigation=[{label:'English',href:'/lessons/practice-8'},{label:'Reading',href:'/lessons/practice-8/reading'}];
const layouts={scutes:{Content:ScuteChoice,gridClass:css.choiceGrid,choiceClass:css.diagramChoice},genotype:{Content:GenotypeChoice}};
export default function Practice8Science(){return <SciencePractice practiceNumber={8} subtitle="Turtle shells and blood-type inheritance" storageKey={scienceStorageKey} previousStorageKey={sciencePreviousStorageKey} groups={groups} questions={scienceQuestions} lecture={scienceLecture} vocabulary={scienceVocabulary} navigation={navigation} vocabularyTitle="Словарь к двум исследованиям" choiceLayouts={layouts} reviewFigures={{4:Interpolation,7:CrossThree,9:AllAB,10:CrossThree,11:OAlleleCarriers,12:BloodCount}}/>;}
