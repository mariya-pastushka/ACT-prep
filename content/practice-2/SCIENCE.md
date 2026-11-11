# Practice 2 — Science, Questions 1–6

Route: `/lessons/practice-2/science`.
The supplied test has 12 questions, but only Questions 1–6 have been provided.
Only those six are rendered, graded or explained. Key: `D G A H B H`.

## Original figures

The user explicitly required exact correspondence with the original drawings.
Five source PNGs are copied unchanged into `public/practice-2/science`. Their
original SHA-256 hashes are recorded in `science-source-assets.json` and checked
in tests. No AI regeneration, resampling or redrawing is used.

`scienceFigures` defines native source dimensions and display viewports. The SVG
wrapper clips away surrounding passage text without changing the image bytes.
All spring bends, board angles, loads, dimensions and type remain original.
Question 1 uses four viewports of its original answer drawings, including the
original letters. Separate clean text captions repeat the printed lengths so the
partly obscured zero in source option B remains unambiguous without retouching.
Modal enlargement
and a zoom slider allow inspecting small labels, including on narrow screens.
Printed-measurement tables provide an accessible equivalent of the trial data.

Do not reconstruct shapes from numerical lengths: the source diagrams are
schematic. In particular, retain all board tilts in Figure 4 and distinguish the
0.25 m movable board from the 0.50 m upper B–C separation.

## Evidence and scope

- Unloaded length is 0.30 m; extension is measured from that value.
- Q1 compares one 10 N load with the equal share in Trial 3's 20 N pair.
- Q2 uses B lengths 0.45 → 0.40 → 0.32 m, not C lengths.
- Q4 uses the question's symmetric load-sharing comparison: the total supported
  load in Trial 5 includes the board and the placed 5 N weight.
- Do not infer undisclosed numerical spring forces in the tilted trials. The
  source test uses an idealized load-sharing comparison; do not replace its
  diagrams with a newly assumed geometry or infer an axial stiffness from them.
- Q6 compares extensions 0.10 and 0.20 m of the same spring. The lecture gives
  the ideal linear elastic-energy formula and clearly distinguishes extension
  from total length. No numerical joule value is invented.

Six bilingual concept lessons, twelve vocabulary entries and self-check exercises
unlock after submission. Fractions use the existing native MathML renderer.
Attempt key: `act-space-practice-2-science-v1`, currently scoped to six available
items. Revisit attempt migration/versioning when adding Questions 7–12 so a
previously submitted six-question attempt is not silently treated as a full test.

Checks: `node --test tests/*.test.mjs`, `npm run build`, and browser verification
of source viewports, enlargement, selection, submission and mobile layout.
