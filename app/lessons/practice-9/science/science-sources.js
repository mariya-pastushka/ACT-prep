import {bloodIntroduction,bloodRelationship,bloodProcedure,bloodExperiments,vesselRegions,vesselOrders,pressureChoices,gasIntroduction,gasTables} from '../../../../content/practice-9/science-data.mjs';
import MathNotation from '../../practice-2/math/notation';
import {row as m,frac as f,sub,words as w} from '../../../../content/practice-2/math-notation.mjs';
import base from '../../practice-1/science/science.module.css';
import css from './science.module.css';

const normal=sub('P',w('normal')),site=sub('P',w('site'));
const signed=n=>(n<0?'−':'')+Math.abs(n).toFixed(2);
const fmt=n=>n.toLocaleString('en-US');

function VesselFigure(){return <figure id="vessel-figure-1" tabIndex={-1} className={`${css.figure} ${css.anchor}`}>
 <svg viewBox="0 0 520 280" role="img" aria-label="Figure 1. Blood flows from left to right through a vessel. Ergotamine is injected at the central narrowed site of vasoconstriction.">
  <path d="M20 95H180C180 115 195 125 215 125H285C305 125 320 115 320 95H500M20 175H180C180 155 195 145 215 145H285C305 145 320 155 320 175H500" className={css.ink}/>
  {[115,135,155].map(y=><g key={y}><path d={`M35 ${y}H140M365 ${y}H480M132 ${y-4}L140 ${y}L132 ${y+4}M472 ${y-4}L480 ${y}L472 ${y+4}`} className={css.axis}/></g>)}
  <path d="M298 20L230 126L239 130L305 25M230 126L234 119M305 25L298 20M320 35L302 22M250 220L255 146M400 194L420 175" className={css.ink}/>
  <text x="325" y="36">ergotamine<tspan x="325" dy="27">injection</tspan></text>
  <text x="20" y="213">direction of<tspan x="20" dy="27">blood flow</tspan></text>
  <text x="344" y="218">blood vessel</text>
  <text x="250" y="240" textAnchor="middle">site of<tspan x="250" dy="28">vasoconstriction</tspan></text>
 </svg><figcaption>Figure 1 · Vasoconstriction occurs at the injection site.</figcaption>
 </figure>;}

function BloodTable({experiment}){return <div id={`vessel-table-${experiment.id}`} tabIndex={-1} className={`${base.tableCard} ${css.tableCard} ${css.anchor}`}>
 <div className={css.scroll} role="region" aria-label={`Blood vessels Table ${experiment.id}`} tabIndex={0}>
  <table className={base.table}><caption>Table {experiment.id}</caption><thead><tr><th scope="col">{experiment.heading}</th><th scope="col">%ΔBP</th></tr></thead><tbody>
   {experiment.rows.map(([value,drop])=><tr key={value} id={`vessel-${experiment.id}-row-${String(value).replace('.','-')}`} tabIndex={-1}><th scope="row">{experiment.id===2?value.toFixed(1):fmt(value)}</th><td>{drop.toFixed(1)}</td></tr>)}
  </tbody></table>
 </div></div>;}

export function BloodPassage(){return <section className={base.dataBlock} aria-labelledby="vessel-title">
 <h2 id="vessel-title" className={css.anchor}>Vasoconstriction and local blood pressure</h2>
 <p>{bloodIntroduction}</p><VesselFigure/>
 <p id="vessel-relationship" tabIndex={-1} className={css.anchor}>{bloodRelationship}</p>
 <div id="vessel-formula" tabIndex={-1} className={css.anchor}>
  <p>The percent change in blood pressure (%ΔBP) can be defined as:</p>
  <MathNotation value={m('%ΔBP = 100 × ',f(m(normal,' − ',site),normal))} display/>
  <p><strong>P<sub>normal</sub></strong> = normal blood pressure. <strong>P<sub>site</sub></strong> = pressure at the site of vasoconstriction.</p>
 </div>
 <p>{bloodProcedure}</p>
 {bloodExperiments.map(experiment=><section id={`vessel-experiment-${experiment.id}`} key={experiment.id} tabIndex={-1} className={css.section}>
  <h3>Experiment {experiment.id}</h3><p>{experiment.text}</p><BloodTable experiment={experiment}/>
 </section>)}
 </section>;}

function GasTable({table}){return <div id={`gas-table-${table.id}`} tabIndex={-1} className={`${base.tableCard} ${css.tableCard} ${css.anchor}`}>
 <div className={css.scroll} role="region" aria-label={`Gas Table ${table.id}, ${table.temperature} degrees Celsius`} tabIndex={0}>
 <table className={`${base.table} ${css.gasTable}`}><caption>Table {table.id} · {table.temperature}°C</caption><thead><tr><th scope="col">Gas</th><th scope="col">Initial pressure (atm)</th><th scope="col">Final pressure (atm)</th><th scope="col">Volume change (L)</th></tr></thead><tbody>
  {table.rows.map(([gas,initial,final,change])=><tr key={`${gas}-${initial}-${final}`} id={`gas-${table.id}-${gas.toLowerCase().replaceAll(' ','-')}-${initial}-${final}`} tabIndex={-1}><th scope="row">{gas}</th><td>{initial}</td><td>{final}</td><td>{signed(change)}</td></tr>)}
 </tbody></table>
 </div></div>;}

