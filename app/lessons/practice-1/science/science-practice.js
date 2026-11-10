'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {soil,rust,scienceStorageKey} from '../../../../content/practice-1/science-data.mjs';
import {scienceQuestions as questions} from '../../../../content/practice-1/science-questions.mjs';
import {scienceLecture} from '../../../../content/practice-1/science-lecture.mjs';
import {englishPracticeResult,restoreEnglishAttempt} from '../../../../lib/english-practice.mjs';
import PracticeNav from '../practice-nav';
import MathNotation from '../../practice-2/math/notation';
import {SoilChart,RustGraph,SugarOption} from './figures';
import styles from '../../trial/trial.module.css';
import shared from '../practice.module.css';
import css from './science.module.css';
const initial=()=>({answers:{},submitted:false});
function SoilData(){return <section className={css.dataBlock} aria-labelledby="soil-title">
 <span className="eyebrow">PASSAGE 1 · QUESTIONS 1–5</span><h2 id="soil-title">{soil.title}</h2>
 <div id="soil-introduction" className={css.anchor}>{soil.paragraphs.map(p=><p className={css.instruction} key={p}>{p}</p>)}</div>
 <div className={css.dataGrid}><SoilChart kind="density"/><div><p className={css.instruction}>{soil.tableIntroduction}</p>
  <div id="soil-table-1" className={css.tableCard}><h3 className={css.sourceTitle}>Table 1 · SOM and soil quality</h3><div className={css.tableWrap}><table className={css.table}><thead><tr><th>SOM</th><th>Soil quality rating</th></tr></thead><tbody>{soil.somRatings.map(([som,rating])=><tr key={som}><td>{som}</td><td>{rating}</td></tr>)}</tbody></table></div></div>
  <div id="soil-table-2" className={css.tableCard} style={{marginTop:18}}><h3 className={css.sourceTitle}>Table 2 · Average SOM</h3><table className={css.table}><thead><tr><th>Field</th><th>Average SOM</th></tr></thead><tbody>{soil.som.map(row=><tr key={row.field}><th>{row.field}</th><td>{row.average.toFixed(2)}</td></tr>)}</tbody></table></div>
 </div></div>
 <p>{soil.yieldIntroduction}</p><SoilChart kind="yield"/>
 </section>}
function RustData(){return <section className={css.dataBlock} aria-labelledby="rust-title">
 <span className="eyebrow">PASSAGE 2 · QUESTIONS 6–10</span><h2 id="rust-title">{rust.title}</h2>
 <p>{rust.paragraphs[0]}</p><div id="rust-reaction" className={`${css.reaction} ${css.anchor}`} aria-label="Given reaction: 2 Fe plus 3 H2O yields Fe2O3 plus 3 H2">{rust.reaction}</div><p className={css.minor}>Use the reaction model shown above for these questions.</p><p>{rust.paragraphs[1]}</p>
 <div id="rust-table-1" className={css.tableCard}><h3 className={css.sourceTitle}>Table 1 · Fe₂O₃ produced in different solutions</h3><div className={css.tableWrap}><table className={`${css.table} ${css.solutionTable}`}><caption>Amount of Fe₂O₃ produced (g)</caption><thead><tr><th>Solution</th>{rust.days.map(day=><th key={day}>Day {day}</th>)}</tr></thead><tbody>{rust.solutions.map(row=><tr key={row.name}><th>{row.name}</th>{row.values.map((v,i)=><td key={i}>{v.toFixed(2)}</td>)}</tr>)}</tbody></table></div></div>
 <p>{rust.graphIntroduction}</p><RustGraph/>
 </section>}
