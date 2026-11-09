# Practice 1 — Mathematics

Route: `/lessons/practice-1/math`. The shared PracticeNav places Mathematics directly after English. Reading and Science remain disabled until material is supplied.

Content: 15 questions transcribed from the supplied screenshots, retaining five options and original A–E / F–K labels. Question 13 uses the user’s supplied missing stem. Advertising is omitted. Russian solutions contain the given information, a rule, numbered steps, a verification, and a common-error explanation. No official scaled ACT score is inferred.

Verified answer key: D H D F E F B J B J C H C H C.

Important details: Q8 fixes x = 4 through the scale factor 6/3 = 2, so y = 2x = 8 = x + 4 (J). Q14’s formula requires p ≠ 0; the degenerate p = 0 case is explained separately. Q15 uses an exponential 2ˣ, not 2x.

SVG diagrams cover the interval, similar triangles, square diagonal, coordinate slope, rectangular areas, and the right triangle for secant. Solved versions label computed quantities and roles of sides. `math-geometry.mjs` supplies coordinate models tested for exact side relationships. Similar triangles and the number line keep readable widths and scroll horizontally on narrow screens.

The 11-topic Russian lecture includes geometry, trigonometry, algebra, weighted means, functions, divisors, short exercises, hidden self-check solutions, and an English/Russian vocabulary table.

Math answers use the independent localStorage key `act-space-practice-1-math-v1`; English progress is untouched. Submission locks answers. Explicit retry resets only Mathematics.

Validation: `node --test tests/*.test.mjs` (16 passing tests), production export, browser navigation English ↔ Mathematics, all 15 choices saved after reload, 15/15 result, locked choices, Russian solutions, SVG inspection and corrected label spacing. QA answers were cleared afterward.
