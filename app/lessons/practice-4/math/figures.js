import { accountCounts } from '../../../../content/practice-4/math.mjs';
import base from '../../practice-2/math/math.module.css';
import css from './figures.module.css';

function Axes({ x, y, left, right, top, bottom, labels = true }) {
  return <g className={css.axes}>
    <path d={`M${left} ${y}H${right}m-7 -4 7 4-7 4 M${x} ${bottom}V${top}m-4 7 4-7 4 7`}/>
    {labels && <><text x={right - 4} y={y + 20}>x</text><text x={x - 18} y={top + 12}>y</text></>}
  </g>;
}

function Perpendicular({ solved }) {
  return <svg viewBox="0 0 360 338" role="img" aria-label={solved ? 'Исходная и новая перпендикулярная прямые пересекаются в P(1, 3).' : 'Coordinate axes and a line through the origin and P (1, 3).'}>
    <Axes x={184} y={194} left={18} right={334} top={15} bottom={320}/>
    <path d="M140 326L242 20m-8 9 8-9 1 12M148 317l-8 9-1-12" className={base.ink}/>
    {solved && <>
      <path d="M34 44L334 144" className={base.highlight}/>
      <path d="M218 92L230 96L226 108" className={base.ink}/>
    </>}
    <circle cx="214" cy="104" r="4" className={css.dot}/>
    <text x="226" y="80" className={base.labelBg}>P (1, 3)</text>
    {solved && <text x="29" y="25" className={base.small}>Новая прямая</text>}
  </svg>;
}

function Trapezoid({ solved }) {
  return <svg viewBox="0 0 345 196" role="img" aria-label={solved ? 'Высота разделяет трапецию на прямоугольник шириной 3 и прямоугольный треугольник с нижним катетом 1.' : 'Right trapezoid with top base 3, bottom base 4, and a lower-left angle of 60 degrees.'}>
    <path d="M53 155L113 51H293V155Z" className={base.ink}/>
    <path d="M280 155V142H293" className={base.ink}/>
    <text x="203" y="39" textAnchor="middle">3</text>
    <text x="173" y="180" textAnchor="middle">4</text>
    <text x="80" y="144">60°</text>
    {solved && <>
      <path d="M113 51V155" className={base.highlight}/>
      <path d="M113 142H126V155" className={base.ink}/>
      <text x="127" y="110" className={base.labelBg}>h = √3</text>
      <text x="83" y="174" textAnchor="middle">1</text>
    </>}
  </svg>;
}

function Accounts({ solved }) {
  const baseline = 310;
  const valueY = value => baseline - value * 18;
  return <>
    <svg viewBox="0 0 620 354" role="img" aria-label={accountCounts.map(([name, count]) => `${name}: ${count}`).join(', ')}>
      {[5, 10, 15].map(value => <path key={value} d={`M43 ${valueY(value)}H602`} className={base.grid}/>)}
      <path d={`M43 ${valueY(15)}V${baseline}H602`} fill="none" className={base.axis}/>
      {Array.from({ length: 15 }, (_, i) => i + 1).map(value => <g key={value}>
        <path d={`M36 ${valueY(value)}H43`} className={base.axis}/>
        <text x="28" y={valueY(value) + 4.5} textAnchor="end" className={css.accountTick}>{value}</text>
      </g>)}
      {accountCounts.map(([name, count], i) => {
        const x = 78 + i * 70;
        return <g key={name}>
          <rect x={x - 14} y={valueY(count)} width="28" height={baseline - valueY(count)} className={solved && (count === 10 || count === 11) ? css.middleBar : css.bar}/>
          <text x={x} y="335" textAnchor="middle" className={css.accountLabel}>{name}</text>
          {solved && <text x={x} y={valueY(count) - 8} textAnchor="middle" className={css.accountLabel}>{count}</text>}
        </g>;
      })}
    </svg>
    <details className={css.data}>
      <summary>{solved ? 'Значения столбцов в таблице' : 'Read the chart as a table'}</summary>
      <table>
        <thead><tr><th scope="col">{solved ? 'Имя' : 'Name'}</th><th scope="col">{solved ? 'Счета' : 'Accounts'}</th></tr></thead>
        <tbody>{accountCounts.map(([name, count]) => <tr key={name}><th scope="row" lang="en">{name}</th><td>{count}</td></tr>)}</tbody>
      </table>
    </details>
  </>;
}

function Quadrant({ solved }) {
  return <svg viewBox="0 0 340 338" role="img" aria-label={solved ? 'Круг с центром (0, 2) касается оси x. Справа от оси y закрашен полукруг.' : 'The first quadrant, above the horizontal axis and to the right of the vertical axis, is shaded.'}>
    {!solved && <rect x="168" y="20" width="146" height="151" className={css.pale}/>}
    <Axes x={168} y={171} left={23} right={317} top={20} bottom={315}/>
    {solved ? <>
      <path d="M168 35A68 68 0 0 1 168 171Z" className={css.pale}/>
      <circle cx="168" cy="103" r="68" className={base.ink}/>
      <path d="M168 103H236" className={base.highlight}/>
      <path d="M168 35V171" className={base.helper}/>
      <circle cx="168" cy="103" r="4" className={css.dot}/>
      <text x="109" y="98" className={base.labelBg}>(0, 2)</text>
      <text x="193" y="95" className={base.small}>r = 2</text>
    </> : <text x="239" y="88" textAnchor="middle">Quadrant 1</text>}
  </svg>;
}

