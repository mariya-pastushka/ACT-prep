# Practice 2 — New Beginnings

- Route: `/lessons/practice-2`; separate Practice 2 button on Lessons.
- Four source paragraphs are transcribed with intentional test errors. Paragraph labels are distinct from Sentence 1–5 labels in Paragraph 2. Advertising is omitted.
- Fifteen questions retain IDs 16–30, supplied choices, and the supplied key: G C H D F D F C G D G A G A H.
- Each explanation gives a source quotation, a clickable paragraph reference, a short English explanation and example, distractor analysis, and structured Russian teaching support (translation, reasoning steps, rule, example, common mistakes).
- The ten-topic lecture is Russian-first, with translated English examples, notebook tasks, and expandable English explanations. It teaches clause boundaries, connectors, inverted agreement, lists/appositives, modifiers, pronouns, chronology, descriptive evidence, time words, and narrative tenses.
- Question 28 explicitly distinguishes the clearest supplied answer from the claim that all alternative -ing constructions are ungrammatical. Question 25 explains why since is least suitable in this context, rather than inventing a universal prohibition.
- `app/lessons/english-practice.js` is shared by the two English practices. Test-specific content, navigation, insertion markers, and notebook rules remain in each `english-test.mjs` configuration.
- Practice 1 keeps `act-space-practice-1-english-v1`; Practice 2 uses `act-space-practice-2-english-v1`. No login, backend storage, or new platform services are introduced. Submission locks answers; an explicit retry clears only that practice.
- Checks: 22 passing Node tests and a successful production build. Browser QA covered Lessons navigation, all 15 supplied-key answers (15/15), refresh persistence, locked choices, English/Russian explanations, lecture headings, source-paragraph links, reset, and Practice 1 regression. No browser console errors were reported; QA answers were cleared.

Content is user-supplied practice material, not represented as an official ACT paper. Practice performance is not converted into an official ACT score.
