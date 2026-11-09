import test from 'node:test';
import assert from 'node:assert/strict';
import {mathQuestions as qs,mathStorageKey} from '../content/practice-2/math.mjs';
import {mathLecture} from '../content/practice-2/math-lecture.mjs';
import {mathLabel} from '../content/practice-2/math-notation.mjs';
import {bookVotes,pieSlices,parallelLines,squareCircle,boxDimensions} from '../content/practice-2/math-geometry.mjs';
import {englishTest} from '../content/practice-2/english-test.mjs';
import {readingTest} from '../content/practice-2/reading-test.mjs';
import {restoreEnglishAttempt,englishPracticeResult} from '../lib/english-practice.mjs';

test('Math 2 preserves the supplied key and unusual odd/even choice labels',()=>{
 assert.deepEqual(qs.map(q=>q.id),Array.from({length:15},(_,i)=>i+1));
 assert.deepEqual(qs.map(q=>q.key),['J','B','F','D','G','B','K','C','J','D','J','E','K','E','F']);
 for(const q of qs){assert.deepEqual(q.choices.map(c=>c.label),[...(q.id%2?'FGHJK':'ABCDE')]);assert.equal(q.choices.filter(c=>c.label===q.key).length,1);assert.equal(new Set(q.choices.map(c=>JSON.stringify(c.content))).size,5);}
});

test('numeric results independently solve all supplied problems',()=>{
 const sums=new Set();for(let a=-36;a<=36;a++)for(let b=-36;b<=36;b++)if(a*b+4===40)sums.add(a+b);
 assert.deepEqual([12,13,15,18,20].map(n=>sums.has(n)),[true,true,true,false,true]);
 const roots=[];for(let t=-20;t<=20;t++)if(t*t-6*t+8===0)roots.push(t);assert.equal(Math.max(...roots)-Math.min(...roots),2);
 const {width,depth,height}=boxDimensions;assert.equal(width*depth*height,135);assert.equal(Math.max(width*depth,width*height,depth*height),45);
 const intersections=[];for(let x=-10;x<=12;x++)for(let y=-10;y<=12;y++)if(3*x+2*y===-2&&5*x-y===14)intersections.push([x,y]);assert.deepEqual(intersections,[[2,-4]]);
 for(const [x,y,z] of [[2,3,5],[-2,3,-1],[1,-2,3],[0,4,1],[4,0,3]])assert.ok(12*x**2*y**3*z**4-30*x*y**2+24*x**2*y**5*z===6*x*y**2*(2*x*y*z**4-5+4*x*y**3*z));
 const side=Math.sqrt(100),radius=side/2;assert.equal(radius**2/2,25/2);
 for(const minutes of [1001,1200,2500])assert.equal(50+0.25*(minutes-1000),0.25*minutes-200);
 assert.equal(2*1-2,0);assert.equal(2*3-2,4);
 const percent=name=>bookVotes.find(x=>x.name===name).percent;
 assert.equal(percent('Toni Morrison')+percent('John Steinbeck'),30);assert.equal(260*percent('Cormac McCarthy')/100,39);
 const a=300,k=450;assert.equal(a-150,k/3);assert.equal(2*k,3*a);assert.equal(a+k,750);
 for(let x=-20;x<=20;x+=0.25)assert.equal(Math.abs(2*x+7)>11,x<-9||x>2);
 assert.ok(Math.abs(Math.hypot(1-(-2),-2-4)**2-45)<1e-12);assert.ok(Math.abs(Math.hypot(3,6)-3*Math.sqrt(5))<1e-12);
 const logX=5**2;assert.equal(Math.log(logX)/Math.log(5),2);assert.equal(Math.sqrt(logX),5);
});

