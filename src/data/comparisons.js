// ============================================================================
// Datos para guías de comparación directa (alta intención de búsqueda)
// ============================================================================

// --- Comparativas estado vs estado (curadas, no todas las combinaciones) ---
// Cada matchup define su slug y los dos estados por su clave en states.js.
export const STATE_MATCHUPS = [
  { slug: 'wyoming-vs-nuevo-mexico', a: 'wyoming', b: 'new-mexico',
    angle: 'Las dos opciones más económicas y con mayor privacidad para no residentes con negocio digital. ¿Cuál gana?' },
  { slug: 'wyoming-vs-delaware', a: 'wyoming', b: 'delaware',
    angle: 'La opción de bajo costo y privacidad frente al estándar corporativo para levantar inversión.' },
  { slug: 'florida-vs-wyoming', a: 'florida', b: 'wyoming',
    angle: 'Presencia y comunidad hispana frente a costo mínimo y privacidad total.' },
  { slug: 'delaware-vs-florida', a: 'delaware', b: 'florida',
    angle: 'El estándar de las startups frente al estado favorito de los emprendedores hispanos.' },
  { slug: 'florida-vs-texas', a: 'florida', b: 'texas',
    angle: 'Dos estados grandes y sin impuesto a la renta: cuál conviene para operar en EE. UU.' },
  { slug: 'wyoming-vs-texas', a: 'wyoming', b: 'texas',
    angle: 'Costo mínimo y privacidad frente al mercado y las ventajas fiscales de Texas.' },
];

// --- Servicios de formación de LLC (datos enriquecidos para comparar) ---
// NOTA: reemplazá `href` por tus enlaces de afiliado reales.
export const SERVICES = {
  doola: {
    name: 'doola', href: 'https://app.doola.com/signup/registration?mwr=nicolas-7ecc', rating: '4.7 / 5', priceLabel: '$297/año + tarifa estatal',
    espanol: 'Sí, soporte en español',
    ein: 'Incluido (gestionan EIN sin SSN)',
    banca: 'Ayuda a abrir cuenta (Mercury/Relay)',
    impuestos: 'Incluyen Formulario 5472 en planes',
    bestFor: 'No residentes que quieren todo resuelto en un solo lugar (formación + EIN + banca + impuestos).',
    pros: ['Especialistas en dueños extranjeros sin SSN', 'Gestionan EIN, banca y Formulario 5472', 'Panel todo-en-uno y soporte en español'],
    cons: ['Precio anual más alto que la competencia', 'El costo recurrente puede pesar en negocios muy pequeños'],
  },
  globalfy: {
    name: 'Globalfy', href: 'https://globalfy.com/?fp_ref=emprendeus', rating: '4.5 / 5', priceLabel: '$249/año + tarifa estatal',
    espanol: 'Sí, enfocados en LATAM',
    ein: 'Incluido en paquetes',
    banca: 'Ayuda con cuenta bancaria remota',
    impuestos: 'Servicios fiscales disponibles (add-on)',
    bestFor: 'Emprendedores de Latinoamérica que valoran una empresa con foco regional y dirección en EE. UU.',
    pros: ['Enfocados en emprendedores de LATAM', 'Incluyen dirección de negocio en EE. UU.', 'Ayuda con cuenta bancaria remota'],
    cons: ['Menos opciones de estados que otros', 'Algunos servicios fiscales son costo aparte'],
  },
  bizee: {
    name: 'Bizee', href: 'https://www.bizee.com/', rating: '4.6 / 5', priceLabel: '$0 de servicio + tarifa estatal',
    espanol: 'Limitado',
    ein: 'Incluido en paquetes superiores',
    banca: 'No gestiona la cuenta directamente',
    impuestos: 'No incluye 5472 (lo hacés aparte)',
    bestFor: 'Quienes buscan el menor costo inicial y se sienten cómodos gestionando EIN, banca e impuestos por su cuenta.',
    pros: ['Formación básica sin costo de servicio', 'EIN incluido en paquetes superiores', 'Muy buen precio total de entrada'],
    cons: ['Soporte en español limitado', 'No acompaña banca ni Formulario 5472', 'Tiempos de procesamiento variables'],
  },
};

export const SERVICE_MATCHUPS = [
  { slug: 'doola-vs-globalfy', a: 'doola', b: 'globalfy',
    angle: 'Dos servicios pensados para no residentes de LATAM. ¿Cuál te conviene según tu caso?' },
  { slug: 'doola-vs-bizee', a: 'doola', b: 'bizee',
    angle: 'El todo-en-uno con soporte en español frente a la opción más económica de entrada.' },
];
