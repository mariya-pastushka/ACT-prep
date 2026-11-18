import { passage } from './english-passage.mjs';
import { questions } from './english-questions.mjs';
import { evidenceRu } from './english-russian.mjs';
import { lecture, lectureRu, vocabularyNotebook } from './english-lecture.mjs';

export const englishTest = {
  id: 'practice-5-english',
  title: 'Practice 5',
  storageKey: 'act-space-practice-5-english-v1',
  nav: [
    { label: 'English', current: true },
    { label: 'Mathematics', href: '/lessons/practice-5/math' },
  ],
  passage,
  questions,
  evidenceRu,
  lecture,
  lectureRu,
  numberParagraphs: true,
  readingNotebook: vocabularyNotebook,
  instructions: 'Read the passage and answer Questions 61–75. Select an underlined phrase or numbered marker to jump to its question. In Question 68, choose the option that is NOT acceptable.',
  lectureTitle: 'Мини-конспект: правила ACT English',
  notebook: [
    'Проверь основу предложения и границы вставок: перед точкой нужна полная мысль, парные тире должны закрывать уточнение.',
    'Запиши пары с примерами: find → found, found → founded, dependence on, agree with, agree to и agree that.',
    'При сокращении прочитай фразу целиком. При вставке прочитай соседние предложения и найди, что подтверждает новую мысль.',
  ],
};