function SignLine() {
  return <svg viewBox="0 0 475 118" role="img" aria-label="Числовая прямая: произведение положительно слева от минус 1 и справа от 2, отрицательно между ними. Границы исключены.">
    <path d="M25 60H450" className={base.axis}/>
    <path d="M27 60H160M315 60H448M39 53L27 60L39 67M436 53L448 60L436 67" className={base.highlight}/>
    {[160, 315].map(x => <circle key={x} cx={x} cy="60" r="6" className={css.openPoint}/>)}
    <text x="160" y="88" textAnchor="middle">−1</text><text x="315" y="88" textAnchor="middle">2</text>
    <text x="95" y="43" textAnchor="middle">+</text><text x="237" y="43" textAnchor="middle">−</text><text x="380" y="43" textAnchor="middle">+</text>
  </svg>;
}

function Parallelogram() {
  return <svg viewBox="0 0 370 291" role="img" aria-label="Параллелограмм B, A, D, C. От B к A и от C к D смещение на 1 влево и на 7 вверх.">
    <Axes x={156} y={153} left={22} right={349} top={20} bottom={272}/>
    <path d="M232 229L213 96 99 39 118 172Z" className={css.polygon}/>
    <path d="M232 229L213 96M118 172L99 39" className={base.highlight}/>
    {[[232, 229], [213, 96], [99, 39], [118, 172]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" className={css.dot}/>)}
    <text x="244" y="239" className={base.labelBg}>B (4, −4)</text>
    <text x="225" y="98" className={base.labelBg}>A (3, 3)</text>
    <text x="108" y="30" className={base.labelBg}>D (−3, 6)</text>
    <text x="31" y="195" className={base.labelBg}>C (−2, −1)</text>
  </svg>;
}

const taxPaths = {
  'tax-a': 'M104 47L157 8',
  'tax-b': 'M104 102H152L201 62',
  'tax-c': 'M104 102L144 67H201',
  'tax-d': 'M104 102H135L163 70H201',
  'tax-e': 'M104 50H159L201 8',
};

function Tax({ type, solved = false }) {
  return <svg viewBox="0 0 210 184" className={base.parabola} role={solved ? 'img' : undefined} aria-hidden={solved ? undefined : true} aria-label={solved ? 'Налог равен нулю до порога p, затем растёт по прямой.' : undefined}>
    <path d="M9 102H202M104 8V176" className={base.axis}/>
    <path d={taxPaths[type]} className={solved ? base.highlight : base.ink}/>
    {solved && <>
      <circle cx="152" cy="102" r="3.3" className={css.dot}/>
      <text x="148" y="121" className={base.small}>p</text>
      <text x="140" y="145" className={base.small}>Доход</text>
      <text x="63" y="22" className={base.small}>Налог</text>
    </>}
  </svg>;
}

const sineX = k => 49 + (k + 3) * 55;
const sineY = value => 128 - value * 17;
const sinePath = Array.from({ length: 161 }, (_, i) => {
  const k = -3 + i / 20;
  return `${i === 0 ? 'M' : 'L'}${sineX(k).toFixed(2)} ${sineY(5 * Math.sin(k * Math.PI / 2)).toFixed(2)}`;
}).join('');

function Sine({ solved }) {
  return <svg viewBox="0 0 530 260" role="img" aria-label={solved ? 'Синусоида от минус 5 до 5. Отмечены соседние максимумы при π и 5π, разделённые 4π.' : 'Sine curve with vertical ticks at −5 and 5 and horizontal ticks from −3π to 5π.'}>
    <Axes x={sineX(0)} y={128} left={16} right={517} top={19} bottom={233}/>
    {Array.from({ length: 9 }, (_, i) => i - 3).filter(k => k !== 0).map(k => <g key={k}>
      <path d={`M${sineX(k)} 121V135`} className={base.axis}/>
      <text x={sineX(k)} y="153" textAnchor="middle" className={`${css.tick} ${base.labelBg}`}>{k === -1 ? '−π' : k === 1 ? 'π' : `${k < 0 ? '−' : ''}${Math.abs(k)}π`}</text>
    </g>)}
    {[5, -5].map(value => <g key={value}>
      <path d={`M${sineX(0) - 7} ${sineY(value)}h14`} className={base.axis}/>
      <text x={sineX(0) - 13} y={sineY(value) + 5} textAnchor="end" className={css.tick}>{value < 0 ? '−5' : '5'}</text>
    </g>)}
    <path d={sinePath} className={base.ink}/>
    {solved && <>
      <path d={`M${sineX(1)} 43V22H${sineX(5)}V43`} className={base.highlight}/>
      {[1, 5].map(k => <circle key={k} cx={sineX(k)} cy="43" r="4" className={css.dot}/>)}
      <text x={sineX(3)} y="18" textAnchor="middle">4π</text>
    </>}
  </svg>;
}

const diagrams = {
  perpendicular: Perpendicular, trapezoid: Trapezoid, accounts: Accounts, 'sign-line': SignLine,
  quadrant: Quadrant, parallelogram: Parallelogram, sine: Sine,
};

export default function MathFigure({ type, solved = false }) {
  if (Object.hasOwn(taxPaths, type)) return <Tax type={type}/>;
  const Diagram = diagrams[type];
  const layout = type === 'accounts' ? css.accounts
    : type === 'sine' || type === 'sign-line' ? css.wide : base.practiceDiagram;
  return <figure className={`${base.figure} ${layout}`}>
    {type === 'tax-solution' ? <Tax type="tax-b" solved/> : <Diagram solved={solved}/>}
  </figure>;
}
