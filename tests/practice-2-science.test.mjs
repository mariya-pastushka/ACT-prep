import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {scienceStorageKey,plannedQuestionCount,unloadedLength,trialData,scienceFigures,singleSpringOptions} from '../content/practice-2/science-data.mjs';
import {scienceQuestions as qs} from '../content/practice-2/science-questions.mjs';
import {scienceLecture,scienceVocabulary} from '../content/practice-2/science-lecture.mjs';
import {englishTest} from '../content/practice-2/english-test.mjs';
import {readingTest} from '../content/practice-2/reading-test.mjs';
import {englishPracticeResult,restoreEnglishAttempt} from '../lib/english-practice.mjs';
const near=(a,b)=>Math.abs(a-b)<1e-12;

test('Science 2 includes only the six uploaded questions and their supplied key',()=>{
 assert.equal(plannedQuestionCount,12);assert.deepEqual(qs.map(q=>q.id),[1,2,3,4,5,6]);
 assert.deepEqual(qs.map(q=>q.key),['D','G','A','H','B','H']);
 for(const q of qs){assert.deepEqual(q.choices.map(c=>c.label),[...(q.id%2?'ABCD':'FGHJ')]);assert.equal(q.choices.filter(c=>c.label===q.key).length,1);assert.equal(new Set(q.choices.map(c=>c.text)).size,4);}
 assert.equal(qs[0].drawingChoices,true);assert.equal(qs[0].choices[3].text,'0.50 m');
 assert.ok(qs[5].choices.find(c=>c.label==='H').text.includes('greater in Trial 6'));
});

test('source assets are byte-identical to the supplied originals and keep their actual PNG dimensions',()=>{
 const manifest=JSON.parse(readFileSync(new URL('../content/practice-2/science-source-assets.json',import.meta.url),'utf8').replace(/^\uFEFF/,''));
 assert.equal(manifest.length,5);
 for(const asset of Object.values(scienceFigures)){
  const bytes=readFileSync(new URL('../public'+asset.src,import.meta.url));
  assert.equal(bytes.subarray(1,4).toString(),'PNG');
  assert.equal(bytes.readUInt32BE(16),asset.width);assert.equal(bytes.readUInt32BE(20),asset.height);
  const name=asset.src.split('/').at(-1);assert.equal(createHash('sha256').update(bytes).digest('hex'),manifest.find(x=>x.file===name).sha256);
  const [x,y,w,h]=asset.crop;assert.ok(x>=0&&y>=0&&w>0&&h>0&&x+w<=asset.width&&y+h<=asset.height);
 }
 for(const option of singleSpringOptions){const [x,y,w,h]=option.crop;assert.ok(x+w<=scienceFigures.question1.width&&y+h<=scienceFigures.question1.height);}
 assert.deepEqual(singleSpringOptions.map(x=>x.length),[0.15,0.30,0.40,0.50]);
});

test('transcribed trial values retain every original load, position and printed length',()=>{
 assert.equal(unloadedLength,0.30);
 assert.deepEqual(trialData.slice(0,3).map(t=>[t.id,t.weight,t.A,t.B]),[[1,10,0.40,0.40],[2,15,0.45,0.45],[3,20,0.50,0.50]]);
 assert.deepEqual(trialData.slice(3).map(t=>[t.id,t.weight,t.positionFromB,t.B,t.C]),[[4,5,0.075,0.45,0.34],[5,5,0.125,0.40,0.40],[6,5,0.200,0.32,0.50]]);
 const b=trialData.slice(3).map(t=>t.B-unloadedLength);assert.ok(near(b[0],0.15)&&near(b[1],0.10)&&near(b[2],0.02));assert.ok(b[0]>b[1]&&b[1]>b[2]);
 assert.equal(trialData[2].weight/2,10);assert.equal(trialData[2].A,0.50);
 assert.equal(trialData[0].weight-trialData[4].weight,5);
 assert.deepEqual(trialData.slice(3).filter(t=>t.B===t.C).map(t=>t.id),[5]);
 assert.equal(0.25/2,trialData[4].positionFromB);
 const x5=trialData[4].C-unloadedLength,x6=trialData[5].C-unloadedLength;assert.ok(x6>x5);assert.ok(near((x6/x5)**2,4));
});

test('bilingual evidence identifies sources, extensions and the complete answer-plus-reason',()=>{
 const sources=new Set(['springs-principle','springs-experiment-1','springs-figure-1','springs-figure-2','springs-figure-3','springs-figure-4']);
 for(const q of qs){assert.ok(q.sources.length);for(const s of q.sources)assert.ok(sources.has(s.id));assert.ok(q.evidenceEn.length>=2);assert.equal(q.explanationEn.length,2);assert.ok(q.whyEn);assert.ok(q.askRu);assert.ok(q.evidenceRu.length>=2);assert.equal(q.stepsRu.length,3);assert.ok(q.ruleRu);assert.ok(q.whyRu);assert.ok(scienceLecture.some(l=>l.questions.includes(q.id)));}
 assert.ok(qs[0].explanationEn[0].includes('Trial 3'));assert.ok(qs[3].explanationEn[1].includes('board'));
 assert.ok(qs[5].stepsRu[2].includes('причина'));assert.ok(qs[1].explanationEn[1].includes('without inventing numerical forces'));
});

test('mini-lecture has complete bilingual exercises and a useful physics vocabulary',()=>{
 assert.equal(scienceLecture.length,6);assert.equal(scienceVocabulary.length,12);
 for(const l of scienceLecture)for(const field of ['title','titleRu','en','ru','exampleEn','exampleRu','note','taskEn','taskRu','answerEn','answerRu'])assert.ok(l[field]);
 for(const item of scienceVocabulary)for(const field of ['term','ru','example','exampleRu'])assert.ok(item[field]);
});

test('partial Science scoring uses six, keeps attempts separate and links from other Practice 2 sections',()=>{
 const full=Object.fromEntries(qs.map(q=>[q.id,q.key])),r=englishPracticeResult(qs,full);assert.equal(r.total,6);assert.equal(r.correct,6);assert.equal(r.percent,100);
 const mixed=englishPracticeResult(qs,{1:'D',2:'F'});assert.equal(mixed.correct,1);assert.equal(mixed.incorrect,1);assert.equal(mixed.unanswered,4);assert.equal(mixed.percent,17);
 assert.equal(englishPracticeResult(qs,{}).unanswered,6);
 assert.deepEqual(restoreEnglishAttempt({answers:{1:'D',2:'Z',7:'C'},submitted:true},qs),{answers:{1:'D'},submitted:true});
 assert.equal(new Set([scienceStorageKey,'act-space-practice-1-science-v1',englishTest.storageKey,readingTest.storageKey,'act-space-practice-2-math-v1']).size,5);
 for(const config of [englishTest,readingTest])assert.equal(config.nav.find(x=>x.label==='Science').href,'/lessons/practice-2/science');
});
