// Core landing page data in Spanish for "Método EDOS: Programa Sincrónico 'Educarte'" (Mgt. Tatiana Domínguez Valencia)

export interface ClassSession {
  title: string;
  ledBy: string;
  painHandled: string;
  deliverables: string[];
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  objective: string;
  classes: ClassSession[];
}

export interface BonusItem {
  id: string;
  title: string;
  valueUsd: number;
  valueCop: number;
  hook: string;
  isFastAction?: boolean;
}

export interface TimelinePhase {
  dates: string;
  phaseName: string;
  title: string;
  tasks: string;
  team: string;
  technicalDeliverable: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  avatarUrl?: string;
  rating: number;
  badge?: string;
}

// 1. Course Curriculum Modules Data (From PDF Pages 2, 3, 4)
export const COURSE_MODULES: CourseModule[] = [
  {
    id: "module-1",
    number: 1,
    title: "Módulo 1: \"Mi Cuerpo, Mi Placer y Mis Dudas\" (El Enfoque del Ser)",
    objective: "Sanar la relación con el propio cuerpo, validar el desarrollo biológico de los hijos y desarmar la culpa.",
    classes: [
      {
        title: "1. \"Lo que nadie te dice del Deseo: Amor Propio, Cambios y Mitos Sexuales\"",
        ledBy: "Trabajo Social",
        painHandled: "La distorsión de la autoimagen, la baja autoestima por expectativas de las redes sociales y el miedo extremo a 'no ser normal' físicamente o en sus deseos. Ataca directamente la culpa y la confusión que genera usar la pornografía como único educador sexual en los jóvenes.",
        deliverables: [
          "El Termómetro del Autoconcepto Sexual: Guía digital para identificar y desactivar las inseguridades corporales de tus hijos.",
          "Cuestionario Interactivo \"Fantasía vs. Realidad\": Herramienta para desmitificar la pornografía y entender la sexualidad real."
        ]
      },
      {
        title: "2. \"¿Y si me pregunta de sexo? Desarmando mitos, pornografía y silencios en casa y redes sociales de internet\"",
        ledBy: "Psicología",
        painHandled: "El pánico y bloqueo de los padres al hablar del autoerotismo (masturbación) o del despertar sexual de sus hijos. Resuelve la impotencia de no saber cómo reaccionar ante el consumo de pornografía sin acudir al grito, el castigo o el silencio incómodo.",
        deliverables: [
          "Guiones \"Rompe Hielos\" para Preguntas Incómodas: Plantillas paso a paso con respuestas exactas, científicas y sin tabúes a las dudas más difíciles de los hijos.",
          "Guía de Mediación Parental Afectiva: Manual para abordar el hallazgo de material explícito desde un enfoque educativo y empático."
        ]
      }
    ]
  },
  {
    id: "module-2",
    number: 2,
    title: "Módulo 2: \"El Arte de Decidir: Consentimiento y Seducción\" (El Enfoque del Otro)",
    objective: "Construir relaciones equitativas, aprender a poner límites firmes y prevenir de forma eficaz dinámicas de violencia o abuso.",
    classes: [
      {
        title: "1. \"Seducción con Respeto: Consentimiento, Deseo Compartido y el Poder del 'NO'\"",
        ledBy: "Psicología",
        painHandled: "La presión social y de pareja que sufren los adolescentes. Maneja el miedo al rechazo o al abandono si dicen que 'no' a una práctica sexual. Ataca conductas normalizadas de control digital (celos, revisar el teléfono, exigir fotos íntimas o sexting presionado).",
        deliverables: [
          "El Semáforo del Consentimiento (Físico y Digital): Matriz visual para aprender a identificar cuándo un \"Sí\" es real, libre y entusiasta, y cuándo es producto de la manipulación.",
          "Guía de Bolsillo para la Asertividad Relacional: Plantillas de comunicación para decir \"No\" con seguridad y firmeza sin sentirse culpables."
        ]
      },
      {
        title: "2. \"Límites que Salvan: Cómo proteger a tu hijo del abuso y los abusos disfrazados de amor\"",
        ledBy: "Trabajo Social",
        painHandled: "La vulnerabilidad y la falta de control en el noviazgo. Alivia el miedo constante de los padres a que sus hijos sufran abuso sexual, ciberacoso (grooming) o que estén atrapados en un noviazgo violento y tóxico sin que ellos se den cuenta.",
        deliverables: [
          "Lista de Chequeo de \"Banderas Rojas\" en el Noviazgo: Herramienta técnica de observación para que padres y docentes detecten comportamientos de alerta o aislamiento en el adolescente.",
          "Protocolo de Actuación ante la Sospecha de Violencia: Manual internacional de primeros auxilios emocionales y legales para proteger de inmediato al menor."
        ]
      }
    ]
  },
  {
    id: "module-3",
    number: 3,
    title: "Módulo 3: \"Sexo Sentido: Cuidado y Proyecto de Vida\" (El Mundo y el Futuro)",
    objective: "Conectar el autocuidado y los derechos reproductivos con las metas del futuro del adolescente de manera motivadora.",
    classes: [
      {
        title: "1. \"Sexo sin Susto: Anticoncepción Real, ITS y Cómo Cuidar tu Futuro\"",
        ledBy: "Medicina",
        painHandled: "El riesgo invisible y la vergüenza frente al cuidado. Combate el miedo al embarazo no planeado o a las Infecciones de Transmisión Sexual (ITS/VIH) manejando el problema de raíz: desmitificar el uso de métodos caseros erróneos o 'consejos de TikTok'.",
        deliverables: [
          "Fichas Técnicas Descomplicadas \"Anticoncepción al Desnudo\": Infografías interactivas con el funcionamiento, mitos y realidades de cada método anticonceptivo.",
          "Planificador \"Mi Proyecto de Vida Blindado\": Matriz dinámica que conecta las metas profesionales del joven con sus decisiones de salud reproductiva."
        ]
      },
      {
        title: "2. \"Preguntas y Respuestas Abiertas\"",
        ledBy: "Todos (Trabajo Social, Psicología y Medicina)",
        painHandled: "La incertidumbre acumulada o casos particulares complejos sin resolver. Brinda un espacio interdisciplinario donde todos los profesionales atienden de forma integral y sincrónica las dudas de los padres.",
        deliverables: [
          "Sesión Interactiva en Vivo de Auditoría de Dudas: Resolución de casos específicos planteados de forma anónima o directa por los padres.",
          "Resumen de Cierre de Criterios Clínicos: Recopilación técnica con recomendaciones directas del equipo de salud y educación de EDOS."
        ]
      }
    ]
  }
];

