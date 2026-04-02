# Portfolio de José Ángel Valdés Hernández

> Portafolio profesional dual que integra las disciplinas de **fotografía** y **desarrollo web** bajo una identidad visual propia..

🔗 [Ver sitio en producción](https://joseangelportfolio.vercel.app)

---

## Tabla de contenidos

1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Proceso UX](#proceso-ux)
3. [Mockups](#mockups)
4. [Paleta de colores](#paleta-de-colores)
5. [Tipografía](#tipografía)
6. [Diseño del prototipo](#diseño-del-prototipo)
7. [Entorno de desarrollo y tecnologías](#entorno-de-desarrollo-y-tecnologías)
8. [Instalación local](#instalación-local)
9. [Estado del proyecto](#estado-del-proyecto)
10. [Autor](#autor)

---

## Descripción del proyecto

Portafolio profesional desarrollado con **Next.js 14** y desplegado en **Vercel**. El sitio está dividido en dos módulos autónomos accesibles desde una pantalla de bienvenida:

| Módulo | Propósito |
|---|---|
| **Portafolio Fotográfico** | Exhibición de obra visual, fotolibros, proyectos educativos y redes sociales |
| **Portafolio Web** | Presentación de perfil profesional, habilidades, proyectos de desarrollo y formulario de contacto |

---

## Proceso UX

### Objetivos de diseño

El diseño responde a los siguientes principios UX:

- **Claridad jerárquica**: cada módulo posee su propia identidad visual sin romper la coherencia global del sitio.
- **Reducción de fricción**: navegación directa desde la pantalla de inicio hacia el módulo de interés del usuario.
- **Diseño responsivo**: la interfaz se adapta a dispositivos móviles, tabletas y escritorio sin pérdida de funcionalidad.
- **Consistencia visual**: tokens de color, tipografía y espaciado aplicados de forma sistemática mediante Tailwind CSS.
- **Accesibilidad**: contraste de color sobre fondos oscuros verificado para cumplir con ratios mínimos WCAG AA.

### Arquitectura de información

```
Pantalla de Inicio (Welcome)
├── Portafolio Fotográfico (/portphoto)
│   ├── Inicio (carrusel visual)
│   ├── Fotolibros
│   ├── Proyectos fotográficos
│   ├── Experiencias educativas
│   ├── Sobre mí (/aboutphoto)
│   └── Contacto (/contactphoto)
└── Portafolio Web (/webdev)
    ├── Perfil profesional + descarga de CV
    ├── Habilidades / Educación / Certificaciones (tabs)
    ├── Proyectos Web (Formativos · Particulares · Personales)
    └── Contacto (formulario con Firebase)
```

### Usuario objetivo

El sitio está orientado a dos perfiles de usuario principales:

- **Clientes potenciales y contratantes** que necesitan evaluar rápidamente el trabajo y las capacidades del autor.
- **Pares profesionales y colaboradores** que buscan referencias técnicas o proyectos compartidos.

La pantalla de inicio actúa como bifurcación intencional para que cada perfil acceda directamente al módulo que le es relevante, reduciendo el ruido cognitivo.

---

## Mockups

> _Añade aquí capturas o imágenes de los wireframes y mockups de alta fidelidad._

| Vista | Descripción |
|---|---|
| `https://imgur.com/fAO2ZsX` | Pantalla de bienvenida — escritorio |
| `https://imgur.com/EWiDklD` | Pantalla de bienvenida — móvil |
| `https://imgur.com/WlCdvaQ` | Inicio del portafolio fotográfico |
| `https://imgur.com/EWiDklD` | Inicio del portafolio web |

> Herramienta utilizada para el prototipado: _(completar — ej. Figma, Adobe XD, etc.)_

---

## Paleta de colores

El sistema de color está basado en una lógica de **contraste alto sobre fondo oscuro**, reforzando una estética contemporánea vinculada al trabajo creativo y tecnológico.

### Módulo Web (`/webdev`)

| Rol | Token | Valor HEX | Muestra |
|---|---|---|---|
| Fondo principal | `bg-[#0a1914]` | `#0a1914` | ![](https://placehold.co/20x20/0a1914/0a1914) |
| Acento primario | `#2ecc71` / `lime` | `#2ecc71` | ![](https://placehold.co/20x20/2ecc71/2ecc71) |
| Bordes y sombras | `#2ecc71` con opacidad | `rgba(46,204,113,0.2)` | — |
| Texto principal | `white` | `#ffffff` | — |

### Módulo Fotográfico (`/portphoto`)

> _Completar con los valores de color específicos del módulo fotográfico._

### Teoría del color aplicada

- **Verde lima / esmeralda** como acento: evoca naturaleza, crecimiento y creatividad. En combinación con fondos casi-negros (#0a1914) genera un contraste vívido de alta legibilidad sin tensión visual.
- **Fondo verde oscuro profundo** (`#0a1914`): diferencia intencionalmente con el negro puro para dar calidez al fondo y reforzar la identidad de marca.
- **Estrategia de opacidad progresiva**: los bordes y sombras usan el color acento con baja opacidad (10–20 %) para crear profundidad sin sobrecargar la interfaz.

---

## Tipografía

El sistema tipográfico emplea cuatro familias de Google Fonts cargadas a través de `next/font` para máximo rendimiento, usando la estrategia de **tipografía funcional por rol**:

| Fuente | Familia | Pesos | Rol de uso |
|---|---|---|---|
| **Montserrat** | Geométrica sans-serif | Variable | Títulos principales, logotipo, encabezados de sección |
| **Jost** | Geométrica sans-serif | 400, 700 | Subtítulos, etiquetas, elementos de navegación |
| **Questrial** | Geométrica redondeada | 400 | Texto descriptivo, párrafos de presentación |
| **Source Sans 3** | Humanista sans-serif | 400, 700 | Cuerpo de texto, formularios, contenido informativo |

### Fundamentación tipográfica

- **Montserrat** fue elegida como fuente de display por su solidez geométrica y su amplia presencia en branding digital contemporáneo. Su versatilidad en pesos permite establecer jerarquías claras sin cambiar de familia.
- **Jost** complementa a Montserrat en registros secundarios; comparte la geometría pero con proporciones más compactas, ideal para navegación y etiquetas de UI.
- **Questrial** aporta una lectura fluida en párrafos extensos gracias a sus terminaciones redondeadas, que reducen la fatiga visual en pantallas de alta densidad.
- **Source Sans 3** (sucesor de Source Sans Pro de Adobe) fue diseñada específicamente para interfaces digitales. Su estructura humanista la hace altamente legible en cuerpos pequeños, siendo ideal para formularios y contenido funcional.

La selección evita mezclar familias con personalidades tipográficas opuestas, manteniendo coherencia dentro del espectro **geométrico–humanista**.

---

## Diseño del prototipo

> _[https://www.figma.com/design/o1KWCMAIHOHLyap33UB18u/Portafolio?node-id=0-1&t=xIyK4PhTRuEABoA6-1](ENLACE FIGMA)_git

### Decisiones de diseño de prototipo

- **Pantalla de bienvenida**: diseñada con una división diagonal mediante `clip-path` para separar visualmente los dos mundos (fotografía / web) sin construir una pantalla de selección convencional. La interacción es inmediata e intuitiva.
- **Navegación fija (`fixed top`)**: se optó por un navbar persistente en todos los módulos para garantizar que el usuario siempre tenga acceso a la navegación, incluso en contenido largo.
- **Carrusel fotográfico**: el módulo de fotografía utiliza un carrusel con efecto `slowZoomIn` (CSS keyframe) para dar dinamismo sin distraer del contenido.
- **Sistema de pestañas (tabs)**: en el módulo web, las secciones de perfil usan un sistema de tabs con animación para reducir el scroll y mantener la información compacta.
- **Formulario de contacto**: componente reutilizado en ambos módulos con adaptaciones visuales por contexto, conectado a Firebase Firestore como backend sin servidor.

---

## Entorno de desarrollo y tecnologías

### Stack principal

| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | ^14.1.4 | Framework React (SSR/SSG, routing, optimización de imágenes y fuentes) |
| **React** | 18.2.0 | Construcción de componentes de UI |
| **Tailwind CSS** | ^3.4.18 | Sistema de estilos por utilidades; tokens de diseño y responsividad |
| **Firebase** | ^12.4.0 | Backend serverless para formulario de contacto (Firestore) |
| **Framer Motion** | ^10.18.0 | Animaciones declarativas de componentes |
| **Vercel** | — | Plataforma de despliegue con CI/CD automático desde `main` |

### Librerías de UI y componentes

| Librería | Propósito |
|---|---|
| **@headlessui/react** | Componentes accesibles sin estilos (menú, diálogo, tabs) |
| **@heroicons/react** | Iconografía SVG del ecosistema Tailwind |
| **@fortawesome/react-fontawesome** | Iconos de marcas y UI adicionales |
| **lucide-react** | Set de iconos complementario |
| **react-type-animation** | Animación de texto tipo máquina de escribir |
| **react-animated-numbers** | Contadores animados para estadísticas |

### Plugins de Tailwind

| Plugin | Uso |
|---|---|
| `tailwindcss-animated` | Clases de animación utilitarias |
| `tailwindcss-textshadow` | Sombras tipográficas |
| `tailwind-scrollbar` | Personalización de barras de desplazamiento |
| `tailwind-clip-path` | Utilidades de recorte por polígono |

### Entorno de desarrollo

- **Node.js**: >= 18
- **Gestor de paquetes**: npm
- **Linter**: ESLint con configuración `eslint-config-next`
- **Control de versiones**: Git + GitHub
- **Editor recomendado**: VS Code

---

## Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Pepeoawvh/PortfolioJoseAngelVH.git
cd PortfolioJoseAngelVH

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp ".env copy" .env
# Editar .env con tus credenciales de Firebase

# 4. Ejecutar en modo desarrollo
npm run dev
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

---

## Estado del proyecto

| Módulo | Estado |
|---|---|
| Pantalla de bienvenida | ✅ Producción |
| Portafolio Web | ✅ Producción |
| Portafolio Fotográfico — Inicio y Fotolibros | ✅ Producción |
| Portafolio Fotográfico — Proyectos | 🚧 En desarrollo |
| Portafolio Fotográfico — Experiencias educativas | 🚧 En desarrollo |

---

## Autor

**José Ángel Valdés Hernández**  
Desarrollador Web & Fotógrafo

- 📧 jpp.valdes@gmail.com
- [Instagram](https://www.instagram.com/joseangel.vh/)
- [LinkedIn](https://www.linkedin.com/in/jose-angel-valdes-hernandez/)
- [Behance](https://www.behance.net/joseangelvy)
