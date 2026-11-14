import css from '../../practice-2/math/math.module.css';

function Midpoint({ solved }) {
  return <svg viewBox="0 0 385 374" role="img" aria-label={solved
    ? 'Отрезок от U(−3, −7) до V(1, 8). Точка M(−1, ½) находится на его середине.'
    : 'Coordinate plane with a segment from U (−3, −7) to V (1, 8).'}>
    <path d="M20 194H362M190 18V351" fill="none" className={css.axis}/>
    <path d="M130 334L210 34" className={css.ink}/>
    <circle cx="130" cy="334" r="4.5" fill="#43334e"/>
    <circle cx="210" cy="34" r="4.5" fill="#43334e"/>
    <text x="115" y="322" textAnchor="end">U</text>
    <text x="130" y="360" textAnchor="middle">(−3, −7)</text>
    <text x="225" y="55">V (1, 8)</text>
    {solved && <>
      <circle cx="170" cy="184" r="4.5" fill="#9160a6"/>
      <text x="157" y="168" textAnchor="end" className={css.labelBg}>M (−1, ½)</text>
    </>}
  </svg>;
}

function Hypotenuse({ solved }) {
  return <svg viewBox="0 0 470 208" role="img" aria-label={solved
    ? 'Прямоугольный треугольник. Катеты 3y и y образуют прямой угол, гипотенуза x лежит напротив него.'
    : 'Right triangle with hypotenuse x, horizontal leg 3y, and vertical leg y.'}>
    <path d="M30 155L420 25V155Z" className={css.ink}/>
    <path d="M400 155V135H420" className={solved ? css.highlight : css.ink}/>
    <text x="225" y="78" textAnchor="middle">x</text>
    <text x="225" y="181" textAnchor="middle">3y</text>
    <text x="432" y="95">y</text>
  </svg>;
}

function ParallelLines({ solved }) {
  return <svg viewBox="0 0 470 346" role="img" aria-label={solved
    ? 'У прямой a шаг на 8 вправо даёт снижение на 5. Прямая b параллельна ей и пересекает ось y в точке (0, −3).'
    : 'Two descending parallel lines. Line a passes through (0, 5) and (8, 0). Line b passes through (0, −3).'}>
    <path d="M20 180H449M29 175L20 180L29 185M440 175L449 180L440 185M225 329V18M220 27L225 18L230 27M220 320L225 329L230 320" fill="none" className={css.axis}/>
    <path d="M145 30L405 192.5M154 31L145 30L151 38M396 191.5L405 192.5L399 184.5" className={css.ink}/>
    <path d="M45 127.5L305 290M54 128.5L45 127.5L51 135.5M296 289L305 290L299 282" className={css.ink}/>
    {solved && <>
      <path d="M225 80H385V180" className={css.helper}/>
      <text x="305" y="72" textAnchor="middle" className={css.small}>Δx = 8</text>
      <text x="393" y="133" className={css.small}>Δy = −5</text>
    </>}
    <circle cx="225" cy="80" r="4.5" fill="#43334e"/>
    <circle cx="385" cy="180" r="4.5" fill="#43334e"/>
    <circle cx="225" cy="240" r="4.5" fill={solved ? '#9160a6' : '#43334e'}/>
    <text x="180" y="43" transform="rotate(32 180 43)">line a</text>
    <text x="80" y="141" transform="rotate(32 80 141)">line b</text>
    <text x="236" y="103" className={css.labelBg}>(0, 5)</text>
    <text x="385" y="210" textAnchor="middle" className={css.labelBg}>(8, 0)</text>
    <text x="236" y="232" className={css.labelBg}>(0, −3)</text>
  </svg>;
}

function TrigTriangle() {
  return <svg viewBox="0 0 250 255" role="img" aria-label="Прямоугольный треугольник. Для угла θ противолежащий катет равен 4, прилежащий 3, гипотенуза 5.">
    <path d="M40 218H184V26Z" className={css.ink}/>
    <path d="M167 218V201H184" className={css.ink}/>
    <path d="M78 218A38 38 0 0 0 62.8 187.6" className={css.highlight}/>
    <text x="87" y="205">θ</text><text x="114" y="244" textAnchor="middle">3</text>
    <text x="200" y="128">4</text><text x="97" y="120">5</text>
  </svg>;
}

function Park() {
  return <svg viewBox="0 0 420 175" role="img" aria-label="Прямоугольник шириной 150 футов и длиной 450 футов. Периметр проходит по всем четырём сторонам.">
    <rect x="54" y="30" width="300" height="100" rx="1" fill="#eee4f5"/>
    <path d="M54 30H354V130H54Z" className={css.highlight}/>
    <text x="204" y="153" textAnchor="middle">450 футов</text>
    <text x="378" y="80" textAnchor="middle" transform="rotate(90 378 80)">150 футов</text>
    <text x="204" y="86" textAnchor="middle">67 500 кв. футов</text>
  </svg>;
}

const diagrams = {
  midpoint: Midpoint,
  hypotenuse: Hypotenuse,
  parallel: ParallelLines,
  trig: TrigTriangle,
  park: Park,
};

export default function MathFigure({ type, solved = false }) {
  const Diagram = diagrams[type];
  return <figure className={`${css.figure} ${css.practiceDiagram}`}>
    <Diagram solved={solved}/>
  </figure>;
}
