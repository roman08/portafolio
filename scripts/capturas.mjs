// Genera las capturas de las demos publicadas en Netlify.
//
// Uso (una sola vez, desde la carpeta del proyecto):
//   npm i --no-save playwright
//   npx playwright install chromium
//   node scripts/capturas.mjs
//
// Guarda public/proyectos/<slug>.jpg. Si cambias una demo, vuelve a correrlo.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const SITES = {
  'moriah-studio': 'https://moriah-studio.netlify.app',
  'biblia-app': 'https://app-bibllia.netlify.app',
  'calculadora-pintura': 'https://caluladora-pintura.netlify.app',
  'nacar-clinica': 'https://clinica-nacar.netlify.app',
  'umbra-cafe': 'https://cafeteria-umbra.netlify.app',
};

const OUT = new URL('../public/proyectos/', import.meta.url).pathname;
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
for (const [slug, url] of Object.entries(SITES)) {
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(3000); // deja correr animaciones y escenas 3D
    await page.screenshot({ path: `${OUT}${slug}.jpg`, type: 'jpeg', quality: 82 });
    console.log('ok   ', slug);
    await page.close();
  } catch (error) {
    console.log('falló', slug, String(error).slice(0, 100));
  }
}
await browser.close();
