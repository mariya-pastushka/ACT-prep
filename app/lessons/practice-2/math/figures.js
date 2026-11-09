import {useId} from 'react';
import {bookVotes,pieSlices,sectorPath,parallelLines,squareCircle} from '../../../../content/practice-2/math-geometry.mjs';
import css from './math.module.css';
const colors=['#a77abb','#d4ab66','#74a99a'];
function Parallel({solved}){
 const g=parallelLines;
 return <svg viewBox="0 0 570 395" role="img" aria-label={solved?'Две параллельные горизонтали и секущие. Внутренние углы нижнего треугольника равны r, s и t по вертикальным углам.':'Two parallel horizontal lines cut by two transversals. Angles p, q, r, s, t and u are labeled.'}>
  {solved&&<polygon points={`${g.leftLower} ${g.rightLower} ${g.crossing}`} fill="#eee0f5"/>}
  <path d="M45 70H540M90 190H440M85 25L200 370M465 25L140 350" className={css.ink}/>
  <path d="M475 64l7 6-7 6M375 184l7 6-7 6" className={css.highlight}/>
  <text x="120" y="56" className={css.angle}>p°</text><text x="391" y="56" className={css.angle}>q°</text>
  <text x="113" y="175" className={css.angle} style={solved?{fill:colors[0]}:{}}>r°</text><text x="322" y="175" className={css.angle} style={solved?{fill:colors[1]}:{}}>s°</text>
  <text x="170" y="358" className={css.angle} style={solved?{fill:colors[2]}:{}}>t°</text><text x="213" y="317" className={css.angle}>u°</text>
  {solved&&<><text x="154" y="222" className={css.angle} style={{fill:colors[0]}}>r°</text><text x="251" y="220" className={css.angle} style={{fill:colors[1]}}>s°</text><text x="182" y="284" className={css.angle} style={{fill:colors[2]}}>t°</text></>}
 </svg>;
}
function Semicircle({solved}){
 const g=squareCircle;
 return <svg viewBox="0 0 425 305" role="img" aria-label={solved?'Квадрат ABCD со стороной 10. CD — диаметр круга, радиус OC равен 5. Закрашен левый полукруг.':'Square ABCD with side CD as the vertical diameter of a circle centered at O. The left semicircle is shaded.'}>
  <path d={`M ${g.cx} ${g.top} A ${g.r} ${g.r} 0 0 0 ${g.cx} ${g.top+g.side} Z`} fill="#cfb6de"/>
  <rect x={g.left} y={g.top} width={g.side} height={g.side} className={css.ink}/>
  <circle cx={g.cx} cy={g.cy} r={g.r} className={css.ink}/>
  <circle cx={g.cx} cy={g.cy} r="4" fill="#43334e"/>
  <text x="52" y="278">A</text><text x="52" y="44">B</text><text x="265" y="44">C</text><text x="265" y="278">D</text><text x="282" y="163">O</text>
  {solved&&<><path d="M270 55V155" className={css.highlight}/><text x="284" y="108" className={css.labelBg}>r = 5</text><path d="M55 55V255M50 55H60M50 255H60" className={css.helper}/><text transform="translate(37 185) rotate(-90)" className={css.point}>CD = 10</text><text x="137" y="161" className={css.point}>½ circle</text></>}
 </svg>;
}
function Box(){return <svg viewBox="0 0 520 300" role="img" aria-label="Коробка с размерами 9, 5 и 3 сантиметра. Большая передняя грань 9 на 5 выделена фиолетовым.">
 <polygon points="95,105 365,105 365,255 95,255" fill="#e6d6ef"/><polygon points="95,105 180,45 450,45 365,105" fill="#f6f0fa"/><polygon points="365,105 450,45 450,195 365,255" fill="#f4e8b9"/>
 <path d="M95 105H365V255H95ZM95 105 180 45H450V195L365 255M365 105 450 45" className={css.ink}/><path d="M180 45V195L95 255M180 195H450" className={css.helper}/>
 <text x="230" y="280" textAnchor="middle">9 cm</text><text x="71" y="183" textAnchor="end">5 cm</text><text x="427" y="239" className={css.point}>3 cm</text><text x="228" y="181" textAnchor="middle">9 × 5 = 45 cm²</text>
 </svg>}
