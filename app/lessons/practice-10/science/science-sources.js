import { atmospheres, formTrials, planets, temperatureTrials, temperaturesWithoutWarming } from '../../../../content/practice-10/science-data.mjs';
import shared from '../../trial/trial.module.css';
import css from './science.module.css';

const temperatures = [0, 50, 100, 150, 200, 250, 300, 350, 400];
const altitudes = [200, 150, 100, 50, 0, -50, -100, -150, -200, -250];
const plotX = temperature => 78 + temperature;
const plotY = altitude => 147 - .61 * altitude;

function TemperatureFigure() {
 return (
  <figure id="s10-figure-1" className={`${css.figure} ${css.anchor}`}>
   <figcaption><strong>Figure 1.</strong> Atmospheric temperature and altitude</figcaption>
   <svg viewBox="0 0 505 353" role="img" aria-labelledby="s10-plot-title s10-plot-desc">
    <title id="s10-plot-title">Temperature profiles of Neptune, Saturn, and Jupiter</title>
    <desc id="s10-plot-desc">Temperature in kelvin is on the horizontal axis. Altitude relative to the highest cloud tops is on the vertical axis. The three profiles are redrawn from the supplied figure.</desc>
    <rect x="78" y={plotY(200)} width="400" height={plotY(-250) - plotY(200)} className={css.axis} />
    <path d="M78 147H478" className={css.cloudLine} />
    {temperatures.map(value => (
     <g key={value} transform={`translate(${plotX(value)} ${plotY(-250)})`}>
      <path d="M0 0v6" className={css.axis} />
      <text y="24" textAnchor="middle">{value}</text>
     </g>
    ))}
    {altitudes.map(value => (
     <g key={value} transform={`translate(78 ${plotY(value)})`}>
      <path d="M0 0h-6" className={css.axis} />
      <text x="-10" y="5" textAnchor="end">{String(value).replace('-', '−')}</text>
     </g>
    ))}
    <g transform="translate(78 147) scale(1 -.61)">
     <path className={css.curve} stroke="#305e83" d="M72 200 L50 150 V0 C49 -18 64 -85 78 -119 S118 -204 145 -250" />
     <path className={css.curve} stroke="#79538d" d="M133 200 C142 163 147 127 139 100 C126 56 110 38 95 18 Q90 13 95 6 L219 -250" />
     <path className={css.curve} stroke="#834729" d="M189 200 C195 169 204 126 206 106 Q209 88 193 68 C171 37 143 3 131 -19 Q124 -28 163 -54 C224 -94 318 -140 400 -188" />
    </g>
    <text x="103" y={plotY(-130)} fill="#305e83">Neptune</text>
    <text x="245" y={plotY(-130)} fill="#79538d">Saturn</text>
    <text x="396" y={plotY(-130)} fill="#834729">Jupiter</text>
    <text x="278" y="342" textAnchor="middle">Temperature (K)</text>
    <text x="15" y="161" textAnchor="middle" transform="rotate(-90 15 161)">Altitude above highest cloud tops (km)</text>
   </svg>
  </figure>
 );
}

function SourceTable({ id, title, headings, children, wide = false }) {
 return (
  <section id={id} className={`${css.tableSection} ${css.anchor}`}>
   <div className={css.scroll} role="region" aria-label={title} tabIndex={0}>
    <table className={`${css.table} ${wide ? css.wideTable : ''}`}>
     <caption>{title}</caption>
     <thead>{headings}</thead>
     <tbody>{children}</tbody>
    </table>
   </div>
  </section>
 );
}

export function PlanetsPassage() {
 return (
  <article id="s10-planets" className={`${shared.passage} ${css.passage} ${css.anchor}`}>
   <h2>Atmospheres of giant planets</h2>
   <p>There are four planets in our solar system called gas giants: Jupiter, Saturn, Uranus, and Neptune. They are so named because they are composed largely of gases rather than solids. Figure 1 shows how temperatures of the atmospheres of Jupiter, Neptune, and Saturn vary with altitude above the cloud tops. Table 1 gives the composition of the planets in both relative abundance of gases and the altitude at which those gases are most abundant. Table 2 gives what the temperature at the cloud tops would be without greenhouse warming.</p>
   <TemperatureFigure />
   <SourceTable id="s10-atmosphere-table" title="Table 1. Atmospheric composition" wide headings={<>
    <tr>
     <th rowSpan={2} scope="col">Gas</th>
     <th colSpan={3} scope="colgroup">Relative abundance (%)</th>
     <th colSpan={3} scope="colgroup">Altitude above cloud tops where most abundant (km)</th>
    </tr>
    <tr>{[...planets, ...planets].map((planet, index) => <th key={index} scope="col">{planet}</th>)}</tr>
   </>}>
    {atmospheres.map(({id, gas, abundance, altitude}) => <tr key={id} id={`s10-atmosphere-${id}`}>
     <th scope="row">{gas}</th>
     {[...abundance, ...altitude].map((value, index) => <td key={index}>{value}</td>)}
    </tr>)}
   </SourceTable>
   <SourceTable id="s10-warming-table" title="Table 2. Cloud-top temperatures" headings={
    <tr><th scope="col">Planet</th><th scope="col">Temperature at cloud tops without greenhouse warming (K)</th></tr>
   }>
    {temperaturesWithoutWarming.map(({id, planet, temperature}) => <tr key={id} id={`s10-warming-${id}`}>
     <th scope="row">{planet}</th><td>{temperature}</td>
    </tr>)}
   </SourceTable>
  </article>
 );
}

export function TabletPassage() {
 return (
  <article id="s10-tablets" className={`${shared.passage} ${css.passage} ${css.anchor}`}>
   <h2>Effervescent tablets in water</h2>
   <p>This is an original chemistry exercise with illustrative data. When an effervescent tablet is placed in water, it releases carbon dioxide. The students recorded how much gas had collected after 30 seconds and how long visible bubbling lasted.</p>
   <p id="s10-controls" className={css.anchor}>Each trial used 100 mL of water and the same mass and composition of tablet. In Experiment 1, the students used whole tablets and changed the starting water temperature. In Experiment 2, they held the water temperature at 20°C and changed the form of the tablet. In Experiment 2 they also recorded the gas volume after the bubbling ended.</p>
   <SourceTable id="s10-temperature-table" title="Table 3. Experiment 1 · Changing the water temperature" headings={
    <tr><th scope="col">Water temperature (°C)</th><th scope="col">Time until bubbling ended (s)</th><th scope="col">Gas after 30 s (mL)</th></tr>
   }>
    {temperatureTrials.map(({temperature, time, earlyVolume}) => <tr key={temperature} id={`s10-temperature-${temperature}`}>
     <th scope="row">{temperature}</th><td>{time}</td><td>{earlyVolume}</td>
    </tr>)}
   </SourceTable>
   <SourceTable id="s10-form-table" title="Table 4. Experiment 2 · Changing the tablet form" headings={
    <tr><th scope="col">Tablet form</th><th scope="col">Time until bubbling ended (s)</th><th scope="col">Gas after 30 s (mL)</th><th scope="col">Final gas volume (mL)</th></tr>
   }>
    {formTrials.map(({id, form, time, earlyVolume, total}) => <tr key={id} id={`s10-form-${id}`}>
     <th scope="row">{form}</th><td>{time}</td><td>{earlyVolume}</td><td>{total}</td>
    </tr>)}
   </SourceTable>
  </article>
 );
}
