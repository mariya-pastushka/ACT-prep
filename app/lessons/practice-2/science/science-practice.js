'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {scienceStorageKey,legacyScienceStorageKey,springsPassage as passage,trialData,scienceFigures,singleSpringOptions} from '../../../../content/practice-2/science-data.mjs';
import {deicerPassage,mixtureData,temperatureData,deicerGraph} from '../../../../content/practice-2/deicer-data.mjs';
import {scienceQuestions as questions} from '../../../../content/practice-2/science-questions.mjs';
import {scienceLecture,scienceVocabulary} from '../../../../content/practice-2/science-lecture.mjs';
import {englishPracticeResult} from '../../../../lib/english-practice.mjs';
import {restoreScienceProgress} from '../../../../lib/practice-2-science.mjs';
import MathNotation from '../math/notation';
import SourceFigure,{SourcePixels} from './source-figure';
import styles from '../../trial/trial.module.css';
import shared from '../../practice-1/practice.module.css';
import base from '../../practice-1/science/science.module.css';
import css from './science.module.css';
const initial=()=>({answers:{},submitted:false});
function translateWords(value){
 if(Array.isArray(value))return value.map(translateWords);
 if(!value||typeof value!=='object')return value;
 if(value.kind==='words'){const terms={' m':' м',' N':' Н',' g':' г',' g/s':' г/с','board weight':'вес доски','placed weight':'вес груза','total weight':'общий вес','V(total)':'V(смеси)'};return {...value,value:terms[value.value]||value.value};}
 return Object.fromEntries(Object.entries(value).map(([key,child])=>[key,translateWords(child)]));
}
function Formula({value,ru=false}){return <div className={css.calculation}><MathNotation value={ru?translateWords(value):value} display/></div>}
function Calculations({question,ru=false}){return question.calculations?.map((item,i)=><div key={i}><h4>{ru?item.ru:item.en}</h4>{item.math.map((value,j)=><Formula value={value} ru={ru} key={j}/>)}</div>)}
function TrialValues({experiment}){return <details className={css.dataDetails}><summary>Read the printed measurements as a table</summary><div className={base.tableWrap}><table className={`${base.table} ${css.trialValues}`}>
 <thead><tr><th>Trial</th>{experiment===1?<><th>Weight (N)</th><th>A length (m)</th><th>B length (m)</th></>:<><th>From B (m)</th><th>B length (m)</th><th>C length (m)</th></>}</tr></thead>
 <tbody>{trialData.filter(t=>t.experiment===experiment).map(t=><tr key={t.id}><th>{t.id}</th>{experiment===1?<><td>{t.weight.toFixed(1)}</td><td>{t.A.toFixed(2)}</td><td>{t.B.toFixed(2)}</td></>:<><td>{t.positionFromB.toFixed(3)}</td><td>{t.B.toFixed(2)}</td><td>{t.C.toFixed(2)}</td></>}</tr>)}</tbody>
 </table></div></details>}
function SpringsPassage(){return <section className={`${base.dataBlock} ${css.passage}`} aria-labelledby="springs-title">
 <span className="eyebrow">PASSAGE 1 · QUESTIONS 1–6</span><h2 id="springs-title" className={css.anchor}>{passage.title}</h2>
 <p>{passage.introduction}</p><SourceFigure name="figure1" id="springs-figure-1"/>
 <p id="springs-principle" className={css.anchor}>{passage.principle}</p>
 <h3 className={css.experimentTitle}>Experiment 1</h3><p id="springs-experiment-1" className={css.anchor}>{passage.experiment1}</p><SourceFigure name="figure2" id="springs-figure-2"/><TrialValues experiment={1}/>
 <h3 className={css.experimentTitle}>Experiment 2</h3><p>{passage.experiment2}</p><SourceFigure name="figure3" id="springs-figure-3"/>
 <p>{passage.experiment2Trials}</p><SourceFigure name="figure4" id="springs-figure-4"/><TrialValues experiment={2}/>
 <p className={css.tableHint}>Use the printed measurements. Enlarge any figure to inspect its original labels.</p>
 </section>}
