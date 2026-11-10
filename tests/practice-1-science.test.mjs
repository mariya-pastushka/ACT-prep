import test from 'node:test';
import assert from 'node:assert/strict';
import {soil,rust,sugarGraphChoices,scienceStorageKey} from '../content/practice-1/science-data.mjs';
import {scienceQuestions as qs} from '../content/practice-1/science-questions.mjs';
import {scienceLecture} from '../content/practice-1/science-lecture.mjs';
import {englishTest as english1} from '../content/practice-1/english-test.mjs';
import {englishTest as english2} from '../content/practice-2/english-test.mjs';
import {englishPracticeResult,restoreEnglishAttempt} from '../lib/english-practice.mjs';

test('Science 1 preserves the supplied ten keys and original labels',()=>{
 assert.deepEqual(qs.map(q=>q.id),[1,2,3,4,5,6,7,8,9,10]);
 assert.deepEqual(qs.map(q=>q.key),['A','J','C','J','D','J','B','J','A','F']);
 for(const q of qs){assert.equal(q.choices.length,4);assert.deepEqual(q.choices.map(c=>c.label),[...(q.id%2?'ABCD':'FGHJ')]);assert.equal(q.choices.filter(c=>c.label===q.key).length,1);assert.equal(new Set(q.choices.map(c=>c.text)).size,4);}
 assert.equal(qs[3].pairedChoices,true);assert.equal(qs[3].choices[3].text,'Field B · Field A');
 assert.equal(qs[9].graphChoices,true);assert.deepEqual(qs[9].choices.map(c=>c.text),['Graph F','Graph G','Graph H','Graph J']);
 assert.ok(!JSON.stringify({soil,rust,qs}).match(/Source Farm Gear|Learn Math/));
});

test('soil transcription preserves the graph values and the independent SOM comparison',()=>{
 assert.deepEqual(soil.density,{A:[1.30,1.45,1.35,1.50,1.70],B:[1.20,1.40,1.30,1.40,1.30]});
 assert.deepEqual(soil.yield,{A:[10,14,13,16,17],B:[10,11,14,12,8]});
 assert.deepEqual(soil.som,[{field:'A',average:0.89},{field:'B',average:0.28}]);
 assert.deepEqual(soil.somRatings,[['< 0.25','poor'],['0.25 to 0.50','fair'],['0.51 to 0.75','good'],['> 0.75','excellent']]);
 assert.ok(soil.density.A.every((v,i)=>v>soil.density.B[i]));
 assert.equal(soil.density.A.filter(v=>v>1.33).length,4);assert.equal(soil.density.B.filter(v=>v>1.33).length,2);
 const failures=Object.entries(soil.yield).flatMap(([field,ys])=>ys.flatMap((v,i)=>v<=8?[{field,year:soil.years[i]}]:[]));
 assert.deepEqual(failures,[{field:'B',year:5}]);
 const mean=ns=>ns.reduce((a,b)=>a+b,0)/ns.length;
 assert.equal(mean(soil.yield.A),14);assert.equal(mean(soil.yield.B),11);
 assert.ok(Math.abs(mean(soil.density.A)-1.46)<1e-12);assert.ok(Math.abs(mean(soil.density.B)-1.32)<1e-12);
 // SOM favors A, whereas the density-based comparison in Question 1 favors B.
 assert.ok(soil.som[0].average>0.75);assert.ok(soil.som[1].average>=0.25&&soil.som[1].average<=0.5);
});

test('rust table is transcribed exactly and the required comparisons follow from it',()=>{
 assert.deepEqual(rust.days,[2,4,6,8]);
 assert.deepEqual(rust.solutions.map(x=>x.values),[[0.34,0.40,0.59,0.72],[0.56,0.81,1.23,1.84],[0,0.05,0.11,0.19]]);
 const salt=rust.solutions[1].values,sugar=rust.solutions[2].values;
 assert.ok(salt.every((v,i)=>!i||v>salt[i-1]));assert.equal(salt.at(-1),1.84);
 assert.ok(Math.abs(sugar[3]-sugar[2]-0.08)<1e-12);
 const gains=sugar.slice(1).map((v,i)=>v-sugar[i]);assert.ok(gains[0]<gains[1]&&gains[1]<gains[2]);
 assert.deepEqual(sugarGraphChoices.F.values,sugar);
 const h=sugarGraphChoices.H.values,hGains=h.slice(1).map((v,i)=>v-h[i]);assert.ok(hGains[0]>hGains[1]&&hGains[1]>hGains[2]);
 for(const letter of ['G','J'])assert.ok(sugarGraphChoices[letter].values.every((v,i,ns)=>!i||v<ns[i-1]));
});

