import { balloonPrices, companyShares } from '../../../../content/practice-10/math.mjs';
import shared from '../../practice-2/math/math.module.css';
import css from './figures.module.css';

function Parallelogram({ solved }) {
 return (
  <svg viewBox="0 0 466 239" role="img" aria-label={solved
   ? 'Параллелограмм ABCD. Противоположные углы B и D равны 50°, углы A и C равны 130°.'
   : 'Parallelogram ABCD. Interior angles A: x degrees, B: y degrees, C: 2z degrees, D: z minus 15 degrees.'}>
   <path d="M159 42H407L286 186H38Z" className={shared.ink} />
   {solved && <path d="M374 42A33 33 0 0 0 385.8 67.3M71 186A33 33 0 0 0 59.2 160.7" className={shared.highlight} />}
   <text x="143" y="33">A</text><text x="414" y="34">B</text>
   <text x="292" y="209">C</text><text x="19" y="209">D</text>
   <text x="164" y="70">{solved ? '130°' : 'x°'}</text>
   <text x="355" y="74" textAnchor="end" className={solved ? css.accent : undefined}>{solved ? '50°' : 'y°'}</text>
   <text x="80" y="166" className={solved ? css.accent : undefined}>{solved ? '50°' : '(z − 15)°'}</text>
   <text x="279" y="162" textAnchor="end">{solved ? '130°' : '(2z)°'}</text>
  </svg>
 );
}

function Midpoint({ solved }) {
 return (
  <svg viewBox="0 0 520 278" role="img" aria-label={solved
   ? 'Середина F имеет координаты (1,5; 4,5). Два равных перехода вправо на 7,5 и вверх на 3,5 соединяют G, F и H.'
   : 'The labeled midpoint F lies on the segment from G at negative 6, 1 to H at 9, 8.'}>
   <path d="M23 234H489M207 16V263" className={shared.axis} />
   <path d="M69 211L414 50" className={shared.ink} />
   {solved && <>
    <path d="M69 211H241.5V130.5H414V50" className={shared.helper} />
    <text x="150" y="226" textAnchor="middle" className={css.accent}>+7,5</text>
    <text x="334" y="151" textAnchor="middle" className={css.accent}>+7,5</text>
   </>}
   {[[69,211],[241.5,130.5],[414,50]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="5" className={css.dot} />)}
   <text x="38" y="195" className={css.label}>G = (−6, 1)</text>
   <text x="420" y="44">H = (9, 8)</text>
   <text x="246" y="112" className={solved ? `${css.accent} ${css.label}` : css.label}>{solved ? 'F = (1,5; 4,5)' : 'F'}</text>
   <text x="493" y="240">x</text><text x="190" y="25">y</text>
  </svg>
 );
}

function AbsoluteLine() {
 return (
  <svg viewBox="0 0 438 126" role="img" aria-label="На числовой прямой выделены все n левее 5/4 и правее 7/4. Обе граничные точки пустые.">
   <path d="M32 55H407" className={shared.axis} />
   <path d="M34 55H151M290 55H404M45 48L33 55L45 62M392 48L404 55L392 62" className={shared.highlight} />
   <path d="M220 48V62" className={shared.ink} />
   <circle cx="151" cy="55" r="6" fill="#fffdfa" stroke="#714885" strokeWidth="2.5" />
   <circle cx="290" cy="55" r="6" fill="#fffdfa" stroke="#714885" strokeWidth="2.5" />
   <text x="151" y="88" textAnchor="middle">5/4</text>
   <text x="220" y="88" textAnchor="middle">3/2</text>
   <text x="290" y="88" textAnchor="middle">7/4</text>
   <text x="414" y="61">n</text>
  </svg>
 );
}

function RightTriangle({ solved }) {
 return (
  <svg viewBox="0 0 465 229" role="img" aria-label={solved
   ? 'Прямоугольный треугольник. Для угла θ противолежащий катет равен 2, гипотенуза равна квадратному корню из 29.'
   : 'Right triangle with bottom side 5, right vertical side 2, diagonal side square root of 29, and theta in the left corner.'}>
   <path d="M32 186H397V40Z M379 186V168H397" className={shared.ink} />
   <path d="M80 186A48 48 0 0 0 76.6 168.2" className={shared.ink} />
   {solved && <path d="M32 186L397 40V164" className={shared.highlight} />}
   <text x="95" y="180">θ</text>
   <text x="215" y="211" textAnchor="middle">5</text>
   <text x="406" y="121" className={solved ? css.accent : undefined}>2</text>
   <text x="208" y="101" textAnchor="middle" className={solved ? css.accent : undefined}>√29</text>
  </svg>
 );
}