function DeicerPassage(){return <section className={`${base.dataBlock} ${css.passage}`} aria-labelledby="deicer-title">
 <span className="eyebrow">PASSAGE 2 · QUESTIONS 7–12</span><h2 id="deicer-title" className={css.anchor}>{deicerPassage.title}</h2>
 <p id="deicer-introduction" className={css.anchor}>{deicerPassage.introduction}</p><p>{deicerPassage.proportions}</p>
 <div id="deicer-table-1" className={`${base.tableCard} ${css.anchor}`}><h3 className={base.sourceTitle}>Table 1 · Mixture proportions</h3><div className={base.tableWrap}>
  <table className={`${base.table} ${css.deicerTable}`} aria-label="De-icing Table 1: mixture proportions"><colgroup><col style={{width:'24%'}}/><col/><col/></colgroup>
   <thead><tr><th scope="col">De-icer proof</th><th scope="col">Volume of distilled water</th><th scope="col">Volume of sodium chloride</th></tr></thead>
   <tbody>{mixtureData.map(row=><tr key={row.proof}><th scope="row">{row.proof}</th><td>{row.water} mL</td><td>{row.sodium} mL</td></tr>)}</tbody>
  </table>
 </div></div>
 <h3 className={css.experimentTitle}>Experiment 1</h3><p id="deicer-experiment-1" className={css.anchor}>{deicerPassage.experiment1}</p>
 <h3 className={css.experimentTitle}>Experiment 2</h3><p id="deicer-experiment-2" className={css.anchor}>{deicerPassage.experiment2}</p>
 <SourceFigure name="deicerFigure1" id="deicer-figure-1"/><p className={css.tableHint}>The vertical axis begins at {deicerGraph.yRange[0]}. Values read from the curve are approximate.</p>
 <h3 className={css.experimentTitle}>Experiment 3</h3><p id="deicer-experiment-3" className={css.anchor}>{deicerPassage.experiment3}</p>
 <div id="deicer-table-2" className={`${base.tableCard} ${css.anchor}`}><h3 className={base.sourceTitle}>Table 2 · Temperature rating and de-icer proof</h3><div className={base.tableWrap}>
  <table className={`${base.table} ${css.deicerTable}`} aria-label="De-icing Table 2: temperature rating and proof"><colgroup><col style={{width:'30%'}}/><col style={{width:'16%'}}/><col/><col/></colgroup>
   <thead><tr><th scope="col" rowSpan={2}>Freezer temperature</th><th scope="col" rowSpan={2}>TR</th><th colSpan={2}>Proof of:</th></tr><tr><th scope="col">De-icer A</th><th scope="col">De-icer B</th></tr></thead>
   <tbody>{temperatureData.map(row=><tr key={row.temperature}><th scope="row">−{Math.abs(row.temperature)}°C</th><td>{row.tr.toFixed(1)}</td><td>{row.A.toFixed(1)}</td><td>{row.B.toFixed(1)}</td></tr>)}</tbody>
  </table>
 </div></div>
 </section>}
