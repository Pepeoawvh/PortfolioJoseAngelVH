# AGENTS.md — Portafolio José Angel Valdés Hernández

Proyecto: Portafolio personal dual — Desarrollador Web Fullstack & Fotógrafo Profesional
Repo: PortfolioJoseAngelVH
Deploy: https://joseangelportfolio.vercel.app
Stack: Next.js 14 · JavaScript (JSX) · Tailwind CSS · Firebase · Vercel

---

## Descripción del proyecto

Portafolio de doble identidad con dos experiencias visuales completamente independientes,
accesibles desde un landing page con pantalla dividida en diagonal:

- `/webdev` — Portafolio de Desarrollo Web. Temática verde oscura, arquitectura SPA con
  cambio de secciones por estado React, proyectos fullstack con filtros, certificaciones,
  CV descargable, contacto vía WhatsApp.

- `/portphoto` — Portafolio Fotográfico. Temática negra y ámbar, carrusel de pantalla
  completa con 20 fotos propias y efecto Ken Burns, dropdowns animados desde el navbar,
  formulario de contacto conectado a Firebase Firestore.

---

## Estructura del proyecto

```
src/
  app/
    layout.js                   # Layout raíz — metadata, SEO, Schema.org, fuentes
    page.js                     # Landing page pantalla dividida (/)
    globals.css
    ui/fonts.js                 # Google Fonts (Jost, Montserrat, Questrial, Source Sans 3)
    components/
      layout/
        NavbarIntro.jsx         # Navbar landing (solo logo)
        Footer.jsx
        MenuOverlay.jsx
        NavLink.jsx
        WspButton.jsx           # Botón flotante WhatsApp
      ui/
        Welcome.jsx             # Pantalla dividida diagonal
        Form.jsx                # Formulario genérico reutilizable
    webdev/
      page.jsx                  # SPA — secciones por estado React
      components/
        NavbarWeb.jsx
        FooterWeb.jsx
        AboutWeb.jsx            # Bio + pestañas (Skills, Educación, Certificaciones)
        WebProjectsSection.jsx  # Proyectos con filtro por categoría
        ProjectCard.jsx
        EmailSection.jsx        # CTA WhatsApp
        TabButton.jsx
    portphoto/
      layout.jsx                # Layout con navbar + Context para dropdowns
      page.jsx                  # Galería principal (carrusel)
      context/PhotoContext.jsx  # Estado global del dropdown activo
      aboutphoto/page.jsx       # About fotógrafo (pestañas desktop / acordeón mobile)
      contactphoto/page.jsx     # Contacto + formulario Firebase
      components/
        NavbarPhoto.jsx
        FooterPhoto.jsx
        Carrusel.jsx            # Carrusel custom — autoplay 8s, Ken Burns, teclado
        AboutPhoto.jsx          # Secciones desktop (pestañas)
        MobileSectionsPhoto.jsx # Secciones mobile (acordeón)
        Fotolibros.jsx          # Panel dropdown
        ProyectosPh.jsx         # Panel dropdown
        EducPh.jsx              # Panel dropdown
        FormPhoto.jsx           # Formulario Firebase
        ProjectTag.jsx
  lib/
    config.js
    constants.js
    helpers.js
  services/
    firebase/
      config.js                 # Inicialización Firebase (env vars)
      index.js
      sender.js                 # Servicio envío formulario

public/
  images/                       # Fotos, screenshots, logos
  docs/                         # CV PDF, certificado DevOps
```

---

## Tech Stack

### Frontend
- **Next.js 14** con App Router — SSR/SSG
- **JavaScript (JSX)** — el proyecto usa JS, no TypeScript (tsconfig con `allowJs`, `strict: false`)
- **React 18**

### Estilos y animaciones
- **Tailwind CSS 3** con plugins: `tailwindcss-animated`, `tailwindcss-textshadow`,
  `tailwind-scrollbar`, `tailwind-clip-path`
- **Framer Motion 10** — animaciones de scroll y entrada en proyectos
- **react-type-animation** — efecto typewriter en landing
- **react-animated-numbers** — contadores numéricos animados

### Backend y servicios
- **Firebase 12** — Firestore para mensajes del formulario de contacto
- Variables de entorno en `.env` (nunca commitear)

### Iconos y fuentes
- FontAwesome (brands + solid), Heroicons, Lucide React
- Google Fonts: Jost, Montserrat, Questrial, Source Sans 3

---

## Convenciones de código

