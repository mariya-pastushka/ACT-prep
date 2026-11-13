'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { englishPracticeResult, restoreEnglishAttempt } from '../../../lib/english-practice.mjs';
import styles from '../trial/trial.module.css';
import shared from '../practice-1/practice.module.css';
import base from '../practice-1/science/science.module.css';
import css from '../practice-3/science/science.module.css';

const emptyAttempt = () => ({ answers: {}, submitted: false });
function EvidenceLinks({ question, ru = false }) {
  return <ul className={css.sources} aria-label={ru ? 'Источники доказательств' : 'Evidence sources'}>
    {question.sources.map(source => {
      const previewId = `preview-${question.id}-${ru ? 'ru' : 'en'}-${source.id}`;
      return <li key={source.id} className={css.sourceRef}>
        <a href={`#${source.id}`} aria-describedby={previewId}>{ru ? source.ru : source.en} ↑</a>
        <span className={css.preview} id={previewId} role="tooltip">{ru ? source.previewRu : source.previewEn}</span>
      </li>;
    })}
  </ul>;
}

function Explanation({ question, Figure }) {
  const { key, en, ru } = question;
  return <details className={styles.solution}>
    <summary>Why {key}? Evidence + explanation</summary>
    <div className={base.english}>
      <h4>Evidence · where to look</h4>
      <EvidenceLinks question={question}/>
      <p className={base.evidence}>{en.evidence}</p>
      <h4>How the evidence leads to the answer</h4><p>{en.reasoning}</p>
      {Figure && <Figure/>}
      <h4>Check the other choices</h4><p>{en.alternatives}</p>
    </div>
    <details className={base.russian} lang="ru">
      <summary>RU · Понятный разбор по шагам</summary>
      <div className={shared.ruSupport}>
        <h4>Что спрашивают</h4><p>{ru.ask}</p>
        <h4>Откуда берём данные</h4><EvidenceLinks question={question} ru/>
        <p className={base.evidence}>{ru.data}</p>
        <h4>Решаем по шагам</h4><ol className={base.steps}>{ru.steps.map(step => <li key={step}>{step}</li>)}</ol>
        {Figure && <Figure ru/>}
        <h4>Что пригодится в других задачах</h4><p>{ru.concept}</p>
        <h4>Почему остальные варианты не подходят</h4><p>{ru.distractors}</p>
      </div>
    </details>
  </details>;
}

function ScienceNotebook({ lectureId, questionId, lecture, vocabulary, children }) {
  return <section id={lectureId} className={`${shared.lecture} ${css.anchor}`} lang="ru">
    <h2>Мини-лекция по Science</h2>
    {lecture.map(lesson => <article key={lesson.title} className={`${styles.rubric} ${shared.ruSupport}`}>
      <h3>{lesson.titleRu}</h3>
      <div className={base.sourceLinks}>
        {lesson.questions.map(id => <a key={id} href={`#${questionId(id)}`}>Вопрос {id} ↑</a>)}
      </div>
      <p>{lesson.ru}</p>
      <details className={styles.solution} lang="en">
        <summary>{lesson.title} · English</summary><p>{lesson.en}</p>
      </details>
      <h4>Проверь себя</h4><p lang="en">{lesson.exercise}</p><p>{lesson.exerciseRu}</p>
      <details className={styles.solution}>
        <summary>Показать ответ</summary><p lang="en">{lesson.answer}</p><p>{lesson.answerRu}</p>
      </details>
    </article>)}
    <article className={`${styles.strategy} ${shared.ruSupport}`}>
      <h3>Словарь к двум текстам</h3>
      <dl className={css.vocabulary}>
        {vocabulary.map(([term, en, ru]) => <div key={term}>
          <dt lang="en">{term}</dt><dd lang="en">{en}</dd><dd>{ru}</dd>
        </div>)}
      </dl>
    </article>
    {children}
  </section>;
}

