import {
  convectionIntro, convectionSetup, convectionGraphSetup, convectionTable,
  platingIntro, platingReactions, platingExperiments, cylinderChoices,
} from '../../../../content/practice-4/science-data.mjs';
import base from '../../practice-1/science/science.module.css';
import shared from '../../practice-3/science/science.module.css';
import css from './science.module.css';

function ConvectionDiagram() {
  return <figure id="convection-figure-1" tabIndex={-1} className={`${base.figure} ${css.figure}`}>
    <svg viewBox="0 0 384 211" role="img" aria-label="Side view of an insulated cylinder. Air is above the cool liquid. Cool liquid sinks along the left side and hot liquid rises along the right side. In the view from above, the insulation forms a ring around the liquid.">
      <g className={css.figureOutline}>
        <path d="M24 43V161a64 13 0 0 0 128 0V43" fill="#e2d9e8"/>
        <path d="M29 44V160a59 10 0 0 0 118 0V44" fill="#faf7fc"/>
        <ellipse cx="88" cy="43" rx="64" ry="13" fill="#e2d9e8"/>
        <ellipse cx="88" cy="43" rx="59" ry="9" fill="#faf7fc"/>
        <path d="M49 75C34 97 36 126 49 143l-8-4m8 4-1-9M126 143c13-19 13-48-1-68l1 9m-1-9 8 4"/>
        <circle cx="319" cy="109" r="58" fill="#e2d9e8"/>
        <circle cx="319" cy="109" r="47" fill="#faf7fc"/>
        <path d="M182 68l-31 17M280 41l15 19"/>
      </g>
      <g textAnchor="middle">
        <text x="88" y="22">air</text>
        <text x="88" y="73">cool liquid</text>
        <text x="88" y="147">hot liquid</text>
        <text x="207" y="63">insulation</text>
        <text x="272" y="33">insulation</text>
        <text x="319" y="113">liquid</text>
        <text x="88" y="199">side view</text>
        <text x="319" y="199">view from above</text>
      </g>
    </svg>
    <figcaption>Figure 1 · Convection in an insulated container</figcaption>
  </figure>;
}

const convectionGraphs = [
  {
    number: 2,
    xLabel: 'cross-sectional area (cm²)',
    xMin: 2, xStep: 1, yStep: 2,
    title: 'Cross-sectional area and temperature difference',
    description: 'The horizontal axis runs from 2 to 10 square centimeters. The vertical axis runs from 0 to 16 degrees Celsius. A straight line rises from about 3 degrees at 2 square centimeters to about 15 degrees at 10 square centimeters.',
    line: 'M62 245.25L326 41.25',
  },
  {
    number: 3,
    xLabel: 'height (cm)',
    xMin: 1, xStep: 0.5, yStep: 5,
    title: 'Container height and temperature difference',
    description: 'The horizontal axis runs from 1 to 5 centimeters. The vertical axis runs from 0 to 35 degrees Celsius. The curve becomes steeper as height increases, rising from about 2 degrees at 1 centimeter to about 32 degrees at 5 centimeters.',
    line: 'M62 278.5C84 276 106 271 128 264.4S172 247 194 235.2S238 202 260 170.4S304 102 326 48.2',
  },
];