const sx=x=>220+28*x,sy=y=>210-28*y;
function CoordinateGraph({type}){
 const clipId=useId();
 const ticks=Array.from({length:13},(_,i)=>i-6);
 return <svg viewBox="0 0 520 420" role="img" aria-label={type==='distance'?'Точки A: минус 2, 4 и B: 1, минус 2. Катеты вспомогательного прямоугольного треугольника равны 3 и 6.':type==='intersection'?'Графики двух прямых пересекаются в точке 2, минус 4.':'Прямая y = 2x − 2 проходит через 3, 4 и пересекает ось x в точке 1, 0.'}>
  <defs><clipPath id={clipId}><rect x={sx(-5)} y={sy(6)} width="336" height="336"/></clipPath></defs>
  {ticks.filter(n=>n>=-5&&n<=7).map(n=><path key={'v'+n} d={`M${sx(n)} ${sy(6)}V${sy(-6)}`} className={css.grid}/>)}
  {ticks.map(n=><path key={'h'+n} d={`M${sx(-5)} ${sy(n)}H${sx(7)}`} className={css.grid}/>)}
  <path d={`M${sx(-5)-8} ${sy(0)}H${sx(7)+14}m-7 -4 7 4-7 4M${sx(0)} ${sy(-6)+8}V${sy(6)-14}m-4 7 4-7 4 7`} className={css.axis}/>
  <text x={sx(7)+25} y={sy(0)+5}>x</text><text x={sx(0)-6} y={sy(6)-23}>y</text>
  {[-4,-2,2,4,6].map(n=><text key={'x'+n} x={sx(n)} y={sy(0)+18} textAnchor="middle" className={css.small}>{n}</text>)}
  {[-6,-4,-2,2,4,6].map(n=><text key={'y'+n} x={sx(0)-10} y={sy(n)+4} textAnchor="end" className={css.small}>{n}</text>)}
  {type==='intersection'&&<><g clipPath={`url(#${clipId})`}><path d={`M${sx(-5)} ${sy(6.5)}L${sx(7)} ${sy(-11.5)}`} stroke="#a77abb" strokeWidth="3"/><path d={`M${sx(-5)} ${sy(-39)}L${sx(7)} ${sy(21)}`} stroke="#c39339" strokeWidth="3"/></g><circle cx={sx(2)} cy={sy(-4)} r="5" fill="#68447b"/><text x={sx(2)+12} y={sy(-4)-9} className={`${css.point} ${css.labelBg}`}>(2, −4)</text><text x="335" y="65" className={css.small} style={{fill:'#9063a5'}}>3x + 2y = −2</text><text x="335" y="87" className={css.small} style={{fill:'#987222'}}>5x − y = 14</text></>}
  {type==='intercept'&&<><path clipPath={`url(#${clipId})`} d={`M${sx(-5)} ${sy(-12)}L${sx(7)} ${sy(12)}`} className={css.highlight}/>{[[3,4],[1,0]].map(([x,y])=><circle cx={sx(x)} cy={sy(y)} r="5" fill="#9160a6" key={x}/>)}<text x={sx(3)+12} y={sy(4)-10} className={`${css.point} ${css.labelBg}`}>(3, 4)</text><text x={sx(1)+8} y={sy(0)+40} className={`${css.point} ${css.labelBg}`}>(1, 0)</text><text x="335" y="80" className={css.point}>y = 2x − 2</text></>}
  {type==='distance'&&<><path d={`M${sx(-2)} ${sy(4)}H${sx(1)}V${sy(-2)}`} className={css.helper}/><path d={`M${sx(-2)} ${sy(4)}L${sx(1)} ${sy(-2)}`} className={css.highlight}/><path d={`M${sx(1)-10} ${sy(4)}v10h10`} className={css.ink}/>{[[-2,4],[1,-2]].map(([x,y])=><circle cx={sx(x)} cy={sy(y)} r="4" fill="#9160a6" key={x}/>)}<text x={sx(-2)-10} y={sy(4)-15} className={`${css.point} ${css.labelBg}`}>A(−2, 4)</text><text x={sx(1)+10} y={sy(-2)+20} className={`${css.point} ${css.labelBg}`}>B(1, −2)</text><text x={sx(-0.5)} y={sy(4)-15} className={css.labelBg}>3</text><text x={sx(1)+12} y={sy(1)} className={css.labelBg}>6</text><text x={sx(-1.5)} y={sy(0.6)} className={`${css.point} ${css.labelBg}`}>d</text></>}
 </svg>;
}
function Absolute({lower='−9',upper='2'}){return <svg viewBox="0 0 620 150" role="img" aria-label={`Решение: x < ${lower} или x > ${upper}. Два луча наружу, граничные точки не включены.`}>
 <path d="M30 80H590m-8 -5 8 5-8 5M38 75l-8 5 8 5" className={css.axis}/><path d="M35 80H170M450 80H585M48 70 35 80l13 10M572 70l13 10-13 10" className={css.highlight}/>
 <circle cx="170" cy="80" r="7" fill="#fffdfa" stroke="#9160a6" strokeWidth="3"/><circle cx="450" cy="80" r="7" fill="#fffdfa" stroke="#9160a6" strokeWidth="3"/>
 <text x="170" y="113" textAnchor="middle">{lower}</text><text x="450" y="113" textAnchor="middle">{upper}</text><text x="90" y="47" textAnchor="middle">x &lt; {lower}</text><text x="525" y="47" textAnchor="middle">x &gt; {upper}</text>
 </svg>}
