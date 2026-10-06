// Casos de estudio. Solo incluyen lo que Román ha confirmado: sin cifras ni resultados inventados.

export interface CasoSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
  steps?: { title: string; text: string }[];
}

export interface Caso {
  slug: string;
  cardTitle: string;
  title: string;
  summary: string;
  kind: string;
  status: string;
  tags: string[];
  accent: string;
  sections: CasoSection[];
}

export const casos: Caso[] = [
  {
    slug: 'retailia',
    cardTitle: 'RetailIA',
    title: 'RetailIA: preguntas en lenguaje natural sobre datos de retail',
    summary:
      'Un asistente que responde sobre datos estructurados de una tienda con un agente que llama funciones, en lugar de buscar en documentos.',
    kind: 'Ejercicio técnico',
    status: 'Estable, rediseño en curso',
    tags: ['Node.js', 'Express', 'React', 'Vite', 'Function calling'],
    accent: '#00F0FF',
    sections: [
      {
        title: 'El punto de partida',
        paragraphs: [
          'RetailIA nació como un ejercicio técnico de una entrevista de trabajo: construir un asistente capaz de responder preguntas sobre datos de retail.',
          'Lo seguí desarrollando después de la entrevista porque la idea de fondo me parecía buena y quería dejarla funcionando de verdad.',
        ],
      },
      {
        title: 'La decisión: function calling en lugar de RAG',
        paragraphs: [
          'Los datos de retail son estructurados. Para preguntas sobre ellos, propuse que el modelo no busque fragmentos de texto parecidos a la pregunta (RAG), sino que elija una función con parámetros definidos y la ejecute contra los datos.',
          'Así la respuesta sale de una consulta concreta y se puede verificar, en lugar de depender de qué texto recuperó la búsqueda.',
        ],
      },
      {
        title: 'Cómo está armado',
        items: [
          'Backend en Node.js y Express con un agente LLM que usa function calling.',
          'El modelo decide qué función llamar y con qué argumentos; el servidor la ejecuta y el modelo redacta la respuesta con el resultado.',
          'Frontend en React y Vite para la conversación.',
        ],
      },
      {
        title: 'Lo que tuve que depurar',
        paragraphs: ['Para estabilizarlo resolví tres fallos que no tenían que ver con la lógica del agente:'],
        items: [
          'Faltaba la clave de API del proveedor en el panel de FreeLLM.',
          'El nombre del modelo era incorrecto: pasé de gpt-3.5-turbo a auto.',
          'No había timeouts configurados, así que una llamada lenta dejaba colgada la petición.',
        ],
      },
      {
        title: 'Qué sigue',
        paragraphs: [
          'Estoy rediseñando el frontend con un sistema propio de tokens de diseño, para que colores, tipografía y espacios salgan de un solo lugar.',
        ],
      },
    ],
  },
  {
    slug: 'pipeline-moriah',
    cardTitle: 'Pipeline de agentes de Moriah Studio',
    title: 'Un pipeline de agentes para conseguir clientes en Moriah Studio',
    summary:
      'Agentes que encuentran negocios sin presencia digital, preparan una demo de su sitio y dan seguimiento al contacto.',
    kind: 'Proyecto propio',
    status: 'En construcción',
    tags: ['Agentes de IA', 'Google Places', 'Automatización'],
    accent: '#7A1FFF',
    sections: [
      {
        title: 'El problema',
        paragraphs: [
          'Un estudio pequeño depende de encontrar clientes de forma constante, y esa búsqueda toma tiempo que no se dedica a diseñar y programar.',
          'Mi investigación de la competencia en Cunduacán apuntaba a un nicho claro: negocios médicos y dentales, donde cerca del 85% de los proveedores locales no tiene presencia digital.',
        ],
      },
      {
        title: 'La estrategia: demo primero',
        paragraphs: [
          'En lugar de mandar una propuesta genérica, la idea es enseñarle al negocio su propia landing ya hecha. Una demo concreta se entiende mejor que una cotización.',
          'Ya construí demos de landing en varios nichos: fisioterapia, dental, gimnasio, uñas, salón de belleza y moda.',
        ],
      },
      {
        title: 'El flujo, etapa por etapa',
        steps: [
          {
            title: 'Prospección',
            text: 'Un agente busca negocios del nicho en Google Places y detecta los que no tienen sitio propio.',
          },
          {
            title: 'Demostración',
            text: 'Con los datos del negocio se genera una landing de muestra.',
          },
          {
            title: 'Contacto',
            text: 'Se prepara el mensaje de acercamiento con la demo como argumento principal.',
          },
          {
            title: 'Seguimiento',
            text: 'Se da seguimiento a quienes no respondieron, para que ningún prospecto se pierda por falta de tiempo.',
          },
        ],
      },
      {
        title: 'Estado actual',
        paragraphs: [
          'El pipeline está en construcción y todavía no tengo resultados que reportar. Prefiero publicarlo así a inventar números: cuando haya datos reales de respuesta y cierres, los agregaré aquí.',
        ],
      },
    ],
  },
];
