// ============================================================================
// Configuración central del sitio EmprendeUS
// Editá estos valores para adaptar dominio, marca y datos comerciales.
// ============================================================================

export const SITE = {
  name: 'EmprendeUS',
  // Cambiá esto por tu dominio real antes de publicar.
  url: 'https://emprendeus.com',
  locale: 'es',
  // País/región objetivo principal para SEO (audiencia: no residentes en LATAM/España).
  description:
    'Guías claras en español para abrir y gestionar tu LLC en Estados Unidos como no residente: EIN sin SSN, ITIN, banca, Formulario 5472 e impuestos. Comparativas honestas y herramientas gratis.',
  tagline: 'Tu LLC en Estados Unidos, sin humo y en español',
  twitter: '@emprendeus',
  // Última revisión editorial global (se muestra en secciones de confianza).
  updated: '2026-07-01',
  updatedLabel: 'julio 2026',
};

// ---------------------------------------------------------------------------
// Navegación principal
// ---------------------------------------------------------------------------
export const NAV = [
  { label: 'Crear LLC por Estado', href: '/estados' },
  { label: 'EIN, ITIN & Impuestos', href: '/impuestos' },
  { label: 'Cuentas Bancarias', href: '/banca' },
  { label: 'Comparativas', href: '/comparativas' },
  { label: 'Herramientas', href: '/herramientas' },
];

// ---------------------------------------------------------------------------
// Estadísticas del hero
// ---------------------------------------------------------------------------
export const HERO_STATS = [
  { value: '50', label: 'estados cubiertos' },
  { value: '55+', label: 'guías verificadas' },
  { value: '2026', label: 'datos actualizados' },
];

// ---------------------------------------------------------------------------
// Fuentes oficiales (con enlaces reales — clave para E-E-A-T en YMYL)
// ---------------------------------------------------------------------------
export const SOURCES = [
  { name: 'IRS', href: 'https://www.irs.gov/es' },
  { name: 'SBA.gov', href: 'https://www.sba.gov/' },
  { name: 'Secretarías de Estado', href: 'https://www.nass.org/business-services/state-business-portals' },
  { name: 'USCIS', href: 'https://www.uscis.gov/es' },
  { name: 'FinCEN', href: 'https://www.fincen.gov/boi' },
];

// ---------------------------------------------------------------------------
// Datos de costos por estado (verificados jul 2026 — revisá anualmente)
// Cada estado incluye la fuente oficial para citar.
// ---------------------------------------------------------------------------
export const STATES = {
  NM: {
    key: 'NM',
    name: 'Nuevo México',
    slug: 'nuevo-mexico',
    reg: '$50',
    regNum: 50,
    annual: '$0',
    annualNote: 'sin reporte anual',
    annualNum: 0,
    privacy: 'Alta',
    tip: 'Registro barato, sin reporte anual y con anonimato del propietario; excelente para freelancers y negocios 100% online que priorizan bajo costo.',
    source: 'https://www.sos.nm.gov/business-services/',
  },
  WY: {
    key: 'WY',
    name: 'Wyoming',
    slug: 'wyoming',
    reg: '$100',
    regNum: 100,
    annual: '$60',
    annualNote: 'tarifa mínima anual',
    annualNum: 60,
    privacy: 'Alta',
    tip: 'La opción más equilibrada para no residentes con negocio digital: bajo costo a largo plazo, fuerte privacidad y leyes de LLC probadas desde 1977.',
    source: 'https://sos.wyo.gov/business/',
  },
  FL: {
    key: 'FL',
    name: 'Florida',
    slug: 'florida',
    reg: '$125',
    regNum: 125,
    annual: '$138.75',
    annualNote: 'reporte anual',
    annualNum: 138.75,
    privacy: 'Baja (registro público)',
    tip: 'Popular por su comunidad hispana y si vas a operar físicamente en EE. UU. Ojo: tu nombre y dirección quedan en un registro público consultable.',
    source: 'https://dos.fl.gov/sunbiz/',
  },
  TX: {
    key: 'TX',
    name: 'Texas',
    slug: 'texas',
    reg: '$300',
    regNum: 300,
    annual: '$0',
    annualNote: 'reporte obligatorio, sin fee bajo umbral',
    annualNum: 0,
    privacy: 'Media',
    tip: 'Sin impuesto de franquicia si tus ingresos están bajo el umbral (~$2.47M), pero el registro inicial es caro y el reporte anual es obligatorio aunque no pagues.',
    source: 'https://www.sos.state.tx.us/corp/',
  },
  DE: {
    key: 'DE',
    name: 'Delaware',
    slug: 'delaware',
    reg: '$110',
    regNum: 110,
    annual: '$300',
    annualNote: 'franchise tax anual',
    annualNum: 300,
    privacy: 'Media',
    tip: 'El estándar corporativo para levantar inversión de fondos (VC). Para un negocio digital de no residente sin planes de capital, suele ser gasto de más.',
    source: 'https://corp.delaware.gov/',
  },
  CA: {
    key: 'CA',
    name: 'California',
    slug: 'california',
    reg: '$70',
    regNum: 70,
    annual: '$800',
    annualNote: 'franchise tax mínimo obligatorio',
    annualNum: 800,
    privacy: 'Baja',
    tip: 'Registro barato pero cuidado: el impuesto de franquicia mínimo de $800 anuales es obligatorio aunque no tengas ingresos. Solo conviene si operás en California.',
    source: 'https://www.sos.ca.gov/business-programs',
  },
};

