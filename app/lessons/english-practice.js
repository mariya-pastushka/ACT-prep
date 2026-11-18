'use client';
import Link from 'next/link';
import ReadingNotebook from './reading-notebook';
import {useEffect,useRef,useState} from 'react';
import {restoreEnglishAttempt,englishPracticeResult} from '../../lib/english-practice.mjs';
import styles from './trial/trial.module.css';
import local from './practice-1/practice.module.css';
import readingLayout from './practice-5/reading/reading-layout.module.css';
const initial=()=>({answers:{},submitted:false});
function Translation({children}){return <details className={styles.translate}><summary lang="ru">RU · Понятный разбор по шагам</summary><div lang="ru" className={local.ruSupport}>{children}</div></details>}
function RussianEvidence({question,support}){const r=support;return <><h4>1. Что написано в тексте</h4><EvidenceLinks sources={question.evidenceSources} lines={question.evidenceLines} language="ru"/><blockquote className={local.evidence} lang="en">{question.evidence}</blockquote><p>{r.quote}</p><h4>2. Почему ответ {question.key}</h4><ol>{r.steps.map(step=><li key={step}>{step}</li>)}</ol><h4>{question.section==="reading"?"3. Как решать такие вопросы":"3. Мини-правило"}</h4><p>{r.rule}</p><h4>4. Простой пример</h4><blockquote className={local.evidence}><p lang="en">{r.example[0]}</p><p>{r.example[1]}</p></blockquote><h4>5. Почему другие ответы не подходят</h4><ul>{r.wrong.map(reason=><li key={reason}>{reason}</li>)}</ul><p className={local.remember}><strong>Запомни:</strong> {r.remember}</p></>}
function PassageText({text}){return text.split(/(\{\{\d+\|[^}]+\}\})/g).map((part,i)=>{const match=part.match(/^\{\{(\d+)\|([^}]+)\}\}$/);return match?<a key={i} className={local.target} href={'#question-'+match[1]} title={'Question '+match[1]}><u>{match[2]}</u><sup>{match[1]}</sup></a>:part})}
function EvidenceLinks({ sources, lines, language = "en" }) {
  const references = sources ?? lines?.map(([from, to]) => ({
    id: "source-line-" + from,
    en: from === to ? "Line " + from : "Lines " + from + "–" + to,
    ru: from === to ? "Строка " + from : "Строки " + from + "–" + to,
  }));
  if (!references?.length) return null;
  return <ul className={local.evidenceSources}>
    {references.map(source => <li key={source.id}>
      <a href={"#" + source.id}>{source[language]} ↑</a>
    </li>)}
  </ul>;
}

function PassageParagraph({ paragraph }) {
  if (typeof paragraph === "string") return <p><PassageText text={paragraph}/></p>;
  return <p>{paragraph.map((fragment, index) => <span key={fragment.id}>
    {index > 0 && " "}
    <span id={"passage-" + fragment.id} tabIndex={-1} className={local.sourceLine}>
      <PassageText text={fragment.text}/>
    </span>
    {fragment.questionAfter && <a className={local.target} href={"#question-" + fragment.questionAfter} aria-label={"Question " + fragment.questionAfter}>
      <sup>[{fragment.questionAfter}]</sup>
    </a>}
  </span>)}</p>;
}

function NumberedPassageParagraph({ lines }) {
  return <>
    <h3 className={`${local.paragraphNumber} ${readingLayout.mobileRange}`}>
      Lines {lines[0].number}–{lines.at(-1).number}
    </h3>
    <p className={readingLayout.sourceParagraph}>
      {lines.map(line => (
        <span key={line.number} id={`source-line-${line.number}`} tabIndex={-1}
          className={`${local.sourceLine} ${readingLayout.sourceRow}`} title={`Source line ${line.number}`}>
          <span className={readingLayout.lineNumber} aria-hidden="true">
            {line.number % 5 === 0 ? line.number : ''}
          </span>
          <span className={readingLayout.lineText}>{line.printedText}</span>
          <span className={readingLayout.mobileText}>{line.text}{line.joinAfter}</span>
        </span>
      ))}
    </p>
  </>;
}

