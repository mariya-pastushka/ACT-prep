# Practice 2 — Science

Route: `/lessons/practice-2/science`. All 12 supplied questions are included:
springs and forces (1–6), then de-icing mixtures (7–12).
Supplied key: `D G A H B H C J A H C G`.

## Figures and tables

The original spring diagrams and de-icing Figure 1 are kept byte-for-byte in
`public/practice-2/science`. The six source PNG hashes are recorded in
`science-source-assets.json` and checked in tests. SVG viewports show the diagrams
without modifying their bytes. The passages each have a Figure 1; evidence
anchors use `springs-` or `deicer-` prefixes to avoid ambiguity. Enlargement
preserves original axes, labels, bends and angles. Question 1 repeats its
measurements as clean text. Question 10 has four structural MathML fractions.
Both de-icing tables retain all source values and headings.

## Teaching decisions

- Keep the original six spring questions and lessons. Use the supplied symmetric
  load-sharing model without deriving unreported forces from schematic angles.
- Q7 checks each estimate against its neighboring observations; no exact linear
  temperature response is assumed.
- Q8 and Q10 use part / whole for Table 1's two-component mixtures. The
  magnesium-chloride experiment measures a performance index, not concentration.
- Q11 uses the starting proof and the observed trend for a qualitative estimate.
  The graph does not directly measure the new recipe or set a universal ceiling.
- Q9 and Q12 distinguish measured proof from the minimum TR and compare them
  within the same row. Eleven bilingual concepts and 24 vocabulary entries
  include rates, proportions, freezing point, interpolation, plateaus and TR.

## Attempts

Full attempts use `act-space-practice-2-science-v2`. If no v2 record exists,
valid answers 1–6 are copied from v1 into an unlocked draft. Learners can finish
7–12 and check the full test. The old record stays intact. A current v2 record,
including an intentionally cleared draft, always wins. Scores are correct / 12.

Run `node --test tests/*.test.mjs` and `npm run build`. Verify the original graph,
tables, fractions, answer persistence and full submission in the browser.
