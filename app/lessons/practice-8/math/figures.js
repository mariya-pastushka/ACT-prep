import { salespersonChart } from '../../../../content/practice-8/math.mjs';
import shared from '../../practice-2/math/math.module.css';
import css from './figures.module.css';

function Cylinder({ solved }) {
 return (
  <svg viewBox="0 0 470 250" role="img" aria-label={solved
   ? 'Цилиндр высотой h. Диаметр основания 3h. От края до центра радиус 1,5h.'
   : 'Cylinder with horizontal diameter 3h and vertical height h.'}>
   <path d="M39 80V190M369 80V190M39 190a165 24 0 0 0 330 0" className={shared.ink} />
   <path d="M39 190a165 24 0 0 1 330 0" className={shared.helper} />
   <ellipse cx="204" cy="80" rx="165" ry="24" className={shared.ink} />
   <path d="M39 37H369M399 80V190" className={shared.ink} />
   <path d="M39 37l10 -5v10ZM369 37l-10 -5v10ZM399 80l-5 10h10ZM399 190l-5 -10h10Z" className={css.dot} />
   <text x="204" y="24" textAnchor="middle">3h</text>
   <text x="411" y="141">h</text>
   {solved && <>
    <path d="M204 80H369" className={shared.highlight} />
    <circle cx="204" cy="80" r="4" className={css.dot} />
    <text x="272" y="73" textAnchor="middle" className={css.accent}>r = 1,5h</text>
   </>}
  </svg>
 );
}

function Clients({ highlight, nextMonth = false }) {
 const max = nextMonth ? 45 : 25;
 const start = 116;
 const end = 485;
 const x = value => start + (end - start) * value / max;
 const ticks = Array.from({length: max + 1}, (_, index) => index);
 return (
  <svg className={css.clients} viewBox="0 0 520 295" role="img" aria-label={nextMonth
   ? 'Следующий месяц. У Victoria 40 клиентов. У Zach 12, Yolanda 16, Xavier 19, Wanda 13.'
   : 'Horizontal bars on a scale from 0 to 25: Zach 12, Yolanda 16, Xavier 19, Wanda 13, and Victoria 20.'}>
   {ticks.map(value => {
    const major = value % 5 === 0;
    return <g key={value}>
     {major && <path d={`M${x(value)} 18V248`} className={shared.grid} />}
     <path d={`M${x(value)} 248v${major ? 9 : 5}`} className={shared.axis} />
     {major && <text x={x(value)} y="279" textAnchor="middle">{value}</text>}
    </g>;
   })}
   <path d={`M${start} 18V248H${end + 5}`} className={shared.axis} />
   {salespersonChart.map(({name, clients}, index) => {
    const y = 28 + index * 42;
    const count = nextMonth && name === 'Victoria' ? clients * 2 : clients;
    return <g key={name}>
     <text x="108" y={y + 19} textAnchor="end">{name}</text>
     <rect x={start} y={y} width={x(count) - start} height="25" className={name === highlight ? css.selectedBar : css.bar} />
     {highlight && <text x={x(count) + 7} y={y + 19} className={css.accent}>{count}</text>}
    </g>;
   })}
  </svg>
 );
}

function Octagon({ solved }) {
 // Equal horizontal, vertical, and diagonal side lengths.
 const edge = 120;
 const cut = edge / Math.sqrt(2);
 const x0 = 76;
 const y0 = 28;
 const x1 = x0 + cut;
 const x2 = x1 + edge;
 const x3 = x2 + cut;
 const y1 = y0 + cut;
 const y2 = y1 + edge;
 const y3 = y2 + cut;
 return (
  <svg viewBox="0 0 446 355" role="img" aria-label={solved
   ? 'Закрашенный треугольник имеет основание 1 и вертикальную высоту из трёх частей: катет t, сторона 1, катет t.'
   : 'Regular octagon. The shaded triangle spans the left ends of the top and bottom edges and the right end of the bottom edge.'}>
   <path d={`M${x1} ${y0}V${y3}H${x2}Z`} className={css.shade} />
   <path d={`M${x1} ${y0}H${x2}L${x3} ${y1}V${y2}L${x2} ${y3}H${x1}L${x0} ${y2}V${y1}ZM${x1} ${y0}V${y3}M${x1} ${y0}L${x2} ${y3}`} className={shared.ink} />
   {solved && <>
    <path d={`M${x1} ${y0}H${x0}V${y1}M${x0} ${y2}V${y3}H${x1}M${x0 - 15} ${y0}V${y3}`} className={shared.helper} />
    <path d={`M${x1} ${y3 - 13}h13v13M${x0 - 22} ${y0}h14M${x0 - 22} ${y1}h14M${x0 - 22} ${y2}h14M${x0 - 22} ${y3}h14`} className={shared.ink} />
    <text x="47" y={y0 + cut / 2} textAnchor="end" className={css.accent}>t</text>
    <text x="47" y={y1 + edge / 2 + 6} textAnchor="end" className={css.accent}>1</text>
    <text x="47" y={y2 + cut / 2 + 8} textAnchor="end" className={css.accent}>t</text>
    <text x={(x1 + x2) / 2} y={y3 + 27} textAnchor="middle" className={css.accent}>1</text>
   </>}
  </svg>
 );
}