function PracticeWorkspace({ splitReading, intro, passage, children, questionsPane }) {
  if (!splitReading) return <>{intro}{passage}{children}</>;

  return <div className={readingLayout.frame}>
    <div className={readingLayout.intro}>{intro}</div>
    <div className={readingLayout.workspace}>
      <div className={`${readingLayout.pane} ${readingLayout.passagePane}`} role="region" aria-label="Reading passage" tabIndex={0}>
        {passage}
      </div>
      <div className={`${readingLayout.pane} ${readingLayout.questionsPane}`} ref={questionsPane}
        role="region" aria-label="Questions and answer controls" tabIndex={0}>
        {children}
      </div>
    </div>
  </div>;
}

export default function EnglishPractice({ test, splitReading = false }) {
  const {
    passage: practiceEnglish, questions, lecture, lectureRu, evidenceRu, storageKey, id, title, nav, introNote,
    insertions = [], numberParagraphs = false, notebook = [], readingNotebook, sectionLabel = 'English', instructions,
    lectureTitle = 'Мини-лекция: разбираемся в правилах', lectureTag = 'grammar lecture',
    lectureLocked = 'Your grammar mini-lecture unlocks after you check the test.',
  } = test;
  const [data, setData] = useState(initial);
  const [ready, setReady] = useState(false);
  const [warning, setWarning] = useState('');
  const [confirm, setConfirm] = useState('');
  const questionsPane = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setData(restoreEnglishAttempt(JSON.parse(raw), questions));
    } catch {
      setWarning('Saving is unavailable or the old draft could not be read. Keep this tab open.');
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(data));
    } catch {
      setWarning('This browser could not save your latest answers. Keep this tab open.');
    }
  }, [data, ready]);

  function scrollToPracticeStart() {
    if (questionsPane.current) questionsPane.current.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  const { answered, correct, missed } = englishPracticeResult(questions, data.answers);
  if (!ready) return <main className="wrap"><p role="status">Loading {title}…</p></main>;

  const wrapClass = splitReading ? `wrap ${readingLayout.wide}` : 'wrap';
  const intro = <>
    <div className={splitReading ? `${styles.masthead} ${readingLayout.masthead}` : styles.masthead}>
      <span className="eyebrow">READ · PRACTISE · UNDERSTAND</span>
      <h1>{title}</h1>
      <p>{sectionLabel} · {practiceEnglish.title}</p>
      <span className={styles.tag}>{questions.length} supplied questions · evidence + {lectureTag}</span>
    </div>
    <nav className={splitReading ? `${styles.stages} ${readingLayout.stages}` : styles.stages} aria-label="Practice sections">
      {nav.map(item => item.current ? <button key={item.label} aria-current="page">{item.label}</button>
        : item.disabled ? <button key={item.label} disabled>{item.label} · not uploaded</button>
          : <Link key={item.label} className="nav-cta" href={item.href}>{item.label}</Link>)}
    </nav>
    {instructions ? <p>{instructions}</p> : <p>Read the complete passage, then answer all {questions.length} questions ({questions[0].id}–{questions[questions.length - 1].id}). Underlined parts link to their questions. Original errors are intentional. Odd questions use A–D; even questions use F, G, H, J, as supplied.</p>}
    {introNote && <p className={styles.muted}>{introNote}</p>}
    {warning && <p role="alert" className={styles.notice}>{warning}</p>}
    {data.submitted && <div className={splitReading ? `${styles.sectionResult} ${readingLayout.result}` : styles.sectionResult} role="status">
      <strong>{correct} / {questions.length}</strong>
      <span>{Math.round(correct / questions.length * 100)}% correct · {answered - correct} incorrect · {questions.length - answered} unanswered<br/>Answers are locked. Read the evidence and the mini-lecture below. This is a practice result, not an official ACT score.</span>
    </div>}
  </>;

  const passage = <article className={splitReading ? `${styles.passage} ${readingLayout.passage}` : styles.passage}>
    <h2>{practiceEnglish.title}</h2>
    {practiceEnglish.attribution && <p className={styles.muted}>{practiceEnglish.attribution}</p>}
    {practiceEnglish.paragraphs.map((paragraph, index) => {
      const range = practiceEnglish.lineRanges?.[index];
      const lines = range && practiceEnglish.sourceLines.filter(line => line.number >= range.from && line.number <= range.to);
      return <div key={index} id={`paragraph-${index + 1}`}>
        {numberParagraphs && <h3 className={local.paragraphNumber}>Paragraph {index + 1} <span>[{index + 1}]</span></h3>}
        {splitReading && lines ? <NumberedPassageParagraph lines={lines} />
          : lines ? <>
            <h3 className={local.paragraphNumber}>Lines {range.from}–{range.to}</h3>
            <p className={local.readingText}>{lines.map(line => <span key={line.number} id={`source-line-${line.number}`}
              tabIndex={-1} className={local.sourceLine} title={`Source line ${line.number}`}>{line.text}{line.joinAfter}</span>)}</p>
          </> : <PassageParagraph paragraph={paragraph} />}
        {insertions.filter(marker => marker.afterParagraph === index).map(marker => (
          <a key={marker.questionId} className={local.insertion} href={`#question-${marker.questionId}`}>{marker.label}</a>
        ))}
      </div>;
    })}
    {practiceEnglish.note && <p className={styles.muted}>{practiceEnglish.note}</p>}
    <details className={styles.translate}>
      <summary>Source & transcription</summary>
      <p>{practiceEnglish.source} Advertising buttons and page watermarks are omitted.</p>
      {practiceEnglish.sourceUrl && <p><a href={practiceEnglish.sourceUrl}>View the supplied source ↗︎</a></p>}
    </details>
  </article>;

  return <div className={styles.lesson} lang="en">
    <header className={`${wrapClass} nav${splitReading ? ` ${readingLayout.header}` : ''}`}>
      <Link href="/" className="brand"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="#a77abb" strokeWidth="1.7" aria-hidden="true"><path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M4.2 19.8L19.8 4.2"/></svg> ACT<span className="brand-light">space.</span></Link>
      <Link href="/lessons">← Lessons</Link>
    </header>
    <main className={wrapClass}>
      <PracticeWorkspace splitReading={splitReading} intro={intro} passage={passage} questionsPane={questionsPane}>
<section className={styles.questions} aria-label={sectionLabel+" questions"}>{questions.map(q=><article key={q.id} className={styles.question} id={'question-'+q.id}><fieldset disabled={data.submitted}><legend><span className={styles.questionId}>{q.id}.</span>{q.prompt}</legend><div className={styles.choices}>{q.choices.map(c=><label key={c.label} className={`${styles.choice} ${data.answers[q.id]===c.label?styles.selected:''} ${data.submitted&&c.label===q.key?styles.correct:''}`}><input type="radio" name={id+'-'+q.id} checked={data.answers[q.id]===c.label} onChange={()=>setData(d=>({...d,answers:{...d.answers,[q.id]:c.label}}))}/><b>{c.label}.</b><span>{c.text}</span></label>)}</div></fieldset>{!data.submitted&&data.answers[q.id]&&<button className={styles.smallButton} onClick={()=>setData(d=>{const answers={...d.answers};delete answers[q.id];return {...d,answers}})}>Clear answer</button>}{data.submitted&&<div className={styles.review}><p><b>{data.answers[q.id]===q.key?'✓ Correct':data.answers[q.id]?'✕ Incorrect':'— Unanswered'}</b> · Your answer: {data.answers[q.id]||'—'} · Correct answer: {q.key}</p><span className={styles.tag}>{q.topic}</span><details className={styles.solution}><summary>Why {q.key}? · Evidence & explanation</summary><h4>Find it in the passage</h4><EvidenceLinks sources={q.evidenceSources} lines={q.evidenceLines}/>{q.evidenceParagraphs&&<p>Source: {q.evidenceParagraphs.map((n,i)=><span key={n}>{i>0?" · ":""}<a className={local.insertion} href={"#paragraph-"+n}>Paragraph {n} ↑</a></span>)}</p>}<blockquote className={local.evidence}>{q.evidence}</blockquote>{q.explanation.map((p,i)=><section key={i}><h4>{["Why this answer works",q.section==="reading"?"Reading skill & example":"Rule & example","Why the other choices do not fit"][i]||"More detail"}</h4><p>{p}</p></section>)}<Translation><RussianEvidence question={q} support={evidenceRu[q.id]}/></Translation><a href="#practice-lecture" className={local.insertion}>Review the mini-lecture ↓</a></details></div>}</article>)}</section>
        <div className={styles.actions}>
          {data.submitted ? <>
            <a href="#practice-lecture" className="button yellow">Go to your mini-lecture ↓</a>
            <button onClick={() => setConfirm('reset')}>Try again</button>
          </> : <>
            <p>{answered} / {questions.length} answered. Unanswered questions earn no credit.</p>
            <button className="button yellow" onClick={() => setConfirm('submit')}>Check {sectionLabel} answers ↗︎</button>
          </>}
          {confirm === 'submit' && <div role="alert" className={styles.confirm}>
            <p>Check and lock your answers? {questions.length - answered} unanswered. Explanations and the lecture will open after checking.</p>
            <button className="button yellow" onClick={() => {
              setData(current => ({ ...current, submitted: true }));
              setConfirm('');
              scrollToPracticeStart();
            }}>Confirm check</button>
            <button onClick={() => setConfirm('')}>Keep working</button>
          </div>}
          {confirm === 'reset' && <div role="alert" className={styles.confirm}>
            <p>Clear only your {title} {sectionLabel} answers and start again?</p>
            <button onClick={() => {
              setData(initial());
              setConfirm('');
              scrollToPracticeStart();
            }}>Clear and retry</button>
            <button onClick={() => setConfirm('')}>Cancel</button>
          </div>}
        </div>
      </PracticeWorkspace>
{data.submitted?<section id="practice-lecture" className={local.lecture}><span className="eyebrow">ТВОЯ ТЕТРАДЬ ПО АНГЛИЙСКОМУ</span><h2 lang="ru">{lectureTitle}</h2><p lang="ru">Здесь объясняем по-русски. Английские примеры читаем вместе с переводом: сначала пойми правило, затем попробуй применить его самостоятельно.</p>{missed.length>0&&<div className={styles.notice}><b lang="ru">Твои темы для повторения:</b> {[...new Set(missed.map(q=>q.topic))].join(' · ')}. Эти темы связаны с вопросами, где была ошибка или не было ответа.</div>}{lectureRu.map((item,i)=><article key={item.title} className={`${styles.rubric} ${local.ruSupport}`} lang="ru"><h3>{item.title}</h3><span className={styles.tag} lang="en">{lecture[i].title}</span><h4>Объяснение простыми словами</h4>{item.explain.map(p=><p key={p}>{p}</p>)}<p className={local.formula}><strong>Правило:</strong> {item.formula}</p><h4>Примеры с переводом</h4>{item.examples.map(([en,ru])=><blockquote key={en} className={local.evidence}><p lang="en">{en}</p><p>{ru}</p></blockquote>)}<p className={local.remember}><strong>Что записать и попробовать:</strong> {item.notebook}</p><details className={styles.solution}><summary lang="en">English explanation · английская версия</summary><p lang="en">{lecture[i].en}</p><blockquote className={local.evidence} lang="en">{lecture[i].example}</blockquote></details></article>)}{readingNotebook&&<ReadingNotebook data={readingNotebook}/> }<article className={`${styles.strategy} ${local.ruSupport}`} lang="ru"><h3>Перед завершением: что записать в тетрадь</h3><ol>{notebook.map(note=><li key={note}>{note}</li>)}</ol></article></section>:<p className={styles.notice}>{lectureLocked}</p>}
<footer className={styles.footer}>{title} · {sectionLabel} · <a href="https://t.me/disamura">Диас Муратов · @disamura ↗︎</a></footer></main></div>}
