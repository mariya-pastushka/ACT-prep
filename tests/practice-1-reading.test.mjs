import test from 'node:test';
import assert from 'node:assert/strict';
import {readingTest as p1} from '../content/practice-1/reading-test.mjs';
import {readingTest as p2} from '../content/practice-2/reading-test.mjs';
import {englishTest} from '../content/practice-1/english-test.mjs';
import {englishPracticeResult,restoreEnglishAttempt} from '../lib/english-practice.mjs';

test('Reading 1 preserves every supplied key and the complete four-choice structure',()=>{
 assert.deepEqual(p1.questions.map(q=>q.id),[1,2,3,4,5,6,7,8,9,10]);
 assert.deepEqual(p1.questions.map(q=>q.key),['C','J','A','J','B','G','D','F','C','G']);
 for(const q of p1.questions){assert.deepEqual(q.choices.map(c=>c.label),[...(q.id%2?'ABCD':'FGHJ')]);assert.equal(q.choices.filter(c=>c.label===q.key).length,1);assert.equal(new Set(q.choices.map(c=>c.text)).size,4);}
 assert.equal(p1.questions[9].choices.find(c=>c.label==='G').text,'often partly sung with vibrato.');
 assert.equal(p1.questions[7].choices.find(c=>c.label==='F').text,'vulnerable to ridicule.');
});

test('the complete fiction transcript retains 13 paragraphs, all 87 source lines and attribution',()=>{
 const p=p1.passage;assert.equal(p.title,'A Well-Worn Jacket');assert.ok(p.attribution.includes('Antonia Duke (© 2008 by Antonia Duke)'));
 assert.equal(p.paragraphs.length,13);assert.deepEqual(p.sourceLines.map(l=>l.number),Array.from({length:87},(_,i)=>i+1));
 assert.equal(p.sourceLines.find(l=>l.number===29).text,'But not this year. Monique had decided to make a show');
 p.lineRanges.forEach((range,i)=>{if(i)assert.equal(range.from,p.lineRanges[i-1].to+1);assert.equal(p.paragraphs[i],p.sourceLines.filter(l=>l.number>=range.from&&l.number<=range.to).map(l=>l.text+l.joinAfter).join(''));});
 assert.equal(p.lineRanges.at(-1).to,87);
 const text=p.paragraphs.join(' ');
 for(const word of ['commencing','nervously','Dominguez','monarch','Thornton','scurried','malicious','Spangled','formulaic','methodically','climactic','self-confidence','death-row','shoo-in','caramel-colored'])assert.ok(text.includes(word),word);
 assert.ok(text.endsWith('from the herd.'));assert.ok(!text.includes('Prep for Tests'));
});

test('every evidence quotation occurs within its linked source ranges',()=>{
 for(const q of p1.questions){
  for(const [from,to] of q.evidenceLines)assert.ok(from>=1&&from<=to&&to<=87);
  const cited=p1.passage.sourceLines.filter(l=>q.evidenceLines.some(([from,to])=>l.number>=from&&l.number<=to)).map(l=>l.text+l.joinAfter).join('').toLowerCase();
  const quotes=[...q.evidence.matchAll(/“([^”]+)”/g)].map(m=>m[1]);assert.ok(quotes.length);
  for(const quote of quotes)assert.ok(cited.includes(quote.toLowerCase()),q.id+': '+quote);
 }
});

test('the bilingual teaching blocks preserve the key distinctions behind the answers',()=>{
 for(const q of p1.questions){assert.equal(q.explanation.length,3);assert.ok(q.explanation.every(s=>s.length>90));const ru=p1.evidenceRu[q.id];assert.ok(ru.quote);assert.equal(ru.steps.length,3);assert.ok(ru.rule);assert.equal(ru.example.length,2);assert.ok(/[А-Яа-я]/u.test(ru.example[1]));assert.equal(ru.wrong.length,3);assert.ok(ru.remember);}
 assert.ok(p1.evidenceRu[3].rule.includes('finish'));assert.ok(p1.evidenceRu[8].steps.some(s=>s.includes('Mrs. Dominguez')));assert.ok(p1.evidenceRu[10].rule.includes('other singers'));
 assert.equal(p1.lecture.length,7);assert.equal(p1.lectureRu.length,7);
 p1.lectureRu.forEach((ru,i)=>{assert.ok(p1.lecture[i].en);assert.ok(p1.lecture[i].example);assert.ok(ru.explain.length>=2);assert.ok(ru.formula);assert.ok(ru.examples.length>=2);assert.ok(ru.examples.every(pair=>pair.length===2));assert.ok(ru.notebook);});
});

test('vocabulary comes from the actual passage and exercises provide complete bilingual situations',()=>{
 const notebook=p1.readingNotebook;assert.equal(notebook.vocabulary.length,12);assert.equal(notebook.exercises.length,3);
 for(const item of notebook.vocabulary){const source=p1.passage.sourceLines.filter(l=>l.number>=item.from&&l.number<=item.to).map(l=>l.text+l.joinAfter).join('');assert.ok(source.includes(item.context),item.word);for(const field of ['word','meaning','contextRu','example','exampleRu'])assert.ok(item[field]);}
 for(const ex of notebook.exercises)for(const field of ['en','ru','answerEn','answerRu'])assert.ok(ex[field]);
 assert.ok(notebook.exercises[0].ru.includes('Lena'));assert.ok(notebook.exercises[2].ru.includes('песню'));
});

test('the new Reading section saves independently and grades correct, incorrect and blank answers',()=>{
 assert.equal(p1.storageKey,'act-space-practice-1-reading-v1');
 assert.equal(new Set([p1.storageKey,p2.storageKey,englishTest.storageKey,'act-space-practice-1-math-v1','act-space-practice-1-science-v1']).size,5);
 assert.equal(englishTest.nav.find(x=>x.label==='Reading').href,'/lessons/practice-1/reading');assert.equal(p1.nav.find(x=>x.label==='Reading').current,true);assert.ok(p1.nav.every(x=>!x.disabled));
 const qs=p1.questions,full=Object.fromEntries(qs.map(q=>[q.id,q.key]));assert.equal(englishPracticeResult(qs,full).correct,10);assert.equal(englishPracticeResult(qs,full).percent,100);
 const mixed=englishPracticeResult(qs,{1:'C',2:'J',3:'D'});assert.equal(mixed.correct,2);assert.equal(mixed.incorrect,1);assert.equal(mixed.unanswered,7);
 assert.equal(englishPracticeResult(qs,{}).unanswered,10);
 assert.deepEqual(restoreEnglishAttempt({answers:{1:'C',2:'Z',11:'A'},submitted:true},qs),{answers:{1:'C'},submitted:true});
});
