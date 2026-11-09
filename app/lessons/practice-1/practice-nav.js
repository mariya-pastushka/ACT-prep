import Link from 'next/link';
import styles from '../trial/trial.module.css';
export default function PracticeNav({active}){return <nav className={styles.stages} aria-label="Practice sections">{active==='english'?<button aria-current="page">English</button>:<Link className="nav-cta" href="/lessons/practice-1">English</Link>}{active==='math'?<button aria-current="page">Mathematics</button>:<Link className="nav-cta" href="/lessons/practice-1/math">Mathematics</Link>}{['Reading','Science'].map(s=><button key={s} disabled>{s} · not uploaded</button>)}</nav>}