// 2. Offer Stack Core and Bonuses Data (From PDF Pages 4, 5, 6, 7)
export const MAIN_VEHICLE = {
  title: "Educarte Live: 6 Encuentros en Vivo de Alta Transformación",
  valueUsd: 250,
  valueCop: 1000000,
  description: "Acompañamiento en tiempo real con el equipo interdisciplinario (Trabajo Social, Psicología y Medicina) para aprender el CÓMO actuar y sanar el vínculo familiar en vivo."
};

export const CORE_BONUSES: BonusItem[] = [
  {
    id: "bonus-1",
    title: "Curso Completo \"Educación Sexual con Énfasis en Niños y Niñas\"",
    valueUsd: 97,
    valueCop: 400000,
    hook: "No solo vas a blindar a tu hijo adolescente. Con este acceso premium a mi segundo programa en Hotmart aprenderás a proteger a los más pequeños desde la infancia, creando un escudo familiar permanente."
  },
  {
    id: "bonus-2",
    title: "Videoteca VIP de Respuestas Rápidas (Clips de 3 Minutos)",
    valueUsd: 85,
    valueCop: 345000,
    hook: "¿Tu hijo te hizo una pregunta incómoda en la cena y te congelaste? Olvídate de leer libros extensos de 400 páginas. Abres esta videoteca privada desde tu celular, miras el clip de 3 minutos y sabrás exactamente qué responder con el lenguaje correcto."
  },
  {
    id: "bonus-3",
    title: "Certificado Académico de 12 Horas por el Equipo Interdisciplinario",
    valueUsd: 42,
    valueCop: 170000,
    hook: "Un aval oficial que respalda tu compromiso. Recibe un certificado internacional firmado por nuestro Médico, Psicólogo y Trabajadora Social que acredita tus 12 horas de formación especializada en ESI."
  },
  {
    id: "bonus-4",
    title: "Cuaderno de Copiado: Plantillas de Conversaciones Listas para Usar",
    valueUsd: 57,
    valueCop: 230000,
    hook: "Te quitamos la presión de pensar qué decir. Recibes guiones escritos palabra por palabra para abrir conversaciones difíciles sobre límites, sexo y cuidado sin que parezca un sermón aburrido."
  },
  {
    id: "bonus-5",
    title: "Escudo Digital: Guía de Control Parental en 5 Minutos",
    valueUsd: 49,
    valueCop: 200000,
    hook: "Bloquea el porno e internet antes de que llegue a los ojos de tus hijos. Un tutorial paso a paso con capturas de pantalla para configurar la privacidad de Google, TikTok, YouTube y Netflix en un fin de semana."
  },
  {
    id: "bonus-6",
    title: "Botiquín Emocional (Manual de Primeros Auxilios Emocionales)",
    valueUsd: 35,
    valueCop: 140000,
    hook: "El mapa para descifrar el silencio de tu hijo. Sabrás exactamente qué hacer cuando se encierre en su cuarto, grite o se aísle, transformando una crisis de rebeldía en una oportunidad de conexión."
  },
  {
    id: "bonus-7",
    title: "Planificador de Metas Inquebrantables (Proyecto de Vida)",
    valueUsd: 65,
    valueCop: 260000,
    hook: "Un adolescente con metas claras no arriesga su futuro. Esta plantilla interactiva es para que la diseñes junto a él, uniendo sus sueños profesionales con decisiones responsables de autocuidado."
  },
  {
    id: "bonus-8",
    title: "Biblioteca Digital de Literatura Especializada en ESI",
    valueUsd: 75,
    valueCop: 300000,
    hook: "Acceso inmediato a nuestra biblioteca selecta de libros, guías internacionales de la ONU y materiales de descarga con bases científicas para que consultes a tu propio ritmo de por vida."
  }
];