const colors = ['#c0b0d0','#dce3ca','#b892ca','#d9c4a9','#cdd9e6'];
const addedShares = 100 - companyShares.reduce((sum, {share}) => sum + (share ?? 0), 0);
const center = 193;
const radius = 151;

function position(angle, distance) {
 return [center + distance * Math.sin(angle), center - distance * Math.cos(angle)];
}

let cursor = 0;
const sectors = companyShares.map(({owner,share}) => {
 const size = (share ?? addedShares) / 100 * 2 * Math.PI;
 const start = position(cursor, radius);
 const end = position(cursor + size, radius);
 const mid = cursor + size / 2;
 cursor += size;
 return {
  owner,
  share,
  label: position(mid, share === null ? 174 : 98),
  edge: position(mid, 143),
  path: `M${center} ${center}L${start.join(' ')}A${radius} ${radius} 0 0 1 ${end.join(' ')}Z`,
 };
});

function OwnershipPie({ solved }) {
 return (
  <svg viewBox="0 0 386 390" role="img" aria-label={solved
   ? 'Доли до сделки. Currer 21%, Ellis 22%, Acton 23%, Bell 25%, Zach 9%.'
   : 'Pie chart: Currer 21%, Ellis 22%, Acton 23%, Bell 25%. Zach’s sector is not labeled with a percentage.'}>
   {sectors.map(({owner,path}, index) => <path key={owner} d={path} fill={colors[index]} stroke="#66556e" strokeWidth="1.4" />)}
   {sectors.map(({owner,share,label:[x,y],edge}) => share === null ? (
    <g key={owner}>
     <path d={`M${edge.join(' ')}L${x} ${y-10}`} className={shared.axis} />
     <text x={x} y={y+6} textAnchor="middle" className={solved ? css.accent : undefined}>
      {solved ? `${owner} · ${addedShares}%` : owner}
     </text>
    </g>
   ) : (
    <text key={owner} x={x} y={y-5} textAnchor="middle" className={solved && owner === 'Bell' ? css.accent : undefined}>
     <tspan x={x}>{owner}</tspan><tspan x={x} dy="24">{share}%</tspan>
    </text>
   ))}
  </svg>
 );
}

function BalloonTable({ solved }) {
 const caption = solved ? 'Цена фигурки в зависимости от числа шариков' : 'Balloon animal prices';
 const language = solved ? 'ru' : 'en';
 const numberLabel = solved ? 'Шарики' : 'Number of balloons';
 const priceLabel = solved ? 'Цена' : 'Price';
 const priceClass = price => solved && ['4.00','4.50','7.00'].includes(price) ? css.emphasis : undefined;

 return (
  <>
   <table className={`${css.priceTable} ${css.horizontalTable}`} lang={language}>
    <caption>{caption}</caption>
    <tbody>
     <tr><th scope="row">{numberLabel}</th>
      {balloonPrices.map((_, index) => <td key={index}>{index+1}</td>)}
     </tr>
     <tr><th scope="row">{priceLabel}</th>
      {balloonPrices.map(price => <td key={price} className={priceClass(price)}>${price}</td>)}
     </tr>
    </tbody>
   </table>
   <table className={`${css.priceTable} ${css.verticalTable}`} lang={language}>
    <caption>{caption}</caption>
    <thead><tr><th scope="col">{numberLabel}</th><th scope="col">{priceLabel}</th></tr></thead>
    <tbody>{balloonPrices.map((price, index) => (
     <tr key={price}>
      <th scope="row">{index+1}</th><td className={priceClass(price)}>${price}</td>
     </tr>
    ))}</tbody>
   </table>
  </>
 );
}

const diagrams = {
 parallelogram: Parallelogram,
 midpoint: Midpoint,
 'absolute-line': AbsoluteLine,
 'right-triangle': RightTriangle,
 'company-shares': OwnershipPie,
 'balloon-table': BalloonTable,
};

export default function MathFigure({ type, solved = false }) {
 const Diagram = diagrams[type];
 return <figure className={`${shared.figure} ${css.diagram}`}><Diagram solved={solved} /></figure>;
}
