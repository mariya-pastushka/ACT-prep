import {introduction,sampling,study1,study2,patterns,patternRows,charts,graphAges} from '../../../../content/practice-8/science-data.mjs';
import base from '../../practice-1/science/science.module.css';
import shared from '../../practice-1/practice.module.css';
import css from './science.module.css';
const fmt=n=>n.toLocaleString('en-US');
export function ScuteChoice({choice}){
 let y=22;
 return <svg viewBox="0 0 140 170" role="img" aria-label={`From head to tail: ${choice.pattern.split('-').map(s=>s==='M'?'major':'minor').join(', ')}.`}>
  <ellipse cx="70" cy="80" rx="48" ry="70" fill="#fffdfa" stroke="#65516f" strokeWidth="1.5"/>
  {choice.pattern.split('-').map((size,i)=>{const h=size==='M'?32:10,start=y;y+=h;return <polygon key={i} points={`64,${start} 76,${start} 83,${start+h/2} 76,${start+h} 64,${start+h} 57,${start+h/2}`} fill="#ece1f2" stroke="#65516f" strokeWidth="1.4"/>;})}
 </svg>;
}
function ShellFigure(){return <figure id="turtle-figure-1" tabIndex={-1} className={css.figure}>
 <svg viewBox="0 0 520 250" role="img" aria-label="Figure 1. Side view of a turtle shell. A bridge links the upper plate and lower plate; its vertical thickness is bridge height.">
  <path d="M65 130C65 50 335 50 335 130Q335 143 320 143H80Q65 143 65 130Z" fill="#fffdfa" stroke="#65516f" strokeWidth="1.8"/>
  <rect x="67" y="143" width="266" height="18" fill="#c9aed7" stroke="#65516f" strokeWidth="1.5"/>
  <path d="M65 174C65 155 335 155 335 174S65 193 65 174Z" fill="#fffdfa" stroke="#65516f" strokeWidth="1.8"/>
  <path d="M350 143H362M356 143V161M350 161H362M110 43L165 74M98 220L145 152M285 219L240 187" className={css.axis}/>
  <text x="65" y="35">upper plate</text><text x="65" y="241">bridge</text><text x="247" y="241">lower plate</text>
  <text x="373" y="143">bridge<tspan x="373" dy="25">height</tspan></text>
 </svg><figcaption>Figure 1 · The bridge connects the upper and lower plates.</figcaption></figure>;}
function Chart({chart}){
 const x=age=>80+(120-age)/120*410,y=value=>210-(value-chart.min)/(chart.max-chart.min)*180;
 return <figure id={chart.id} tabIndex={-1} className={css.figure}>
  <h3>{chart.title}</h3><svg viewBox="0 0 520 280" role="img" aria-label={`${chart.title} plotted against shell age. Age decreases from 120 thousand years on the left to zero on the right. Approximate reconstruction of the source graph.`}>
   {chart.ticks.map(value=><g key={value}><path d={`M80 ${y(value)}H490`} className={css.grid}/><text x="70" y={y(value)+6} textAnchor="end">{chart.unit==='cm'?value.toFixed(1):value}</text></g>)}
   <path d="M80 30V210H490" className={css.axis}/>
   {[120,100,80,60,40,20,0].map(age=><g key={age}><path d={`M${x(age)} 210v6`} className={css.axis}/><text x={x(age)} y="239" textAnchor="middle">{age}</text></g>)}
   <text x="285" y="271" textAnchor="middle" className={css.label}>Age of shells (thousands of years)</text>
   <text x="22" y="120" textAnchor="middle" transform="rotate(-90 22 120)" className={css.label}>{chart.unit}</text>
   <polyline points={chart.values.map((v,i)=>`${x(graphAges[i])},${y(v)}`).join(' ')} className={css.curve}/>
   {chart.values.map((v,i)=><circle key={i} cx={x(graphAges[i])} cy={y(v)} r="2.3" fill="#6d467e"/>)}
  </svg>
 </figure>;
}
export function TurtlePassage(){return <section className={base.dataBlock} aria-labelledby="turtle-title">
 <h2 id="turtle-title" className={shared.anchor}>Turtle shell studies</h2>
 <p>{introduction}</p><p id="turtle-sampling" tabIndex={-1} className={shared.anchor}>{sampling}</p>
 <section className={css.section}><h3>Study 1</h3><p id="turtle-study-1" tabIndex={-1} className={`${css.text} ${shared.anchor}`}>{study1}</p>
  <div id="turtle-size-rule" tabIndex={-1} className={`${css.text} ${shared.anchor}`}>
   <p>Scutes extending greater than <math aria-label="one eighth"><mfrac><mn>1</mn><mn>8</mn></mfrac></math> of the length of the shell were labeled <em>major</em> (M), where scutes extending less than or equal to <math aria-label="one eighth"><mfrac><mn>1</mn><mn>8</mn></mfrac></math> of the length of the shell were labeled <em>minor</em> (m). The pattern of scutes was recorded for each fossil. For each time period, the percent of fossils exhibiting each pattern is given in Table 1.</p>
  </div>
  <div id="turtle-table-1" tabIndex={-1} className={`${base.tableCard} ${css.tableCard}`}><div className={css.scroll} role="region" aria-label="Table 1 scute pattern percentages" tabIndex={0}>
   <table className={base.table}><caption>Table 1 · % shells with the following scute pattern</caption><thead><tr><th scope="col">Age of shells (years)</th>{patterns.map(p=><th scope="col" key={p}>{p}</th>)}</tr></thead><tbody>{patternRows.map(([age,...values])=><tr id={`turtle-age-${age}`} key={age} tabIndex={-1}><th scope="row">{fmt(age)}</th>{values.map((v,i)=><td key={i}>{v}</td>)}</tr>)}</tbody></table>
  </div></div>
 </section>
 <section className={css.section}><h3>Study 2</h3><p id="turtle-study-2" tabIndex={-1} className={`${css.text} ${shared.anchor}`}>{study2}</p><ShellFigure/>
 <p>For the shells of each age, the average of each measurement was calculated. The results are presented in Figure 2.</p>
 <div id="turtle-figure-2" tabIndex={-1} className={shared.anchor}>{charts.map(chart=><Chart key={chart.id} chart={chart}/>)}<p className={css.text}>Figure 2 · Curves recreated from the supplied image. Plotted values are approximate readings, not exact raw measurements. The age axis runs from older shells on the left to living turtles (0) on the right.</p></div>
 </section>
 </section>;}
export function Interpolation({ru=false}){return <div className={css.calculation}><p>{ru?'86 000 лет — середина между 85 000 и 87 000. В нужном столбце им соответствуют 21% и 30%.':'86,000 years lies halfway between 85,000 and 87,000. The matching percentages are 21% and 30%.'}</p><math display="block" aria-label="21 plus 30 divided by 2 equals 25.5 percent"><mrow><mfrac><mrow><mn>21</mn><mo>+</mo><mn>30</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>25.5</mn><mo>%</mo></mrow></math><p>{ru?'Ближайший вариант — 26%, J. Это оценка между измеренными возрастами.':'The closest option is 26%, J. This is an estimate between measured ages.'}</p></div>;}