export const FAST_ACTION_BONUSES: BonusItem[] = [
  {
    id: "fast-bonus-1",
    title: "Bono VIP: Sesión de Mentoría Grupal en Vivo por Zoom con la Magíster Tatiana Domínguez",
    valueUsd: 150,
    valueCop: 600000,
    hook: "¿Quieres que analice tu caso familiar cara a cara? Si eres de los primeros 50 en entrar, tendrás un pase privado conmigo en Zoom para auditar tus dudas sin filtros y armar tu estrategia.",
    isFastAction: true
  }
];

// 3. Pricing Math (From PDF Pages 7, 8)
export const PRICING_MATH = {
  totalValueUsd: 905,
  totalValueCop: 3645000,
  specialPriceUsd: 100,
  specialPriceCop: 335000,
  hotmartPaymentLink: "https://pay.hotmart.com/M_EDOS_PLACEHOLDER?checkoutMode=10",
  whatsappContactLink: "https://wa.me/573000000000?text=Hola%20Tatiana,%20quiero%20inscribirme%20al%20Programa%20EDOS%20Educarte%20Live"
};

// 4. Timeline / Roadmap (From PDF Pages 8, 9)
export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    dates: "6 - 17 JULIO",
    phaseName: "Fase 1: Oferta Grand Slam",
    title: "Semanas 1 y 2: Preparación & Acuerdos",
    tasks: "Grabación de videos cortos ocultos de la 'Caja de Herramientas de YouTube'. Cierre de acuerdos con el médico y el psicólogo del equipo.",
    team: "La Magíster Tatiana, el Copywriter, el Diseñador Web y el Editor estructurando las bases sólidas del programa.",
    technicalDeliverable: "Páginas web y textos de anuncios 100% aprobados."
  },
  {
    dates: "20 - 31 JULIO",
    phaseName: "Fase 2: Campaña Captación",
    title: "Semanas 3 y 4: Bienvenida & Conexión",
    tasks: "Mantener activas las redes orgánicas y dar la bienvenida en los grupos de WhatsApp VIP de EDOS que se irán llenando paulatinamente.",
    team: "El Trafficker enciende anuncios pagos, la mentora y el Copywriter redactan mensajes de calentamiento y estadísticas sobre adolescencia.",
    technicalDeliverable: "Monitoreo del costo por registro y optimización diaria de campañas."
  },
  {
    dates: "3 - 7 AGOSTO",
    phaseName: "Fase 3: Lanzamiento",
    title: "Semana 5: El Evento y Apertura",
    tasks: "Mensajes de urgencia. Día 4: Clase magistral gratuita de 1.5 horas 'Las 3 llaves para conectar con tu hijo' y presentación de la Oferta Grand Slam.",
    team: "Todo el equipo coordinando la transmisión por Zoom y la secuencia de escasez ('Solo quedan 15 cupos') por grupos VIP de WhatsApp.",
    technicalDeliverable: "Carrito abierto de Hotmart y registro de los primeros 50 cupos VIP."
  },
  {
    dates: "10 - 21 AGOSTO",
    phaseName: "Fase 4: Ejecución",
    title: "Semanas 6 y 7: 6 Encuentros en Vivo",
    tasks: "Clases sincrónicas los días 11, 13, 18, 20, 25 y 27 de agosto a las 7:00 PM COT. Entrega de certificados de 12 horas.",
    team: "Equipo Interdisciplinario de Trabajo Social, Psicología y Medicina respondiendo dudas en vivo y guiando a las familias.",
    technicalDeliverable: "6 encuentros en vivo completados, certificados emitidos y accesos grabados entregados."
  }
];