### Lenguaje
- El proyecto es **JavaScript (JSX)**, no TypeScript. No migrar a TS sin decisión explícita.
- `tsconfig.json` tiene `allowJs: true` y `strict: false` — respetar esto.
- Componentes en archivos `.jsx`, utilidades en `.js`

### Componentes React
- Componentes funcionales con hooks — sin clases
- Naming: PascalCase para componentes, camelCase para funciones y variables
- Un componente por archivo
- Agregar `'use client'` cuando el componente usa `useState`, `useEffect` o eventos browser

### Estado y contexto
- Estado local con `useState`, efectos con `useEffect`
- Estado global solo con React Context (ya existe `PhotoContext` para los dropdowns)
- No agregar Redux, Zustand u otras librerías de estado sin necesidad clara

### Estilos
- **Solo Tailwind** — sin CSS Modules, sin styled-components, sin CSS inline (excepto
  para valores dinámicos que no se pueden expresar con clases)
- Clip-paths en `tailwind.config.js` bajo `clipPath` — no hardcodear en className
- Colores del tema definidos en `tailwind.config.js` — usar los tokens, no valores hex crudos
- Mobile-first: diseñar base para mobile, usar `sm:` `md:` `lg:` para escalar

### Firebase / formularios
- Toda interacción con Firestore va en `services/firebase/`
- El componente de formulario nunca importa Firebase directamente — usa el servicio
- Variables de entorno con prefijo `NEXT_PUBLIC_` solo las que deben ser accesibles en browser

---

## Identidades visuales — NO mezclar

Las dos secciones tienen identidades completamente separadas. Respetar siempre:

| Aspecto | /webdev | /portphoto |
|---------|---------|------------|
| Tema de color | Verde oscuro | Negro + ámbar |
| Navbar | `NavbarWeb.jsx` | `NavbarPhoto.jsx` |
| Footer | `FooterWeb.jsx` | `FooterPhoto.jsx` |

**Nunca** usar componentes de `/webdev` dentro de `/portphoto` ni viceversa.
Los únicos componentes compartidos son los de `app/components/layout/` y `app/components/ui/`.
Cualquier cambio en un shared component debe probarse en `/`, `/webdev` y `/portphoto`.

---

## Agentes disponibles

Suite de agentes en `.opencode/agents/`:

| Agente | Cuándo usarlo |
|--------|---------------|
| `portfolio-architect` | Cambios estructurales, nuevas secciones, orquestación |
| `portfolio-content-writer` | Textos, copys, bio, descripciones de proyectos |
| `portfolio-ui-designer` | Componentes visuales, animaciones, layouts |
| `portfolio-seo-optimizer` | Metadata, structured data, Core Web Vitals |
| `portfolio-project-updater` | Agregar o editar proyectos del catálogo |
| `portfolio-photo-showcase` | Galerías, lightboxes, carrusel, optimización de fotos |
| `portfolio-a11y` | Auditoría y corrección de accesibilidad WCAG 2.1 AA |

Skills instaladas relevantes:
`frontend-design` · `tailwind-css-patterns` · `react-best-practices` · `composition-patterns`
· `next-best-practices` · `next-cache-components` · `accessibility` · `seo`

---

## Variables de entorno requeridas

```
API_KEY                                  # Firebase — NO exponer en cliente
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

---

## Reglas de calidad

1. **No romper ninguna de las dos identidades visuales** — cambios en shared components
   deben probarse en `/`, `/webdev` y `/portphoto`
2. **El carrusel debe funcionar en mobile** — navegación táctil, autoplay pausado al hover
3. **Formulario de contacto** — validar en cliente antes de enviar a Firestore
4. **Imágenes** — usar `next/image` para todo lo que esté en `/public/images/`;
   `priority={true}` en la primera imagen del carrusel, lazy en el resto
5. **Carrusel accesible** — mantener navegación por teclado (←→ y Escape) al modificar `Carrusel.jsx`
6. **No commitear `.env`** — está en `.gitignore`, verificar antes de cada push

---

## Commits

Formato: `type(scope): descripción en español`

```
feat(portphoto): agregar panel dropdown de nuevos proyectos
fix(carrusel): corregir autoplay en iOS Safari
perf(webdev): optimizar imágenes de ProjectCard con next/image
style(landing): ajustar clip-path diagonal en mobile < 375px
refactor(firebase): extraer lógica de envío a sender.js
docs(agents): actualizar AGENTS.md con nueva estructura
```

Types: `feat` · `fix` · `perf` · `style` · `refactor` · `docs` · `chore`
