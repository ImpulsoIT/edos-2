// Core landing page data in Spanish for "PLAN MAESTRO: PROGRAMA SINCRÓNICO MÉTODO EDOS"

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

// 1. Course Curriculum Modules Data
export const COURSE_MODULES: CourseModule[] = [
  {
    id: "module-1",
    number: 1,
    title: "Mi Cuerpo, Mi Placer y Mis Dudas",
    objective: "Sanar la relación con el propio cuerpo, validar el desarrollo biológico y desarmar la culpa desde un enfoque integral del Ser.",
    classes: [
      {
        title: "Lo que nadie te dice del Deseo: Amor Propio, Cambios y Mitos Sexuales",
        ledBy: "Trabajo Social",
        painHandled: "Distorsión de la autoimagen, baja autoestima por expectativas de las redes y el miedo extremo a no ser normales física o emocionalmente. Ataca directamente la culpa y la profunda confusión generada por el uso de la pornografía como único y distorsionado educador sexual.",
        deliverables: [
          "El Termómetro del Autoconcepto Sexual: Guía digital para identificar y desactivar las inseguridades corporales.",
          "Cuestionario Interactivo 'Fantasía vs. Realidad': Herramienta didáctica para desmitificar la pornografía y comprender la sexualidad real."
        ]
      },
      {
        title: "¿Y si me pregunta de sexo? Desarmando mitos, pornografía y silencios en casa y redes sociales",
        ledBy: "Psicología",
        painHandled: "Pánico parental frente al autoerotismo (masturbación) o al despertar sexual de los adolescentes. Resuelve la impotencia de no saber cómo reaccionar ante el consumo de pornografía sin acudir al grito, el castigo humillante o el silencio incómodo.",
        deliverables: [
          "Guiones 'Rompe Hielos' para Preguntas Incómodas: Plantillas conversacionales paso a paso con respuestas exactas, científicas y libres de tabúes.",
          "Guía de Mediación Parental Afectiva: Manual práctico para abordar el hallazgo de material explícito desde un enfoque amoroso y educativo."
        ]
      }
    ]
  },
  {
    id: "module-2",
    number: 2,
    title: "El Arte de Decidir: Consentimiento y Seducción",
    objective: "Construir relaciones equitativas, aprender a establecer límites firmes y prevenir tempranamente dinámicas de violencia, manipulación o abuso.",
    classes: [
      {
        title: "Seducción con Respeto: Consentimiento, Deseo Compartido y el Poder del 'NO'",
        ledBy: "Psicología",
        painHandled: "La fuerte presión social y de pareja en los jóvenes. Maneja el miedo al rechazo o al abandono si deciden decir 'no' a una práctica sexual. Desactiva conductas normalizadas de control digital como los celos obsesivos, revisar el teléfono celular, exigir fotos íntimas o el sexting bajo coerción.",
        deliverables: [
          "El Semáforo del Consentimiento (Físico y Digital): Matriz visual clave para identificar cuándo un 'Sí' es real, libre y entusiasta, y cuándo es producto de la manipulación.",
          "Guía de Bolsillo para la Asertividad Relacional: Plantillas de comunicación para decir 'No' con seguridad y firmeza sin experimentar culpa."
        ]
      },
      {
        title: "Límites que Salvan: Cómo proteger a tu hijo del abuso y los abusos disfrazados de amor",
        ledBy: "Trabajo Social",
        painHandled: "La vulnerabilidad y la falta de control percibida por la familia. Alivia el pánico constante de los padres a que sus hijos sufran de abuso sexual, ciberacoso (grooming) o que queden atrapados en un noviazgo violento y tóxico sin que se den cuenta a tiempo.",
        deliverables: [
          "Lista de Chequeo de 'Banderas Rojas' en el Noviazgo: Herramienta técnica de observación para que padres y docentes detecten comportamientos de alerta o aislamiento en el adolescente.",
          "Protocolo de Actuación ante la Sospecha de Violencia: Manual internacional de primeros auxilios emocionales y legales para proteger y blindar al menor."
        ]
      }
    ]
  },
  {
    id: "module-3",
    number: 3,
    title: "Sexo Sentido: Cuidado y Proyecto de Vida",
    objective: "Conectar de manera indisoluble el autocuidado y los derechos reproductivos con las metas, sueños y planes de futuro del adolescente.",
    classes: [
      {
        title: "Sexo sin Susto: Anticoncepción Real, ITS y Cómo Cuidar tu Futuro",
        ledBy: "Medicina",
        painHandled: "El riesgo invisible y la vergüenza que frena la prevención. Combate el miedo al embarazo no planeado o a las Infecciones de Transmisión Sexual (ITS/VIH) atacando el problema de raíz: el uso de métodos caseros erróneos o consejos peligrosos de TikTok por temor a asistir a consulta médica.",
        deliverables: [
          "Fichas Técnicas Descomplicadas 'Anticoncepción al Desnudo': Infografías interactivas con el funcionamiento real, mitos y verdades científicas de cada método.",
          "Planificador 'Mi Proyecto de Vida Blindado': Matriz estratégica que conecta las metas profesionales y académicas del joven con sus decisiones de salud reproductiva."
        ]
      },
      {
        title: "Gran Sesión Sincrónica de Preguntas y Respuestas sin Filtros",
        ledBy: "Todo el Equipo Interdisciplinario (Medicina, Psicología y Trabajo Social)",
        painHandled: "La falta de un espacio seguro para resolver dudas específicas y personales de cada familia o educador que no se atreven a hacer en público.",
        deliverables: [
          "Grabaciones de por vida de la sesión para consulta posterior ante cualquier emergencia comunicativa familiar."
        ]
      }
    ]
  }
];

