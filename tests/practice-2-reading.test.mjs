import test from 'node:test';
import assert from 'node:assert/strict';
import {readingTest as reading} from '../content/practice-2/reading-test.mjs';
import {englishTest as english2} from '../content/practice-2/english-test.mjs';
import {englishTest as english1} from '../content/practice-1/english-test.mjs';
import {englishPracticeResult,restoreEnglishAttempt} from '../lib/english-practice.mjs';

test('Practice 2 Reading preserves all ten supplied keys, choices, and labels',()=>{
 assert.equal(reading.sectionLabel,'Reading');assert.equal(reading.questions.length,10);
 assert.deepEqual(reading.questions.map(q=>q.id),[1,2,3,4,5,6,7,8,9,10]);
 assert.deepEqual(reading.questions.map(q=>q.key),['C','G','A','G','C','G','D','H','D','F']);
 for(const q of reading.questions){assert.equal(q.choices.length,4);assert.deepEqual(q.choices.map(c=>c.label),[...(q.id%2?'ABCD':'FGHJ')]);assert.equal(q.choices.filter(c=>c.label===q.key).length,1);assert.ok(q.prompt.length>50);}
 assert.equal(reading.questions[4].choices.find(c=>c.label==='C').text,'unusual.');
 assert.equal(reading.questions[7].choices.find(c=>c.label==='H').text,'more powerful computers.');
});

test('source transcript preserves fourteen paragraphs, all 87 line IDs, and attribution',()=>{
 const p=reading.passage;assert.equal(p.paragraphs.length,14);assert.equal(p.sourceLines.length,87);
 assert.deepEqual(p.sourceLines.map(l=>l.number),Array.from({length:87},(_,i)=>i+1));
 assert.ok(p.attribution.includes('Cal Jergenson (© 2005 by Cal Jergenson)'));
 assert.equal(p.lineRanges[0].from,1);assert.equal(p.lineRanges.at(-1).to,87);
 p.lineRanges.forEach((range,i)=>{if(i)assert.equal(range.from,p.lineRanges[i-1].to+1);assert.equal(p.paragraphs[i],p.sourceLines.filter(l=>l.number>=range.from&&l.number<=range.to).map(l=>l.text+l.joinAfter).join(''));});
 const source=p.paragraphs.join(' ');
 for(const phrase of ['simple in function','each technology','periodic table','tool-making instinct','existing product','human problem-solvers','culture completely','communicate the state','rewind'])assert.ok(source.includes(phrase),phrase);
 assert.ok(p.sourceLines.find(l=>l.number===79).text.includes('alien'));
 assert.ok(p.sourceLines.find(l=>l.number===85).text.includes('status quo'));
 assert.ok(source.endsWith('on the remote control.'));
});

test('every quoted evidence excerpt exists in the transcript and all references are valid',()=>{
 const source=reading.passage.paragraphs.join(' ').toLowerCase();
 for(const q of reading.questions){
  assert.ok(q.evidenceLines.length>=1,q.id);
  for(const [from,to] of q.evidenceLines)assert.ok(from>=1&&from<=to&&to<=87,q.id+':'+from);
  const quotes=[...q.evidence.matchAll(/“([^”]+)”/g)].map(m=>m[1]);assert.ok(quotes.length>=1,q.id);
  for(const quote of quotes)for(const part of quote.split('…').map(p=>p.trim()).filter(Boolean))assert.ok(source.includes(part.toLowerCase()),q.id+': '+part);
 }
});

test('each question has simple English blocks and a structured Russian explanation',()=>{
 assert.equal(Object.keys(reading.evidenceRu).length,10);
 for(const q of reading.questions){assert.equal(q.explanation.length,3);assert.ok(q.explanation.every(p=>p.length>80));const r=reading.evidenceRu[q.id];assert.ok(r.quote.length>50);assert.equal(r.steps.length,3);assert.ok(r.rule.length>50);assert.equal(r.example.length,2);assert.ok(/[А-Яа-я]/u.test(r.example[1]));assert.ok(r.wrong.length>=1);assert.ok(r.remember.length>40);}
 assert.equal(reading.lecture.length,8);assert.equal(reading.lectureRu.length,8);
 reading.lectureRu.forEach((ru,i)=>{assert.ok(reading.lecture[i].en.length>120);assert.ok(ru.explain.length>=2);assert.ok(ru.examples.length>=2);assert.ok(ru.notebook.length>40);});
});

test('Reading grades correct, wrong, and blank answers without scaled ACT predictions',()=>{
 const qs=reading.questions;const full=Object.fromEntries(qs.map(q=>[q.id,q.key]));const perfect=englishPracticeResult(qs,full);assert.equal(perfect.correct,10);assert.equal(perfect.percent,100);
 const blank=englishPracticeResult(qs,{});assert.equal(blank.correct,0);assert.equal(blank.unanswered,10);
 const mixed=englishPracticeResult(qs,{1:'C',2:'G',3:'B'});assert.equal(mixed.correct,2);assert.equal(mixed.incorrect,1);assert.equal(mixed.unanswered,7);assert.equal(mixed.percent,20);
 const restored=restoreEnglishAttempt(JSON.parse(JSON.stringify({answers:{1:'C',2:'G',3:'Z',4:2},submitted:true})),qs);assert.deepEqual(restored,{answers:{1:'C',2:'G'},submitted:true});
});

test('Reading sections have separate routes and the Practice 2 attempt remains independent',()=>{
 assert.equal(english2.nav.find(n=>n.label==='Reading').href,'/lessons/practice-2/reading');
 assert.equal(english1.nav.find(n=>n.label==='Reading').href,'/lessons/practice-1/reading');
 assert.equal(reading.nav.find(n=>n.label==='Reading').current,true);
 assert.equal(reading.nav.find(n=>n.label==='English').href,'/lessons/practice-2');
 assert.equal(new Set([english1.storageKey,english2.storageKey,reading.storageKey]).size,3);
 assert.equal(reading.storageKey,'act-space-practice-2-reading-v1');
});