function SourceLinks({question}){return <div className={base.sourceLinks}>{question.sources.map(s=><a key={s.id} href={'#'+s.id}>{s.label} ↑</a>)}</div>}
function Explanation({question:q}){return <details className={styles.solution}>
 <summary>Why {q.key}? Evidence + explanation</summary><div className={base.english}>
  <h4>Evidence · where to look</h4><SourceLinks question={q}/><div className={base.evidence}><ul>{q.evidenceEn.map(p=><li key={p}>{p}</li>)}</ul></div>
  <h4>Reasoning · step by step</h4>{q.explanationEn.map(p=><p key={p}>{p}</p>)}<Calculations question={q}/>
  <h4>Check the other choices</h4><p>{q.whyEn}</p>
 </div>
 <details className={base.russian}><summary lang="ru">RU · Понятный разбор по шагам</summary><div lang="ru" className={shared.ruSupport}>
  <h4>1. Что спрашивают</h4><p>{q.askRu}</p>
  <h4>2. На какие данные опираемся</h4><SourceLinks question={q}/><div className={base.evidence}>{q.evidenceRu.map(p=><p key={p}>{p}</p>)}</div>
  <h4>3. Решаем по шагам</h4><ol className={css.steps}>{q.stepsRu.map(p=><li key={p}>{p}</li>)}</ol><Calculations question={q} ru/>
  <h4>4. Концепция простыми словами</h4><p>{q.ruleRu}</p>
  <h4>5. Почему не другие варианты</h4><p>{q.whyRu}</p>
  <a className={base.sourceLinks} href={'#science-2-theory-'+scienceLecture.findIndex(l=>l.questions.includes(q.id))}>Повторить концепцию в мини-лекции ↓</a>
 </div></details>
 </details>}