export const LIVE_CLASSES_DATES = [
  { date: "11 de Agosto", day: "Martes", hour: "19:00 COT", theme: "Clase 1: Mi Cuerpo, Mi Placer y Mis Dudas (Ser)" },
  { date: "13 de Agosto", day: "Jueves", hour: "19:00 COT", theme: "Clase 2: ¿Y si me pregunta? Abordaje Parental" },
  { date: "18 de Agosto", day: "Martes", hour: "19:00 COT", theme: "Clase 3: Seducción con Respeto y Consentimiento" },
  { date: "20 de Agosto", day: "Jueves", hour: "19:00 COT", theme: "Clase 4: Límites que Salvan (Prevención de Abuso)" },
  { date: "25 de Agosto", day: "Martes", hour: "19:00 COT", theme: "Clase 5: Sexo sin Susto (ITS y Anticoncepción Real)" },
  { date: "27 de Agosto", day: "Jueves", hour: "19:00 COT", theme: "Clase 6: Sesión Interdisciplinaria de Preguntas Abiertas" }
];

// 5. Testimonials Data (Text + Screens)
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Carolina Montenegro",
    role: "Madre de 2 adolescentes - Cali, Colombia",
    text: "Estaba aterrorizada de que mi hijo de 14 años se encerrara a ver pornografía en el celular y no me dijera nada. Los guiones 'Rompe Hielos' de Tatiana me salvaron: tuvimos una charla fluida, tranquila y científica que nos unió como nunca.",
    rating: 5,
    badge: "Confianza Restaurada"
  },
  {
    id: "test-2",
    name: "Andrés Gutiérrez",
    role: "Padre de una joven de 16 años - Bogotá",
    text: "El miedo a que mi hija sufriera acoso o un embarazo no planeado no me dejaba dormir. Gracias a las clases de Medicina y Trabajo Social de EDOS, hoy sabe cómo cuidarse y poner límites claros sin rodeos.",
    rating: 5,
    badge: "Hijos Blindados"
  },
  {
    id: "test-3",
    name: "Viviana Rojas",
    role: "Madre de familia - Quito, Ecuador",
    text: "Un taller súper profesional. No es solo un profesional hablando, sino una trabajadora social, una psicóloga y un médico trabajando juntos. El manual de control parental por sí solo vale diez veces lo que cuesta el curso.",
    rating: 5,
    badge: "Hogar Seguro"
  }
];

export const SCREENSHOT_TESTIMONIALS = [
  {
    id: "screen-1",
    author: "Martha L.",
    channel: "WhatsApp Grupo VIP",
    message: "Muchachas, apliqué el guión para responder cuando encontré pornografía en el historial de mi hijo. Él se sorprendió de mi tranquilidad y respeto. ¡Hablamos abiertamente por primera vez sin gritar!"
  },
  {
    id: "screen-2",
    author: "Viviana R.",
    channel: "Chat en Vivo de Zoom",
    message: "Tengo que confesar que lloré en el primer encuentro. Sentía pánico de que mis hijos cometieran un error que arruinara su proyecto de vida. Hoy me siento respaldada y con herramientas científicas claras."
  },
  {
    id: "screen-3",
    author: "Elena M.",
    channel: "Mensaje Directo de Instagram",
    message: "El tutorial de control parental en 5 minutos es maravilloso. Ya configuré Google, YouTube y Netflix para mis hijos menores. Es una paz inmensa. Gracias Tatiana y todo el equipo de EDOS."
  }
];

