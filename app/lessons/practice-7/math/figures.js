import css from '../../practice-2/math/math.module.css';
import local from './figures.module.css';

function TriangleArea({ solved }) {
  return <svg className={local.canvas} viewBox="0 0 380 365" role="img" aria-label={solved
    ? 'Треугольник RST. Высота SU равна 12. Основание состоит из RU = 9 и UT = 5, всего RT = 14. Боковые стороны 15 и 13.'
    : 'Triangle RST with altitude SU perpendicular to RT. RS = 15, ST = 13, and RU = 9.'}>
    <path d="M35 300L215 60L315 300Z" className={css.ink} />
    <path d="M215 60V300" className={solved?css.highlight:css.ink} />
    <path d="M215 282H233V300" className={css.ink} />
    <text x="17" y="325">R</text><text x="215" y="43" textAnchor="middle">S</text>
    <text x="215" y="328" textAnchor="middle">U</text><text x="330" y="325">T</text>
    <text x="105" y="166" textAnchor="end">15</text><text x="286" y="177">13</text>
    <text x="125" y="329" textAnchor="middle">9</text>
    {solved&&<><text x="196" y="191" textAnchor="end" className={local.accent}>12</text><text x="268" y="329" textAnchor="middle" className={local.accent}>5</text></>}
  </svg>;
}

function Distance({ solved }) {
  return <svg className={local.canvas} viewBox="0 0 520 300" role="img" aria-label={solved
    ? 'Отрезок JK соединяет J(−12, −7) с K(12, 3). Горизонтальный катет равен 24, вертикальный 10, наклонная длина 26.'
    : 'A coordinate plane with J (−12, −7) and K (12, 3) connected by a segment.'}>
    <path d="M25 125H495M250 22V278" fill="none" className={css.axis} />
    <path d="M70 230L430 80" className={css.ink} />
    {solved&&<>
      <path d="M70 230H430V80M412 230V212H430" className={css.helper} />
      <text x="262" y="260" textAnchor="middle" className={local.accent}>24</text>
      <text x="450" y="172" className={local.accent}>10</text>
      <text x="185" y="153" className={`${local.accent} ${css.labelBg}`}>26</text>
    </>}
    <circle cx="70" cy="230" r="4.5" fill="#43334e"/><circle cx="430" cy="80" r="4.5" fill="#43334e"/>
    <text x="40" y="287">J (−12, −7)</text><text x="450" y="57" textAnchor="end">K (12, 3)</text>
    <text x="496" y="150">x</text><text x="226" y="28">y</text>
  </svg>;
}

function XIntercept() {
  return <svg className={local.canvas} viewBox="0 0 310 300" role="img" aria-label="Прямая y = 2x − 8 пересекает ось x в точке (4, 0), а ось y в точке (0, −8).">
    <path d="M20 50H280M80 18V278" fill="none" className={css.axis}/>
    <path d="M50 270L180 10" className={css.ink}/>
    <circle cx="160" cy="50" r="5" fill="#9160a6"/><circle cx="80" cy="210" r="4" fill="#43334e"/>
    <text x="183" y="82" className={local.accent}>(4, 0)</text><text x="95" y="231">(0, −8)</text>
    <text x="286" y="56">x</text><text x="56" y="28">y</text><text x="160" y="33" textAnchor="middle">4</text>
  </svg>;
}

function Ladder() {
  return <svg className={local.canvas} viewBox="0 0 370 325" role="img" aria-label="Лестница длиной 25 футов — гипотенуза прямоугольного треугольника. Высота по стене 20 футов, расстояние по земле 15 футов. Угол n находится у основания лестницы.">
    <path d="M45 270H325M250 45V270" fill="none" className={css.axis}/>
    <path d="M100 270L250 70" className={css.highlight}/>
    <path d="M250 252H232V270" className={css.ink}/>
    <path d="M140 270A40 40 0 0 0 124 238" className={css.ink}/>
    <text x="148" y="249">n</text><text x="150" y="156" className={css.labelBg}>25</text>
    <text x="270" y="179" className={local.accent}>20</text><text x="175" y="305" textAnchor="middle" className={local.accent}>15</text>
  </svg>;
}

