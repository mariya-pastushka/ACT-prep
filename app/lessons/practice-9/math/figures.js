import css from '../../practice-2/math/math.module.css';
import local from './figures.module.css';

function HalfSquare({ solved }) {
  return <svg className={local.canvas} viewBox="0 0 350 350" role="img" aria-label={solved
    ? 'Квадрат со стороной 5 и площадью 25. Диагональ делит его пополам; площадь закрашенного треугольника 12,5.'
    : 'A square divided by a diagonal from the upper left to the lower right. The lower left triangular half is shaded.'}>
    <path d="M45 40V305H310Z" fill="#d6c4e0"/>
    <path d="M45 40H310V305H45ZM45 40L310 305" className={css.ink}/>
    {solved&&<>
      <text x="177" y="29" textAnchor="middle" className={local.accent}>5</text>
      <text x="29" y="180" textAnchor="end" className={local.accent}>5</text>
      <path d="M45 285H65V305" className={css.ink}/>
      <text x="130" y="244" textAnchor="middle" className={local.accent}>S = 12,5</text>
    </>}
  </svg>;
}

function RectangleWalk() {
  return <svg className={local.canvas} viewBox="0 0 480 255" role="img" aria-label="Прямоугольник: две длины по 4w и две ширины по w. При одинаковой скорости на каждую длину уходит 4 минуты, на каждую ширину 1 минута, всего 10 минут.">
    <path d="M60 75H420V165H60Z" className={css.ink}/>
    <path d="M60 145H80V165" className={css.ink}/>
    <text x="240" y="56" textAnchor="middle">4w</text>
    <text x="240" y="196" textAnchor="middle">4w</text>
    <text x="39" y="130" textAnchor="end">w</text><text x="440" y="130">w</text>
    <text x="240" y="126" textAnchor="middle" className={local.accent}>P = 10w</text>
    <text x="240" y="235" textAnchor="middle" className={local.minor}>4 + 1 + 4 + 1 = 10 минут</text>
  </svg>;
}

function Slope({ solved }) {
  // One coordinate unit is 32 SVG units on both axes.
  return <svg className={local.canvas} viewBox="0 0 430 420" role="img" aria-label={solved
    ? 'Прямая через (0, 6) и (3, 0). При движении вправо на 3 координата y уменьшается на 6; угловой коэффициент −2.'
    : 'A descending line through the marked points (0, 6) and (3, 0). Both axes have the same scale.'}>
    <path d="M30 280H397M180 28V389" fill="none" className={css.axis}/>
    <path d="M30 280L41 275L41 285ZM397 280L386 275L386 285ZM180 28L175 39L185 39ZM180 389L175 378L185 378Z" fill="#43334e"/>
    <path d="M164 56L324 376" className={css.ink}/>
    <path d="M164 56L165 69L174 64ZM324 376L314 368L323 363Z" fill="#43334e"/>
    {solved&&<>
      <path d="M180 88H276V280M260 280V264H276" className={css.helper}/>
      <text x="228" y="70" textAnchor="middle" className={local.accent}>+3</text>
      <text x="291" y="189" className={local.accent}>−6</text>
    </>}
    <circle cx="180" cy="88" r="5" fill="#43334e"/><circle cx="276" cy="280" r="5" fill="#43334e"/>
    <text x="192" y="113">(0, 6)</text><text x="289" y="264">(3, 0)</text>
    <text x="390" y="308">x</text><text x="193" y="35">y</text>
  </svg>;
}

function Inequality() {
  return <svg className={local.canvas} viewBox="0 0 460 155" role="img" aria-label="Решение p меньше либо равно 1,5. На числовой прямой закрашенная точка в 1,5 и выделенный луч влево.">
    <path d="M35 75H430M420 70L430 75L420 80" className={css.ink}/>
    <path d="M40 75H320M52 68L40 75L52 82" className={css.highlight}/>
    <path d="M170 68V82M270 68V82M370 68V82" className={css.ink}/>
    <circle cx="320" cy="75" r="7" fill="#865399"/>
    <text x="170" y="111" textAnchor="middle">0</text><text x="270" y="111" textAnchor="middle">1</text>
    <text x="370" y="111" textAnchor="middle">2</text><text x="320" y="53" textAnchor="middle" className={local.accent}>1,5</text>
    <text x="433" y="107">p</text>
  </svg>;
}