test('parallel figure satisfies four angle sums and exposes the unsupported fifth',()=>{
 const g=parallelLines;
 const deg=r=>r*180/Math.PI;
 const r=deg(Math.atan2(g.crossing[1]-g.leftLower[1],g.crossing[0]-g.leftLower[0]));
 const s=deg(Math.atan2(g.crossing[1]-g.rightLower[1],g.rightLower[0]-g.crossing[0]));
 const t=180-r-s,p=180-r,q=180-s,u=180-t;
 for(const sum of [p+r,q+s,r+s+t,t+u])assert.ok(Math.abs(sum-180)<1e-10);
 assert.ok(Math.abs(p+t-180)>1);
 const slope=(a,b)=>(b[1]-a[1])/(b[0]-a[0]);
 assert.equal(slope(g.leftUpper,g.leftLower),slope(g.leftLower,g.crossing));
 assert.equal(slope(g.rightUpper,g.rightLower),slope(g.rightLower,g.crossing));
});

test('circle geometry and vote-sector geometry retain exact proportions',()=>{
 const g=squareCircle;assert.equal(2*g.r,g.side);assert.equal(g.cx,g.left+g.side);assert.equal(g.cy,g.top+g.r);assert.ok(g.cx-g.r>=g.left);
 assert.equal(bookVotes.reduce((sum,x)=>sum+x.percent,0),100);
 assert.deepEqual(pieSlices().map(x=>Math.round(x.end-x.start)),[72,144,36,54,54]);
 assert.equal(pieSlices()[0].start,-90);assert.equal(pieSlices().at(-1).end,270);
});

test('notation stays structural through questions, solutions and lecture',()=>{
 const counts={frac:0,power:0,root:0,sub:0};
 function walk(value){if(Array.isArray(value)){value.forEach(walk);return}if(value&&typeof value==='object'){if(value.kind){assert.ok(mathLabel(value).length);if(value.kind in counts)counts[value.kind]++;if(value.kind==='frac'){assert.notEqual(value.top,'');assert.notEqual(value.bottom,'')}if(['power','sub'].includes(value.kind))assert.notEqual(value.base,'');}Object.values(value).forEach(walk);}}
 walk(qs);walk(mathLecture);
 assert.ok(counts.frac>=20);assert.ok(counts.power>=40);assert.ok(counts.root>=15);assert.ok(counts.sub>=5);
 const q7=qs[6].choices.find(c=>c.label==='K').content[0];assert.equal(q7.kind,'frac');assert.equal(q7.bottom,2);
 assert.equal(qs[11].prompt.find(x=>x?.kind==='frac').bottom,3);
 const solutionFractions=JSON.stringify(qs.flatMap(q=>q.steps)).match(/"kind":"frac"/g);assert.ok(solutionFractions.length>=10);
 for(const q of qs){assert.ok(q.given.length);assert.ok(q.rule.length);assert.ok(q.steps.length>=2);assert.ok(q.check.length);assert.ok(q.mistake.length);assert.ok(mathLecture.some(l=>l.questions.includes(q.id)));}
 for(const l of mathLecture){assert.ok(l.lesson.length>=2);assert.ok(l.example.length);assert.ok(l.note);assert.ok(l.task.length);assert.ok(l.answer.length);}
});

test('Math 2 grading and persistence are isolated and the section is linked',()=>{
 assert.equal(new Set([mathStorageKey,englishTest.storageKey,readingTest.storageKey,'act-space-practice-1-math-v1']).size,4);
 for(const config of [englishTest,readingTest])assert.equal(config.nav.find(x=>x.label==='Mathematics').href,'/lessons/practice-2/math');
 const full=Object.fromEntries(qs.map(q=>[q.id,q.key]));assert.equal(englishPracticeResult(qs,full).correct,15);assert.equal(englishPracticeResult(qs,full).percent,100);
 const mixed=englishPracticeResult(qs,{1:'J',2:'A'});assert.equal(mixed.correct,1);assert.equal(mixed.incorrect,1);assert.equal(mixed.unanswered,13);
 assert.deepEqual(restoreEnglishAttempt({answers:{1:'J',2:'Z',16:'G'},submitted:true},qs),{answers:{1:'J'},submitted:true});
});
