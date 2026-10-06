# Portafolio de Román Madrigal

Sitio personal en Astro, desplegado en Netlify. Responde en español y sé conciso: ejecuta directo, sin discusiones largas.

## Comandos

- `npm install` una sola vez
- `npm run dev` en http://localhost:4321
- `npm run build` genera `dist/`

## Estructura

- `src/data/site.ts`: datos de contacto, stack y proyectos (con URLs de Netlify)
- `src/pages/index.astro`: todas las secciones
- `src/layouts/Base.astro`: head, fuentes y scripts (menú móvil, copiar correo, arranque tipo terminal del hero)
- `src/styles/global.css`: tokens en `:root` y todos los estilos
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

- Hosting en Netlify con subdominio por ahora (sin dominio propio). Cuando exista, agregar `site` en `astro.config.mjs`
- Nácar y Umbra llevan la etiqueta "Concepto de práctica" porque son landings de negocios ficticios
- La sección Trayectoria solo lista empresas y formación, sin cargos ni fechas inventados
- La URL de la calculadora de pintura es `caluladora-pintura.netlify.app` (tal como está publicada)

## Pendiente

1. Agregar `public/foto.jpg` (4:5, mínimo 800×1000). Sin ella se muestra el monograma "RM"
2. Agregar `public/cv-roman-madrigal.pdf`. Sin él, "Descargar CV" da 404
3. Trayectoria: convertir en línea de tiempo cuando haya cargos y fechas
4. Contacto: evaluar enlace directo a WhatsApp de Moriah Studio
5. Valorar versión en inglés
6. Subir a un repo nuevo y conectar a Netlify (`netlify.toml` ya define el build)
