'use client';

import { useEffect, useState } from 'react';
import styles from './access-gate.module.css';

const password = '221126';
const storageKey = 'act-space-access-221126';

export default function AccessGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try { setUnlocked(sessionStorage.getItem(storageKey) === 'granted'); } catch {}
  }, []);

  function submit(event) {
    event.preventDefault();
    if (value !== password) {
      setError('Неверный пароль. Попробуй ещё раз.');
      return;
    }
    try { sessionStorage.setItem(storageKey, 'granted'); } catch {}
    setValue('');
    setError('');
    setUnlocked(true);
  }

  if (unlocked) return children;

  return <main className={styles.screen}>
    <section className={styles.card} aria-labelledby="access-title">
      <span className={styles.brand}>ACT space.</span>
      <h1 id="access-title">Вход на сайт</h1>
      <p>Введи пароль, чтобы открыть уроки и тесты.</p>
      <form onSubmit={submit}>
        <label htmlFor="access-password">Пароль</label>
        <input id="access-password" type="password" autoComplete="current-password" required
          value={value} onChange={event => { setValue(event.target.value); setError(''); }}
          aria-invalid={!!error} aria-describedby={error ? 'access-error' : undefined} />
        {error && <p id="access-error" className={styles.error} role="alert">{error}</p>}
        <button type="submit">Войти →</button>
      </form>
    </section>
  </main>;
}
