import css from '../../practice-2/math/math.module.css';

function Sector({ solved }) {
  return <svg viewBox="0 0 260 260" role="img" aria-label={solved
    ? 'Радиус равен 4. Незакрашенный сектор 90° занимает четверть круга.'
    : 'Circle centered at N with the upper-right quarter unshaded. The two radii that bound it form a right angle.'}>
    <path d="M130 130H234A104 104 0 1 1 130 26Z" fill="#d6c4e0"/>
    <circle cx="130" cy="130" r="104" className={css.ink}/>
    <path d="M130 26V130H234M130 118H142V130" className={css.ink}/>
    <circle cx="130" cy="130" r="4" fill="#43334e"/>
    <text x="111" y="151">N</text>
    {solved && <><text x="181" y="150">4</text><text x="151" y="106">90°</text></>}
  </svg>;
}

function NumberLine() {
  return <svg viewBox="0 0 400 94" role="img" aria-label="Числовая прямая. Точка 2 пустая, выделен луч вправо от неё.">
    <path d="M20 42H380M28 37L20 42L28 47" className={css.ink}/>
    <path d="M209 42H380M369 35L380 42L369 49" className={css.highlight}/>
    <circle cx="209" cy="42" r="6" fill="#fffdfa" stroke="#9160a6" strokeWidth="2.5"/>
    <text x="209" y="72" textAnchor="middle">2</text>
  </svg>;
}

function Slope() {
  return <svg viewBox="0 0 390 246" role="img" aria-label="От точки (−4, 1) до точки (10, −6) нужно пройти 14 единиц вправо и 7 вниз.">
    <path d="M25 85H365M360 81L365 85L360 89M150 225V21M146 26L150 21L154 26" fill="none" className={css.axis}/>
    <text x="369" y="105">x</text><text x="132" y="21">y</text>
    <path d="M48 51L354 204" className={css.ink}/>
    <path d="M82 68H320V187" className={css.highlight}/>
    <path d="M320 80H308V68" className={css.highlight}/>
    <circle cx="82" cy="68" r="4" fill="#43334e"/>
    <circle cx="320" cy="187" r="4" fill="#43334e"/>
    <text x="18" y="108" className={css.labelBg}>(−4, 1)</text>
    <text x="304" y="223" textAnchor="middle">(10, −6)</text>
    <text x="213" y="55" textAnchor="middle">Δx = 14</text>
    <text x="330" y="137" className={css.small}>Δy = −7</text>
  </svg>;
}

function Equilateral() {
  return <svg viewBox="0 0 290 230" role="img" aria-label="Равносторонний треугольник. Высота 9 делит основание на отрезки t и t, а боковая сторона равна 2t.">
    <path d="M145 22L235 178H55Z" className={css.ink}/>
    <path d="M145 22V178M145 166H157V178" className={css.highlight}/>
    <path d="M100 172V184M190 172V184" className={css.ink}/>
    <text x="133" y="113" textAnchor="end">9</text>
    <text x="201" y="94">2t</text>
    <text x="100" y="207" textAnchor="middle">t</text>
    <text x="190" y="207" textAnchor="middle">t</text>
  </svg>;
}

function ExteriorAngle({ solved }) {
  return <svg viewBox="0 0 520 186" role="img" aria-label={solved
    ? 'Угол θ внутри треугольника справа смежный с внешним углом y°. Другие внутренние углы равны x° и 100°.'
    : 'A triangle on a horizontal line. The top angle is 100°, the left interior angle is x°, and the right exterior angle is y°.'}>
    <path d="M20 145H500M32 139L20 145L32 151M488 139L500 145L488 151M140 145L260 44.3L380 145" className={css.ink}/>
    <text x="260" y="87" textAnchor="middle">100°</text>
    <text x="176" y="137">x°</text>
    {solved && <>
      <path d="M354 145A26 26 0 0 1 360.1 128.3" className={css.highlight}/>
      <path d="M360.1 128.3A26 26 0 0 1 406 145" className={css.highlight}/>
      <text x="330" y="138">θ</text>
    </>}
    <text x="418" y="136">y°</text>
  </svg>;
}

const diagrams = {
  sector: Sector,
  'number-line': NumberLine,
  slope: Slope,
  equilateral: Equilateral,
  'exterior-angle': ExteriorAngle,
};

export default function MathFigure({ type, solved = false }) {
  const Diagram = diagrams[type];
  return <figure className={`${css.figure} ${css.practiceDiagram}`}>
    <Diagram solved={solved}/>
  </figure>;
}
