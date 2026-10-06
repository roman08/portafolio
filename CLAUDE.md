# Portafolio de Román Madrigal

Sitio personal en Astro, desplegado en Netlify. Responde en español y sé conciso: ejecuta directo, sin discusiones largas.

## Comandos

- `npm install` una sola vez
- `npm run dev` en http://localhost:4321
- `npm run build` genera `dist/`

## Estructura

- `src/data/site.ts`: datos de contacto, stack y proyectos (con URLs de Netlify)
- `src/pages/index.astro`: todas las secciones
- `src/components/SiteHeader.astro` y `SiteFooter.astro`: encabezado (nav con `/#ancla`) y pie, compartidos por el índice y los casos
- `src/data/casos.ts`: contenido de los casos de estudio (RetailIA y pipeline de Moriah); `src/pages/casos/[slug].astro` los genera; estilos en `src/styles/casos.css`
- `src/layouts/Base.astro`: head, fuentes y scripts (menú móvil, copiar correo, arranque tipo terminal del hero)
- `src/styles/global.css`: tokens en `:root` y todos los estilos
- `src/styles/features.css`: capturas en tarjetas, línea de tiempo y terminal
- `src/scripts/terminal.ts`: terminal interactiva (comandos: ayuda, sobre, stack, proyectos, experiencia, contacto, cv, limpiar)
- `scripts/capturas.mjs`: genera las capturas de las demos con Playwright
- `public/`: favicon, y aquí van `foto.jpg` y `cv-roman-madrigal.pdf`

## Dirección de diseño

Futurista pro con esencia ciberpunk elegante. Restricción: la audacia vive en el hero (arranque tipo terminal + glitch del nombre una sola vez); todo lo demás es sobrio.

- Paleta: fondo `#0B0F1A`, cian `#00F0FF`, magenta `#FF2BD6`, violeta `#7A1FFF`, texto `#E8EDFF`, apagado `#9AA3C0`
- Tipografía: Chakra Petch (títulos y UI), Hanken Grotesk (texto), JetBrains Mono (solo terminal del hero y etiquetas técnicas)
- Esquinas biseladas con `clip-path` (variable `--chamfer`), no tarjetas redondeadas
- Cada proyecto usa su propio color de acento (`--accent`), tomado de su identidad
- Evitar: etiquetas en mayúsculas sobre cada título, numeración 01/02/03, flechas "→" en botones, animaciones de entrada en cada sección
- Respetar `prefers-reduced-motion` y mantener foco visible

## Decisiones tomadas

- Orden de secciones: Hero, Sobre mí, Proyectos, Casos de estudio, Trayectoria, Desarrollo con IA, Stack, Estudio, Terminal, Contacto (primero la evidencia, luego el detalle; la terminal es un extra antes de contactar)
- Los casos solo afirman lo que Román ha confirmado; el pipeline de Moriah se declara "En construcción" y sin resultados. Agregar datos reales cuando existan
- Hosting en Netlify con subdominio por ahora (sin dominio propio). Cuando exista, agregar `site` en `astro.config.mjs`
- Nácar y Umbra llevan la etiqueta "Concepto de práctica" porque son landings de negocios ficticios
- La Trayectoria es una línea de tiempo con cargos y fechas tomados del CV de Román (sin cifras inventadas); los logros solo reflejan lo que dice su CV
- `public/foto.jpg` es un retrato natural (recorte 4:5 desde foto de 1200×1600, sin quitar fondo)
- La URL de la calculadora de pintura es `caluladora-pintura.netlify.app` (tal como está publicada)

## Pendiente

1. Mantener `public/cv-roman-madrigal.pdf` al día cuando cambie el CV
2. Capturas de Biblia App y Calculadora de pintura (faltan; las otras tres ya están en `public/proyectos/`)
3. Contacto: evaluar enlace directo a WhatsApp de Moriah Studio
4. Valorar versión en inglés; enlazar el repo de RetailIA en su caso si es público
5. Dominio propio (definir `site` en `astro.config.mjs`; mientras tanto se usa la URL de Netlify). La imagen para compartir ya existe en `public/og.png`
