# Practice 1 — Science

Route: `/lessons/practice-1/science`. Questions 1–5 use the supplied soil passage,
two figures and two tables. Questions 6–10 use the rust passage, reaction, solution
table and pH graph. Source numbering restarts between passages; HTML reference IDs
include `soil-` or `rust-` so evidence links are unambiguous.

Supplied answer key: `A J C J D J B J A F`. Odd choices are A–D, even F/G/H/J.
Question 4 retains the two answer columns. Question 10 has four redrawn graph
choices. Advertising text is omitted. The six-topic lecture has English teaching
blocks, expanded Russian support, worked examples and self-check exercises.

## Source interpretation

- Figure 1 density readings include mid-grid values 1.45 and 1.35. Preserve the
  source's truncated density axis (1.1–1.8); do not visually imply a zero baseline.
- Keep the opposing density, yield and SOM comparisons. Question 1 asks for a
  particular supporting dataset, not agreement among all quality measures.
- Table 1's SOM boundaries are transcribed as supplied; no percentage unit or
  additional boundary precision is invented.
- pH curves are approximate digitizations of a plotted source, not new measured
  values. Preserve the small pH-10 decline around Day 9. Day 10 is approximately
  0.56 g, matching the salt-solution Day-2 value in Question 8.
- Keep the supplied reaction as the question's model. Explanations distinguish
  reactants/products and mole coefficients; they do not treat those coefficients
  as gram ratios or present the model as a full account of real-world corrosion.
- Question 3 is a prediction requiring the root/residue organic-matter connection.
  A separately labeled USDA NRCS background link supports that connection; it is
  not presented as a sentence or measurement from the supplied passage.

Attempt key: `act-space-practice-1-science-v1`. Retry affects only this section.
Score is raw correct / 10. No official ACT scaled-score conversion is inferred.

Run `node --test tests/*.test.mjs` and `npm run build`. Mathematics content is
outside this change; its shared Practice 1 navigation now links to Science.
