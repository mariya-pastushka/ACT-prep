import styles from './trial/trial.module.css';
import shared from './practice-1/practice.module.css';
import css from './reading-notebook.module.css';
export default function ReadingNotebook({data}){return <article className={`${styles.rubric} ${shared.ruSupport} ${css.notebook}`} lang="ru">
 <h3>{data.title}</h3><p>{data.intro}</p>
 <div className={css.words}>{data.vocabulary.map(item=><section key={item.word} className={css.word}>
  <h4 lang="en">{item.word}</h4><p className={css.meaning}>{item.meaning}</p>
  {item.source ? (
    <a className={shared.insertion} href={'#' + item.source.id}>{item.source.ru} ↑</a>
  ) : (
    <a className={shared.insertion} href={'#source-line-'+item.from}>В тексте: строки {item.from}–{item.to} ↑</a>
  )}
  <blockquote className={css.context}><p lang="en">{item.context}</p><p>{item.contextRu}</p></blockquote>
  <h5>Новый пример</h5><p lang="en">{item.example}</p><p>{item.exampleRu}</p>
 </section>)}</div>
 <h3>Проверь, что правило стало понятным</h3><p>Это новые короткие ситуации. Сначала ответь сам, затем открой объяснение.</p>
 {data.exercises.map(item=><section key={item.title} className={css.exercise}><h4>{item.title}</h4><p lang="en">{item.en}</p><p>{item.ru}</p><details className={styles.solution}><summary>Показать ответ и объяснение</summary><p lang="en">{item.answerEn}</p><p>{item.answerRu}</p></details></section>)}
 </article>}
