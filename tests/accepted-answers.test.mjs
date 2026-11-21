import test from 'node:test';
import assert from 'node:assert/strict';
import { mathQuestions } from '../content/practice-7/math.mjs';
import { isAnswerCorrect, englishPracticeResult, restoreEnglishAttempt } from '../lib/english-practice.mjs';

test('the duplicated determinant answer earns credit without changing the supplied primary key',()=>{
  const determinant=mathQuestions[3];
  assert.equal(determinant.key,'G');
  assert.equal(isAnswerCorrect(determinant,'G'),true);
  assert.equal(isAnswerCorrect(determinant,'K'),true);
  assert.equal(isAnswerCorrect(determinant,'J'),false);
  assert.equal(isAnswerCorrect(determinant,undefined),false);
  const answers=Object.fromEntries(mathQuestions.map(question=>[question.id,question.key]));
  answers[4]='K';
  const restored=restoreEnglishAttempt({answers,submitted:true},mathQuestions);
  assert.equal(restored.answers[4],'K');
  const result=englishPracticeResult(mathQuestions,restored.answers);
  assert.equal(result.correct,15);
  assert.equal(result.percent,100);
  assert.equal(result.incorrect,0);
  assert.equal(result.unanswered,0);
  assert.deepEqual(result.missed,[]);
});

test('alternative credit is opt-in and cannot turn invalid or blank labels into a correct answer',()=>{
  const ordinary={id:1,key:'A',choices:[{label:'A'},{label:'B'}]};
  const duplicated={id:2,key:'A',acceptedKeys:['A','B','Z'],choices:[{label:'A'},{label:'B'}]};
  assert.equal(isAnswerCorrect(ordinary,'B'),false);
  assert.equal(isAnswerCorrect(duplicated,'B'),true);
  assert.equal(isAnswerCorrect(duplicated,'Z'),false);
  assert.equal(isAnswerCorrect(duplicated,undefined),false);
  const result=englishPracticeResult([ordinary,duplicated],{1:'B',2:'B'});
  assert.equal(result.correct,1);
  assert.equal(result.incorrect,1);
  assert.equal(result.unanswered,0);
  assert.deepEqual(result.missed.map(question=>question.id),[1]);
});