function SourceLinks({question}){return <div className={css.sourceLinks}>{question.sources.map(s=><a key={s.id} href={'#'+s.id}>{s.label} ↑</a>)}</div>}
function translateMathWords(value){
 if(Array.isArray(value))return value.map(translateMathWords);
 if(!value||typeof value!=='object')return value;
 if(value.kind==='words'){const terms={'Field A: ':'Поле A: ','Field B: ':'Поле B: ',' tons':' т',' g/cm³':' г/см³',' g':' г',' g/day':' г/день','change':'прирост','average rate':'средняя скорость'};return {...value,value:terms[value.value]||value.value};}
 return Object.fromEntries(Object.entries(value).map(([key,child])=>[key,translateMathWords(child)]));
}
function ScienceFormula({value,ru=false}){return <div className={css.calculation}><MathNotation value={ru?translateMathWords(value):value} display/></div>}
function Calculations({question,ru=false}){return question.calculations?.map((block,i)=><div key={i}><h4>{ru?block.ru:block.en}</h4>{block.math.map((value,j)=><ScienceFormula value={value} ru={ru} key={j}/>)}</div>)}
function Background({question,ru=false}){return question.background&&<p className={css.backgroundLink}>{ru?'Биологическая основа прогноза: ':'Background for the prediction: '}<a href={question.background.url} target="_blank" rel="noreferrer">{question.background.label} ↗︎</a></p>}
function Evidence({question:q}){return <details className={styles.solution}>
 <summary>Why {q.key}? Evidence + explanation</summary><div className={css.english}>
  <h4>Evidence · where the answer comes from</h4><SourceLinks question={q}/><div className={css.evidence}><ul>{q.evidenceEn.map(p=><li key={p}>{p}</li>)}</ul></div>
  <h4>Reasoning · step by step</h4>{q.explanationEn.map(p=><p key={p}>{p}</p>)}<Calculations question={q}/>
  {q.id===8&&<RustGraph annotated/>}
  <h4>Check the other choices</h4><p>{q.whyEn}</p><Background question={q}/>
 </div>
 <details className={css.russian}><summary lang="ru">RU · Понятный разбор по шагам</summary><div lang="ru" className={shared.ruSupport}>
  <h4>1. Что спрашивают</h4><p>{q.askRu}</p>
  <h4>2. Откуда берём доказательство</h4><SourceLinks question={q}/><div className={css.evidence}>{q.evidenceRu.map(p=><p key={p}>{p}</p>)}</div>
  <h4>3. Разбираем шаг за шагом</h4><ol className={css.steps}>{q.stepsRu.map(p=><li key={p}>{p}</li>)}</ol><Calculations question={q} ru/>
  <h4>4. Правило простыми словами</h4><p>{q.ruleRu}</p>
  <h4>5. Почему не другие варианты</h4><p>{q.whyRu}</p><Background question={q} ru/>
  <a href={'#science-theory-'+scienceLecture.findIndex(l=>l.questions.includes(q.id))} className={css.sourceLinks}>Повторить этот навык в мини-лекции ↓</a>
 </div></details>
 </details>}