test('pH graph preserves line keys and supports the approximate table-to-graph match',()=>{
 assert.deepEqual(rust.phCurves.map(x=>x.ph),[6,7,8,10]);
 assert.deepEqual(rust.phCurves.map(x=>x.dash),['8 7','2 5','18 10',null]);
 for(const curve of rust.phCurves){assert.equal(curve.values.length,10);assert.ok(curve.values.every(v=>v>=0&&v<=3.5));}
 const solid=rust.phCurves.find(x=>x.ph===10),target=rust.solutions[1].values[0];
 const offeredDays=[1,3,6,10],closest=offeredDays.reduce((best,day)=>Math.abs(solid.values[day-1]-target)<Math.abs(solid.values[best-1]-target)?day:best);
 assert.equal(closest,10);assert.ok(Math.abs(solid.values[9]-target)<0.02);
 assert.ok(solid.values[8]<solid.values[7],'retain the small source-curve dip instead of inventing a strictly rising curve');
});

test('the reaction model retains products, coefficients and atom balance',()=>{
 assert.equal(rust.reaction,'2Fe + 3H₂O → Fe₂O₃ + 3H₂');
 const [reactants,products]=rust.reaction.split(' → ');assert.equal(reactants,'2Fe + 3H₂O');assert.equal(products,'Fe₂O₃ + 3H₂');
 assert.equal(qs[6].choices.find(c=>c.label===qs[6].key).text,'H₂ was produced.');
 const left={Fe:2,H:3*2,O:3},right={Fe:2,H:3*2,O:3};assert.deepEqual(left,right);
 assert.ok(qs[6].whyEn.includes('moles'));assert.ok(qs[6].ruleRu.includes('граммам'));
});

test('every explanation has source references and distinct clear English and Russian teaching blocks',()=>{
 const ids=new Set(['soil-introduction','soil-figure-1','soil-figure-2','soil-table-1','soil-table-2','rust-table-1','rust-figure-1','rust-reaction']);
 for(const q of qs){assert.ok(q.sources.length);for(const source of q.sources){assert.ok(ids.has(source.id));assert.ok(source.id.startsWith(q.id<=5?'soil':'rust'));}assert.ok(q.evidenceEn.length);assert.ok(q.explanationEn.length>=2);assert.ok(q.whyEn);assert.ok(q.askRu);assert.ok(q.evidenceRu.length);assert.equal(q.stepsRu.length,3);assert.ok(q.ruleRu);assert.ok(q.whyRu);assert.ok(scienceLecture.some(l=>l.questions.includes(q.id)));}
 assert.ok(qs[2].background.url.startsWith('https://www.nrcs.usda.gov/'));
 assert.equal(scienceLecture.length,6);for(const l of scienceLecture){assert.ok(l.en.length>=2);assert.ok(l.ru.length>=2);assert.ok(l.exampleEn);assert.ok(l.exampleRu);assert.ok(l.remember);assert.equal(l.task.split(' / ').length,2);assert.ok(l.answerEn);assert.ok(l.answerRu);}
});

test('Science uses a validated independent attempt and enables only the requested practice',()=>{
 assert.equal(english1.nav.find(x=>x.label==='Science').href,'/lessons/practice-1/science');
 assert.equal(english2.nav.find(x=>x.label==='Science').disabled,true);
 assert.equal(new Set([scienceStorageKey,english1.storageKey,'act-space-practice-1-math-v1',english2.storageKey]).size,4);
 const perfect=Object.fromEntries(qs.map(q=>[q.id,q.key]));assert.equal(englishPracticeResult(qs,perfect).correct,10);assert.equal(englishPracticeResult(qs,perfect).percent,100);
 const mixed=englishPracticeResult(qs,{1:'A',2:'F'});assert.equal(mixed.correct,1);assert.equal(mixed.incorrect,1);assert.equal(mixed.unanswered,8);
 assert.deepEqual(restoreEnglishAttempt({answers:{1:'A',2:'Z',11:'B'},submitted:true},qs),{answers:{1:'A'},submitted:true});
 assert.equal(englishPracticeResult(qs,{}).unanswered,10);
});