export const STATE_ORDER = ['NM', 'WY', 'FL', 'TX', 'DE', 'CA'];

// ---------------------------------------------------------------------------
// Comparativa de servicios (reorientada a NO RESIDENTES)
// NOTA: reemplazá `href` por tus enlaces de afiliado reales.
// Precios ilustrativos verificados jul 2026 — revisá antes de publicar.
// ---------------------------------------------------------------------------
export const PROVIDERS = [
  {
    name: 'Bizee',
    href: '#',
    featured: false,
    stars: 5,
    starsHalf: false,
    rating: '4.6 / 5',
    price: '$0',
    priceNote: '+ tarifa estatal',
    pros: [
      'Formación básica sin costo de servicio',
      'EIN incluido en paquetes superiores',
      'Buen precio total para no residentes',
    ],
    cons: ['Tiempos de procesamiento variables', 'Soporte en español limitado'],
  },
  {
    name: 'doola',
    href: '#',
    featured: true,
    stars: 5,
    starsHalf: false,
    rating: '4.7 / 5',
    price: '$297',
    priceNote: '/año + tarifa estatal',
    badge: '★ Mejor para no residentes',
    pros: [
      'Especialistas en dueños extranjeros sin SSN',
      'Gestionan EIN, banca y Formulario 5472',
      'Panel todo-en-uno y soporte en español',
    ],
    cons: ['Precio anual más alto que la competencia'],
  },
  {
    name: 'Globalfy',
    href: '#',
    featured: false,
    stars: 5,
    starsHalf: false,
    rating: '4.5 / 5',
    price: '$249',
    priceNote: '/año + tarifa estatal',
    pros: [
      'Enfocados en emprendedores de LATAM',
      'Incluyen dirección de negocio en EE. UU.',
      'Ayuda con cuenta bancaria remota',
    ],
    cons: ['Menos opciones de estados que otros'],
  },
];

// ---------------------------------------------------------------------------
// Perks del quiz
// ---------------------------------------------------------------------------
export const QUIZ_PERKS = [
  'Recomendación LLC vs C-Corp según tu caso',
  'Estado ideal según residencia y tipo de negocio',
  'Checklist de documentos (incluye EIN, ITIN y 5472)',
];