function SymmetricV({ solved }) {
 return (
  <svg viewBox="0 0 490 305" role="img" aria-label={solved
   ? 'График симметричен относительно x = 3. Точки с x = 2 и x = 4 имеют одинаковое значение y = 4.'
   : 'Graph of f(x) showing only segments connecting L (2, 4), M (3, 3), and N (4, 4).'}>
   <path d="M24 256H465M115 20V286" className={shared.axis} />
   <text x="468" y="262">x</text><text x="105" y="18">y</text>
   {solved && <>
    <path d="M262 35V256M213 60V256M311 60V256" className={shared.helper} />
    <text x="213" y="279" textAnchor="middle">2</text>
    <text x="262" y="279" textAnchor="middle" className={css.accent}>3</text>
    <text x="311" y="279" textAnchor="middle">4</text>
   </>}
   <path d="M213 60L262 109L311 60" className={shared.ink} />
   {[[213, 60], [262, 109], [311, 60]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="5" className={css.dot} />)}
   <text x="201" y="66" textAnchor="end">L = (2, 4)</text>
   <text x="322" y="66">N = (4, 4)</text>
   <text x="262" y="135" textAnchor="middle" className={css.label}>M = (3, 3)</text>
   <text x="262" y="27" textAnchor="middle">f(x)</text>
  </svg>
 );
}

const poolProfiles = {
 f: 'M20 128L78 82H130L240 128',
 g: 'M20 84L149 128H188L240 84',
 h: 'M20 128L144 82H197L240 128',
 j: 'M20 84L56 128H119L240 39',
 k: 'M20 84L57 128H112L240 84',
};

function PoolChoice({ letter }) {
 return (
  <svg viewBox="0 0 258 143" className={css.poolChoice} aria-hidden="true">
   <path d="M20 11V128H248" className={css.poolAxis} />
   <path d={poolProfiles[letter]} className={css.poolLine} />
  </svg>
 );
}

function PoolSolution() {
 return (
  <svg viewBox="0 0 470 240" role="img" aria-label="Полный бассейн в начале смены. Падение до нуля к 2 часам, ноль до 5 часов, подъём к исходному уровню к 12 часам.">
   <path d="M65 26V185H431M65 54H424M125 54V185M215 54V185M425 54V185" className={shared.helper} />
   <path d="M65 26V185H431" className={shared.axis} />
   <path d="M65 54L125 185H215L425 54" className={shared.highlight} />
   {[[65, 54], [125, 185], [215, 185], [425, 54]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="4" className={css.dot} />)}
   <text x="58" y="48" textAnchor="end" className={css.small}>Полон</text>
   <text x="58" y="188" textAnchor="end">0</text>
   {[[65, '0'], [125, '2'], [215, '5'], [425, '12']].map(([x, label]) =>
    <text key={label} x={x} y="208" textAnchor="middle">{label}</text>)}
   <text x="253" y="234" textAnchor="middle">Часы от начала смены</text>
  </svg>
 );
}

const figures = {
 cylinder: Cylinder,
 clients: Clients,
 'clients-yolanda': () => <Clients highlight="Yolanda" />,
 'clients-victoria': () => <Clients highlight="Victoria" nextMonth />,
 octagon: Octagon,
 'symmetric-v': SymmetricV,
 'pool-solved': PoolSolution,
};

export default function MathFigure({ type, solved = false }) {
 const Diagram = figures[type];
 if (!Diagram) return <PoolChoice letter={type.slice(-1)} />;
 return (
  <figure className={`${shared.figure} ${css.figure}`}>
   <Diagram solved={solved} />
  </figure>
 );
}
