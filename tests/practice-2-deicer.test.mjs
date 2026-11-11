import test from 'node:test';
import assert from 'node:assert/strict';
import {scienceQuestions as qs} from '../content/practice-2/science-questions.mjs';
import {scienceStorageKey,legacyScienceStorageKey} from '../content/practice-2/science-data.mjs';
import {scienceLecture,scienceVocabulary} from '../content/practice-2/science-lecture.mjs';
import {mixtureData,temperatureData,deicerGraph,meltingProtocol} from '../content/practice-2/deicer-data.mjs';
import {proofExpressions} from '../content/practice-2/deicer-questions.mjs';
import {englishPracticeResult,restoreEnglishAttempt} from '../lib/english-practice.mjs';
import {restoreScienceProgress} from '../lib/practice-2-science.mjs';
const near=(a,b)=>Math.abs(a-b)<1e-12;

test('full Science contains all twelve supplied answers and scores both passages together',()=>{
 assert.deepEqual(qs.map(q=>q.id),Array.from({length:12},(_,i)=>i+1));
 assert.deepEqual(qs.map(q=>q.key),['D','G','A','H','B','H','C','J','A','H','C','G']);
 for(const q of qs){assert.deepEqual(q.choices.map(c=>c.label),[...(q.id%2?'ABCD':'FGHJ')]);assert.equal(new Set(q.choices.map(c=>c.text)).size,4);}
 const full=Object.fromEntries(qs.map(q=>[q.id,q.key])),r=englishPracticeResult(qs,full);assert.equal(r.total,12);assert.equal(r.correct,12);assert.equal(r.percent,100);
 const mixed=englishPracticeResult(qs,{1:'D',2:'F',7:'C'});assert.equal(mixed.correct,2);assert.equal(mixed.incorrect,1);assert.equal(mixed.unanswered,9);assert.equal(mixed.percent,17);
 assert.equal(englishPracticeResult(qs,{}).unanswered,12);
 assert.deepEqual(restoreEnglishAttempt({answers:{1:'D',2:'Z',7:'C',13:'A'},submitted:true},qs),{answers:{1:'D',7:'C'},submitted:true});
});

test('both de-icing tables retain all source measurements and the melting protocol',()=>{
 assert.deepEqual(mixtureData.map(r=>[r.proof,r.water,r.sodium]),[[100,0,50],[80,10,40],[60,20,30],[40,30,20],[20,40,10],[0,50,0]]);
 assert.deepEqual(temperatureData.map(r=>[r.temperature,r.tr,r.A,r.B]),[[-10,24.1,90.3,70.1],[-25,36.9,78.9,64.9],[-50,49.7,68.8,59.7],[-75,52.3,56.6,51.7]]);
 assert.deepEqual(meltingProtocol,{initialIceMass:125,solutionVolume:500,seconds:300});
 assert.ok(near((meltingProtocol.initialIceMass-80)/meltingProtocol.seconds,0.15));
});

test('only C for Question 7 fits both neighboring proof ranges',()=>{
 assert.equal(qs[6].pairedChoices,true);
 const warmer=temperatureData.find(r=>r.temperature===-25),colder=temperatureData.find(r=>r.temperature===-50);
 assert.ok(colder.temperature<-30&&-30<warmer.temperature);
 const eligible=qs[6].choices.filter(c=>{const [a,b]=c.text.split(' · ').map(Number);return colder.A<a&&a<warmer.A&&colder.B<b&&b<warmer.B;});
 assert.deepEqual(eligible.map(c=>c.label),['C']);
});

test('mixture ratios and four structural fractions match Questions 8 and 10',()=>{
 for(const row of mixtureData)assert.ok(near(100*row.sodium/(row.water+row.sodium),row.proof));
 const same=mixtureData.find(r=>r.water===10&&r.sodium===40);assert.equal(same.proof,100*4/(1+4));
 assert.equal(qs[9].formulaChoices,true);
 for(const c of qs[9].choices){const fraction=c.math.items[0];assert.equal(fraction.kind,'frac');assert.equal(c.math.items[1],'×100');assert.deepEqual(c.math,proofExpressions[c.label]);}
 const {top,bottom}=proofExpressions.H.items[0];assert.equal(top.value,'volume of sodium chloride');
 assert.deepEqual(bottom.items.filter(x=>x?.kind==='words').map(x=>x.value),['volume of water','volume of sodium chloride']);
 assert.equal(proofExpressions.J.items[0].top.value,'volume of water');
});