// 6. FAQs (Frequently Asked Questions)
export const FAQS: FaqItem[] = [
  {
    question: "¿Para qué edades de hijos está recomendado el Método EDOS?",
    answer: "El programa está enfocado en dotar de herramientas a los padres con hijos entre los 9 y 18 años. Aborda desde el desarrollo biológico inicial y las primeras dudas físicas, hasta los riesgos de la pornografía, el consentimiento digital, el noviazgo, el autocuidado y las ITS."
  },
  {
    question: "¿Qué pasa si mis hijos se niegan rotundamente a recibir charlas de sexualidad?",
    answer: "¡Excelente! Porque este programa está diseñado para entrenar a los PADRES, no a los hijos. Tú eres el primer referente en casa. Con las plantillas de conversaciones y los guiones de copiado rápido, aprenderás a intervenir en el día a día de forma natural y espontánea sin darles discursos incómodos o 'charlas rígidas' que los distancien."
  },
  {
    question: "¿Quiénes dictan el taller y qué profesionales acompañan el proceso?",
    answer: "El programa es liderado por la Mgt. Tatiana Domínguez Valencia (Trabajadora Social Clínica y Magíster en Salud Sexual) y cuenta con la docencia y acompañamiento directo de un equipo interdisciplinario de expertos en Psicología y Medicina, cubriendo el aspecto clínico, legal y psicosocial de forma profesional."
  },
  {
    question: "¿Por qué el programa de 6 encuentros tiene un costo de lanzamiento tan accesible?",
    answer: "Como fundadores de EDOS, nuestra misión es masificar la Educación Sexual Integral basada en la ciencia para blindar a la mayor cantidad de hogares de los peligros digitales y los abusos. Creemos que la desinformación no debe ser una barrera y por eso ofrecemos esta oferta colectiva de lanzamiento."
  },
  {
    question: "¿Las clases se graban si no puedo estar en directo por Zoom?",
    answer: "Sí, todos los encuentros en vivo se graban en alta definición y se suben a la plataforma privada de Hotmart en menos de 24 horas. Tendrás acceso de por vida al aula virtual para repasar las lecciones y descargar las plantillas a tu propio ritmo."
  },
  {
    question: "¿Qué garantía tengo si el programa no cumple mis expectativas?",
    answer: "Cuentas con una garantía incondicional de 7 días. Si asistes a los primeros encuentros, revisas los materiales descargables y sientes que no aportan valor real para guiar a tus hijos, solicitas el reembolso total con un solo clic y te devolvemos el 100% de tu dinero."
  }
];

// 7. Middle Page Survey / Quiz Data
export interface SurveyQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    points: string;
    description: string;
  }[];
}

export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    id: "q1",
    question: "¿Cuál es tu mayor temor o desafío con respecto a la sexualidad y el desarrollo de tus hijos hoy?",
    options: [
      { label: "Que busquen respuestas sobre sexo en internet o con amigos antes que conmigo, por miedo a que los juzgue", points: "A", description: "Brecha de comunicación y silencio" },
      { label: "El pánico al consumo silencioso de pornografía y no saber cómo reaccionar sin gritar o castigar", points: "B", description: "Riesgos digitales y desinformación" },
      { label: "Los peligros de las redes, noviazgos violentos o manipulación que vulneren su seguridad", points: "C", description: "Consentimiento y prevención de abusos" },
      { label: "El riesgo de un embarazo no planeado o ITS por usar métodos caseros o consejos de TikTok", points: "D", description: "Salud reproductiva y autocuidado" }
    ]
  },
  {
    id: "q2",
    question: "Cuando intentas abordar un tema de desarrollo corporal o íntimo en casa, ¿cuál suele ser la reacción?",
    options: [
      { label: "Se ponen completamente mudos, evaden el tema o se encierran rápido en su cuarto", points: "A", description: "Evasión emocional" },
      { label: "Se burlan, lo toman como broma o dicen que 'ya lo saben todo' por internet", points: "B", description: "Mito de autosuficiencia digital" },
      { label: "Sienten que los estoy vigilando, interrogando o juzgando y se molestan", points: "C", description: "Resistencia por miedo al juicio" },
      { label: "Nunca hemos hablado de esto en casa por vergüenza, tabúes o falta de guiones claros", points: "D", description: "Barrera invisible de tabúes" }
    ]
  },
  {
    id: "q3",
    question: "Si pudieras recibir un recurso de auxilio y blindaje hoy mismo, ¿cuál sería el más prioritario para ti?",
    options: [
      { label: "Guiones con respuestas paso a paso ante preguntas incómodas para no quedarme en blanco", points: "A", description: "Guiones Rompe Hielos" },
      { label: "Un tutorial paso a paso para configurar el Control Parental de forma segura y bloquear la pornografía", points: "B", description: "Escudo Digital" },
      { label: "Una lista de banderas rojas en el noviazgo para que identifiquen manipulaciones y abusos", points: "C", description: "Banderas Rojas de Alerta" },
      { label: "Fichas técnicas explicadas sin tabúes sobre anticoncepción real y prevención de riesgos médicos", points: "D", description: "Educación Médica y de Futuro" }
    ]
  }
];
