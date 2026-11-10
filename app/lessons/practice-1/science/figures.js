import {soil,rust,sugarGraphChoices} from '../../../../content/practice-1/science-data.mjs';
import css from './science.module.css';
const fieldColors={A:'#76558a',B:'#c9b6d5'};
const round=n=>Number(n.toFixed(3));
function smoothPath(points){
 let d=`M${points[0].join(' ')}`;
 for(let i=0;i<points.length-1;i++){
  const a=points[Math.max(0,i-1)],b=points[i],c=points[i+1],e=points[Math.min(points.length-1,i+2)];
  d+=` C${round(b[0]+(c[0]-a[0])/6)} ${round(b[1]+(c[1]-a[1])/6)} ${round(c[0]-(e[0]-b[0])/6)} ${round(c[1]-(e[1]-b[1])/6)} ${c.join(' ')}`;
 }
 return d;
}
function FieldLegend(){return <ul className={css.legend}>{['A','B'].map(field=><li key={field}><span className={css.swatch} style={{background:fieldColors[field]}} aria-hidden="true"/>Field {field}</li>)}</ul>}
export function SoilChart({kind}){
 const density=kind==='density',data=density?soil.density:soil.yield;
 const min=density?1.1:0,max=density?1.8:18,step=density?0.1:2;
 const left=65,right=580,top=26,bottom=343;
 const y=v=>bottom-(v-min)/(max-min)*(bottom-top);
 const ticks=Array.from({length:Math.round((max-min)/step)+1},(_,i)=>min+i*step);
 return <figure id={density?'soil-figure-1':'soil-figure-2'} className={css.figure}>
  <h3 className={css.sourceTitle}>{density?'Figure 1 · Bulk density':'Figure 2 · Crop yield'}</h3><FieldLegend/>
  <svg viewBox="0 0 600 405" role="img" aria-label={density?'Bulk density for Years 1–5. Field A: 1.30, 1.45, 1.35, 1.50, 1.70 g/cm³. Field B: 1.20, 1.40, 1.30, 1.40, 1.30 g/cm³.':'Crop yields for Years 1–5. Field A: 10, 14, 13, 16, 17 tons. Field B: 10, 11, 14, 12, 8 tons.'}>
   {ticks.map(t=><g key={t}><path d={`M${left} ${y(t)}H${right}`} className={css.grid}/><text x={left-9} y={y(t)+5} textAnchor="end" className={css.chartText}>{density?t.toFixed(1):Math.round(t)}</text></g>)}
   {soil.years.map((year,i)=>{const cx=left+(i+0.5)*(right-left)/5;return <g key={year}>{['A','B'].map((field,j)=><rect key={field} x={cx-30+j*32} y={y(data[field][i])} width="28" height={bottom-y(data[field][i])} fill={fieldColors[field]}><title>{`Year ${year}, Field ${field}: ${data[field][i]} ${density?'g/cm³':'tons'}`}</title></rect>)}<text x={cx} y={bottom+29} textAnchor="middle" className={css.chartText}>{year}</text></g>})}
   <path d={`M${left} ${top}V${bottom}H${right}`} className={css.axis}/>
   <text x="325" y="393" textAnchor="middle" className={css.axisTitle}>year</text><text transform="translate(17 190) rotate(-90)" textAnchor="middle" className={css.axisTitle}>{density?'bulk density (g/cm³)':'crop yield (tons)'}</text>
  </svg>
  <figcaption>{density?'The vertical axis begins at 1.1 g/cm³. Read values from the scale.':'Crop yield at each field in each of the five study years.'}</figcaption>
  <details className={css.dataDetails}><summary>View values as a table</summary><div className={css.tableWrap}><table className={css.table}><caption>{density?'Bulk density (g/cm³)':'Crop yield (tons)'}</caption><thead><tr><th>Year</th><th>Field A</th><th>Field B</th></tr></thead><tbody>{soil.years.map((year,i)=><tr key={year}><th>{year}</th><td>{density?data.A[i].toFixed(2):data.A[i]}</td><td>{density?data.B[i].toFixed(2):data.B[i]}</td></tr>)}</tbody></table></div></details>
 </figure>;
}
export function RustGraph({annotated=false}){
 const left=65,right=580,top=24,bottom=343;
 const x=day=>left+(day-1)/9*(right-left),y=value=>bottom-value/3.5*(bottom-top);
 return <figure id={annotated?undefined:'rust-figure-1'} className={css.figure}>
  <h3 className={css.sourceTitle}>{annotated?'Reading Figure 1 · 0.56 g at about Day 10':'Figure 1 · Fe₂O₃ produced at different pH levels'}</h3>
  <ul className={css.legend}>{rust.phCurves.map(curve=><li key={curve.ph}><svg viewBox="0 0 44 12" className={css.lineKey} aria-hidden="true"><path d="M1 6H43" stroke="#5b4767" strokeWidth="2.5" strokeDasharray={curve.dash||undefined}/></svg>{curve.label}</li>)}</ul>
  <svg viewBox="0 0 600 405" role="img" aria-label={annotated?'At approximately Day 10, the solid pH 10.0 curve reaches 0.56 g, matching the salt solution on Day 2.':'Amount of Fe₂O₃ in grams versus day. Four curves: pH 6.0 short dashes, pH 7.0 dots, pH 8.0 long dashes, pH 10.0 solid. The solid curve reaches about 0.56 g on Day 10.'}>
   {Array.from({length:8},(_,i)=>i*0.5).map(v=><g key={v}><path d={`M${left} ${y(v)}H${right}`} className={css.grid}/><text x={left-9} y={y(v)+5} textAnchor="end" className={css.chartText}>{v.toFixed(2)}</text></g>)}
   {Array.from({length:10},(_,i)=>i+1).map(day=><g key={day}><path d={`M${x(day)} ${top}V${bottom}`} className={css.grid}/><text x={x(day)} y={bottom+28} textAnchor="middle" className={css.chartText}>{day}</text></g>)}
   {rust.phCurves.map(curve=><path key={curve.ph} d={smoothPath(curve.values.map((v,i)=>[x(i+1),y(v)]))} fill="none" stroke={annotated&&curve.ph===10?'#8f56aa':annotated?'#b5a8bd':'#5b4767'} strokeWidth={annotated&&curve.ph===10?4:3} strokeDasharray={curve.dash||undefined}/>)}
   <path d={`M${left} ${top}V${bottom}H${right}`} className={css.axis}/>
   {annotated&&<><path d={`M${left} ${y(0.56)}H${x(10)}V${bottom}`} fill="none" stroke="#a376b7" strokeDasharray="5 5" strokeWidth="2"/><circle cx={x(10)} cy={y(0.56)} r="5" fill="#8f56aa"/><text x={x(10)-8} y={y(0.56)-17} textAnchor="end" className={css.chartText}>≈ 0.56 g</text></>}
   <text x="325" y="393" textAnchor="middle" className={css.axisTitle}>day</text><text transform="translate(17 185) rotate(-90)" textAnchor="middle" className={css.axisTitle}>g Fe₂O₃</text>
  </svg>
  <figcaption>{annotated?'Match the target mass from Table 1 to the solid pH 10.0 curve, then read the day.':'Graph readings are approximate. The pH 10.0 trial is the solid line.'}</figcaption>
 </figure>;
}
export function SugarOption({option}){
 const data=sugarGraphChoices[option];
 const x=day=>54+(day-2)/6*220,y=value=>164-value/0.2*140;
 return <svg viewBox="0 0 300 214" role="img" aria-label={`Graph ${option}. ${data.description}`}>
  {[0,0.05,0.10,0.15,0.20].map(v=><g key={v}><path d={`M50 ${y(v)}h4`} className={css.axis}/><text x="46" y={y(v)+4} textAnchor="end" className={css.chartText}>{v.toFixed(2)}</text></g>)}
  {rust.days.map(day=><g key={day}><path d={`M${x(day)} 164v5`} className={css.axis}/><text x={x(day)} y="185" textAnchor="middle" className={css.chartText}>{day}</text></g>)}
  <path d="M54 24V164H274" className={css.axis}/>
  <path d={option==='F'?data.values.map((v,i)=>`${i?'L':'M'}${x(rust.days[i])} ${y(v)}`).join(' '):smoothPath(data.values.map((v,i)=>[x(rust.days[i]),y(v)]))} fill="none" stroke="#65506f" strokeWidth="2.5"/>
  <text x="163" y="207" textAnchor="middle" className={css.axisTitle}>day</text><text transform="translate(12 95) rotate(-90)" textAnchor="middle" className={css.axisTitle}>g Fe₂O₃</text>
 </svg>;
}
