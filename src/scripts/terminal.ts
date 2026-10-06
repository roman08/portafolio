type Part = string | { t: string; href: string };
type Row = Part | Part[];

interface TermData {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
  location: string;
  stack: { title: string; items: string[] }[];
  projects: { title: string; live: string; code: string | null }[];
  experience: { role: string; company: string; start: string; end: string }[];
}

const root = document.querySelector<HTMLElement>('[data-term]');
const dataEl = document.getElementById('term-data');

if (root && dataEl) {
  const d: TermData = JSON.parse(dataEl.textContent || '{}');
  const out = root.querySelector<HTMLElement>('[data-term-out]')!;
  const form = root.querySelector<HTMLFormElement>('[data-term-form]')!;
  const input = root.querySelector<HTMLInputElement>('#term-input')!;

  const history: string[] = [];
  let cursor = 0;

  const print = (row: Row, cls = '') => {
    const el = document.createElement('div');
    el.className = `term__row ${cls}`.trim();
    for (const part of Array.isArray(row) ? row : [row]) {
      if (typeof part === 'string') {
        el.append(document.createTextNode(part));
      } else {
        const a = document.createElement('a');
        a.href = part.href;
        a.textContent = part.t;
        if (/^https?:/.test(part.href)) {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        }
        el.append(a);
      }
    }
    out.append(el);
  };

  const commands: Record<string, () => Row[]> = {
    ayuda: () => [
      'Comandos disponibles:',
      '  sobre         quién soy',
      '  stack         tecnologías con las que trabajo',
      '  proyectos     demos y código',
      '  experiencia   trayectoria laboral',
      '  contacto      cómo escribirme',
      '  cv            descargar mi CV',
      '  limpiar       borra la pantalla',
    ],
    sobre: () => [
      `${d.name}, ${d.role}.`,
      'Más de 9 años construyendo sistemas web para empresas privadas y gobierno.',
      'Hoy combino Node.js, React y Angular con IA aplicada al desarrollo.',
      `Base: ${d.location}. Disponible en remoto o con reubicación en México.`,
    ],
    stack: () => d.stack.map((g) => `${g.title}: ${g.items.join(', ')}`),
    proyectos: () =>
      d.projects.flatMap((p): Row[] => [
        `• ${p.title}`,
        p.code
          ? ['    ', { t: 'demo', href: p.live }, '  ', { t: 'código', href: p.code }]
          : ['    ', { t: 'demo', href: p.live }],
      ]),
    experiencia: () => d.experience.map((e) => `${e.start} - ${e.end}  ${e.role}, ${e.company}`),
    contacto: () => [
      ['Correo    ', { t: d.email, href: `mailto:${d.email}` }],
      ['LinkedIn  ', { t: 'roman-madrigal', href: d.linkedin }],
      ['GitHub    ', { t: 'roman08', href: d.github }],
    ],
    cv: () => [[{ t: 'Descargar CV (PDF)', href: d.cv }]],
    contratar: () => [['Buena decisión. Escríbeme a ', { t: d.email, href: `mailto:${d.email}` }]],
    sudo: () => ['Permiso denegado. Prueba con "contratar".'],
  };

  const aliases: Record<string, string> = {
    help: 'ayuda',
    '?': 'ayuda',
    about: 'sobre',
    whoami: 'sobre',
    skills: 'stack',
    projects: 'proyectos',
    experience: 'experiencia',
    contact: 'contacto',
    clear: 'limpiar',
    cls: 'limpiar',
    hire: 'contratar',
  };

  const normalize = (s: string) =>
    s
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '');

  const run = (raw: string) => {
    const typed = raw.trim();
    if (!typed) return;

    const echo = document.createElement('div');
    echo.className = 'term__row term__row--cmd';
    const prompt = document.createElement('b');
    prompt.textContent = '$ ';
    echo.append(prompt, document.createTextNode(typed));
    out.append(echo);

    const key = normalize(typed);
    const name = aliases[key] ?? key;

    if (name === 'limpiar') {
      out.replaceChildren();
    } else if (commands[name]) {
      commands[name]().forEach((row) => print(row));
      print('');
    } else {
      print(`Comando no reconocido: ${typed.slice(0, 40)}. Escribe "ayuda" para ver la lista.`, 'term__row--dim');
      print('');
    }

    history.push(typed);
    cursor = history.length;
    out.scrollTop = out.scrollHeight;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    run(input.value);
    input.value = '';
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && history.length) {
      event.preventDefault();
      cursor = Math.max(0, cursor - 1);
      input.value = history[cursor] ?? '';
    } else if (event.key === 'ArrowDown' && history.length) {
      event.preventDefault();
      cursor = Math.min(history.length, cursor + 1);
      input.value = history[cursor] ?? '';
    } else if (event.key === 'Tab' && input.value) {
      const prefix = normalize(input.value);
      const matches = Object.keys(commands)
        .concat('limpiar')
        .filter((c) => c.startsWith(prefix));
      if (matches.length === 1) {
        event.preventDefault();
        input.value = matches[0];
      }
    }
  });

  document.querySelectorAll<HTMLButtonElement>('[data-cmd]').forEach((btn) => {
    btn.addEventListener('click', () => run(btn.dataset.cmd ?? ''));
  });

  print(`Terminal del portafolio de ${d.name}.`);
  print('Escribe "ayuda" para ver los comandos, o toca un atajo.', 'term__row--dim');
  print('');
}