export default function SciencePractice(){
 const [data,setData]=useState(initial),[ready,setReady]=useState(false),[warning,setWarning]=useState(''),[confirm,setConfirm]=useState('');
 useEffect(()=>{try{const raw=localStorage.getItem(scienceStorageKey);if(raw)setData(restoreEnglishAttempt(JSON.parse(raw),questions))}catch{setWarning('Your saved draft could not be read. Keep this tab open while working.')}setReady(true)},[]);
 useEffect(()=>{if(!ready)return;try{localStorage.setItem(scienceStorageKey,JSON.stringify(data))}catch{setWarning('This browser could not save the latest answers. Keep this tab open.')}},[data,ready]);
 const result=englishPracticeResult(questions,data.answers);
 function finish(){setData(d=>({...d,submitted:true}));setConfirm('');window.scrollTo({top:0,behavior:'instant'})}
 function reset(){setData(initial());setConfirm('');window.scrollTo({top:0,behavior:'instant'})}
 if(!ready)return <main className="wrap"><p role="status">Loading Practice 1 Science…</p></main>;
 return <div className={styles.lesson} lang="en">
 <header className="wrap nav"><Link href="/" className="brand"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="#a77abb" strokeWidth="1.7" aria-hidden="true"><path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M4.2 19.8L19.8 4.2"/></svg> ACT<span className="brand-light">space.</span></Link><Link href="/lessons">← Lessons</Link></header>
 <main className="wrap">
  <div className={styles.masthead}><span className="eyebrow">READ DATA · FIND EVIDENCE · EXPLAIN</span><h1>Practice 1</h1><p>Science · 10 questions</p><span className={styles.tag}>Two passages · English evidence + подробный разбор на русском</span></div>
  <PracticeNav active="science"/>
  <p className={css.instruction}>Use the passage, figures, and tables for each group of questions. Choose one answer per question. Odd questions use A–D; even questions use F, G, H, J. Figure and table numbering restarts in the second passage.</p>
  <p className={styles.muted}>Your Science answers are saved separately in this browser. Checking unlocks the evidence, Russian support, and mini-lecture. The result is a raw score out of 10.</p>
  <nav className={css.sourceNav} aria-label="Science passages"><a className="nav-cta" href="#soil-title">Soil quality · Questions 1–5 ↓</a><a className="nav-cta" href="#rust-title">Iron, water, and rust · Questions 6–10 ↓</a></nav>
  {warning&&<p role="alert" className={styles.notice}>{warning}</p>}
  {data.submitted&&<><div className={styles.sectionResult} role="status"><strong>{result.correct} / 10</strong><span>{result.percent}% correct · {result.incorrect} incorrect · {result.unanswered} unanswered<br/>Answers locked. Open each explanation below.</span></div><div className={css.resultLinks}><a className="nav-cta" href="#science-lecture">Mini-lecture ↓</a>{result.missed.length>0&&<a className="nav-cta" href={'#science-question-'+result.missed[0].id}>First missed question ↓</a>}</div></>}
  {[{id:'soil',min:1,max:5},{id:'rust',min:6,max:10}].map(group=><div key={group.id}>
   {group.id==='soil'?<SoilData/>:<RustData/>}
   <section className={styles.questions} aria-label={`${group.id==='soil'?'Soil':'Rust'} questions ${group.min}–${group.max}`}>
    {questions.filter(q=>q.id>=group.min&&q.id<=group.max).map(q=><article id={'science-question-'+q.id} key={q.id} className={`${styles.question} ${css.anchor}`}>
     <fieldset disabled={data.submitted}><legend><span className={styles.questionId}>{q.id}.</span>{q.prompt}</legend>
      {q.pairedChoices&&<div className={css.pairHeader}><b>Lower crop yield</b><b>Higher bulk density</b></div>}
      <div className={q.graphChoices?css.graphChoices:styles.choices}>{q.choices.map(c=><label key={c.label} className={`${styles.choice} ${q.graphChoices?css.graphChoice:''} ${data.answers[q.id]===c.label?styles.selected:''} ${data.submitted&&c.label===q.key?styles.correct:''}`}>
       <input type="radio" name={'practice-1-science-'+q.id} aria-label={q.pairedChoices?`${c.label}. Lower crop yield: ${c.text.split(' · ')[0]}. Higher bulk density: ${c.text.split(' · ')[1]}.`:undefined} checked={data.answers[q.id]===c.label} onChange={()=>setData(d=>({...d,answers:{...d.answers,[q.id]:c.label}}))}/><b>{c.label}.</b>
       {q.graphChoices?<SugarOption option={c.label}/>:q.pairedChoices?<span className={css.pairCells}>{c.text.split(' · ').map((cell,i)=><span key={i}>{cell}</span>)}</span>:<span>{c.text}</span>}
      </label>)}</div>
     </fieldset>
     {!data.submitted&&data.answers[q.id]&&<button className={styles.smallButton} onClick={()=>setData(d=>{const answers={...d.answers};delete answers[q.id];return {...d,answers}})}>Clear answer</button>}
     {data.submitted&&<div className={styles.review}><p><strong>{data.answers[q.id]===q.key?'✓ Correct':data.answers[q.id]?'✕ Incorrect':'— Unanswered'}</strong> · Your answer: {data.answers[q.id]||'—'} · Correct answer: {q.key}</p><span className={styles.tag}>{q.topic}</span><Evidence question={q}/></div>}
    </article>)}
   </section>
  </div>)}
  <div className={styles.actions}>
   {data.submitted?<><a className="button yellow" href="#science-lecture">Science mini-lecture ↓</a><button onClick={()=>setConfirm('reset')}>Retry Science</button></>:<><p>{result.answered} / 10 answered. Unanswered questions earn no credit.</p><button className="button yellow" onClick={()=>setConfirm('submit')}>Check Science ↗︎</button></>}
   {confirm==='submit'&&<div className={styles.confirm} role="alert"><p>Check and lock this attempt? {result.unanswered} unanswered. Evidence and the mini-lecture will unlock.</p><button className="button yellow" onClick={finish}>Confirm check</button><button onClick={()=>setConfirm('')}>Keep working</button></div>}
   {confirm==='reset'&&<div className={styles.confirm} role="alert"><p>Clear only Practice 1 Science and start again? Your other sections stay saved.</p><button onClick={reset}>Clear and retry</button><button onClick={()=>setConfirm('')}>Cancel</button></div>}
  </div>
  {data.submitted?<section id="science-lecture" className={`${shared.lecture} ${css.anchor}`}>
   <span className="eyebrow">YOUR SCIENCE NOTEBOOK</span><h2>Read the data. Explain the answer.</h2><p>Six short lessons to help you solve the next question yourself. Open RU for a more detailed Russian explanation.</p>
   {result.missed.length>0&&<p className={styles.notice}>Review these skills: {[...new Set(result.missed.map(q=>q.topic))].join(' · ')}.</p>}
   {scienceLecture.map((l,i)=><article className={`${styles.rubric} ${css.anchor}`} key={l.title} id={'science-theory-'+i}>
    <span className={styles.tag}>Questions {l.questions.join(', ')}</span><h3>{l.title}</h3><div className={css.english}>{l.en.map(p=><p key={p}>{p}</p>)}<h4>Worked example</h4><p>{l.exampleEn}</p>{l.math?.map((value,j)=><ScienceFormula value={value} key={j}/>)}</div>
    <details className={css.russian}><summary lang="ru">RU · Теория с понятными примерами</summary><div lang="ru" className={shared.ruSupport}><h3>{l.titleRu}</h3>{l.ru.map(p=><p key={p}>{p}</p>)}<h4>Разберём пример</h4><p>{l.exampleRu}</p>{l.math?.map((value,j)=><ScienceFormula value={value} ru key={j}/>)}<p className={css.notebook}><strong>Запиши:</strong> {l.remember}</p><p><strong>Попробуй:</strong> {l.task.split(' / ')[1]}</p></div></details>
    <h4>Try it yourself</h4><p>{l.task.split(' / ')[0]}</p><details className={styles.solution}><summary>Check the exercise · решение упражнения</summary><p>{l.answerEn}</p><p lang="ru">{l.answerRu}</p></details>
   </article>)}
   <article className={`${styles.strategy} ${shared.ruSupport}`} lang="ru"><h3>Полезные слова из теста</h3><div className={css.tableWrap}><table className={css.table}><tbody>{[['bulk density','сухая масса почвы в единице объёма'],['SOM / soil organic matter','органическое вещество почвы; показатель из условия'],['crop yield / harvest','урожайность, количество урожая / сбор урожая'],['legumes / high-residue crops','бобовые / культуры с большим количеством растительных остатков'],['consistent with a hypothesis','согласуется с гипотезой'],['distilled water / solution','дистиллированная вода / раствор'],['amount / rate','количество / скорость изменения количества'],['from Day 6 until Day 8','за промежуток с 6-го по 8-й день'],['approximately / most likely','приблизительно / наиболее вероятно']].map(([en,ru])=><tr key={en}><th lang="en">{en}</th><td>{ru}</td></tr>)}</tbody></table></div></article>
  </section>:<p className={styles.notice}>Evidence, Russian explanations, and the Science mini-lecture unlock after checking.</p>}
  <footer className={styles.footer}><p>Questions and data transcribed from the supplied material. Graph readings are approximate where the source is graphical.</p><p>Practice 1 · Science · <a href="https://t.me/disamura">Диас Муратов · @disamura ↗︎</a></p></footer>
 </main></div>;
}
