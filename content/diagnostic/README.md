# ACT Diagnostic Challenge

## Routes and scope

- Home: `app/page.js`; only the “Начать свой путь” destination changed to `/lessons`.
- Lesson list: `app/lessons/page.js`, one Trial Lesson link.
- Lesson: `/lessons/trial`, implemented by `app/lessons/trial/page.js` and `trial-lesson.js`.
- Local styles: `app/lessons/trial/trial.module.css`; existing global CSS is unchanged.
- Build configuration: `next.config.mjs` accepts optional `ACT_BUILD_DIR` so verification can use `.next-verify` without writing into a running dev server’s `.next` directory. Normal launch is still `npm run dev`.

## Content and extension

`lesson.mjs` defines sections, timing, the writing model, and the four writing review domains. `passages.mjs` stores shared texts and structured scientific tables. `questions.mjs` stores 25 original items (English 6, Mathematics 7, Reading 5, Science 7). Each question has a stable ID, section, topic/subtopic, difficulty, question type, passage reference, source metadata, optional year/form, choices, answer index, worked explanation, and Russian support retaining English terms.

To extend the bank, add a question record and reference a passage ID; the renderer and scorer derive totals from records. Additional source types can be stored in `source`; only import content with permission and retain attribution. The question schema does not imply that original questions are official ACT items. The current renderer handles multiple-choice items, text passages, tables, and the separate writing exercise. New media types require a local renderer extension; PDF ingestion is not implemented.

The user’s 45-minute limit overrides the supplied brief’s 65–75-minute schedule: welcome 1, English 8, Math 9, Reading 9, Science 9, Writing 7, report 2. Timers are optional active-section timers, continue in background while running, pause on navigation/submission, and never auto-submit. Discussion of every detailed solution may require additional time.

Enhanced ACT mathematics uses four choices, overriding the older five-choice instruction in the brief. Format reference: https://www.act.org/content/act/en/products-and-services/state-and-district-solutions/act-info-for-examinees.html

## Grading and persistence

`lib/diagnostic.mjs` grades exact answer indices, distinguishes mistakes from blanks, groups evidence by topic, counts words, and validates restored drafts. Section submission locks choices and reveals answers and translations. Explicit retry clears only that section. The report derives strengths and priorities from actual choices, with small-sample qualifications. No official score conversion is made.

Writing is one abbreviated task with a 135-word issue, three perspectives, a developed model answer, and four manual teacher-review domains. It is not automatically graded. Model commentary and translations appear after submission. The report includes only actual teacher selections and notes, with unreviewed areas marked as such.

Drafts, essay, timers, and feedback are saved under `act-space-diagnostic-v1` in browser localStorage. They are not shared across browsers/devices. A JSON download includes answers, outcomes, essay, timing, and feedback. Registration, server storage, roles, payments, and a full platform are intentionally outside scope.

## Verification

Run `node --test tests/diagnostic.test.mjs` for content completeness, lengths, question prompts, source labels, answer grading, omitted answers, topic recommendations, persistence validation, and independently calculated math solutions. Run `npm run build` for the production export.

Browser QA: home → lessons → trial navigation; all five sections; selected answers and essay surviving refresh; timer start/pause and saved elapsed time; locked answers; English 5/6, Math 1/7 with 6 blanks, Reading 5/5, Science 7/7; total 18/25; Russian support; manual writing feedback; JSON download; explicit reset of QA data. No browser console errors were reported. Desktop layout was visually inspected. Automated tests do not establish empirical ACT difficulty or predictive validity; items need classroom piloting.
