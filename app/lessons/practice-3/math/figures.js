import css from '../../practice-2/math/math.module.css';

const shaded = '#ceb3da';
const ink = '#43334e';

function Quadrilateral({ solved }) {
  const rightX = 111 + (240 - 26) * (Math.SQRT2 - 1);
  return <svg viewBox="0 0 260 265" role="img" aria-label={solved ? 'Диагональ делит четырёхугольник на два треугольника.' : 'Quadrilateral with a right angle and angles labeled 2x degrees, x degrees, and x degrees.'}>
    {solved && <>
      <path d="M32 240V105L111 26Z" fill="#eee0f5" />
      <path d={`M32 240 111 26 ${rightX} 240Z`} fill="#f6efd8" />
      <path d="M32 240 111 26" className={css.helper} />
    </>}
    <path d={`M32 240V105L111 26 ${rightX} 240Z M32 225H47V240`} className={css.ink} />
    <text x="38" y="123" className={css.angle}>2x°</text>
    <text x="101" y="78" className={css.angle}>x°</text>
    <text x={rightX - 47} y="228" className={css.angle}>x°</text>
  </svg>;
}

function Midpoint({ solved }) {
  const [ax, ay, bx, by] = [85, 190, 320, 45];
  const nx = (ax + bx) / 2;
  const ny = (ay + by) / 2;
  const xZero = ax + (bx - ax) / 3;
  const yAt = x => ay + (by - ay) * (x - ax) / (bx - ax);
  return <svg viewBox="0 0 410 260" role="img" aria-label={solved ? 'Середина N имеет координаты три вторых и k пополам. Пунктир отмечает одинаковые смещения по обеим координатам.' : 'A line through A at (−3, 0), midpoint N, and B at (6, k).'}>
    <path d={`M24 ${ay}H385 M${xZero} 18V240`} className={css.axis} />
    {solved && <path d={`M${ax} ${ay}H${nx}V${ny}H${bx}V${by}`} className={css.helper} />}
    <path d={`M26 ${yAt(26)}L349 ${yAt(349)}`} className={css.ink} />
    <circle cx={ax} cy={ay} r="5" fill={ink} />
    <circle cx={nx} cy={ny} r="5" fill={solved ? '#9160a6' : ink} />
    <circle cx={bx} cy={by} r="5" fill={ink} />
    <text x="55" y="181">A</text>
    <text x="61" y="215">(−3, 0)</text>
    <text x="178" y="104">N</text>
    <text x="292" y="38">B</text>
    <text x="324" y="70">(6, k)</text>
    {solved && <text x="218" y="149" className={css.labelBg}>(3/2, k/2)</text>}
  </svg>;
}

function Sector({ solved }) {
  const cx = 134;
  const cy = 129;
  const radius = 104;
  const angle = Math.PI / 5;
  const px = cx + radius * Math.cos(angle);
  const py = cy - radius * Math.sin(angle);
  const qx = cx + radius;
  const arc = `M${px} ${py} A${radius} ${radius} 0 0 1 ${qx} ${cy}`;
  return <svg viewBox="0 0 279 258" role="img" aria-label={solved ? 'Закрашен сектор в 36 градусов. Его дуга PQ выделена фиолетовым.' : 'A circle with a shaded sector bounded by the radii to P and Q and the short arc PQ.'}>
    <path d={`${arc} L${cx} ${cy}Z`} fill={shaded} />
    <circle cx={cx} cy={cy} r={radius} className={css.ink} />
    <path d={`M${px} ${py} ${cx} ${cy} ${qx} ${cy}`} className={css.ink} />
    {solved && <path d={arc} className={css.highlight} />}
    <circle cx={px} cy={py} r="3.5" fill={ink} />
    <circle cx={qx} cy={cy} r="3.5" fill={ink} />
    <text x={px + 7} y={py - 5}>P</text>
    <text x={qx + 9} y={cy + 6}>Q</text>
    {solved && <><text x="167" y="119" className={css.small}>36°</text><text x="185" y="149" className={css.small}>r = 10</text></>}
  </svg>;
}