export function GasPassage(){return <section className={base.dataBlock} aria-labelledby="gas-title">
 <h2 id="gas-title" className={css.anchor}>Gas compression and volume changes</h2>
 <p id="gas-introduction" tabIndex={-1} className={css.anchor}>{gasIntroduction}</p>
 {gasTables.map(table=><GasTable key={table.id} table={table}/>)}
 </section>;}

function VesselDiagram({order}){return <svg viewBox="0 0 340 110" role="img" aria-label={`Regions from widest to narrowest: ${order.join(', ')}.`}>
 <path d="M15 20H105Q120 20 124 35H210Q224 35 228 45H320M15 90H105Q120 90 124 75H210Q224 75 228 65H320" className={css.ink}/>
 {[55,155,260].map((x,i)=><g key={x}><circle cx={x} cy="55" r="3" fill="#43334e"/><text x={x+11} y="63">{order[i]}</text></g>)}
 </svg>;}
export function VesselChoice({choice}){return <><span className={css.srOnly}>{choice.text}</span><VesselDiagram order={vesselOrders[choice.label]}/></>;}

function PressureDiagram({heights,label}){return <svg viewBox="0 0 420 330" role="img" aria-label={`${label}. Black bars show the normal reference; white bars show local pressure. ${label==='G'?'The white bars rise toward their reference as diameter increases.':label==='H'?'White and black bars are equal in every pair.':label==='F'?'The final white bar is nearly zero.':'The middle white bar is nearly zero.'}`}>
 <rect x="87" y="35" width="292" height="176" fill="#dedbe1" stroke="#8d8096"/>
 <path d="M75 211V25M70 35L75 25L80 35M87 311H384M374 306L384 311L374 316" className={css.axis}/>
 {heights.map((height,i)=>{const x=110+i*92;return <g key={i}>
  <rect x={x} y="61" width="24" height="150" fill="#30243b"/>
  <rect x={x+27} y={211-height*150} width="24" height={height*150} fill="#fff" stroke="#65516f"/>
  <text x={x+25} y="238" textAnchor="middle">{[0.4,0.8,1.2][i].toFixed(1)}</text>
 </g>;})}
 <text x="36" y="130" textAnchor="middle" transform="rotate(-90 36 130)" className={css.axisLabel}>pressure (mmHg)</text>
 <text x="236" y="269" textAnchor="middle" className={css.axisLabel}>diameter of site of<tspan x="236" dy="25">vasoconstriction (cm)</tspan></text>
 </svg>;}
export function PressureChoice({choice}){return <><span className={css.srOnly}>{choice.text}</span><PressureDiagram heights={pressureChoices[choice.label]} label={choice.label}/></>;}

export function QuestionExtras({question}){
 if(question.id===4)return <>
  <div id="vessel-question-4-data" tabIndex={-1} className={`${base.tableCard} ${css.tableCard} ${css.anchor}`}><div className={css.scroll} role="region" aria-label="Question 4 vessel measurements" tabIndex={0}>
   <table className={`${base.table} ${css.regionTable}`}><thead><tr><th scope="col">Location</th><th scope="col">Velocity of blood flow (mL/min)</th><th scope="col">Blood pressure (mmHg)</th></tr></thead><tbody>{vesselRegions.map(([location,flow,pressure])=><tr key={location}><th scope="row">{location}</th><td>{fmt(flow)}</td><td>{pressure}</td></tr>)}</tbody></table>
  </div></div>
  <p>Based on the information in the passage about blood flow, which of the following diagrams best represents the relative diameters of the three blood vessel regions?</p>
 </>;
 if(question.id===6)return <ul className={css.legend} aria-label="Pressure graph legend"><li><span className={css.swatch} style={{background:'#30243b'}}/>Normal blood pressure</li><li><span className={css.swatch} style={{background:'#fff'}}/>Blood pressure at the site of vasoconstriction</li></ul>;
 return null;
}

export function VolumeInterpolation({ru=false}){return <div className={css.calculation}>
 <p>{ru?'Оценка между соседними измерениями: от 8,8 до 9,3 изменение составляет 0,5. До 9,0 нужно пройти 0,2.':'Between the two measurements, the result rises by 0.5. Reaching 9.0 from 8.8 uses 0.2 of that rise.'}</p>
 <MathNotation value={m(f('0.2','0.5'),' = 0.4')} display/>
 <MathNotation value={m('450 + 0.4 × 50 = 470')} display/>
 <p>{ru?'Примерно 470 мл; ближайший предложенный ответ — 475 мл, B.':'Approximately 470 mL; the closest offered answer is 475 mL, B.'}</p>
 </div>;}

