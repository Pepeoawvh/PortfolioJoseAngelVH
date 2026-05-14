# 🌐 Portafolio Personal — José Angel Valdés Hernández


**Portafolio personal dual** que presenta dos mundos creativos en un solo sitio web: el de un desarrollador web fullstack y el de un fotógrafo profesional. Construido con Next.js 14 App Router, con identidades visuales completamente independientes, animaciones fluidas y un diseño responsivo optimizado.

🔗 **Sitio en vivo:** [joseangelportfolio.vercel.app](https://joseangelportfolio.vercel.app)

---

## Descripción

Este proyecto es un portafolio personal de doble identidad. Desde una página de bienvenida animada con pantalla dividida en diagonal, el visitante elige entre dos experiencias visuales completamente distintas:

- **`/webdev`** — Portafolio de Desarrollo Web con temática verde oscura, proyectos fullstack, habilidades técnicas, certificaciones y CV descargable.
- **`/portphoto`** — Portafolio Fotográfico con temática negra y ámbar, carrusel de fotografías de pantalla completa, libros fotográficos, proyectos y formulario de contacto.

---

## Demo

> **Sitio en producción:** https://joseangelportfolio.vercel.app

| Landing Page | Portafolio Web Dev | Portafolio Fotografía |
|---|---|---|
| *(Agrega screenshot aquí)* | *(Agrega screenshot aquí)* | *(Agrega screenshot aquí)* |

---

## Tech Stack

### Frontend
| Tecnología | Versión | Uso |
|---|---|---|
| **Next.js** | 14.x | Framework principal, App Router, SSR/SSG |
| **React** | 18.x | Biblioteca de UI |
| **JavaScript (JSX)** | ES2022+ | Lenguaje principal del proyecto |

### Estilos
| Tecnología | Versión | Uso |
|---|---|---|
| **Tailwind CSS** | 3.x | Sistema de estilos utilitario |
| **tailwindcss-animated** | 1.x | Clases de animación de entrada (`animate-fade`, `animate-fade-up`) |
| **tailwindcss-textshadow** | 2.x | Sombras de texto |
| **tailwind-scrollbar** | 3.x | Scrollbar personalizado |
| **tailwind-clip-path** | 1.x | Clip-paths personalizados (pantalla diagonal del landing) |

### Animaciones
| Tecnología | Versión | Uso |
|---|---|---|
| **Framer Motion** | 10.x | Animaciones de scroll y entrada en proyectos |
| **react-type-animation** | 3.x | Efecto de escritura animada en el landing |
| **react-animated-numbers** | 1.x | Contadores numéricos animados |

### Backend y Servicios
| Tecnología | Versión | Uso |
|---|---|---|
| **Firebase** | 12.x | Firestore — almacenamiento de mensajes del formulario de contacto |

### Iconos y Fuentes
| Tecnología | Uso |
|---|---|
| **FontAwesome** (brands + solid) | Iconos de redes sociales y tecnologías |
| **Heroicons** | Controles del carrusel fotográfico |
| **Lucide React** | Iconos adicionales de la UI |
| **Google Fonts** (Jost, Montserrat, Questrial, Source Sans 3) | Tipografía del sitio |

### Infraestructura
| Tecnología | Uso |
|---|---|
| **Vercel** | Hosting y deployment continuo (rama `main`) |
| **Firebase Hosting** | Proyecto configurado (`portafolio-65500`) |

---

## Características principales

### Landing Page (`/`)
- Pantalla dividida en diagonal con `clip-path: polygon()` — verde para Desarrollo Web, ámbar para Fotografía
- Efecto de escritura animada (typewriter) en ambas mitades
- Navbar con logo personal y footer con links a todas las redes sociales

### Portafolio Desarrollo Web (`/webdev`)
- **Arquitectura SPA** — las secciones se cambian por estado de React sin recargar la página
- **Sección About** con bio, foto de perfil y pestañas:
  - `Habilidades`: Stack completo (Node.js, Express, MongoDB, JavaScript, React, Next.js)
  - `Educación`: Bootcamp FullStack (UDD) + Bootcamp DevOps (Adalid/SENCE)
  - `Certificaciones`: 6 badges de Credly + certificado PDF descargable
  - CV descargable en PDF
- **Sección Proyectos** con filtro por categorías:
  - *Proyectos Particulares*: proyectos para clientes reales
  - *Proyectos Personales*: proyectos propios
  - *Proyectos de Formación*: proyectos de bootcamp
  - Animaciones de entrada con Framer Motion, proyectos destacados al tope
  - Cada tarjeta muestra: título, descripción, badges de tecnologías, link a GitHub y preview en vivo
- **Sección Contacto** — CTA directo a WhatsApp con mensaje pre-llenado

### Portafolio Fotografía (`/portphoto`)
- **Carrusel de pantalla completa** — 20 fotografías propias, autoplay cada 8s, efecto Ken Burns (zoom lento), transiciones fade, navegación por teclado (←→ y Escape), pausa al hover
- **Navegación con dropdowns** — paneles animados que se despliegan desde el navbar:
  - `Fotolibros`: 3 libros fotográficos personales
  - `Proyectos`: 4 proyectos de Instagram
  - `Experiencias Educativas`: experiencias formativas en fotografía
- **Página About** (`/portphoto/aboutphoto`) con diseño responsivo:
  - Escritorio: pestañas para cambiar secciones
  - Mobile: acordeón colapsable
  - Secciones: Perfil Profesional, Especialización, Filosofía Fotográfica, Servicios
- **Página de Contacto** (`/portphoto/contactphoto`) con formulario conectado a Firebase Firestore e información de negocio (horarios, ubicación en Valparaíso)

---

## Estructura del proyecto

```
PortfolioJoseAngelVH/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Layout raíz — metadata, SEO, Schema.org, fuentes
│   │   ├── page.js                   # Landing page con pantalla dividida (/)
│   │   ├── globals.css               # Estilos globales
│   │   ├── ui/
│   │   │   └── fonts.js              # Definición de Google Fonts
│   │   ├── components/               # Componentes compartidos globales
│   │   │   ├── layout/
│   │   │   │   ├── NavbarIntro.jsx   # Navbar del landing (solo logo)
│   │   │   │   ├── Footer.jsx        # Footer con redes sociales
│   │   │   │   ├── MenuOverlay.jsx   # Menú mobile
│   │   │   │   ├── NavLink.jsx       # Link de navegación reutilizable
│   │   │   │   └── WspButton.jsx     # Botón flotante de WhatsApp
│   │   │   └── ui/
│   │   │       ├── Welcome.jsx       # Componente de pantalla dividida
│   │   │       └── Form.jsx          # Componente de formulario genérico
│   │   ├── webdev/                   # Ruta /webdev — Portafolio Web Dev
│   │   │   ├── page.jsx              # Página principal (SPA con cambio de secciones)
│   │   │   └── components/
│   │   │       ├── NavbarWeb.jsx
│   │   │       ├── FooterWeb.jsx
│   │   │       ├── AboutWeb.jsx      # Sección About con pestañas
│   │   │       ├── WebProjectsSection.jsx  # Sección de proyectos con filtros
│   │   │       ├── ProjectCard.jsx   # Tarjeta de proyecto individual
│   │   │       ├── EmailSection.jsx  # Sección de contacto (WhatsApp CTA)
│   │   │       └── TabButton.jsx     # Botón de pestaña reutilizable
│   │   └── portphoto/                # Ruta /portphoto — Portafolio Fotografía
│   │       ├── layout.jsx            # Layout con navbar + panels por Context
│   │       ├── page.jsx              # Galería principal (carrusel)
│   │       ├── context/
│   │       │   └── PhotoContext.jsx  # Estado global del dropdown activo
│   │       ├── aboutphoto/
│   │       │   └── page.jsx          # Página About fotógrafo (responsiva)
│   │       ├── contactphoto/
│   │       │   └── page.jsx          # Página de contacto + formulario Firebase
│   │       └── components/
│   │           ├── NavbarPhoto.jsx   # Navbar con triggers de dropdown
│   │           ├── FooterPhoto.jsx
│   │           ├── Carrusel.jsx      # Carrusel de pantalla completa (custom)
│   │           ├── AboutPhoto.jsx    # Secciones desktop (pestañas)
│   │           ├── MobileSectionsPhoto.jsx  # Secciones mobile (acordeón)
│   │           ├── Fotolibros.jsx    # Panel dropdown — Fotolibros
│   │           ├── ProyectosPh.jsx   # Panel dropdown — Proyectos fotográficos
│   │           ├── EducPh.jsx        # Panel dropdown — Experiencias educativas
│   │           ├── FormPhoto.jsx     # Formulario de contacto con Firebase
│   │           └── ProjectTag.jsx    # Tag de proyecto reutilizable
│   ├── lib/
│   │   ├── config.js
│   │   ├── constants.js              # (reservado para constantes globales)
│   │   └── helpers.js                # (reservado para utilidades)
│   └── services/
│       └── firebase/
│           ├── config.js             # Inicialización de Firebase (env vars)
│           ├── index.js              # Exportaciones de Firebase
│           └── sender.js            # Servicio de envío del formulario
├── public/
│   ├── images/                       # Imágenes estáticas (fotos, screenshots, logos)
│   ├── docs/                         # PDFs (CV, certificado DevOps)
│   ├── github-icon.svg
│   ├── linkedin-icon.svg
│   └── wspicon.svg
├── next.config.js                    # Config Next.js (dominio remoto: images.credly.com)
├── tailwind.config.js                # Config Tailwind (colores, plugins, clip-paths)
├── postcss.config.js
├── tsconfig.json                     # TS config (allowJs, strict: false)
├── .firebaserc                       # Alias del proyecto Firebase
├── .env                              # Variables de entorno (no commitear)
└── package.json
```

---

## Instalación y uso local

### Requisitos previos

- **Node.js** >= 18.x
- **npm** >= 9.x (o `pnpm` / `yarn`)
- Una cuenta de **Firebase** con un proyecto Firestore creado

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/PortfolioJoseAngelVH.git
cd PortfolioJoseAngelVH
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto basándote en el siguiente template:

```env
# Firebase — Configuración del proyecto
API_KEY=tu_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_proyecto_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
```

> Puedes obtener estos valores desde la **Consola de Firebase** → Configuración del proyecto → Tus apps → SDK de Firebase.

### 4. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Variables de entorno

| Variable | Requerida | Descripción |
|---|---|---|
| `API_KEY` | Sí | API Key de Firebase |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Sí | Auth domain del proyecto Firebase |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Sí | ID del proyecto Firebase |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Sí | Storage bucket de Firebase |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Sí | Sender ID de Firebase |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Sí | App ID de Firebase |

> **Importante:** Nunca subas el archivo `.env` al repositorio. Está incluido en `.gitignore`.

---

## Autor

**José Angel Valdés Hernández**
Desarrollador Web Fullstack & Fotógrafo Profesional
Valparaíso, Chile

| Red | Link |
|---|---|
| GitHub | [github.com/JoseAngelVH](https://github.com/JoseAngelVH) |
| LinkedIn | [linkedin.com/in/joseangelvaldes](https://linkedin.com/in/joseangelvaldes) |
| Instagram | [@joseangel.vh](https://www.instagram.com/joseangel.vh) |
| Behance | [behance.net/joseangelvaldes](https://www.behance.net/joseangelvaldes) |
| WhatsApp | [+56 9 4986 6129](https://wa.me/56949866129?text=Hola,%20me%20interesa%20contactarte) |
| Portafolio | [joseangelportfolio.vercel.app](https://joseangelportfolio.vercel.app) |

---

## Licencia

Este proyecto es de uso personal. El código fuente puede servir como referencia, pero los contenidos (fotografías, textos, nombre y marca personal) son propiedad exclusiva del autor.
