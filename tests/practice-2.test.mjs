import test from 'node:test';
import assert from 'node:assert/strict';
import {englishTest as p2} from '../content/practice-2/english-test.mjs';
import {englishTest as p1} from '../content/practice-1/english-test.mjs';
import {englishPracticeResult,restoreEnglishAttempt} from '../lib/english-practice.mjs';

test('Practice 2 preserves supplied numbering, labels, and every answer-key letter',()=>{
 assert.equal(p2.questions.length,15);
 assert.deepEqual(p2.questions.map(q=>q.id),Array.from({length:15},(_,i)=>i+16));
 assert.deepEqual(p2.questions.map(q=>q.key),['G','C','H','D','F','D','F','C','G','D','G','A','G','A','H']);
 for(const q of p2.questions){assert.deepEqual(q.choices.map(c=>c.label),[...(q.id%2?'ABCD':'FGHJ')]);assert.equal(new Set(q.choices.map(c=>c.text)).size,4);assert.equal(q.choices.filter(c=>c.label===q.key).length,1);assert.ok(q.prompt.length>20);}
 assert.equal(p2.questions.find(q=>q.id===30).choices.find(c=>c.label==='H').text,'3');
 assert.equal(p2.questions.find(q=>q.id===25).choices[0].text,'face while');
});

test('New Beginnings retains all four source paragraphs and intentional errors',()=>{
 const ps=p2.passage.paragraphs;assert.equal(ps.length,4);assert.equal(p2.passage.title,'New Beginnings');
 const raw=ps.join(' ').replace(/\{\{\d+\|([^}]+)\}\}/g,'$1');
 for(const text of ['when I keep my grades up','future hoping',"nursing, I decided",'here lies all the opportunities','pair of slacks, a blouse,','expert himself in every facet of hospital administration,','my ears were immediately overwhelmed. Women','I felt suspicious','face as I looked around','down the busy hallway past the numerous delivery rooms','nurse, the one in charge of the nursery,','placing it in the appropriate drawer','which I returned with a quiet nod','I got right to work.'])assert.ok(raw.includes(text),text);
 assert.deepEqual([...ps[1].matchAll(/\[(\d)\]/g)].map(m=>Number(m[1])),[1,2,3,4,5]);
 assert.ok(ps[1].indexOf('[2]')<ps[1].indexOf('[3]'));
 assert.deepEqual([...ps.join(' ').matchAll(/\{\{(\d+)\|/g)].map(m=>Number(m[1])),[16,17,18,19,20,22,23,24,25,26,27,28]);
 assert.deepEqual(p2.insertions,[{afterParagraph:1,questionId:21,label:'[21] Review the order of Sentences 1–5 in this paragraph ↗︎'}]);
 for(const unwanted of ['Prep for Tests','Find Hospitals','Learn a Language'])assert.ok(!raw.includes(unwanted));
});

test('every explanation has a source paragraph and structured bilingual teaching support',()=>{
 assert.equal(Object.keys(p2.evidenceRu).length,15);
 for(const q of p2.questions){
  assert.equal(q.explanation.length,3);assert.ok(q.explanation.every(p=>p.length>70));assert.ok(q.evidence.length>40);
  assert.ok(q.evidenceParagraphs.length>=1);assert.ok(q.evidenceParagraphs.every(n=>n>=1&&n<=4));
  const r=p2.evidenceRu[q.id];assert.ok(r.quote.length>40);assert.equal(r.steps.length,3);assert.ok(r.rule.length>70);assert.equal(r.example.length,2);assert.ok(/[А-Яа-я]/u.test(r.example[1]));assert.ok(r.wrong.length>=1);assert.ok(r.remember.length>30);
 }
 assert.deepEqual(p2.questions.find(q=>q.id===21).evidenceParagraphs,[2]);
 assert.deepEqual(p2.questions.find(q=>q.id===30).evidenceParagraphs,[2,3]);
 assert.ok(p2.evidenceRu[28].wrong.some(p=>p.includes('сама форма placing не запрещена')));
 assert.ok(p2.evidenceRu[25].rule.includes('не запрещено грамматически вообще'));
});

test('Practice 2 lecture pairs English and Russian explanations without losing examples',()=>{
 assert.equal(p2.lecture.length,10);assert.equal(p2.lectureRu.length,10);
 p2.lecture.forEach((en,i)=>{const ru=p2.lectureRu[i];assert.ok(en.en.length>100);assert.ok(en.example.length>50);assert.ok(ru.explain.length>=2);assert.ok(ru.examples.length>=2);assert.ok(ru.formula.length>30);assert.ok(ru.notebook.length>50);for(const pair of ru.examples){assert.equal(pair.length,2);assert.ok(/[А-Яа-я]/u.test(pair[1]));}});
});

test('shared English scorer distinguishes correct, incorrect, and unanswered attempts',()=>{
 for(const config of [p1,p2]){const qs=config.questions;const full=Object.fromEntries(qs.map(q=>[q.id,q.key]));assert.equal(englishPracticeResult(qs,full).correct,15);assert.equal(englishPracticeResult(qs,full).percent,100);const blank=englishPracticeResult(qs,{});assert.equal(blank.correct,0);assert.equal(blank.unanswered,15);const mixed={[qs[0].id]:qs[0].key,[qs[1].id]:qs[1].choices.find(c=>c.label!==qs[1].key).label};const r=englishPracticeResult(qs,mixed);assert.equal(r.correct,1);assert.equal(r.incorrect,1);assert.equal(r.unanswered,13);assert.equal(r.percent,7);assert.equal(r.missed.length,14);}
});

test('Practice 1 retains its saved key and Practice 2 uses a separate validated attempt',()=>{
 assert.equal(p1.storageKey,'act-space-practice-1-english-v1');assert.equal(p2.storageKey,'act-space-practice-2-english-v1');assert.notEqual(p1.storageKey,p2.storageKey);
 const saved={answers:{16:'G',17:'A',18:'Z',1:'B',30:2},submitted:true};
 const restored=restoreEnglishAttempt(JSON.parse(JSON.stringify(saved)),p2.questions);assert.deepEqual(restored,{answers:{16:'G',17:'A'},submitted:true});
 assert.deepEqual(restoreEnglishAttempt(saved,p1.questions),{answers:{1:'B'},submitted:true});
 assert.deepEqual(restoreEnglishAttempt(null,p2.questions),{answers:{},submitted:false});
 assert.deepEqual(restoreEnglishAttempt({submitted:'true'},p2.questions),{answers:{},submitted:false});
});
