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
  data/site.js             # Configuración central: marca, estados, proveedores, FAQs, nav, footer
  layouts/BaseLayout.astro # <head>, SEO, JSON-LD base
  components/              # Header, Hero+Calculadora, Comparador, Quiz, ContentHub, FaqEEAT, Footer…
  pages/
    index.astro            # Homepage
    guias/                 # Guía pilar + índice de guías
public/                    # robots.txt, favicon.svg, og-default.svg
```

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
