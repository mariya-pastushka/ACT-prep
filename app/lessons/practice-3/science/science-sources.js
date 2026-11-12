import { atmosphere, cometIntro, scientists, cottonText, cottonTables, cottonCellId, cottonTableId, growthPoints } from '../../../../content/practice-3/science-data.mjs';
import base from '../../practice-1/science/science.module.css';
import css from './science.module.css';

const layerPositions = [
  { x: 105, y: 21, width: 132, boundary: 'M84 45C188 8 323 36 419 105', tickY: 50 },
  { x: 111, y: 98, width: 126, boundary: 'M84 193C242 117 419 214 419 398', tickY: 199 },
  { x: 107, y: 203, width: 120, boundary: 'M84 245C219 170 375 256 375 398', tickY: 251 },
  { x: 107, y: 244, width: 124, boundary: 'M84 291C179 209 338 281 338 398', tickY: 297 },
  { x: 107, y: 288, width: 120, boundary: 'M84 398A102 102 0 0 1 288 398', tickY: 403 },
];

function AtmosphereFigure() {
  return <figure id="comet-figure-1" tabIndex={-1} className={`${base.figure} ${css.atmosphere} ${css.anchor}`}>
    <svg viewBox="0 0 437 419" role="img" aria-label="Figure 1. Test diagram of regions around Earth. From sea level upward: troposphere, 0 to 15 km; stratosphere, 15 to 50 km; mesosphere, 50 to 85 km; thermosphere, 85 to 600 km; magnetosphere, above 600 km.">
      <text transform="translate(23 281) rotate(-90)">kilometers above sea level</text>
      {atmosphere.map((layer, index) => {
        const pos = layerPositions[index];
        return <g key={layer.id} id={`layer-${layer.id}`} tabIndex={-1} className={css.layer}>
          <path d={pos.boundary}/>
          <text x="73" y={pos.tickY} textAnchor="end">{layer.from}</text>
          <rect className={css.bandLabel} x={pos.x - 5} y={pos.y - 18} width={pos.width} height="24" rx="4"/>
          <text x={pos.x} y={pos.y}>{layer.label}</text>
        </g>;
      })}
      <text x="150" y="340">Earth</text>
    </svg>
    <figcaption>Figure 1 · Regions and altitude labels from the passage diagram</figcaption>
  </figure>;
}

export function CometsPassage() {
  return <section className={base.dataBlock} aria-labelledby="comets-title">
    <span className="eyebrow">PASSAGE 1 · QUESTIONS 1–7</span>
    <h2 id="comets-title" className={css.anchor}>The Small Comet debate</h2>
    {cometIntro.map(([id, text]) => <p key={id} id={id} tabIndex={-1} className={css.anchor}>{text}</p>)}
    <AtmosphereFigure/>
    <p>Two scientists debate whether there is a constant rain of comets burning up in Earth’s magnetosphere.</p>
    {scientists.map(scientist => <section key={scientist.title} className={css.viewpoint}>
      <h3>{scientist.title}</h3>
      {scientist.parts.map(([id, text]) => <p key={id} id={id} tabIndex={-1} className={css.anchor}>{text}</p>)}
    </section>)}
  </section>;
}

function CottonTable({ table }) {
  return <div id={cottonTableId(table.id)} tabIndex={-1} className={`${base.tableCard} ${css.tableCard} ${css.anchor}`}>
    <table className={`${base.table} ${css.table}`}>
      <caption>Table {table.number} · {table.title}</caption>
      <thead><tr>
        <th scope="col">Line</th><th scope="col">{table.dayHeading}</th>
        <th scope="col">Average amount of hydrogen peroxide (μmol/mg)</th>
        <th scope="col">Average cotton fiber length (cm)</th>
      </tr></thead>
      <tbody>{table.rows.map(row => <tr key={row.line}>
        <th scope="row">{row.line}</th>
        {['day', 'peroxide', 'length'].map(field => <td key={field} id={cottonCellId(table.id, row.line, field)} tabIndex={-1} className={css.cell}>{row[field]}</td>)}
      </tr>)}</tbody>
    </table>
  </div>;
}

export function CottonPassage() {
  return <section className={base.dataBlock} aria-labelledby="cotton-title">
    <span className="eyebrow">PASSAGE 2 · QUESTIONS 8–13</span>
    <h2 id="cotton-title" className={css.anchor}>Cotton fiber growth</h2>
    <p id="cotton-fiber" tabIndex={-1} className={css.anchor}>{cottonText.fiber}</p>
    <p id="cotton-setup" tabIndex={-1} className={css.anchor}>{cottonText.setup}</p>
    <h3>Experiment</h3>
    {cottonTables.map(table => <div key={table.id} className={css.measurement}>
      <p id={`cotton-method-${table.id}`} tabIndex={-1} className={css.anchor}>{cottonText[table.id]}</p>
      <CottonTable table={table}/>
    </div>)}
  </section>;
}

const xMean = growthPoints.reduce((sum, point) => sum + point.day, 0) / growthPoints.length;
const yMean = growthPoints.reduce((sum, point) => sum + point.length, 0) / growthPoints.length;
const slope = growthPoints.reduce((sum, point) => sum + (point.day - xMean) * (point.length - yMean), 0)
  / growthPoints.reduce((sum, point) => sum + (point.day - xMean) ** 2, 0);
const predict = day => yMean + slope * (day - xMean);
const plotX = day => 55 + 19 * day;
const plotY = length => 227 - 27 * length;

export function GrowthGraph({ ru = false }) {
  return <figure className={`${base.figure} ${css.growth}`}>
    <svg viewBox="0 0 468 280" role="img" aria-label={ru ? 'График 12 средних из таблиц. День роста на оси x, длина волокна в сантиметрах на оси y. Линия приближения поднимается слева направо.' : 'Scatter plot of the 12 table averages. Day on the horizontal axis, fiber length in centimeters on the vertical axis. The best-fit line slopes upward.'}>
      <path d="M55 35V227H441" className={base.axis}/>
      {[0, 1, 2, 3, 4, 5, 6, 7].map(value => <g key={value}>
        <path d={`M55 ${plotY(value)}H435`} className={base.grid}/>
        <text x="46" y={plotY(value) + 5} textAnchor="end">{value}</text>
      </g>)}
      {[0, 5, 10, 15, 20].map(day => <text key={day} x={plotX(day)} y="247" textAnchor="middle">{day}</text>)}
      <text x="55" y="23">{ru ? 'Длина волокна (см)' : 'Fiber length (cm)'}</text>
      <text x="435" y="270" textAnchor="end">{ru ? 'День роста' : 'Day of elongation'}</text>
      <path d={`M${plotX(1)} ${plotY(predict(1))}L${plotX(20)} ${plotY(predict(20))}`} className={css.fitLine}/>
      {growthPoints.map(point => <circle key={`${point.line}-${point.day}`} cx={plotX(point.day)} cy={plotY(point.length)} r="4.2" className={css.point}>
        <title>{point.line} · {ru ? 'день' : 'day'} {point.day} · {point.length} {ru ? 'см' : 'cm'}</title>
      </circle>)}
    </svg>
    <figcaption>{ru ? 'Точки — средние из таблиц, а не результаты по отдельным растениям. Линия рассчитана по всем 12 значениям, включая совпадающие точки.' : 'The dots are the 12 table averages. The line is fitted to all 12 values, including overlapping points.'}</figcaption>
  </figure>;
}