// ---------------------------------------------------------------------------
// FAQ (con respuestas ampliadas y precisas — alimenta el JSON-LD FAQPage)
// ---------------------------------------------------------------------------
export const FAQS = [
  {
    q: '¿Puedo abrir una LLC en EE. UU. si no soy residente ni tengo SSN?',
    a: 'Sí. No necesitás ser ciudadano, residente ni tener SSN para formar una LLC. Podés registrarla en cualquier estado de forma 100% remota y solicitar tu EIN al IRS con el Formulario SS-4 (por fax o correo), usando tu número de pasaporte como identificación si no tenés SSN ni ITIN.',
  },
  {
    q: '¿Qué estado me conviene más para abrir mi LLC?',
    a: 'Depende de tu modelo de negocio. Para un no residente con negocio digital, Wyoming y Nuevo México son los más económicos y privados. Florida conviene si vas a operar físicamente en EE. UU. o querés cercanía con la comunidad hispana. Delaware solo vale la pena si vas a levantar inversión de fondos de capital de riesgo.',
  },
  {
    q: '¿Necesito un ITIN o un EIN?',
    a: 'Son cosas distintas y muchos las confunden. El EIN identifica a tu empresa ante el IRS: lo necesitás para operar, contratar y abrir cuenta bancaria de negocio. El ITIN es tu identificación fiscal personal como individuo sin SSN, y lo necesitás cuando tenés que presentar una declaración de impuestos personal en EE. UU. Muchos no residentes necesitan el EIN pero no el ITIN.',
  },
  {
    q: '¿Cuánto cuesta mantener una LLC al año?',
    a: 'Sumá tres cosas: (1) la tarifa estatal anual, que va desde $0 en Nuevo México hasta $800 en California; (2) el agente registrado, entre $100 y $150 al año; y (3) la preparación de impuestos. Si sos dueño extranjero de una LLC de un solo miembro, es casi seguro que necesites presentar el Formulario 5472 + un 1120 pro-forma cada año.',
  },
  {
    q: '¿Qué es el Formulario 5472 y por qué es tan importante?',
    a: 'Es una declaración informativa obligatoria para las LLC de un solo miembro con dueño extranjero (non-resident alien). No pagás impuesto con ella, pero NO presentarla a tiempo genera una multa automática de $25,000. Es el error más caro y frecuente entre no residentes, y casi ningún portal en español lo explica bien. Se presenta junto con un Formulario 1120 pro-forma cada año.',
  },
  {
    q: '¿Tengo que reportar a FinCEN (BOI)?',
    a: 'Depende y cambió en 2025. Tras una regla provisional de FinCEN, las LLC formadas en EE. UU. por personas de EE. UU. quedaron exentas del reporte de Beneficial Ownership Information (BOI). Las entidades extranjeras registradas para operar en EE. UU. sí deben reportar. Como las reglas siguen ajustándose, verificá siempre el estado actual en fincen.gov/boi antes de decidir.',
  },
  {
    q: '¿EmprendeUS tramita la LLC por mí?',
    a: 'No. Somos un portal de información y comparación independiente. Te ayudamos a elegir el mejor servicio para tu caso y te guiamos paso a paso, pero la formación la realiza el proveedor que elijas o vos mismo directamente con el estado. Algunos enlaces son de afiliado y pueden generarnos una comisión sin costo adicional para ti.',
  },
];

// ---------------------------------------------------------------------------
// Artículos destacados del hub de contenido
// ---------------------------------------------------------------------------
export const FEATURED_ARTICLE = {
  href: '/guias/formar-llc-no-residente',
  category: 'Guía pilar',
  readTime: '16 min de lectura',
  updated: 'Actualizado jul 2026',
  title: 'Cómo formar tu LLC en EE. UU. como no residente (guía completa 2026)',
  excerpt:
    'El paso a paso definitivo sin SSN: elegir estado, agente registrado, EIN por SS-4, banca remota y el Formulario 5472 que casi nadie te explica.',
  imgLabel: '[ imagen editorial · LLC no residente ]',
};

export const ARTICLES = [
  {
    href: '/impuestos/formulario-5472',
    category: 'Impuestos',
    readTime: '13 min',
    updated: 'jul 2026',
    title: 'Formulario 5472: la declaración de $25,000 que no podés olvidar',
    imgLabel: '[ formulario 5472 ]',
  },
  {
    href: '/estados',
    category: 'Estados',
    readTime: '8 min',
    updated: 'jul 2026',
    title: 'Wyoming vs Florida vs Delaware: ¿dónde te conviene abrir tu LLC?',
    imgLabel: '[ mapa comparativo ]',
  },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export const FOOTER_COLS = [
  {
    title: 'Crear LLC',
    links: [
      { label: 'LLC en Nuevo México', href: '/estados/new-mexico' },
      { label: 'LLC en Wyoming', href: '/estados/wyoming' },
      { label: 'LLC en Florida', href: '/estados/florida' },
      { label: 'LLC en Delaware', href: '/estados/delaware' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Sacar el EIN sin SSN', href: '/impuestos/ein-sin-ssn' },
      { label: 'Solicitar el ITIN', href: '/impuestos/itin' },
      { label: 'Formulario 5472', href: '/impuestos/formulario-5472' },
      { label: 'Comparativas', href: '/comparativas' },
    ],
  },
  {
    title: 'EmprendeUS',
    links: [
      { label: 'Sobre nosotros', href: '/sobre-nosotros' },
      { label: 'Metodología editorial', href: '/metodologia' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Divulgación de afiliados', href: '/divulgacion' },
    ],
  },
];