function Votes(){return <div className={css.chart}><svg viewBox="0 0 340 340" role="img" aria-label="Book club votes: Toni Morrison 20 percent, Annie Proulx 40 percent, John Steinbeck 10 percent, Cormac McCarthy 15 percent, Gabriel García Márquez 15 percent.">
 {pieSlices().map(item=>{const angle=(item.start+item.end)/2*Math.PI/180;return <g key={item.name}><path d={sectorPath(170,170,150,item.start,item.end)} fill={item.color} stroke="#fffdfa" strokeWidth="2"/><text x={170+103*Math.cos(angle)} y={170+103*Math.sin(angle)+6} textAnchor="middle" style={{fontSize:19,fontWeight:700}}>{item.percent}%</text></g>})}
 </svg><ul className={css.legend}>{bookVotes.map(item=><li key={item.name}><span className={css.swatch} style={{background:item.color}} aria-hidden="true"/><span>{item.name} <strong>{item.percent}%</strong></span></li>)}</ul></div>}
export default function MathFigure({type,solved=false}){
 const captions={parallel:solved?'Цветом отмечены равные пары внешних и внутренних углов. Углы r, s и t внутри треугольника в сумме дают 180°.':'The horizontal lines are parallel. Use the labeled angles, not measurements of the drawing.',semicircle:solved?'CD = 10 — диаметр, OC = 5 — радиус. Закрашена ровно половина круга.':'CD is the diameter. Only the shaded left semicircle is requested.',box:'Три измерения коробки: 9, 3 и найденное 5 см. Передняя выделенная грань имеет наибольшую площадь.',intersection:'Обе прямые проходят через отмеченную точку. Масштаб осей одинаковый.',intercept:'При пересечении с осью x координата y равна нулю. Масштаб осей одинаковый.',distance:'Пунктирные катеты: 3 по горизонтали и 6 по вертикали. Фиолетовый отрезок — искомое расстояние. Масштаб осей одинаковый.',absolute:'Пустые кружки означают, что границы не входят в решение. Стрелки показывают два бесконечных луча.',votes:'Percentage of votes · all five sectors total 100%.'};
 return <figure className={css.figure}>{type==='parallel'?<Parallel solved={solved}/>:type==='semicircle'?<Semicircle solved={solved}/>:type==='box'?<Box/>:type==='votes'?<Votes/>:type==='absolute'?<Absolute/>:type==='absolute-example'?<Absolute lower="−2" upper="4"/>:<CoordinateGraph type={type}/>}<figcaption lang={solved||!['parallel','semicircle','votes'].includes(type)?'ru':'en'}>{type==='absolute-example'?'К примеру |x − 1| > 3: точки −2 и 4 не включены, решение лежит снаружи промежутка.':captions[type]}</figcaption></figure>;
}