function ParallelAngles({ solved }) {
  // The numeric example has base angles 60° and 40°; the geometry agrees.
  const apex={x:250,y:55}, baseY=175;
  const leftX=apex.x-(baseY-apex.y)/Math.tan(Math.PI/3);
  const rightX=apex.x+(baseY-apex.y)/Math.tan(2*Math.PI/9);
  const rayY=290;
  const leftEnd=apex.x-(rayY-apex.y)/Math.tan(Math.PI/3);
  const rightEnd=apex.x+(rayY-apex.y)/Math.tan(2*Math.PI/9);
  const labels=[['a',208,81,'60°'],['b',258,113,'80°'],['c',300,81,'40°'],
    ['d',leftX-42,163,'120°'],['e',leftX+30,163,'60°'],['f',rightX-39,163,'40°'],['g',rightX+43,163,'140°']];
  return <svg className={`${local.canvas} ${local.angles}`} viewBox="0 0 580 325" role="img" aria-label={solved
    ? 'Числовой пример для параллельных M и N: a и e равны 60°, c и f равны 40°, b равен 80°, d равен 120°, g равен 140°. Сумма e и g равна 200°.'
    : 'Parallel horizontal lines M and N. Two downward rays meet on M and cross N. Angles a, b, c are below M; d, e, f, g are above N, in that order.'}>
    <path d="M42 55H557M42 175H557" fill="none" className={css.axis}/>
    <path d="M42 55L52 50L52 60ZM557 55L547 50L547 60ZM42 175L52 170L52 180ZM557 175L547 170L547 180Z" fill="#43334e"/>
    <path d={`M${leftEnd} ${rayY}L250 55L${rightEnd} ${rayY}`} className={css.ink}/>
    <path d={`M${leftEnd} ${rayY}l1 -13 10 6ZM${rightEnd} ${rayY}l-13 -2 7 -8Z`} fill="#43334e"/>
    <text x="10" y="61">M</text><text x="10" y="181">N</text>
    {labels.map(([label,x,y,value])=><text key={label} x={x} y={y} textAnchor="middle" className={solved?`${local.minor} ${local.accent} ${local.angleValue}`:undefined}>{solved?value:label}</text>)}
    {solved&&<text x="290" y="318" textAnchor="middle" className={`${local.accent} ${local.angleSum}`}>e + g = 60° + 140° = 200°</text>}
  </svg>;
}

function Distance() {
  // A common scale of 18 units per coordinate unit preserves the 9:12 legs.
  return <svg className={local.canvas} viewBox="0 0 410 360" role="img" aria-label="Точки (−3, 7) и (6, −5) соединены отрезком длины 15. Поясняющий прямоугольный треугольник имеет катеты 9 по горизонтали и 12 по вертикали.">
    <path d="M55 65L217 281" className={css.highlight}/>
    <path d="M55 65H217V281M199 65V83H217" className={css.helper}/>
    <circle cx="55" cy="65" r="5" fill="#43334e"/><circle cx="217" cy="281" r="5" fill="#43334e"/>
    <text x="29" y="38">(−3, 7)</text><text x="230" y="306">(6, −5)</text>
    <text x="136" y="48" textAnchor="middle" className={local.accent}>9</text>
    <text x="235" y="180" className={local.accent}>12</text>
    <text x="102" y="202" className={`${local.accent} ${css.labelBg}`}>15</text>
  </svg>;
}

const diagrams={
  'half-square':HalfSquare, 'rectangle-walk':RectangleWalk, slope:Slope,
  inequality:Inequality, 'parallel-angles':ParallelAngles, distance:Distance,
};

export default function MathFigure({ type, solved=false }) {
  const Diagram=diagrams[type];
  return <figure className={`${css.figure} ${local.diagram}`}><Diagram solved={solved}/></figure>;
}
