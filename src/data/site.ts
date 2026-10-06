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
  slug: string; // nombre del archivo de captura: public/proyectos/<slug>.jpg
  mark: string; // iniciales que se muestran mientras no exista la captura
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
    slug: 'moriah-studio',
    mark: 'MS',
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
    slug: 'biblia-app',
    mark: 'BA',
    title: 'Biblia App',
    host: 'app-bibllia.netlify.app',
    desc: 'Lectura y estudio de la Reina-Valera con planes de lectura, notas, diario de reflexión, oraciones y seguimiento de progreso. Tema oscuro y pensada para el celular.',
    tags: ['Aplicación web', 'Mobile-first'],
    live: 'https://app-bibllia.netlify.app',
    accent: '#6EA8FF',
  },
  {
    slug: 'calculadora-pintura',
    mark: 'CP',
    title: 'Calculadora de pintura',
    host: 'caluladora-pintura.netlify.app',
    desc: 'Estima cuánta pintura necesitas según el tipo, el número de capas y las dimensiones de las paredes. Tema claro u oscuro e instalable como PWA.',
    tags: ['PWA', 'JavaScript'],
    live: 'https://caluladora-pintura.netlify.app',
    code: 'https://github.com/roman08/pintura',
    accent: '#FFC857',
  },
  {
    slug: 'nacar-clinica',
    mark: 'NC',
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
    slug: 'umbra-cafe',
    mark: 'UC',
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

export type Stage = {
  kind: 'work' | 'edu';
  role: string;
  company: string;
  start: string;
  end: string;
  tag: string;
  points: string[];
};

// Más reciente primero
export const experience: Stage[] = [
  {
    kind: 'work',
    role: 'Desarrollador FullStack',
    company: 'Softrek',
    start: 'Oct 2021',
    end: 'May 2026',
    tag: 'Sector privado',
    points: [
      'APIs REST con Laravel y Node.js, con experimentación en Rust.',
      'Interfaces modulares y responsivas con Angular y React.',
      'Pasarelas de pago en línea y bases de datos en Firebase (Google Cloud).',
      'Ciclo de desarrollo acelerado con Claude Code, GitHub Copilot y ChatGPT.',
    ],
  },
  {
    kind: 'work',
    role: 'Desarrollador FullStack',
    company: 'Plexus',
    start: 'Oct 2019',
    end: 'Mar 2020',
    tag: 'Sector privado',
    points: [
      'Backend en Laravel de un sitio inmobiliario (Real Estate).',
      'Administración de MySQL y de servidores web productivos.',
      'Levantamiento de requerimientos con usuarios.',
    ],
  },
  {
    kind: 'work',
    role: 'Desarrollador FrontEnd',
    company: 'IntegraIt',
    start: 'Abr 2018',
    end: 'Sep 2019',
    tag: 'Sector privado',
    points: ['Interfaces con HTML, CSS y Bootstrap.', 'Integración de APIs REST.'],
  },
  {
    kind: 'work',
    role: 'Desarrollador FullStack',
    company: 'Gobierno del Estado de Tabasco',
    start: 'Ene 2015',
    end: 'Mar 2017',
    tag: 'Sector público',
    points: [
      'Backend del sistema contable y del sistema catastral del Estado.',
      'Administración de bases de datos en PostgreSQL.',
      'Integración de APIs y servicios externos para automatizar plataformas web.',
    ],
  },
  {
    kind: 'edu',
    role: 'Ingeniería en Sistemas Computacionales',
    company: 'Instituto Tecnológico Superior de Comalcalco',
    start: 'Jul 2007',
    end: 'May 2012',
    tag: 'Formación',
    points: [],
  },
];