export default function SciencePractice(){
 const [data,setData]=useState(initial),[ready,setReady]=useState(false),[warning,setWarning]=useState(''),[confirm,setConfirm]=useState(''),[migrated,setMigrated]=useState(false);
 useEffect(()=>{
  try{
   const current=localStorage.getItem(scienceStorageKey);
   const legacy=current===null?localStorage.getItem(legacyScienceStorageKey):null;
   const restored=restoreScienceProgress(current===null?undefined:JSON.parse(current),legacy===null?undefined:JSON.parse(legacy),questions);
   setData(restored.attempt);setMigrated(restored.migrated);
  }catch{setWarning('Your saved Science draft could not be read. Keep this tab open while working.')}
  setReady(true);
 },[]);
 useEffect(()=>{if(!ready)return;try{localStorage.setItem(scienceStorageKey,JSON.stringify(data))}catch{setWarning('The latest answers could not be saved in this browser. Keep this tab open.')}},[data,ready]);
 const result=englishPracticeResult(questions,data.answers);
 function finish(){setData(d=>({...d,submitted:true}));setConfirm('');window.scrollTo({top:0,behavior:'instant'})}
 function reset(){setData(initial());setConfirm('');setMigrated(false);window.scrollTo({top:0,behavior:'instant'})}
 if(!ready)return <main className="wrap"><p role="status">Loading Practice 2 Science…</p></main>;
 return <div className={styles.lesson} lang="en">
 <header className="wrap nav"><Link href="/" className="brand"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="#a77abb" strokeWidth="1.7" aria-hidden="true"><path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M4.2 19.8L19.8 4.2"/></svg> ACT<span className="brand-light">space.</span></Link><Link href="/lessons">← Lessons</Link></header>
 <main className="wrap">
  <div className={styles.masthead}><span className="eyebrow">READ THE DATA · COMPARE · EXPLAIN</span><h1>Practice 2</h1><p>Science · Springs and de-icing</p><span className={styles.tag}>{questions.length} questions · English evidence + подробный разбор на русском</span></div>
  <nav className={styles.stages} aria-label="Practice sections"><Link className="nav-cta" href="/lessons/practice-2">English</Link><Link className="nav-cta" href="/lessons/practice-2/math">Mathematics</Link><Link className="nav-cta" href="/lessons/practice-2/reading">Reading</Link><button aria-current="page">Science</button></nav>
  <p className={base.instruction}>Read each passage with its own figures and tables, then choose one answer per question. Odd questions use A–D; even questions use F, G, H, J. Your answers are saved separately from the other sections.</p>
  <nav className={base.sourceNav} aria-label="Science passages"><a className="nav-cta" href="#springs-title">Forces and springs · Questions 1–6 ↓</a><a className="nav-cta" href="#deicer-title">De-icing mixtures · Questions 7–12 ↓</a></nav>
  {migrated&&!data.submitted&&<p className={styles.notice}>Your saved answers to Questions 1–6 are here. Complete Questions 7–12, then check the full 12-question test.</p>}
  {warning&&<p role="alert" className={styles.notice}>{warning}</p>}
  {data.submitted&&<><div className={styles.sectionResult} role="status"><strong>{result.correct} / {result.total}</strong><span>{result.percent}% correct · {result.incorrect} incorrect · {result.unanswered} unanswered<br/>Answers are locked. Open the evidence and the mini-lecture below.</span></div><div className={css.resultLinks}><a href="#science-2-lecture" className="nav-cta">Mini-lecture + vocabulary ↓</a>{result.missed.length>0&&<a className="nav-cta" href={'#science-2-question-'+result.missed[0].id}>First missed question ↓</a>}</div></>}
  {[{id:'springs',from:1,to:6},{id:'deicers',from:7,to:12}].map(group=><div key={group.id}>
  {group.id==='springs'?<SpringsPassage/>:<DeicerPassage/>}
  <section className={styles.questions} aria-label={`Practice 2 Science questions ${group.from}–${group.to}`}>
   {questions.filter(q=>q.id>=group.from&&q.id<=group.to).map(q=><article key={q.id} id={'science-2-question-'+q.id} className={`${styles.question} ${css.questionAnchor}`}>
    <fieldset disabled={data.submitted}><legend><span className={styles.questionId}>{q.id}.</span>{q.prompt}</legend>
     {q.pairedChoices&&<div className={base.pairHeader}><b>De-icer A</b><b>De-icer B</b></div>}
     {q.formulaChoices&&<p className={css.formulaHint}>Scroll sideways inside a long fraction to see the full expression.</p>}
     <div className={q.drawingChoices?css.drawingChoices:`${styles.choices} ${q.formulaChoices?css.formulaChoices:''}`}>{q.choices.map(c=><label key={c.label} className={`${styles.choice} ${q.drawingChoices?css.drawingChoice:''} ${data.answers[q.id]===c.label?styles.selected:''} ${data.submitted&&c.label===q.key?styles.correct:''}`}>
      <input type="radio" name={'practice-2-science-'+q.id} aria-label={q.drawingChoices?`${c.label}. Spring length ${c.text}`:q.pairedChoices?`${c.label}. De-icer A: ${c.text.split(' · ')[0]}; De-icer B: ${c.text.split(' · ')[1]}`:c.math?`${c.label}. ${c.text}`:undefined} checked={data.answers[q.id]===c.label} onChange={()=>setData(d=>({...d,answers:{...d.answers,[q.id]:c.label}}))}/>{!q.drawingChoices&&<b>{c.label}.</b>}
      {q.drawingChoices?<div className={css.drawingContent}><SourcePixels asset={scienceFigures.question1} crop={singleSpringOptions.find(option=>option.label===c.label).crop} alt={`Original answer drawing ${c.label}. One loaded spring, labeled length ${c.text}.`}/><span className={css.drawingValue}>Length: {c.text}</span></div>:q.pairedChoices?<span className={base.pairCells}>{c.text.split(' · ').map((value,i)=><span key={i}>{value}</span>)}</span>:c.math?<div className={css.formulaChoice}><Formula value={c.math}/></div>:<span>{c.text}</span>}
     </label>)}</div>
    </fieldset>
    {q.drawingChoices&&<SourceFigure name="question1" onlyButton/>}
    {!data.submitted&&data.answers[q.id]&&<button className={styles.smallButton} onClick={()=>setData(d=>{const answers={...d.answers};delete answers[q.id];return {...d,answers}})}>Clear answer</button>}
    {data.submitted&&<div className={styles.review}><p><strong>{data.answers[q.id]===q.key?'✓ Correct':data.answers[q.id]?'✕ Incorrect':'— Unanswered'}</strong> · Your answer: {data.answers[q.id]||'—'} · Correct answer: {q.key}</p><span className={styles.tag}>{q.topic}</span><Explanation question={q}/></div>}
   </article>)}
  </section></div>)}
  <div className={styles.actions}>
   {data.submitted?<><a className="button yellow" href="#science-2-lecture">Science mini-lecture ↓</a><button onClick={()=>setConfirm('reset')}>Retry Science</button></>:<><p>{result.answered} / {result.total} answered. Unanswered questions earn no credit.</p><button className="button yellow" onClick={()=>setConfirm('submit')}>Check Science answers ↗︎</button></>}
   {confirm==='submit'&&<div role="alert" className={styles.confirm}><p>Check and lock all {questions.length} Science questions? {result.unanswered} unanswered. Explanations and the mini-lecture will unlock.</p><button className="button yellow" onClick={finish}>Confirm check</button><button onClick={()=>setConfirm('')}>Keep working</button></div>}
   {confirm==='reset'&&<div role="alert" className={styles.confirm}><p>Clear only Practice 2 Science and start again? Other sections stay saved.</p><button onClick={reset}>Clear and retry</button><button onClick={()=>setConfirm('')}>Cancel</button></div>}
  </div>
  {data.submitted?<section id="science-2-lecture" className={`${shared.lecture} ${css.anchor}`}>
   <span className="eyebrow">YOUR SCIENCE NOTEBOOK</span><h2>Understand the measurements, not just the answer</h2><p>Concepts from both passages: springs, mixtures, melting rates, graphs and thresholds. Open RU for a more detailed explanation, then try the short exercise.</p>
   {scienceLecture.map((item,i)=><article className={`${styles.rubric} ${css.anchor}`} id={'science-2-theory-'+i} key={item.title}>
    <span className={styles.tag}>Questions {item.questions.join(', ')}</span><h3>{item.title}</h3><div className={base.english}>{item.en.map(p=><p key={p}>{p}</p>)}<h4>Example</h4><p>{item.exampleEn}</p>{item.math?.map((value,j)=><Formula value={value} key={j}/>)}</div>
    <details className={base.russian}><summary lang="ru">RU · Концепция и пример простыми словами</summary><div lang="ru" className={shared.ruSupport}><h3>{item.titleRu}</h3>{item.ru.map(p=><p key={p}>{p}</p>)}<h4>Пример</h4><p>{item.exampleRu}</p>{item.math?.map((value,j)=><Formula value={value} ru key={j}/>)}<p className={css.notebook}><strong>Запиши:</strong> {item.note}</p><p><strong>Попробуй:</strong> {item.taskRu}</p></div></details>
    <h4>Try it yourself</h4><p>{item.taskEn}</p><details className={styles.solution}><summary>Check the exercise · решение упражнения</summary><p>{item.answerEn}</p><p lang="ru">{item.answerRu}</p></details>
   </article>)}
   <article className={`${styles.rubric} ${shared.ruSupport}`} lang="ru"><h3>Слова, которые помогут читать следующий эксперимент</h3><p>Сохраняй выражение целиком: прочитай значение и короткий пример, затем объясни его на данных этого опыта.</p><table className={css.vocabulary}><thead><tr><th lang="en">English term + example</th><th>Смысл и перевод</th></tr></thead><tbody>{scienceVocabulary.map(item=><tr key={item.term}><th lang="en">{item.term}<p>{item.example}</p></th><td>{item.ru}<p>{item.exampleRu}</p></td></tr>)}</tbody></table></article>
  </section>:<p className={styles.notice}>English evidence, detailed Russian explanations, the mini-lecture and vocabulary unlock after checking.</p>}
  <footer className={styles.footer}><p>Figures retain the original supplied images and labels. This raw practice result is not an official ACT scaled score.</p><p>Practice 2 · Science · <a href="https://t.me/disamura">Диас Муратов · @disamura ↗︎</a></p></footer>
 </main></div>;
}