test('TR rises as it gets colder, while A meets every threshold and B fails the last',()=>{
 assert.ok(temperatureData.every((r,i,rs)=>!i||r.temperature<rs[i-1].temperature&&r.tr>rs[i-1].tr&&r.A<rs[i-1].A&&r.B<rs[i-1].B));
 assert.ok(temperatureData.every(r=>r.A>=r.tr));assert.deepEqual(temperatureData.filter(r=>r.B<r.tr).map(r=>r.temperature),[-75]);
 assert.equal(qs[11].choices.find(c=>c.label===qs[11].key).text,'De-icer A, because its proof was higher than the TR at each temperature tested.');
});

test('Figure 1 is an approximate reference, not a direct measurement of the new recipe',()=>{
 assert.deepEqual(deicerGraph.xRange,[0,8]);assert.deepEqual(deicerGraph.yRange,[100,112]);assert.deepEqual(deicerGraph.approximatePlateau,[111,112]);
 assert.ok(6>deicerGraph.plateauFromAbout&&6<=deicerGraph.xRange[1]);
 assert.equal(qs[10].choices.find(c=>c.label===qs[10].key).text,'between 80 and 112.');
 assert.ok(qs[10].explanationEn[1].includes('not the one directly tested'));
});

test('each added question has de-icing evidence and a matching concept in the extended lecture',()=>{
 const sources=new Set(['deicer-introduction','deicer-table-1','deicer-table-2','deicer-figure-1','deicer-experiment-1','deicer-experiment-2','deicer-experiment-3']);
 for(const q of qs.slice(6)){assert.ok(q.sources.length);assert.ok(q.sources.every(s=>sources.has(s.id)));assert.ok(q.evidenceEn.length>=2);assert.equal(q.explanationEn.length,2);assert.ok(q.whyEn);assert.ok(q.askRu);assert.ok(q.evidenceRu.length>=2);assert.equal(q.stepsRu.length,3);assert.ok(q.ruleRu);assert.ok(q.whyRu);assert.ok(scienceLecture.some(l=>l.questions.includes(q.id)));}
 assert.equal(scienceLecture.length,11);assert.equal(scienceVocabulary.length,24);
 for(const l of scienceLecture.slice(6))for(const field of ['en','ru','exampleEn','exampleRu','note','taskEn','taskRu','answerEn','answerRu'])assert.ok(l[field]);
 for(const item of scienceVocabulary.slice(12))for(const field of ['term','ru','example','exampleRu'])assert.ok(item[field]);
});

test('a locked six-question attempt migrates valid answers into an unlocked full draft',()=>{
 assert.notEqual(scienceStorageKey,legacyScienceStorageKey);
 const old={answers:{1:'D',2:'Z',6:'H',7:'C'},submitted:true};
 assert.deepEqual(restoreScienceProgress(undefined,old,qs),{attempt:{answers:{1:'D',6:'H'},submitted:false},migrated:true});
 assert.equal(old.submitted,true);assert.equal(old.answers[7],'C');
});

test('current results and intentionally cleared drafts take precedence over legacy answers',()=>{
 const old={answers:{1:'D'},submitted:true};
 const current={answers:{1:'A',7:'C',12:'G'},submitted:true};
 assert.deepEqual(restoreScienceProgress(current,old,qs),{attempt:current,migrated:false});
 const empty={answers:{},submitted:false};
 assert.deepEqual(restoreScienceProgress(empty,old,qs),{attempt:empty,migrated:false});
 assert.deepEqual(restoreScienceProgress(undefined,undefined,qs),{attempt:empty,migrated:false});
});
