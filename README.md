# Portafolio de Román Madrigal

Sitio personal hecho con Astro. Estilo ciberpunk elegante, sin frameworks de UI.

## Arranque

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Lo que debes agregar

| Archivo | Para qué |
|---|---|
| `public/foto.jpg` | Tu retrato (proporción 4:5, mínimo 800×1000). Mientras no exista, se muestra el monograma "RM". |
| `public/cv-roman-madrigal.pdf` | El CV que descargan los botones "Descargar CV". Ya incluido; reemplázalo cuando lo actualices. |

## Capturas de los proyectos

Las tarjetas muestran `public/proyectos/<slug>.jpg` (slugs en `src/data/site.ts`). Para generarlas desde tus demos publicadas:

```bash
npm i --no-save playwright
npx playwright install chromium
node scripts/capturas.mjs
```

Revisa las imágenes, haz commit y push. Sin capturas, la tarjeta muestra las iniciales del proyecto.

## Dónde editar

- Textos de proyectos, stack y contacto: `src/data/site.ts`
- Secciones y copy: `src/pages/index.astro`
- Colores, tipografía y espaciados: `src/styles/global.css` (tokens en `:root`)

## Deploy en Netlify

1. Sube la carpeta a un repo nuevo en GitHub.
2. En Netlify: Add new site → Import from Git. `netlify.toml` ya define el build (`npm run build`, carpeta `dist`).
3. Cuando tengas dominio, agrégalo en `astro.config.mjs` (`site: 'https://tu-dominio.dev'`).