// 2. Offer Stack Core and Bonuses Data
export const MAIN_VEHICLE = {
  title: "Educarte Live: 6 Encuentros en Vivo de Alta Transformación",
  valueUsd: 250,
  valueCop: 1000000,
  description: "Acompañamiento en tiempo real con nuestro equipo interdisciplinario experto (Trabajo Social, Psicología y Medicina) para aprender el CÓMO actuar y sanar el vínculo familiar en vivo sin rodeos."
};

export const CORE_BONUSES: BonusItem[] = [
  {
    id: "bonus-1",
    title: "Videoteca VIP de Respuestas Rápidas (Clips de 3 Minutos)",
    valueUsd: 85,
    valueCop: 345000,
    hook: "¿Tu hijo te hizo una pregunta incómoda en la cena y te congelaste? Olvídate de leer libros extensos de 400 páginas. Abres esta videoteca privada desde tu celular, miras el clip de 3 minutos y sabrás exactamente qué responder con el lenguaje y tono correcto."
  },
  {
    id: "bonus-2",
    title: "Certificado Académico de 12 Horas por el Equipo Interdisciplinario",
    valueUsd: 42,
    valueCop: 170000,
    hook: "Un aval oficial que respalda tu compromiso y formación. Recibe un certificado de validez internacional firmado por nuestro Médico, Psicóloga y Trabajadora Social que acredita formalmente tus 12 horas de capacitación especializada en Educación Sexual Integral (ESI)."
  },
  {
    id: "bonus-3",
    title: "Cuaderno de Copiado: Plantillas de Conversaciones Listas para Usar",
    valueUsd: 57,
    valueCop: 230000,
    hook: "Te quitamos de encima la presión de pensar qué decir. Recibes guiones escritos palabra por palabra para abrir de forma fluida conversaciones difíciles sobre límites, placer, pornografía y prevención sin que parezca un sermón aburrido."
  },
  {
    id: "bonus-4",
    title: "Escudo Digital: Guía de Control Parental Configurado en 5 Minutos",
    valueUsd: 49,
    valueCop: 200000,
    hook: "Bloquea el porno e internet antes de que llegue a los ojos de tus hijos. Un tutorial paso a paso con capturas de pantalla simples para configurar la privacidad y filtros de seguridad en Google, TikTok, YouTube y Netflix en un fin de semana."
  },
  {
    id: "bonus-5",
    title: "Manual de Primeros Auxilios Emocionales (Botiquín Emocional)",
    valueUsd: 35,
    valueCop: 140000,
    hook: "El mapa definitivo para descifrar el silencio de tu hijo. Sabrás exactamente qué hacer cuando se encierre en su habitación, grite o se aísle por completo, transformando una crisis de rebeldía en una oportunidad de oro para conectar."
  },
  {
    id: "bonus-6",
    title: "Planificador de Metas Inquebrantables (Proyecto de Vida)",
    valueUsd: 65,
    valueCop: 260000,
    hook: "Un adolescente con metas claras no arriesga su futuro. Esta plantilla interactiva es para que la diseñes paso a paso junto a él, uniendo de forma armoniosa sus sueños profesionales con decisiones responsables de autocuidado y sexualidad."
  },
  {
    id: "bonus-7",
    title: "Biblioteca Digital de Literatura Especializada en ESI",
    valueUsd: 75,
    valueCop: 300000,
    hook: "Acceso inmediato a nuestra biblioteca selecta de libros digitales, guías de organizaciones internacionales de la salud y materiales de descarga con bases científicas sólidas para consultar a tu propio ritmo por el resto de tu vida."
  }
];

