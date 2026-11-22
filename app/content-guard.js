'use client';

import { useEffect } from 'react';
import styles from './content-guard.module.css';

export default function ContentGuard({ children }) {
  useEffect(() => {
    const editable = target => target instanceof Element && !!target.closest('input, textarea, [contenteditable="true"]');
    const block = event => { if (!editable(event.target)) event.preventDefault(); };
    const keyboard = event => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && (key === 'p' || (!editable(event.target) && ['c', 'x', 'a'].includes(key)))) event.preventDefault();
    };
    const events = ['copy', 'cut', 'contextmenu', 'dragstart'];
    events.forEach(name => document.addEventListener(name, block));
    document.addEventListener('keydown', keyboard);
    return () => {
      events.forEach(name => document.removeEventListener(name, block));
      document.removeEventListener('keydown', keyboard);
    };
  }, []);

  return <div className={styles.protected}>{children}</div>;
}
