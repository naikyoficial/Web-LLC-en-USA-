# EmprendeUS — Web Nicho LLC en EE. UU. (español)

Portal de autoridad en español para no residentes que quieren **formar y gestionar su LLC en
Estados Unidos**: guías verificadas, comparativas honestas de servicios y herramientas interactivas.
Construido con **Astro** para máxima velocidad y SEO.

## Objetivo del proyecto

Posicionar rápido en Google y generar tráfico orgánico para monetizar con **afiliados** (formación de
LLC, banca) y, más adelante, **display ads**. Nicho YMYL (dinero/legal), así que la estrategia prioriza
autoridad temática, E-E-A-T y SEO técnico impecable.

## Decisiones estratégicas

- **Audiencia prioritaria:** no residentes (LATAM/España) — mayor volumen de búsqueda y mejores afiliados.
- **Diferenciadores de contenido ("moat"):** Formulario **5472** (multa de $25,000, casi nadie lo cubre
  bien en español), **BOI/FinCEN 2025**, **EIN sin SSN**, banca para no residentes.
- **Monetización:** afiliados primero; los ad slots quedan reservados (con alto fijo para no romper CLS).

## Stack

- [Astro 4](https://astro.build) — HTML estático, JS mínimo, Core Web Vitals en verde.
- Interactividad (calculadora, quiz, FAQ, newsletter) en **JS vanilla** dentro de cada componente.
- `@astrojs/sitemap` para el sitemap automático.
- Fuentes: Playfair Display, Inter, JetBrains Mono (Google Fonts).

## SEO técnico incluido

- JSON-LD: `Organization`, `WebSite`+SearchAction, `FAQPage`, `Article`, `HowTo`, `BreadcrumbList`, `ItemList`.
- Meta tags completos: canonical, Open Graph, Twitter Card, theme-color.
- `sitemap-index.xml`, `robots.txt`, favicon e imagen OG por defecto.
- HTML semántico, accesible (skip-link, focus visible, `prefers-reduced-motion`) y responsive.

## Estructura

```
src/
  data/
    site.js                # Config central: marca, proveedores, FAQs, nav, footer
    states.js              # Datos verificados de los 50 estados + helpers
    seo.js                 # Constructores de JSON-LD (Article, FAQ, HowTo, Breadcrumb)
  layouts/BaseLayout.astro # <head>, SEO, JSON-LD base
  components/              # Header, Hero+Calculadora, Comparador, Quiz, ContentHub,
                           # FaqEEAT, ArticleShell, FaqInline, CategoryHub, StaticPage, Footer…
  pages/
    index.astro            # Homepage
    guias/                 # Índice + guía pilar (formar LLC no residente)
    estados/               # index (comparador 50) + [slug] (50 páginas programáticas)
    impuestos/             # hub + EIN sin SSN + ITIN + Formulario 5472
    banca/                 # hub + cuentas para no residentes
    herramientas/          # hub de herramientas
    sobre-nosotros, metodologia, divulgacion, contacto, privacidad, terminos
public/                    # robots.txt, favicon.svg, og-default.svg
```

## Contenido (67 páginas)

- **50 páginas de estados** (`/estados/[estado]`): cada una con tabla de costos, ventajas/desventajas
  derivadas de datos reales, veredicto para no residentes, pasos, FAQ y fuente oficial enlazada.
  Contenido único por estado (no thin content).
- **Hub comparativo** de los 50 estados con tabla ordenable.
- **Guías pilares**: formar LLC no residente, EIN sin SSN, ITIN, Formulario 5472, banca.
- **Hubs de categoría** (silos SEO): impuestos, banca, herramientas.
- **Páginas E-E-A-T**: sobre nosotros, metodología, divulgación, contacto, privacidad, términos.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist (estático)
npm run preview    # sirve /dist
```

## Antes de publicar (checklist)

1. Cambiar `SITE.url` en `src/data/site.js` por el dominio real (y en `public/robots.txt`).
2. Reemplazar los `href: '#'` de `PROVIDERS` por tus **enlaces de afiliado** reales.
3. Conectar el formulario del newsletter a tu proveedor de email (ver `ContentHub.astro`).
4. Completar autor/credenciales reales para reforzar E-E-A-T.
5. Verificar tarifas estatales del año en curso (fuentes enlazadas en cada guía).

## Roadmap sugerido

- [ ] Páginas programáticas "LLC en [Estado]" para los 50 estados.
- [ ] Clúster de contenido: EIN sin SSN, ITIN (W-7), Formulario 5472, banca (Mercury/Relay/Wise).
- [ ] Páginas de confianza: Sobre nosotros, Metodología, Divulgación de afiliados, Privacidad, Términos.
- [ ] Más herramientas: comparador de los 50 estados, estimador de impuestos, checklist descargable.
