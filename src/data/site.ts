export const site = {
  name: 'Román Madrigal',
  role: 'Desarrollador Full Stack',
  email: 'roman.madrigal.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/roman-madrigal',
  github: 'https://github.com/roman08',
  studio: 'https://moriah-studio.netlify.app',
  // Coloca tu CV en public/cv-roman-madrigal.pdf
  cv: '/cv-roman-madrigal.pdf',
  location: 'Villahermosa, Tabasco, México',
  description:
    'Desarrollador Full Stack con más de 9 años de experiencia. Angular, React, Node.js, Laravel, TypeScript e IA aplicada al desarrollo. Fundador de Moriah Studio.',
};

export const stack = [
  { title: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'Astro', 'Three.js'] },
  { title: 'Backend', items: ['Node.js', 'Laravel', 'PHP'] },
  { title: 'Datos', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'] },
  { title: 'Infraestructura', items: ['Docker', 'Netlify', 'Git'] },
  { title: 'IA', items: ['Claude Code', 'GitHub Copilot', 'ChatGPT', 'MCP', 'APIs de LLM'] },
];

export type Project = {
  title: string;
  host: string;
  desc: string;
  tags: string[];
  live: string;
  code?: string;
  accent: string;
  note?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Moriah Studio',
    host: 'moriah-studio.netlify.app',
    desc: 'Sitio de mi estudio. Presenta diseño web, automatización y desarrollo a la medida, y lleva a los visitantes a escribir por WhatsApp.',
    tags: ['Astro', 'TypeScript'],
    live: 'https://moriah-studio.netlify.app',
    code: 'https://github.com/roman08/moriah-studio',
    accent: '#00F0FF',
    featured: true,
  },
  {
    title: 'Biblia App',
    host: 'app-bibllia.netlify.app',
    desc: 'Lectura y estudio de la Reina-Valera con planes de lectura, notas, diario de reflexión, oraciones y seguimiento de progreso. Tema oscuro y pensada para el celular.',
    tags: ['Aplicación web', 'Mobile-first'],
    live: 'https://app-bibllia.netlify.app',
    accent: '#6EA8FF',
  },
  {
    title: 'Calculadora de pintura',
    host: 'caluladora-pintura.netlify.app',
    desc: 'Estima cuánta pintura necesitas según el tipo, el número de capas y las dimensiones de las paredes. Tema claro u oscuro e instalable como PWA.',
    tags: ['PWA', 'JavaScript'],
    live: 'https://caluladora-pintura.netlify.app',
    code: 'https://github.com/roman08/pintura',
    accent: '#FFC857',
  },
  {
    title: 'Nácar, clínica dental',
    host: 'clinica-nacar.netlify.app',
    desc: 'Landing con una muela 3D interactiva como protagonista. Mobile-first, con animaciones de entrada y sin paso de compilación.',
    tags: ['Three.js', 'JavaScript', 'CSS'],
    live: 'https://clinica-nacar.netlify.app',
    code: 'https://github.com/roman08/clinica',
    accent: '#2DD4BF',
    note: 'Concepto de práctica',
  },
  {
    title: 'Umbra, café de especialidad',
    host: 'cafeteria-umbra.netlify.app',
    desc: 'Menú filtrable de 12 productos, pedidos para recoger, reserva de mesa con validación de horario y una taza 3D con vapor hecho en un shader GLSL.',
    tags: ['Three.js', 'GLSL', 'JavaScript'],
    live: 'https://cafeteria-umbra.netlify.app',
    code: 'https://github.com/roman08/coffe',
    accent: '#E8A25C',
    note: 'Concepto de práctica',
  },
];