export function DiameterOrder({ru=false}){return <div className={css.figure}><p>{ru?'От широкого к узкому: A → C → B.':'From widest to narrowest: A → C → B.'}</p><VesselDiagram order={vesselOrders.J}/></div>;}

export function MatchExperiments({ru=false}){return <div className={css.calculation}><div className={css.scroll}>
 <table><caption>{ru?'Общая контрольная точка: 90 ударов/мин и 500 мл за удар.':'Common reference condition: 90 beats/min and 500 mL per beat.'}</caption><thead><tr><th>{ru?'Опыт':'Experiment'}</th><th>%ΔBP</th><th>{ru?'Диаметр':'Diameter'}</th></tr></thead><tbody><tr><th>1</th><td>9.3</td><td>{ru?'Ищем':'Unknown'}</td></tr><tr><th>2</th><td>9.3</td><td>0.8 cm</td></tr><tr><th>3</th><td>9.3</td><td>0.8 cm</td></tr></tbody></table>
 </div></div>;}

export function PressureComplements({ru=false}){return <div className={css.calculation}><p>{ru?'Нормальный эталон принят за 100%, а не за 100 мм рт. ст. Местное давление = 100% − процент снижения.':'Normalize each normal reference to 100%, not to 100 mmHg. Local pressure as a percentage of its reference equals 100% minus the percent drop.'}</p>
 <div className={css.scroll}><table><thead><tr><th>{ru?'Диаметр, см':'Diameter, cm'}</th><th>{ru?'Снижение, %':'Drop, %'}</th><th>{ru?'Осталось, %':'Remaining, %'}</th></tr></thead><tbody>{[[0.4,40.3],[0.8,9.3],[1.2,2.5]].map(([diameter,drop])=><tr key={diameter}><td>{diameter.toFixed(1)}</td><td>{drop.toFixed(1)}</td><td>{(100-drop).toFixed(1)}</td></tr>)}</tbody></table></div>
 </div>;}

export function ParticleCompression({ru=false}){return <div className={css.calculation}><p>{ru?'Поясняющая схема: число и размер частиц одинаковы, но при сжатии для них остаётся меньше пространства.':'Teaching sketch: the number and size of particles stay the same; compression leaves less space between them.'}</p><div className={css.particleGrid}>
 {[false,true].map(compressed=><section key={String(compressed)}><p>{ru?(compressed?'Больше давление, меньше объём':'Меньше давление, больше объём'):(compressed?'Higher pressure, smaller volume':'Lower pressure, larger volume')}</p><svg viewBox="0 0 200 120" role="img" aria-label={compressed?'Eight particles in a smaller container.':'Eight particles in a larger container.'}>
  <rect x={compressed?55:15} y="15" width={compressed?90:170} height="90" rx="4" fill="#fffdfa" stroke="#65516f" strokeWidth="1.6"/>
  {Array.from({length:8},(_,i)=><circle key={i} cx={(compressed?68:35)+(i%4)*(compressed?21:43)} cy={42+Math.floor(i/4)*36} r="5" fill="#9160a6"/>)}
 </svg></section>)}
 </div></div>;}

export function ReverseNitrogen({ru=false}){return <div className={css.calculation}>
 <p>{ru?'Сжатие: 2 → 4 атм. Было 10 л, стало 5 л.':'Compression: 2 → 4 atm. Volume goes from 10 L to 5 L.'}</p><MathNotation value={m('10 + (−5) = 5')} display/>
 <p>{ru?'Обратный ход того же образца: 4 → 2 атм. Было 5 л, стало 10 л.':'Reverse the same sample: 4 → 2 atm. Volume returns from 5 L to 10 L.'}</p><MathNotation value={m('ΔV = 10 − 5 = +5')} display/>
 </div>;}

export function NeonPrediction({ru=false}){return <div className={css.calculation}><div className={css.scroll}><table><caption>{ru?'P — давление. Показано отклонение от ожидаемого изменения −5,00 л. Последняя строка — оценка, не измерение из исходника.':'P means pressure. Departure from an ideal −5.00 L change is shown. The final row is a prediction, not a source measurement.'}</caption><thead><tr><th>{ru?'P, атм':'P, atm'}</th><th>ΔV, L</th><th>{ru?'Доп. спад, л':'Extra decrease, L'}</th></tr></thead><tbody><tr><td>1 → 2</td><td>−5.02</td><td>0.02</td></tr><tr><td>2 → 4</td><td>−5.03</td><td>0.03</td></tr><tr><td>4 → 8</td><td>−5.06</td><td>0.06</td></tr><tr><td>8 → 16</td><td>≈ −5.12</td><td>≈ 0.12</td></tr></tbody></table></div></div>;}
