'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {mathQuestions as questions,mathStorageKey,chartIntroduction} from '../../../../content/practice-2/math.mjs';
import {mathLecture} from '../../../../content/practice-2/math-lecture.mjs';
import {englishPracticeResult,restoreEnglishAttempt} from '../../../../lib/english-practice.mjs';
import {Blocks,RichText} from './notation';
import MathFigure from './figures';
import styles from '../../trial/trial.module.css';
import shared from '../../practice-1/practice.module.css';
import css from './math.module.css';
const initial=()=>({answers:{},submitted:false});
const vocabulary=[['integer / sum / product','целое число / сумма / произведение'],['could NOT / does NOT','НЕ может / НЕ равно — ищем исключение'],['parallel / transversal','параллельные / секущая'],['volume / area / side of a box','объём / площадь / грань коробки'],['diameter / radius / shaded region','диаметр / радиус / закрашенная область'],['slope / x-intercept','наклон / x-координата пересечения с осью x'],['additional / for all m > 1,000','дополнительный / для всех m больше 1 000'],['altogether / percent of','вместе / процент от количества'],['twice as much / one third as much','вдвое больше / треть от количества'],['solution set / distance','множество решений / расстояние']];
export default function MathPractice(){
 const [data,setData]=useState(initial);
 const [ready,setReady]=useState(false);
 const [warning,setWarning]=useState('');
 const [confirm,setConfirm]=useState('');
 useEffect(()=>{
  try{const raw=localStorage.getItem(mathStorageKey);if(raw)setData(restoreEnglishAttempt(JSON.parse(raw),questions))}
  catch{setWarning('Не удалось прочитать сохранённую попытку. Не закрывай вкладку до завершения работы.')}
  setReady(true);
 },[]);
 useEffect(()=>{
  if(!ready)return;
  try{localStorage.setItem(mathStorageKey,JSON.stringify(data))}
  catch{setWarning('Браузер не сохранил последние ответы. Не закрывай вкладку до завершения работы.')}
 },[data,ready]);
 const result=englishPracticeResult(questions,data.answers);
 function finish(){setData(d=>({...d,submitted:true}));setConfirm('');window.scrollTo({top:0,behavior:'instant'})}
 function reset(){setData(initial());setConfirm('');window.scrollTo({top:0,behavior:'instant'})}
 if(!ready)return <main className="wrap"><p role="status">Loading Practice 2 Mathematics…</p></main>;
 return <div className={styles.lesson} lang="en">
  <header className="wrap nav"><Link href="/" className="brand"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="#a77abb" strokeWidth="1.7" aria-hidden="true"><path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M4.2 19.8L19.8 4.2"/></svg> ACT<span className="brand-light">space.</span></Link><Link href="/lessons">← Lessons</Link></header>
  <main className="wrap">
   <div className={styles.masthead}><span className="eyebrow">THINK · SOLVE · UNDERSTAND</span><h1>Practice 2</h1><p>Mathematics · 15 questions</p><span className={styles.tag}>English questions · понятные решения и теория на русском</span></div>
   <nav className={styles.stages} aria-label="Practice sections"><Link className="nav-cta" href="/lessons/practice-2">English</Link><button aria-current="page">Mathematics</button><Link className="nav-cta" href="/lessons/practice-2/reading">Reading</Link><button disabled>Science · not uploaded</button></nav>
   <p>Choose one answer per question. Odd questions use F, G, H, J, K; even questions use A–E, as supplied. Use the labels on each diagram rather than measuring the screen.</p>
   <p lang="ru" className={styles.muted}>После проверки откроются пошаговые решения, рисунки с пояснениями и мини-лекция. Эта секция сохраняет ответы отдельно от остальных. Результат — число верных ответов из 15, без пересчёта в официальный балл ACT.</p>
   {warning&&<p className={styles.notice} role="alert" lang="ru">{warning}</p>}
   {data.submitted&&<div className={styles.sectionResult} role="status" lang="ru"><strong>{result.correct} / {result.total}</strong><span>{result.percent}% верно · ошибок: {result.incorrect} · пропусков: {result.unanswered}<br/>Ответы зафиксированы. Открой разбор под каждым вопросом.</span></div>}
   {data.submitted&&<div className={css.resultLinks} lang="ru"><a className="nav-cta" href="#math-2-lecture">Перейти к мини-лекции ↓</a>{result.missed.length>0&&<a className="nav-cta" href={'#math-2-question-'+result.missed[0].id}>Первая ошибка или пропуск ↓</a>}</div>}
   <section className={styles.questions} aria-label="Practice 2 Mathematics questions">
    {questions.map(q=><article className={`${styles.question} ${css.question}`} key={q.id} id={'math-2-question-'+q.id}>
     <fieldset disabled={data.submitted} className={css.fieldset}>
      <legend className={css.prompt}><span className={styles.questionId}>{q.id}.</span><RichText content={q.prompt}/></legend>
      {q.chartIntro&&<p className={css.chartIntro}>{chartIntroduction}</p>}
      {q.figure&&<MathFigure type={q.figure}/>}
      <div className={styles.choices}>{q.choices.map(c=><label key={c.label} className={`${styles.choice} ${data.answers[q.id]===c.label?styles.selected:''} ${data.submitted&&c.label===q.key?styles.correct:''}`}>
       <input type="radio" name={'practice-2-math-'+q.id} checked={data.answers[q.id]===c.label} onChange={()=>setData(d=>({...d,answers:{...d.answers,[q.id]:c.label}}))}/><b>{c.label}.</b><span className={css.choiceText}><RichText content={c.content}/></span>
      </label>)}</div>
     </fieldset>
     {!data.submitted&&data.answers[q.id]&&<button className={styles.smallButton} onClick={()=>setData(d=>{const answers={...d.answers};delete answers[q.id];return {...d,answers}})}>Clear answer</button>}
     {data.submitted&&<div className={`${styles.review} ${shared.ruSupport}`} lang="ru">
      <p><strong>{data.answers[q.id]===q.key?'✓ Верно':data.answers[q.id]?'✕ Ошибка':'— Нет ответа'}</strong> · Твой ответ: {data.answers[q.id]||'—'} · Верный ответ: {q.key}</p><span className={styles.tag}>{q.topic}</span>
      <details className={styles.solution}><summary>Почему {q.key}? Понятное решение по шагам</summary>
       <h4>Что дано и что нужно найти</h4><Blocks content={q.given}/>
       <h4>Какое правило используем</h4><Blocks content={q.rule}/>
       <h4>Решаем по шагам</h4><ol className={css.steps}>{q.steps.map((step,i)=><li key={i}><Blocks content={step}/></li>)}</ol>
       {(q.solutionFigure||q.figure)&&<MathFigure type={q.solutionFigure||q.figure} solved/>}
       <h4>Проверяем ответ</h4><Blocks content={q.check}/>
       <h4>Где легко ошибиться</h4><Blocks content={q.mistake}/>
       <a className={css.reviewLink} href={'#math-2-theory-'+mathLecture.findIndex(l=>l.questions.includes(q.id))}>Повторить правило в мини-лекции ↓</a>
      </details>
     </div>}
    </article>)}
   </section>
   <div className={styles.actions}>
    {data.submitted?<><a href="#math-2-lecture" className="button yellow" lang="ru">Мини-лекция по математике ↓</a><button onClick={()=>setConfirm('reset')} lang="ru">Пройти Mathematics заново</button></>:<><p>{result.answered} / {result.total} answered. Unanswered questions earn no credit.</p><button className="button yellow" onClick={()=>setConfirm('submit')}>Check Mathematics ↗︎</button></>}
    {confirm==='submit'&&<div className={styles.confirm} role="alert" lang="ru"><p>Проверить и зафиксировать ответы? Пропущено: {result.unanswered}. После проверки откроются все решения и мини-лекция.</p><button className="button yellow" onClick={finish}>Проверить ответы</button><button onClick={()=>setConfirm('')}>Продолжить решать</button></div>}
    {confirm==='reset'&&<div className={styles.confirm} role="alert" lang="ru"><p>Очистить только попытку Practice 2 Mathematics? Другие секции останутся сохранёнными.</p><button onClick={reset}>Очистить Mathematics</button><button onClick={()=>setConfirm('')}>Отмена</button></div>}
   </div>
   {data.submitted?<section id="math-2-lecture" className={`${shared.lecture} ${shared.ruSupport}`} lang="ru">
    <span className="eyebrow">ТВОЯ ТЕТРАДЬ ПО МАТЕМАТИКЕ</span><h2>Понять способ и решить самому</h2>
    <p>В каждом блоке — правило простыми словами, разобранный пример и небольшое упражнение. Сначала попробуй его решить, затем открой ответ.</p>
    {result.missed.length>0&&<p className={styles.notice}><strong>Темы для повторения по этой попытке:</strong> {[...new Set(result.missed.map(q=>q.topic))].join(' · ')}.</p>}
    {mathLecture.map((item,i)=><article key={item.title} id={'math-2-theory-'+i} className={`${styles.rubric} ${css.question}`}>
     <span className={styles.tag}>К вопросам {item.questions.join(', ')}</span><h3>{item.title}</h3><Blocks content={item.lesson}/>
     <h4>Разберём пример</h4><Blocks content={item.example}/>
     {item.figure&&<MathFigure type={item.figure} solved/>}
     <p className={css.notebook}><strong>Запиши:</strong> {item.note}</p>
     <h4>Попробуй самостоятельно</h4><p><RichText content={item.task}/></p>
     <details className={styles.solution}><summary>Показать решение упражнения</summary><Blocks content={item.answer}/></details>
    </article>)}
    <article className={styles.strategy}><h3>Словарь для английских условий</h3><div className={styles.tableScroll}><table className={css.vocabulary}><thead><tr><th lang="en">English</th><th>Что означает</th></tr></thead><tbody>{vocabulary.map(([en,ru])=><tr key={en}><td lang="en">{en}</td><td>{ru}</td></tr>)}</tbody></table></div></article>
   </section>:<p className={styles.notice} lang="ru">Решения и мини-лекция откроются после проверки теста.</p>}
   <footer className={styles.footer}><p>Questions transcribed from the supplied screenshots. Explanations and teaching diagrams prepared for this lesson.</p><p>Practice 2 · Mathematics · <a href="https://t.me/disamura">Диас Муратов · @disamura ↗︎</a></p></footer>
  </main>
 </div>;
}