function ConvectionGraph({ graph }) {
  const { number, xLabel, xMin, xStep, yStep, title, description, line } = graph;
  const horizontalDivisions = 8;
  const verticalDivisions = number === 2 ? 8 : 7;
  return <figure id={`convection-figure-${number}`} tabIndex={-1} className={`${base.figure} ${css.figure}`}>
    <svg viewBox="0 0 354 343" role="img" aria-label={description}>
      {Array.from({ length: horizontalDivisions + 1 }, (_, index) => {
        const x = 62 + index * 33;
        return <g key={index}>
          <path d={`M${x} 24V302`} className={css.plotGrid}/>
          {index % 2 === 0 && <text x={x} y="318" textAnchor="middle">{(xMin + index * xStep).toFixed(2)}</text>}
        </g>;
      })}
      {Array.from({ length: verticalDivisions + 1 }, (_, index) => {
        const y = 296.25 - index * 272 / verticalDivisions;
        return <g key={index}>
          <path d={`M56 ${y}H326`} className={css.plotGrid}/>
          <text x="51" y={y + 4.5} textAnchor="end">{(index * yStep).toFixed(1)}</text>
        </g>;
      })}
      <path d="M62 24V296.25H326" className={base.axis}/>
      <path d={line} className={css.plotLine}/>
      <text x="194" y="338" textAnchor="middle">{xLabel}</text>
      <text transform="translate(15 160) rotate(-90)" textAnchor="middle">ΔT (°C)</text>
    </svg>
    <figcaption>Figure {number} · {title}</figcaption>
  </figure>;
}

function DataTable({ table }) {
  return <div id={table.id} tabIndex={-1} className={`${base.tableCard} ${css.tableCard}`}>
    <table className={`${base.table} ${shared.table} ${css.table}`}>
      <caption>{table.caption}</caption>
      <thead><tr>{table.columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead>
      <tbody>{table.rows.map(([label, ...values]) => <tr key={label}
        id={table.id === 'convection-table-1' ? `convection-temperature-${label}` : undefined}
        tabIndex={table.id === 'convection-table-1' ? -1 : undefined} className={shared.cell}>
        <th scope="row">{label}</th>
        {values.map((value, index) => <td key={table.columns[index + 1]}>{value}</td>)}
      </tr>)}</tbody>
    </table>
  </div>;
}

export function ConvectionPassage() {
  return <section className={base.dataBlock} aria-labelledby="convection-title">
    <h2 id="convection-title" className={`${shared.anchor} ${css.passageTitle}`}>Convection</h2>
    <p>{convectionIntro}</p>
    <ConvectionDiagram/>
    <p>{convectionSetup}</p>
    <DataTable table={{
      id: 'convection-table-1',
      caption: 'Table 1 · Heated temperature and ΔT',
      columns: ['Heated temperature (°C)', 'ΔT (°C)'],
      rows: convectionTable,
    }}/>
    <p>{convectionGraphSetup}</p>
    <div className={base.dataGrid}>
      {convectionGraphs.map(graph => <ConvectionGraph key={graph.number} graph={graph}/>)}
    </div>
  </section>;
}

export function PlatingPassage() {
  return <section className={base.dataBlock} aria-labelledby="plating-title">
    <h2 id="plating-title" className={`${shared.anchor} ${css.passageTitle}`}>Precious metal plating</h2>
    <p>{platingIntro}</p>
    <ul className={css.passageText}>
      {platingReactions.map(([id, text]) => <li key={id} id={id} tabIndex={-1} className={shared.anchor}>{text}</li>)}
    </ul>
    <p>A chemist performed experiments on precious metal plating.</p>
    {platingExperiments.map(({ id, number, text, table }) => <section key={id} className={css.setup}>
      <h3 id={id} tabIndex={-1} className={shared.anchor}>Experiment {number}</h3>
      <p className={css.passageText}>{text}</p>
      <DataTable table={table}/>
    </section>)}
  </section>;
}

export function Cylinder({ label }) {
  const { width, height, description } = cylinderChoices[label];
  const x = 69 - width / 2;
  const top = 18;
  const bottom = top + height;
  const rim = Math.min(width / 8, height / 5);
  return <svg className={css.cylinder} viewBox="0 0 138 121" role="img" aria-label={description}>
    <ellipse cx="69" cy={top} rx={width / 2} ry={rim}/>
    <path d={`M${x} ${top}V${bottom}M${x + width} ${top}V${bottom}`}/>
    <ellipse cx="69" cy={bottom} rx={width / 2} ry={rim}/>
  </svg>;
}