export const FAST_ACTION_BONUSES: BonusItem[] = [
  {
    id: "fast-bonus-1",
    title: "Sesión de Mentoría Grupal en Vivo por Zoom con la Magíster Tatiana Domínguez",
    valueUsd: 150,
    valueCop: 600000,
    hook: "¿Quieres que analicemos tu caso familiar cara a cara? Si eres de los primeros 50 en ingresar, tendrás un pase VIP a una sesión privada en Zoom para auditar tus mayores dudas de crianza sin ningún tipo de filtro y armar tu plan personalizado de acción.",
    isFastAction: true
  },
  {
    id: "fast-bonus-2",
    title: "Curso Completo: 'Educación Sexual con Énfasis en Niños y Niñas' (Pregrabado)",
    valueUsd: 97,
    valueCop: 400000,
    hook: "No solo vas a blindar a tu hijo adolescente. Con este acceso premium a mi segundo programa en Hotmart aprenderás a proteger a los más pequeños del hogar desde la primera infancia, creando un escudo familiar permanente frente al abuso y la desinformación.",
    isFastAction: true
  }
];

// 3. Pricing Math
export const PRICING_MATH = {
  totalValueUsd: 905,
  totalValueCop: 3645000,
  specialPriceUsd: 100,
  specialPriceCop: 335000,
  hotmartPaymentLink: "https://pay.hotmart.com/M_EDOS_PLACEHOLDER?checkoutMode=10",
  whatsappContactLink: "https://wa.me/573000000000?text=Hola%20Tatiana,%20quiero%20inscribirme%20al%20Plan%20Maestro%20EDOS"
};

// 4. Timeline / Roadmap
export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    dates: "6 – 17 JULIO",
    phaseName: "Fase 1",
    title: "Creación de la 'Oferta Grand Slam'",
    tasks: "Grabación de videoclips de la Caja de Herramientas, preparación de guiones educativos y finalización de los acuerdos con el equipo médico y psicológico.",
    team: "La Magíster Tatiana y Copywriters estructuran cada clase para blindar los dolores investigados en las familias.",
    technicalDeliverable: "Diseño y validación metodológica al 100%."
  },
  {
    dates: "20 – 31 JULIO",
    phaseName: "Fase 2",
    title: "Campaña de Captación & Conexión",
    tasks: "Apertura de los canales oficiales de comunicación, calentamiento con estadísticas cruciales sobre los peligros digitales (grooming, porno) y bienvenida en los grupos VIP de EDOS.",
    team: "El equipo de tráfico enciende los anuncios mientras se envían guías rápidas preventivas a los participantes registrados.",
    technicalDeliverable: "Optimización diaria de registros en los canales educativos."
  },
  {
    dates: "3 – 7 AGOSTO",
    phaseName: "Fase 3",
    title: "La Semana del Lanzamiento (Masterclass)",
    tasks: "Transmisión de la Clase Magistral Gratuita 'Las 3 llaves para conectar con tu hijo'. Al finalizar, apertura de matrículas del Plan Maestro con bonos limitados de acción rápida.",
    team: "Interacción directa en chat para derribar temores y responder dudas sobre las admisiones.",
    technicalDeliverable: "Apertura del carrito oficial con pasarela segura."
  },
  {
    dates: "10 – 21 AGOSTO",
    phaseName: "Fase 4",
    title: "Ejecución de Clases en Vivo",
    tasks: "Dictado interactivo de las 6 sesiones sincrónicas del Método EDOS. Los alumnos reciben inmediatamente sus guías, guiones de copiado y la certificación interdisciplinaria al finalizar.",
    team: "Tatiana, psicólogo y médico acompañando activamente el chat en vivo en cada clase.",
    technicalDeliverable: "Entrega de accesos permanentes y certificados académicos."
  }
];

