import { defineConfig } from 'astro/config';

// Netlify expone la URL principal del sitio como URL durante el build.
// Cuando tengas dominio propio, define aquí: site: 'https://tu-dominio.dev'
export default defineConfig({ site: process.env.URL || undefined });