function Trapezoid({ solved }) {
  return <svg className={local.canvas} viewBox="0 0 520 340" role="img" aria-label={solved
    ? 'Трапеция при x = 2. Верхнее основание 12, нижнее 24, высота 8.'
    : 'Trapezoid with parallel bases 6x and 12x, and perpendicular height 4x.'}>
    <path d="M40 270L130 150H310L400 270Z" className={css.ink}/>
    <path d="M438 150V270M432 161L438 150L444 161M432 259L438 270L444 259" className={css.ink}/>
    <text x="220" y="133" textAnchor="middle">{solved?'12':'6x'}</text>
    <text x="220" y="307" textAnchor="middle">{solved?'24':'12x'}</text>
    <text x="454" y="217">{solved?'8':'4x'}</text>
  </svg>;
}

function Week() {
  const hours=[8,8,8,8,6,4,4];
  return <svg className={local.canvas} viewBox="0 0 480 160" role="img" aria-label="Пример недели на 46 часов: четыре дня по 8 часов, затем 6, 4 и 4 часа. В каждый день от 4 до 8 часов.">
    <text x="14" y="40" className={local.minor}>День</text><text x="14" y="92" className={local.minor}>Часы</text>
    {hours.map((hours,index)=><g key={index}>
      <text x={105+index*51} y="40" textAnchor="middle">{index+1}</text>
      <rect x={83+index*51} y="60" width="44" height="46" rx="6" fill={hours===8?'#d8c2e5':'#efe5f5'}/>
      <text x={105+index*51} y="91" textAnchor="middle">{hours}</text>
    </g>)}
    <text x="240" y="143" textAnchor="middle" className={local.minor}>32 + 6 + 4 + 4 = 46</text>
  </svg>;
}

function Sector({ solved }) {
  const cx=170,cy=170,r=130;
  const end={x:cx+r*Math.cos(-Math.PI/10),y:cy+r*Math.sin(-Math.PI/10)};
  return <svg className={local.canvas} viewBox="0 0 340 340" role="img" aria-label={solved
    ? 'Круг с центром P. Закрашенный сектор занимает 20 процентов круга и имеет центральный угол 72 градуса.'
    : 'Circle centered at P. The shaded sector has central angle d degrees and occupies 20% of the circle.'}>
    <path d={`M${cx} ${cy}V${cy-r}A${r} ${r} 0 0 1 ${end.x} ${end.y}Z`} fill="#d6c4e0"/>
    <circle cx={cx} cy={cy} r={r} className={css.ink}/>
    <path d={`M${cx} ${cy-r}V${cy}L${end.x} ${end.y}`} className={css.ink}/>
    {solved&&<path d="M170 138A32 32 0 0 1 200.4338 160.1115" className={css.highlight}/>} 
    <circle cx={cx} cy={cy} r="4.5" fill="#43334e"/>
    <text x="140" y="195">P</text><text x="196" y="140" className={solved?local.accent:undefined}>{solved?'72°':'d°'}</text>
  </svg>;
}

function NestedSquares({ solved }) {
  const one=solved?'3':'x',two=solved?'6':'2x';
  return <svg className={local.canvas} viewBox="0 0 390 370" role="img" aria-label={solved
    ? 'Внешний квадрат со стороной 9. Каждая сторона делится на отрезки 3 и 6. Четыре белых угловых треугольника имеют катеты 3 и 6, внутренний закрашенный квадрат имеет площадь 45.'
    : 'A shaded rotated square inside a larger square. Each outer side is split into segments x and 2x, alternating around the four sides.'}>
    <path d="M60 45H330V315H60Z" className={css.ink}/>
    <polygon points="150,45 330,135 240,315 60,225" fill="#d6c4e0" stroke="#43334e" strokeWidth="2.2"/>
    <text x="105" y="29" textAnchor="middle">{one}</text><text x="240" y="29" textAnchor="middle">{two}</text>
    <text x="350" y="100">{one}</text><text x="350" y="235">{two}</text>
    <text x="150" y="348" textAnchor="middle">{two}</text><text x="285" y="348" textAnchor="middle">{one}</text>
    <text x="34" y="140" textAnchor="middle">{two}</text><text x="34" y="282" textAnchor="middle">{one}</text>
    {solved&&<>
      <path d="M60 62H77V45M313 45V62H330M330 298H313V315M77 315V298H60" className={css.helper}/>
      <text x="195" y="186" textAnchor="middle" className={local.accent}>S = 45</text>
    </>}
  </svg>;
}

const diagrams={
  'triangle-area':TriangleArea, distance:Distance, 'x-intercept':XIntercept,
  ladder:Ladder, trapezoid:Trapezoid, week:Week, sector:Sector, 'nested-squares':NestedSquares,
};

export default function MathFigure({ type, solved=false }) {
  const Diagram=diagrams[type];
  return <figure className={`${css.figure} ${local.diagram}`}><Diagram solved={solved}/></figure>;
}