export const LIVE_CLASSES_DATES = [
  { date: "11 de Agosto", day: "Martes", hour: "19:00 COT", theme: "Apertura & Amor Propio" },
  { date: "13 de Agosto", day: "Jueves", hour: "19:00 COT", theme: "Mitos Sexuales y Redes" },
  { date: "18 de Agosto", day: "Martes", hour: "19:00 COT", theme: "Frenando la Pornografía" },
  { date: "20 de Agosto", day: "Jueves", hour: "19:00 COT", theme: "El Semáforo del Consentimiento" },
  { date: "25 de Agosto", day: "Martes", hour: "19:00 COT", theme: "Prevención frente al Abuso" },
  { date: "27 de Agosto", day: "Jueves", hour: "19:00 COT", theme: "Anticoncepción, ITS & Cierre" }
];

// 5. Testimonials Data (Text + Screens)
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Carolina Mendoza",
    role: "Madre de Sofía (14 años) - Bogotá, Colombia",
    text: "Mi mayor terror era la pornografía en internet. Gracias a los guiones de Tatiana, pude hablar con mi hija de forma súper natural en el almuerzo sin sentir vergüenza. El Método EDOS cambió el aire tenso que se respiraba en mi casa.",
    rating: 5,
    badge: "Madre de Adolescente"
  },
  {
    id: "test-2",
    name: "Hno. Francisco Javier",
    role: "Rector de Colegio de Bachillerato - Cali",
    text: "Como educador, la sexualidad solía ser un dolor de cabeza técnico. La visión interdisciplinaria (Trabajo Social, Medicina y Psicología) de este programa nos brindó herramientas científicas increíbles para guiar a los estudiantes en vez de prohibirles.",
    rating: 5,
    badge: "Educador de Jóvenes"
  },
  {
    id: "test-3",
    name: "Dr. Andrés Salazar",
    role: "Pediatra y Padre de Familia - Medellín",
    text: "Recomiendo ampliamente este programa. Tatiana une la precisión clínica con una empatía humana excepcional. No basta con enseñar biología, hay que entrenar el autoconcepto y la asertividad digital.",
    rating: 5,
    badge: "Médico & Padre"
  }
];

export const SCREENSHOT_TESTIMONIALS = [
  {
    id: "screen-1",
    author: "Mónica G.",
    channel: "WhatsApp Grupo VIP",
    message: "¡Chicas no saben! Mi hijo de 15 me preguntó sobre la masturbación anoche y me acordé del guión del 'MÉTODO EDOS'. Le respondí con tanta naturalidad que él mismo me abrazó y me agradeció. Antes me hubiera congelado de la angustia."
  },
  {
    id: "screen-2",
    author: "Eduardo R.",
    channel: "Chat en Vivo de Zoom",
    message: "Excelente la clase con la Psicóloga y el Médico. Por fin alguien explica anticoncepción sin asustar ni juzgar, y centrado en que los chicos defiendan sus propios proyectos de vida."
  },
  {
    id: "screen-3",
    author: "Patricia S.",
    channel: "Mensaje Directo de Instagram",
    message: "El semáforo de consentimiento digital me pareció una obra de arte. Mi hija y yo lo imprimimos y lo pegamos en su cuarto. Saber que cuenta conmigo me da una paz mental impagable."
  }
];