export default function SciencePractice({
  practiceNumber, subtitle, storageKey, groups, questions, lecture, vocabulary,
  reviewFigures, choiceLayouts, QuestionExtras, children,
}) {
  const practiceTitle = `Practice ${practiceNumber}`;
  const practicePath = `/lessons/practice-${practiceNumber}`;
  const questionId = id => `science-${practiceNumber}-question-${id}`;
  const lectureId = `science-${practiceNumber}-lecture`;
  const [attempt, setAttempt] = useState(emptyAttempt);
  const [ready, setReady] = useState(false);
  const [warning, setWarning] = useState('');
  const [confirmation, setConfirmation] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setAttempt(restoreEnglishAttempt(JSON.parse(saved), questions));
    } catch {
      setWarning('The saved Science attempt could not be read.');
    }
    setReady(true);
  }, [storageKey, questions]);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(attempt));
    } catch {
      setWarning('This browser could not save your answers. Keep this tab open.');
    }
  }, [attempt, ready, storageKey]);

  function clearAnswer(id) {
    setAttempt(current => {
      const answers = { ...current.answers };
      delete answers[id];
      return { ...current, answers };
    });
  }

  function finish(reset = false) {
    setAttempt(current => reset ? emptyAttempt() : { ...current, submitted: true });
    setConfirmation('');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  if (!ready) return <main className="wrap"><p role="status">Loading {practiceTitle} Science…</p></main>;
  const { answered, correct, total, incorrect, unanswered, missed } = englishPracticeResult(questions, attempt.answers);

  return <div lang="en" className={styles.lesson}>
    <header className="wrap nav">
      <Link href="/" className="brand"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="#a77abb" strokeWidth="1.7" aria-hidden="true"><path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M4.2 19.8L19.8 4.2"/></svg> ACT<span className="brand-light">space.</span></Link>
      <Link href="/lessons">← Lessons</Link>
    </header>
    <main className="wrap">
      <div className={styles.masthead}>
        <h1>{practiceTitle}</h1><p>Science · {subtitle}</p>
        <span className={styles.tag}>{total} questions · English and Russian explanations</span>
      </div>
      <nav className={styles.stages} aria-label="Practice sections">
        <Link className="nav-cta" href={practicePath}>English</Link>
        <Link className="nav-cta" href={`${practicePath}/math`}>Mathematics</Link>
        <Link className="nav-cta" href={`${practicePath}/reading`}>Reading</Link>
        <button type="button" aria-current="page">Science</button>
      </nav>
      <p className={base.instruction}>Read each passage and choose one answer per question. After checking, hover or focus an evidence link to preview it, or select it to jump to the source.</p>
      <nav className={base.sourceNav} aria-label="Science passages">
        {groups.map(group => <a key={group.id} className="nav-cta" href={`#${group.id}`}>{group.title} · Questions {group.from}–{group.to} ↓</a>)}
      </nav>
      {warning && <p className={styles.notice} role="alert">{warning}</p>}
      {attempt.submitted && <>
        <div className={styles.sectionResult} role="status"><strong>{correct} / {total}</strong><span>{incorrect} incorrect · {unanswered} unanswered<br/>Open the explanation below each question.</span></div>
        <div className={base.resultLinks}><a href={`#${lectureId}`} className="nav-cta">Mini-lecture + vocabulary ↓</a>
          {missed.length > 0 && <a className="nav-cta" href={`#${questionId(missed[0].id)}`}>First missed question ↓</a>}
        </div>
      </>}
      {groups.map(({ id, Passage, from, to }) => <div key={id}>
        <Passage/>
        <section className={styles.questions} aria-label={`${practiceTitle} Science questions ${from}–${to}`}>
          {questions.slice(from - 1, to).map(question => {
            const selected = attempt.answers[question.id];
            const layout = choiceLayouts?.[question.visual];
            const Choice = layout?.Content;
            return <article key={question.id} id={questionId(question.id)} className={`${styles.question} ${css.anchor}`}>
              <fieldset disabled={attempt.submitted} className={css.fieldset}>
                <legend><span className={styles.questionId}>{question.id}.</span>{question.prompt}</legend>
                {QuestionExtras && <QuestionExtras question={question}/>}
                <div className={[styles.choices, layout?.gridClass].filter(Boolean).join(' ')}>
                  {question.choices.map(choice => <label key={choice.label} className={[
                    styles.choice, layout?.choiceClass, selected === choice.label && styles.selected,
                    attempt.submitted && choice.label === question.key && styles.correct,
                  ].filter(Boolean).join(' ')}>
                    <input type="radio" name={questionId(question.id)} checked={selected === choice.label}
                      onChange={() => setAttempt(current => ({ ...current, answers: { ...current.answers, [question.id]: choice.label } }))}/>
                    <b>{choice.label}.</b>
                    {Choice ? <Choice choice={choice}/> : <span>{choice.text}</span>}
                  </label>)}
                </div>
              </fieldset>
              {!attempt.submitted && selected && <button className={styles.smallButton} onClick={() => clearAnswer(question.id)}>Clear answer</button>}
              {attempt.submitted && <div className={styles.review}>
                <p><strong>{selected === question.key ? '✓ Correct' : selected ? '✕ Incorrect' : '— Unanswered'}</strong> · Your answer: {selected || '—'} · Correct answer: {question.key}</p>
                <span className={styles.tag}>{question.topic}</span>
                <Explanation question={question} Figure={reviewFigures?.[question.id]}/>
              </div>}
            </article>;
          })}
        </section>
      </div>)}
      <div className={styles.actions}>
        {attempt.submitted ? <>
          <a className="button yellow" href={`#${lectureId}`}>Science mini-lecture ↓</a>
          <button onClick={() => setConfirmation('reset')}>Retry Science</button>
        </> : <>
          <p>{answered} / {total} answered. Unanswered questions earn no credit.</p>
          <button className="button yellow" onClick={() => setConfirmation('submit')}>Check Science answers ↗︎</button>
        </>}
        {confirmation === 'submit' && <div role="alert" className={styles.confirm}>
          <p>Check and lock your answers? {unanswered} unanswered. Explanations and the mini-lecture will open.</p>
          <button className="button yellow" onClick={() => finish()}>Confirm check</button><button onClick={() => setConfirmation('')}>Keep working</button>
        </div>}
        {confirmation === 'reset' && <div role="alert" className={styles.confirm}>
          <p>Clear your {practiceTitle} Science answers and start again?</p>
          <button onClick={() => finish(true)}>Clear and retry</button><button onClick={() => setConfirmation('')}>Cancel</button>
        </div>}
      </div>
      {attempt.submitted ? <ScienceNotebook lectureId={lectureId} questionId={questionId} lecture={lecture} vocabulary={vocabulary}>
        {children}
      </ScienceNotebook> : <p className={styles.notice}>Explanations, the mini-lecture, and vocabulary open after checking.</p>}
      <footer className={styles.footer}>{practiceTitle} · Science · <a href="https://t.me/disamura">Диас Муратов · @disamura ↗︎</a></footer>
    </main>
  </div>;
}