const parabolas = {
  F: { x: 92, y: 151, edgeY: 10, halfWidth: 61 },
  G: { x: 134, y: 151, edgeY: 10, halfWidth: 62 },
  H: { x: 87, y: 95, edgeY: 173, halfWidth: 62 },
  J: { x: 131, y: 56, edgeY: 173, halfWidth: 62 },
  K: { x: 110, y: 82, edgeY: 10, halfWidth: 62 },
};

function Parabola({ option, solved = false }) {
  const { x, y, edgeY, halfWidth } = parabolas[option];
  const yIntercept = y + (edgeY - y) * ((110 - x) / halfWidth) ** 2;
  return <svg className={css.parabola} viewBox="0 0 220 184" aria-hidden={solved ? undefined : true} role={solved ? 'img' : undefined} aria-label={solved ? 'Парабола открывается вверх, вершина правее оси y, пересечение с осью y ниже оси x.' : undefined}>
    <path d="M8 91H212 M110 7V177" className={css.axis} />
    <path d={`M${x - halfWidth} ${edgeY}Q${x} ${2 * y - edgeY} ${x + halfWidth} ${edgeY}`} className={solved ? css.highlight : css.ink} />
    {solved && <>
      <circle cx="110" cy={yIntercept} r="3.5" fill={ink} />
      <text x="103" y={yIntercept - 6} textAnchor="end" className={`${css.small} ${css.labelBg}`}>y(0) = −2 000</text>
      <circle cx={x} cy={y} r="3.5" fill={ink} />
      <text x={x + 8} y={y + 14} className={`${css.small} ${css.labelBg}`}>вершина</text>
      <text x="205" y="85" className={css.small}>x</text><text x="116" y="14" className={css.small}>y</text>
    </>}
  </svg>;
}

function TrigTriangle() {
  const left = 213 - 140 * Math.sqrt(15) / 7;
  return <svg viewBox="0 0 265 220" role="img" aria-label="Прямоугольный треугольник. Гипотенуза 8, катет напротив угла a равен 7, прилежащий катет равен корню из 15.">
    <path d={`M${left} 176H213V36Z`} fill="#eee0f5" stroke={ink} strokeWidth="2" />
    <path d="M201 176V164H213" className={css.ink} />
    <text x="153" y="163" className={css.angle}>a</text>
    <text x="157" y="104">8</text>
    <text x="225" y="111">7</text>
    <text x="173" y="201">√15</text>
  </svg>;
}

function TangentCircles({ solved }) {
  return <svg viewBox="0 0 260 258" role="img" aria-label={solved ? 'Два диаметра по 2r лежат на одном диаметре большого круга длиной 4r.' : 'Two identical shaded circles touch each other and the inside of a larger circle, with all three centers aligned horizontally.'}>
    <circle cx="130" cy="129" r="108" className={css.ink} />
    <circle cx="76" cy="129" r="54" fill={shaded} stroke={ink} strokeWidth="2.2" />
    <circle cx="184" cy="129" r="54" fill={shaded} stroke={ink} strokeWidth="2.2" />
    {solved && <>
      <path d="M22 129H238" className={css.helper} />
      {[22, 76, 130, 184, 238].map(x => <circle key={x} cx={x} cy="129" r="3" fill={ink} />)}
      <text x="76" y="111" textAnchor="middle">2r</text>
      <text x="184" y="111" textAnchor="middle">2r</text>
    </>}
  </svg>;
}

const figures = {
  quadrilateral: Quadrilateral,
  midpoint: Midpoint,
  sector: Sector,
  'tangent-circles': TangentCircles,
  trig: TrigTriangle,
};

export default function MathFigure({ type, solved = false }) {
  if (Object.hasOwn(parabolas, type)) return <Parabola option={type} />;
  const Diagram = figures[type];
  return <figure className={`${css.figure} ${css.practiceDiagram}`}>
    {type === 'parabola' ? <Parabola option="G" solved /> : <Diagram solved={solved} />}
  </figure>;
}