// 6. FAQs (Frequently Asked Questions)
export const FAQS: FaqItem[] = [
  {
    question: "¿Qué pasa si no puedo asistir a los encuentros en vivo por mis horarios?",
    answer: "No te preocupes en lo absoluto. Todas las 6 sesiones se graban en alta definición y se suben a tu área de alumnos de Hotmart en menos de 24 horas, donde tendrás acceso de por vida. Podrás formular tus preguntas con antelación o enviarlas para que sean resueltas por el equipo interdisciplinario."
  },
  {
    question: "¿Este programa es únicamente para padres de familia?",
    answer: "Para nada. Es un entrenamiento de altísimo valor para docentes, psicopedagogos, profesionales de la salud, cuidadores y cualquier adulto responsable que tenga bajo su cargo la guía o formación de adolescentes y busque herramientas prácticas y validadas."
  },
  {
    question: "¿El lenguaje o las temáticas son demasiado explícitas o inapropiadas?",
    answer: "Es un programa con un profundo sentido de respeto, cuidado y rigor profesional. Tratamos los temas de manera directa y científica, despojándolos del morbo o la vulgaridad. Buscamos empoderar al adulto con la terminología correcta para que sea un referente confiable."
  },
  {
    question: "¿Recibiré las grabaciones y las plantillas descargables para siempre?",
    answer: "Sí. Todo el material del curso en Hotmart, las plantillas listas para usar, los guiones 'rompe hielos', las matrices de consentimiento y las videotecas VIP tienen acceso garantizado de por vida para ti, incluyendo futuras actualizaciones."
  },
  {
    question: "¿Tiene bases científicas y metodológicas?",
    answer: "Absolutamente. El Método EDOS se fundamenta en un marco de derechos sexuales y reproductivos, la psicología del desarrollo adolescente y las metodologías del trabajo social clínico y la medicina preventiva. No es mera opinión; es ciencia aplicada con pedagogía del afecto."
  },
  {
    question: "¿Qué pasa si descubro que mi hijo adolescente ya consume pornografía?",
    answer: "Este es el caso del 80% de los padres que ingresan. En la Clase 2 del Módulo 1 te enseñamos el protocolo exacto para manejar esta situación: cómo hablarlo sin gritar, sin humillaciones ni silencios, usándolo como una palanca educativa para desmitificar las falsas expectativas relacionales."
  },
  {
    question: "Me da muchísima vergüenza o pena hablar de estos temas en mi hogar. ¿Me servirá?",
    answer: "Es completamente normal, fuimos educados en el tabú. Por eso te entregamos los 'guiones de copiado' escritos palabra por palabra. No tienes que inventar nada; solo leer el guión y seguir las pautas de modulación emocional que te enseñamos para que la conversación fluya sin esfuerzo."
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
    question: "¿Cuál es tu mayor temor o frustración en la comunicación con tus hijos adolescentes sobre sexualidad?",
    options: [
      { label: "Quedarme en blanco o no saber qué decir ante una pregunta incómoda", points: "A", description: "Falta de guiones prácticos" },
      { label: "Que aprendan cosas distorsionadas en internet o mediante la pornografía", points: "B", description: "Peligros del entorno digital" },
      { label: "Llegar tarde y que se expongan a embarazos no planeados, ITS o abusos", points: "C", description: "Necesidad de prevención urgente" },
      { label: "Sentir que me evitan, me ocultan cosas o que hay un silencio total en casa", points: "D", description: "Pérdida de la conexión emocional" }
    ]
  },
  {
    id: "q2",
    question: "Cuando surge un tema relacionado con parejas, noviazgo o intimidad, ¿cómo reaccionas?",
    options: [
      { label: "Cambio de tema rápidamente o hago una broma para disimular la vergüenza", points: "A", description: "Tabú inconsciente" },
      { label: "Doy un discurso biológico muy técnico pero esquivo lo emocional/placer", points: "B", description: "Falta de enfoque integral" },
      { label: "Establezco normas rígidas y de prohibición por miedo a que pase algo malo", points: "C", description: "Enfoque basado en el pánico" },
      { label: "Hablamos poco porque ellos se cierran y me dicen que 'ya lo saben todo'", points: "D", description: "Barrera defensiva adolescente" }
    ]
  },
  {
    id: "q3",
    question: "Si tuvieras que elegir una herramienta para empezar HOY a transformar tu hogar, ¿cuál elegirías?",
    options: [
      { label: "Guiones exactos palabra por palabra para abrir la conversación sin tensiones", points: "A", description: "Guiones Rompehielos" },
      { label: "Un método para bloquear la pornografía y configurar control parental rápido", points: "B", description: "Escudo Digital" },
      { label: "Aprender a enseñarle a mi hijo a decir NO y poner límites reales a su pareja", points: "C", description: "Semáforo del Consentimiento" },
      { label: "Una sesión cara a cara con profesionales para guiar mi caso particular", points: "D", description: "Mentoría Personalizada" }
    ]
  }
];
