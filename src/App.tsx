import { useState, useEffect } from "react";
import { 
  COURSE_MODULES, 
  CORE_BONUSES, 
  FAST_ACTION_BONUSES, 
  PRICING_MATH, 
  LIVE_CLASSES_DATES, 
  TESTIMONIALS, 
  SCREENSHOT_TESTIMONIALS, 
  FAQS 
} from "./data";
import Accordion from "./components/Accordion";
import Quiz from "./components/Quiz";
import { 
  Sparkles, 
  Flame, 
  CheckCircle, 
  AlertTriangle, 
  GraduationCap, 
  Calendar, 
  Clock, 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  Check, 
  ChevronDown, 
  UserCheck, 
  Star,
  Users2,
  Lock,
  Bookmark
} from "lucide-react";

export default function App() {
  // Local state for FAQs expanding/collapsing
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  
  // State for visual urgency countdown timer (Hotmart/Launch style)
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });
  
  // State for sticky mobile CTA banner
  const [showStickyCta, setShowStickyCta] = useState(false);

  // State for interactive checklist
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 11, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sticky CTA scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  const handleCheckboxToggle = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  // Safe formatting helpers for currency
  const formatUsd = (val: number) => `$${val} USD`;
  const formatCop = (val: number) => `${val.toLocaleString("es-CO")} COP`;

  const checklistItems = [
    "Te da pánico que tus hijos adolescentes caigan en adicciones digitales, busquen pornografía o sean víctimas de ciberacoso y noviazgos violentos.",
    "Has intentado abordar la sexualidad con ellos pero te evaden, se encierran en su cuarto o te responden con silencios incómodos y tabúes.",
    "Sientes vergüenza, tabú o te quedas congelado sin saber qué palabras exactas decir ante preguntas íntimas o incómodas de tus hijos.",
    "Te preocupa que el único educador sexual de tus hijos sea internet, TikTok o la opinión distorsionada de sus amigos desinformados.",
    "Sientes impotencia al no saber cómo reaccionar de manera científica y asertiva para blindar su proyecto de vida sin acudir a gritos o sermones."
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-brand-navy font-sans antialiased selection:bg-brand-teal selection:text-brand-navy">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Urgency and Scarcity) */}
      <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white text-xs sm:text-sm font-semibold py-3 px-4 text-center border-b border-brand-teal/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="inline-flex items-center gap-1 bg-brand-teal text-brand-navy font-black px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider animate-pulse">
            💻 PROGRAMA SINCRÓNICO "MÉTODO EDOS"
          </span>
          <p className="text-slate-200 text-xs sm:text-sm">
            📅 Próximo inicio: <span className="text-brand-teal font-black">11 de Agosto</span> (6 Encuentros en Vivo por Zoom)
          </p>
          <div className="flex items-center gap-1 font-mono text-brand-teal font-bold bg-black/40 px-2 py-0.5 rounded border border-teal-900/60 text-xs">
            <span>{String(timeLeft.hours).padStart(2, "0")}h</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <header className="relative bg-gradient-to-b from-brand-navy via-slate-950 to-brand-navy text-white pt-16 pb-24 sm:pb-32 overflow-hidden">
        {/* Soft neon circles background glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Pre-headline Capsule */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-teal/10 rounded-full border border-brand-teal/20 text-brand-teal text-xs sm:text-sm font-bold tracking-wide uppercase">
                <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" /> EL ESCUDO FAMILIAR CONTRA LOS RIESGOS DIGITALES
              </div>

              {/* Master Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
                Educa a tus hijos <br />
                <span className="text-brand-teal">sin tabúes, silencios ni miedos.</span>
              </h1>

              {/* Subheadline (Resonant promise) */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Usa el <strong className="font-semibold text-white">Método EDOS</strong> para blindar a tus niños y adolescentes de la pornografía, los peligros digitales y riesgos de abuso, construyendo un canal de comunicación asertivo y científico en casa.
              </p>

              {/* CTA Group */}
              <div className="pt-4 space-y-4 max-w-md mx-auto lg:mx-0">
                <a
                  href="#oferta-exclusiva"
                  className="group relative w-full inline-flex items-center justify-center gap-3 bg-brand-teal hover:bg-brand-teal-dark text-brand-navy font-black py-4 px-8 rounded-2xl shadow-lg hover:shadow-brand-teal/20 hover:scale-[1.02] transition-all cursor-pointer text-center text-sm sm:text-base tracking-wide border-b-4 border-teal-800/60"
                >
                  <span>INSCRIBIRME AL PROGRAMA MÉTODO EDOS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <p className="text-[11px] text-slate-400 font-mono flex items-center justify-center lg:justify-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-teal" /> 6 encuentros en vivo con equipo de Trabajo Social, Psicología y Medicina.
                </p>
              </div>
            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-gradient-to-tr from-brand-navy to-slate-900 p-1.5 rounded-3xl border border-brand-teal/30 shadow-2xl relative overflow-hidden group glow-teal">
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="relative bg-slate-950/80 p-6 sm:p-8 rounded-[22px] space-y-6 text-center">
                  <div className="inline-block bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                    Programa Sincrónico "Educarte"
                  </div>
                  
                  <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                    Educación Sexual Integral <span className="text-brand-teal">Basada en la Ciencia</span>
                  </h3>
                  
                  <div className="h-px bg-brand-teal/20" />
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Un entrenamiento interdisciplinario práctico para padres que quieren guiar a sus hijos en el despertar biológico, el consentimiento real, la prevención de riesgos y la construcción de su proyecto de vida sin temores.
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-teal-950/40">
                      <span className="text-[10px] font-mono font-bold text-brand-teal uppercase block">DURACIÓN</span>
                      <span className="text-sm font-bold text-white">6 Clases Vivo</span>
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-teal-950/40">
                      <span className="text-[10px] font-mono font-bold text-brand-teal uppercase block">EQUIPO DOCENTE</span>
                      <span className="text-sm font-bold text-white">Interdisciplinario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* 3. TESTIMONIAL SPOTLIGHT (Primary spotlight review - CRITICAL USER REQUEST) */}
      <section className="relative z-20 -mt-10 max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy rounded-3xl p-6 sm:p-10 border border-brand-teal/30 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 items-center">
            {/* Portrait Image Column */}
            <div className="w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden border-2 border-brand-teal shadow-xl shrink-0 bg-slate-950 relative group">
              <img 
                src="/src/assets/images/tatiana_new_profile_1783089941893.jpg" 
                alt="Testimonio Destacado del Programa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-slate-950/80 py-1 px-2 text-center">
                <span className="text-[9px] font-mono font-bold tracking-widest text-brand-teal uppercase">RESEÑA DESTACADA</span>
              </div>
            </div>

            {/* Testimonial Bio Content */}
            <div className="space-y-4 text-center md:text-left flex-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-teal uppercase tracking-widest">
                <Star className="w-4 h-4 fill-brand-teal text-brand-teal" /> TESTIMONIO PRINCIPAL DE LA PÁGINA
              </span>
              
              <h2 className="text-xl sm:text-2xl font-display font-black text-white leading-tight">
                "¡Por primera vez en casa no hay silencios hostiles ante preguntas incómodas!"
              </h2>
              
              <p className="text-slate-300 text-sm leading-relaxed italic font-light">
                “Con las herramientas científicas y los guiones del Método EDOS, mi hija aprendió a identificar por sí misma las banderas rojas en su noviazgo y a poner límites sin sentirse juzgada. Entendí que prohibir internet o gritar no servía, sino que debíamos educar desde el afecto y el respeto técnico. Es la mejor inversión que he hecho en la vida de mis hijos.”
              </p>

              <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div>
                  <p className="font-display font-bold text-white text-sm">Carolina Montenegro</p>
                  <p className="text-[10px] text-brand-teal font-mono uppercase">Madre de dos adolescentes • Cali, Colombia</p>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-brand-teal fill-brand-teal" />
                  ))}
                  <span className="text-xs text-slate-400 font-mono ml-1">Verificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-[11px] text-slate-400 font-mono tracking-widest uppercase mb-8">
            📈 RESPALDO PROFESIONAL Y CIENTÍFICO EN LATINOAMÉRICA
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-display font-black text-brand-navy">+5.000</div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Padres Formados</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-display font-black text-brand-navy">+15</div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Países de Latam</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-display font-black text-brand-navy">+10 Años</div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Experiencia Clínica</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-display font-black text-brand-navy">100%</div>
              <p className="text-xs text-slate-500 uppercase tracking-wide">Enfoque Científico</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ¿TE IDENTIFICAS? SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-brand-coral uppercase tracking-widest font-mono">¿Esto te suena familiar en casa?</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-navy">
              ¿TE IDENTIFICAS CON ESTO?
            </h2>
            <div className="h-1 w-16 bg-brand-coral mx-auto mt-2 rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-navy flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-display font-extrabold text-brand-navy text-lg sm:text-xl">Tus hijos se aíslan</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pasan horas encerrados en sus habitaciones con el celular en la mano. Cuando intentas hablarles, responden con evasivas, silencios o un incómodo "no sé", sintiendo que los estás interrogando.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-navy flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-display font-extrabold text-brand-navy text-lg sm:text-xl">Los riesgos digitales acechan</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sabes que en internet están expuestos a pornografía explícita, retos virales nocivos, ciberacoso (grooming) o dinámicas de noviazgos tóxicos, y no tienes un protocolo claro para prevenirlos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-navy flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5 text-teal-700" />
              </div>
              <h3 className="font-display font-extrabold text-brand-navy text-lg sm:text-xl">Te faltan las palabras</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sientes pánico o te congelas cuando te preguntan sobre sexualidad, placer o relaciones, temiendo darles respuestas erróneas que los alejen o perpetúen tabúes y mitos peligrosos.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. LA RESPUESTA NO ES EL SILENCIO NI EL TABÚ */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-6">
          <span className="text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">Un cambio de perspectiva radical</span>
          
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
            La respuesta no es el silencio ni el sermón
          </h2>
          
          <div className="h-1.5 w-20 bg-brand-teal rounded-full mx-auto" />
          
          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
            No necesitas dar discursos infinitos, prohibirles el celular por completo, ni fingir que nada está pasando. Mientras sigas educando desde el miedo, el grito o la vergüenza, tus hijos buscarán respuestas distorsionadas en internet. <span className="text-brand-teal font-medium">Necesitas educar con bases científicas, afecto y estrategia.</span>
          </p>
        </div>
      </section>

      {/* 7. ENTONCES ¿CUÁL ES EL CAMINO? */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Estrategia Preventiva Familiar</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-brand-navy">Entonces, ¿Cuál es el camino?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1: NO FUNCIONA */}
            <div className="p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-6">
              <h3 className="font-display font-bold text-brand-coral text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0">❌</span>
                NO FUNCIONA
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Gritar, castigar severamente o prohibir todo acceso a internet sin educar.",
                  "Dar discursos incómodos que tus hijos ignoran o aburren de inmediato.",
                  "Hacer de cuenta que no pasa nada y esperar que 'aprendan solos' en la calle.",
                  "Creer que la sexualidad es un tema sucio o prohibido y callar por vergüenza."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm">
                    <span className="text-rose-500 shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: LO QUE SÍ */}
            <div className="p-6 sm:p-8 bg-teal-50/20 rounded-3xl border border-teal-100/60 space-y-6">
              <h3 className="font-display font-bold text-brand-navy text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-brand-navy text-brand-teal flex items-center justify-center font-bold text-xs shrink-0">✔️</span>
                LO QUE SÍ FUNCIONA
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Un marco científico y asertivo para hablar de sexualidad natural y sin tabúes.",
                  "Guiones de conversaciones listas para usar y romper hielos en la mesa.",
                  "Configuración de control parental efectiva y rápida en todos los dispositivos.",
                  "Conectar las decisiones de autocuidado de tu hijo con su proyecto de vida."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-brand-navy text-sm font-medium">
                    <span className="text-brand-navy shrink-0 mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="p-6 bg-teal-900/5 rounded-2xl border border-teal-100 text-center max-w-3xl mx-auto text-sm text-slate-600">
            "Educar a tus hijos a tiempo, blindarlos de los riesgos digitales y abrir un canal de comunicación de confianza. Un camino preventivo que funciona porque es <strong className="text-brand-navy font-semibold">CIENTÍFICO Y AFECTIVO</strong>."
          </div>
        </div>
      </section>

      {/* 8. EVENT + COURSE BENEFITS */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Plan de Estudios Oficial</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-brand-navy">
              En este Programa Sincrónico "Educarte" descubrirás:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", t: "Amor Propio y Cambios del Desarrollo", d: "Cómo acompañar las dudas físicas de tus hijos biológicamente y desarmar la culpa de la autoimagen en redes." },
              { num: "02", t: "Desarmando la Pornografía en Casa", d: "Pautas de mediación efectivas ante el hallazgo de material explícito, sin acudir al grito ni al silencio incómodo." },
              { num: "03", t: "Consentimiento Físico y Digital", d: "Seducción con respeto, desmitificar los celos virtuales y enseñarles a decir NO con seguridad ante la presión de pareja." },
              { num: "04", t: "Límites y Prevención de Abuso", d: "Lista de banderas rojas en el noviazgo adolescente y protocolos para detectar comportamientos de alerta o aislamiento." },
              { num: "05", t: "Anticoncepción Real y Salud Reproductiva", d: "Fichas técnicas descomplicadas sobre ITS y anticoncepción real para desmentir falsos mitos originados de TikTok." },
              { num: "06", t: "Proyecto de Vida Blindado", d: "Cómo conectar las decisiones cotidianas de salud y autocuidado del adolescente con sus metas y sueños profesionales futuros." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-3">
                <span className="text-2xl font-mono font-black text-brand-navy/20 block">{item.num}</span>
                <h4 className="font-display font-extrabold text-brand-navy text-base sm:text-lg leading-tight">{item.t}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INTERACTIVE CHECKLIST (0 of 5 selected - ENHANCED USER EXPERIENCE) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-brand-navy via-slate-950 to-brand-navy p-6 sm:p-10 rounded-3xl text-white space-y-8 relative overflow-hidden shadow-xl border border-brand-teal/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="text-center space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-teal/20 text-brand-teal font-mono text-xs uppercase font-bold tracking-widest">
                Lista de Autoverificación
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">¿TE IDENTIFICAS? Esto es para ti si:</h2>
              <p className="text-teal-200 text-xs sm:text-sm max-w-xl mx-auto">
                Marca cada una de las casillas con las que te sientas identificado hoy. Nuestro sistema calculará tu nivel de alerta preventivo en casa.
              </p>
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              {checklistItems.map((item, index) => {
                const isChecked = !!checkedItems[index];
                return (
                  <button
                    key={index}
                    onClick={() => handleCheckboxToggle(index)}
                    className={`w-full p-4 rounded-xl text-left border transition-all flex items-start gap-4 cursor-pointer focus:outline-none ${
                      isChecked 
                        ? "bg-brand-teal/10 border-brand-teal/60 text-white" 
                        : "bg-slate-900/40 border-teal-950/40 hover:border-teal-800 text-slate-300"
                    }`}
                  >
                    <div className={`w-5.5 h-5.5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isChecked ? "bg-brand-teal border-brand-teal text-brand-navy" : "border-slate-500"
                    }`}>
                      {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">{item}</span>
                  </button>
                );
              })}
            </div>

            {/* Checklist Score Bar */}
            <div className="p-4 rounded-2xl bg-black/40 border border-teal-950/60 text-center max-w-xl mx-auto space-y-2">
              <p className="text-xs sm:text-sm font-mono text-slate-300">
                Has seleccionado <strong className="text-brand-teal font-bold">{checkedCount} de {checklistItems.length}</strong> desafíos.
              </p>
              
              <div className="w-full bg-teal-950/80 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-brand-teal h-full transition-all duration-500" 
                  style={{ width: `${(checkedCount / checklistItems.length) * 100}%` }}
                />
              </div>

              {checkedCount > 0 ? (
                <p className="text-xs text-brand-teal font-medium mt-1">
                  {checkedCount <= 2 
                    ? "✔ Tu hogar muestra señales de desconexión iniciales. Es el momento de intervenir preventivamente."
                    : "⚠️ Alerta alta de desinformación o riesgos digitales. Este programa es crítico para blindar a tu familia."}
                </p>
              ) : (
                <p className="text-[10px] text-slate-400">Selecciona al menos un desafío para ver tu recomendación.</p>
              )}
            </div>

            <div className="text-center pt-2">
              <a 
                href="#diagnostico-interactivo" 
                className="inline-flex items-center gap-1.5 text-xs text-brand-teal hover:underline font-mono"
              >
                <span>Siguiente: Realiza el Autodiagnóstico Detallado</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE DIAGNOSTIC QUIZ */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Cuestionario Estratégico</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-navy">
              ¿Quieres saber qué tan preparado está tu hogar?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Responde este breve test de autodiagnóstico familiar. Al finalizar, nuestro sistema analizará tu caso y te dará una recomendación asertiva de inmediato.
            </p>
          </div>

          <Quiz />
        </div>
      </section>

      {/* 11. DETAILED ACCORDION CURRICULUM */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Contenido del Curso</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy">
              Estructura Curricular del Método EDOS
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Explora las temáticas sincrónicas del programa. Haz clic en cada módulo para desplegar las lecciones, los desafíos que solucionamos y los recursos descargables.
            </p>
          </div>

          <Accordion />
        </div>
      </section>

      {/* 12. THE OFFER STACK (Irresistible value representation) */}
      <section id="oferta-exclusiva" className="py-20 bg-brand-navy text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-900/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 relative z-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1 bg-brand-teal/10 text-brand-teal font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider border border-brand-teal/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" /> TODO INCLUIDO EN TU INSCRIPCIÓN DE LANZAMIENTO
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              La Oferta Inmejorable: <br />
              El Programa "Educarte" de Educación Sexual Integral
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Consigue tu entrada a los 6 encuentros interactivos sincrónicos y llévate gratis los 8 bonos de blindaje y proyecto de vida de por vida.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Left: Product Mockup and Description */}
            <div className="lg:w-5/12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-1 rounded-3xl bg-slate-900 border border-teal-950/40 overflow-hidden shadow-2xl">
                  {/* Visual mockup of the program using the specific artifact image */}
                  <div className="aspect-[4/3] w-full bg-slate-950 flex flex-col justify-between p-6 relative overflow-hidden rounded-2xl border border-teal-950">
                    <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/images/program_mockup_1783088518714.jpg')" }} />
                    
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="text-[10px] font-mono font-bold bg-brand-teal text-brand-navy px-2 py-0.5 rounded">PROGRAMA SINCRÓNICO</span>
                      <Users2 className="w-6 h-6 text-brand-teal" />
                    </div>

                    <div className="relative z-10 space-y-1">
                      <h4 className="font-display font-black text-white text-lg leading-tight uppercase">
                        Programa Sincrónico <br />Educarte - Método EDOS
                      </h4>
                      <p className="text-[10px] text-brand-teal font-mono">POR LA MGT. TATIANA DOMÍNGUEZ VALENCIA</p>
                    </div>

                    <div className="relative z-10 h-px bg-brand-teal/20" />

                    <div className="relative z-10 flex justify-between items-center text-[10px] font-mono text-slate-400">
                      <span>Plataforma: Hotmart</span>
                      <span>Acceso de por vida</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">El Programa Principal</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2">
                    <strong>"Educarte Live"</strong>: 6 encuentros en vivo con equipo interdisciplinario experto. Aprende junto a Tatiana Domínguez y equipo a guiar la sexualidad integral y blindar la salud familiar con fundamentos científicos.
                  </p>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mt-3 pt-3 border-t border-teal-950/60">
                    <span>Valor Real de Mercado:</span>
                    <span className="line-through text-rose-400 font-semibold">{formatUsd(250)} (~{formatCop(1000000)})</span>
                  </div>
                </div>
              </div>

              {/* Security indicators */}
              <div className="p-4 rounded-2xl bg-black/30 border border-teal-950/40 space-y-2">
                <p className="text-xs font-semibold text-brand-teal flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Pago 100% Protegido y Seguro por Hotmart
                </p>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Hotmart procesará tu inscripción de forma 100% segura. Tienes una garantía incondicional de 7 días. Si el programa no cumple tus expectativas, solicitas la devolución y recuperas tu dinero de inmediato sin preguntas.
                </p>
              </div>
            </div>

            {/* Right: Premium Bonuses list */}
            <div className="lg:w-7/12 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar space-y-4 bg-slate-950/40 p-4 sm:p-6 rounded-3xl border border-teal-950/40">
              <h4 className="font-display font-bold text-slate-300 text-xs tracking-wider uppercase mb-2">Los 8 Bonos de Regalo Incluidos de por Vida:</h4>
              
              {CORE_BONUSES.map((bonus, idx) => (
                <div key={bonus.id} className="p-4 rounded-xl bg-slate-900/80 border border-teal-950/40 flex items-start gap-4 hover:border-teal-800 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal font-display font-bold text-sm flex items-center justify-center shrink-0">
                    B{idx + 1}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h5 className="font-display font-bold text-white text-sm sm:text-base leading-tight">
                        {bonus.title}
                      </h5>
                      <span className="text-[10px] font-bold font-mono text-brand-teal uppercase tracking-wider">GRATIS</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {bonus.hook}
                    </p>
                    <div className="text-[10px] font-mono text-slate-500 text-right">
                      Valor Real: <span className="line-through">{formatUsd(bonus.valueUsd)} ({formatCop(bonus.valueCop)})</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Fast Action bonuses divider */}
              <div className="py-2 border-y border-teal-950/40 my-6">
                <p className="text-xs font-bold text-brand-teal font-mono tracking-widest uppercase flex items-center gap-1.5 justify-center">
                  <Flame className="w-4 h-4 animate-pulse" /> RECOMPENSAS DE ACCIÓN RÁPIDA VIP
                </p>
              </div>

              {FAST_ACTION_BONUSES.map((bBonus, idx) => (
                <div key={bBonus.id} className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-teal-950/10 border border-brand-teal/20 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/20 text-brand-teal font-display font-bold text-sm flex items-center justify-center shrink-0">
                    VIP
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h5 className="font-display font-bold text-white text-sm sm:text-base leading-tight flex items-center gap-1">
                        {bBonus.title}
                      </h5>
                      <span className="text-[10px] font-bold font-mono text-brand-teal uppercase tracking-wider">
                        {idx === 0 ? "Primeras 50" : "¡GRATIS!"}
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {bBonus.hook}
                    </p>
                    <div className="text-[10px] font-mono text-slate-500 text-right">
                      Valor Real: <span className="line-through">{formatUsd(bBonus.valueUsd)} ({formatCop(bBonus.valueCop)})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. VALUE STACK MATH SECTION (Visually strong comparison) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Transparencia Total</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
              La Matemática Detrás de tu Inscripción
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Si fueras a adquirir cada uno de los componentes de este programa de Educación Sexual Integral por separado, este sería el valor comercial real:
            </p>
          </div>

          {/* Table Design */}
          <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-4 border-b border-slate-100 grid grid-cols-12 text-xs font-bold font-mono uppercase text-slate-500 tracking-wider">
              <div className="col-span-8 sm:col-span-9">Entregable / Recurso</div>
              <div className="col-span-2 text-right">Valor USD</div>
              <div className="col-span-2 text-right">Valor COP</div>
            </div>

            <div className="divide-y divide-slate-50 font-medium text-xs sm:text-sm">
              <div className="px-5 py-4 grid grid-cols-12 text-slate-800">
                <div className="col-span-8 sm:col-span-9 font-display font-bold text-brand-navy">
                  6 Encuentros en Vivo "Educarte Live" (Acompañamiento Interdisciplinario)
                </div>
                <div className="col-span-2 text-right text-slate-600">$250 USD</div>
                <div className="col-span-2 text-right text-slate-600">$1.000.000 COP</div>
              </div>

              {CORE_BONUSES.map((bonus) => (
                <div key={bonus.id} className="px-5 py-4 grid grid-cols-12 text-slate-700">
                  <div className="col-span-8 sm:col-span-9">{bonus.title}</div>
                  <div className="col-span-2 text-right text-slate-500">{formatUsd(bonus.valueUsd)}</div>
                  <div className="col-span-2 text-right text-slate-500">{formatCop(bonus.valueCop)}</div>
                </div>
              ))}

              {FAST_ACTION_BONUSES.map((bBonus) => (
                <div key={bBonus.id} className="px-5 py-4 grid grid-cols-12 text-slate-700 bg-teal-50/10">
                  <div className="col-span-8 sm:col-span-9 font-bold text-brand-navy">
                    {bBonus.title}
                  </div>
                  <div className="col-span-2 text-right text-slate-500">{formatUsd(bBonus.valueUsd)}</div>
                  <div className="col-span-2 text-right text-slate-500">{formatCop(bBonus.valueCop)}</div>
                </div>
              ))}

              {/* Gross Sum Row */}
              <div className="px-5 py-5 bg-slate-100 grid grid-cols-12 font-mono text-xs sm:text-sm font-bold text-slate-600">
                <div className="col-span-8 sm:col-span-9 uppercase tracking-wider">Valor Real Consolidado del Pack</div>
                <div className="col-span-2 text-right line-through text-rose-500">{formatUsd(PRICING_MATH.totalValueUsd)}</div>
                <div className="col-span-2 text-right line-through text-rose-500">{formatCop(PRICING_MATH.totalValueCop)}</div>
              </div>

              {/* Real Value Reveal */}
              <div className="px-5 py-7 bg-brand-navy text-white grid grid-cols-12 items-center border-t-2 border-brand-teal">
                <div className="col-span-12 sm:col-span-6 space-y-1 text-center sm:text-left">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-brand-teal text-brand-navy font-mono font-black text-[10px] tracking-wide uppercase">
                    Oferta de Lanzamiento Única
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    Tu Acceso Completo Hoy
                  </h4>
                  <p className="text-teal-200 text-xs font-light">
                    Un único pago de por vida. Sin mensualidades ni cobros sorpresa.
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-6 text-center sm:text-right mt-4 sm:mt-0 space-y-1">
                  <div className="text-3xl sm:text-4xl font-display font-black text-brand-teal">
                    {formatUsd(PRICING_MATH.specialPriceUsd)} <span className="text-sm font-semibold text-slate-300 font-mono">/ {formatCop(PRICING_MATH.specialPriceCop)}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    *Equivalente a una fracción de una mentoría o sesión de terapia privada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. TIMELINE & CALENDAR SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Plan de Lanzamiento & Ejecución</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-brand-navy">
              Fechas de Ejecución del Programa
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Organiza tu tiempo para no perderte las transmisiones interactivas sincrónicas por Zoom.
            </p>
          </div>

          {/* Calendar List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-brand-navy flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg">
                    Encuentros Sincrónicos Online (19:00 COT)
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    6 encuentros en directo por Zoom para abordar el método preventivo y de comunicación familiar.
                  </p>
                </div>
              </div>
              <span className="inline-flex self-start sm:self-center items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-50 text-brand-navy border border-teal-100 shrink-0">
                Zona Horaria: Colombia / Ecuador / Perú (COT)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LIVE_CLASSES_DATES.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 text-slate-800 font-display font-bold text-xs flex flex-col items-center justify-center shrink-0 shadow-sm leading-tight">
                    <span className="text-[10px] text-slate-400 font-mono uppercase font-normal">{item.day}</span>
                    <span className="text-brand-navy font-black">{idx + 1}</span>
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-display font-bold text-brand-navy text-sm leading-tight">{item.theme}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.date} • {item.hour}</p>
                    <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-0.5">
                      <CheckCircle className="w-3 h-3" /> Grabación disponible en Hotmart
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap visual strip */}
          <div className="space-y-6 pt-6">
            <h3 className="font-display font-extrabold text-brand-navy text-xl text-center">Fases de la Estrategia "Método EDOS"</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { phase: "Fase 1", t: "Oferta Grand Slam", d: "6 - 17 Julio: Grabación de caja de herramientas y estructuración del equipo de Psicología y Medicina." },
                { phase: "Fase 2", t: "Campaña Captación", d: "20 - 31 Julio: Activación de redes y bienvenida en grupos de WhatsApp VIP." },
                { phase: "Fase 3", t: "Lanzamiento", d: "3 - 7 Agosto: Clase magistral gratuita y apertura limitada de 15 cupos especiales." },
                { phase: "Fase 4", t: "Ejecución Curso", d: "10 - 21 Agosto: 6 encuentros en vivo y entrega de certificados académicos." }
              ].map((f, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
                  <span className="text-[10px] font-mono font-bold text-brand-teal uppercase block">{f.phase}</span>
                  <h4 className="font-display font-bold text-brand-navy text-sm">{f.t}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 15. TESTIMONIALS & SOCIAL PROOF */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Resultados en los Hogares</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-brand-navy">
              Padres que Transformaron la Comunicación
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Conoce los testimonios de padres de familia reales que decidieron educar desde la asertividad y la ciencia médica.
            </p>
          </div>

          {/* Main Text Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-teal fill-brand-teal" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>
                <div>
                  <div className="h-px bg-slate-100/60 my-3" />
                  <p className="font-display font-bold text-brand-navy text-xs sm:text-sm">
                    {test.name}
                  </p>
                  <p className="text-slate-400 text-[10px] font-mono">
                    {test.role}
                  </p>
                  <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-teal-50 text-teal-800 border border-teal-100">
                    {test.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Screenshots Mock Area */}
          <div className="bg-teal-50/30 rounded-3xl p-6 sm:p-8 border border-teal-100/60 space-y-6">
            <h3 className="font-display font-bold text-center text-brand-navy text-base sm:text-lg">
              Comunidad de Apoyo VIP: Capturas Reales de Whatsapp de EDOS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SCREENSHOT_TESTIMONIALS.map((scr) => (
                <div key={scr.id} className="bg-white p-5 rounded-xl border border-teal-100/40 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold font-display text-xs text-brand-navy">{scr.author}</span>
                    <span className="inline-flex px-2 py-0.5 rounded-full text-[9px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {scr.channel}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-light italic">
                    "{scr.message}"
                  </p>
                  <div className="flex items-center gap-1 text-[9px] text-slate-400 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Verificado por el Equipo EDOS
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 16. MENTOR ACADEMIC PROFILE */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
            
            {/* Specific mentor image requested by user */}
            <div className="w-44 h-56 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-teal-100 shadow-lg shrink-0">
              <img 
                src="/src/assets/images/tatiana_new_profile_1783089941893.jpg" 
                alt="Magíster Tatiana Domínguez Valencia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-4 text-center md:text-left">
              <span className="text-xs font-bold text-brand-coral uppercase tracking-widest font-mono">Conoce a tu mentora</span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy tracking-tight leading-tight">
                Mgt. Tatiana Domínguez Valencia
              </h2>
              <p className="text-[11px] font-mono text-slate-400">
                Trabajadora Social Clínica • Magíster en Salud Sexual • Especialista en Convivencia y Educación Sexual Integral
              </p>

              <p className="text-slate-600 text-sm leading-relaxed font-light">
                La Magíster Tatiana Domínguez Valencia es una destacada profesional de la salud sexual y la intervención clínica, con amplia trayectoria académica y pedagógica guiando a padres de familia en el diseño de un canal afectivo y científico con sus hijos.
              </p>
              
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                A través del programa <strong>"Educarte"</strong> y la metodología <strong>Método EDOS</strong>, lidera un equipo interdisciplinar que une psicología, medicina y trabajo social para blindar el entorno protector del menor y garantizar que el factor económico no limite la protección familiar.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-500 justify-center md:justify-start">
                <span className="flex items-center gap-1"><UserCheck className="w-4 h-4 text-teal-700" /> Magíster en Salud Sexual</span>
                <span className="flex items-center gap-1"><UserCheck className="w-4 h-4 text-teal-700" /> Trabajadora Social</span>
                <span className="flex items-center gap-1"><UserCheck className="w-4 h-4 text-teal-700" /> Especialista en ESI</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 17. FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest font-mono">Preguntas Frecuentes</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy tracking-tight">
              Preguntas sin Rodeos
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Resolvemos tus inquietudes de forma transparente para que inicies tu proceso educativo con total tranquilidad.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;

              return (
                <div 
                  key={idx}
                  className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/30 hover:bg-slate-50/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-bold text-brand-navy text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-coral" : ""}`} />
                  </button>

                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[500px] border-t border-slate-100/60 bg-white" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center p-6 bg-teal-50/30 rounded-2xl border border-teal-100/60 max-w-xl mx-auto space-y-3">
            <p className="text-xs text-slate-600 font-medium">
              ¿Tienes alguna otra duda? Chatea directamente con el equipo de soporte de la Mgt. Tatiana Domínguez en WhatsApp.
            </p>
            <a
              href={PRICING_MATH.whatsappContactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Consultar por WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* 18. FINAL CTA SECTION (Strong emotional and practical close) */}
      <section className="py-20 bg-gradient-to-b from-brand-navy to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <div className="flex items-center justify-center gap-1.5 text-brand-teal">
            <Flame className="w-6 h-6 animate-bounce" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-teal">Oportunidad Única</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Protege el futuro de tus hijos hoy. Toma la decisión preventiva ahora.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            La desinformación digital de tus hijos y los riesgos asociados no se solucionan solos. Comienza su blindaje educativo y asertivo hoy, accede a los 6 encuentros interactivos sincrónicos y blinda su proyecto de vida.
          </p>

          <div className="p-6 bg-slate-900 rounded-3xl border border-teal-950/60 shadow-2xl max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="text-left space-y-1">
              <span className="text-[10px] font-bold text-brand-navy bg-brand-teal px-2 py-0.5 rounded font-mono uppercase">Lanzamiento Especial</span>
              <div className="text-2xl sm:text-3xl font-display font-black text-white">
                $100 USD <span className="text-sm font-semibold text-slate-400 font-mono">/ 335.000 COP</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-snug">
                Un único pago de por vida. Sin mensualidades ni cobros recurrentes a través de Hotmart.
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={PRICING_MATH.hotmartPaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-teal hover:bg-brand-teal-dark text-brand-navy font-black py-3.5 px-6 rounded-xl shadow-md transition-all text-sm uppercase tracking-wide cursor-pointer"
              >
                <span>MATRICULARME EN HOTMART</span>
                <ArrowRight className="w-4 h-4 text-brand-navy" />
              </a>
              <p className="text-[9px] text-slate-400 font-mono text-center">
                🔒 Pago 100% seguro y encriptado por Hotmart
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-center gap-6 text-xs text-slate-400 flex-wrap">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Garantía de 7 días</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Acceso permanente</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Certificado Académico</span>
          </div>
        </div>
      </section>

      {/* 19. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-12 px-4 border-t border-teal-950 text-center space-y-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <Bookmark className="w-5 h-5 text-brand-teal" />
            <span className="font-display font-extrabold text-white text-base ml-1">MÉTODO EDOS - EDUCARTE</span>
          </div>
          
          <p className="text-[10px] font-light max-w-md text-slate-500 text-center sm:text-right leading-relaxed">
            Este sitio web no forma parte de Facebook ni de Facebook Inc. Tampoco está respaldado por Facebook en modo alguno. Facebook es una marca comercial de Facebook, Inc.
          </p>
        </div>

        <div className="max-w-5xl mx-auto h-px bg-teal-950/40 my-4" />

        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-slate-500">
          <p>© 2026 EDOS Educación y Orientación Familiar. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Soporte Técnico</a>
          </div>
        </div>
      </footer>

      {/* 20. STICKY CTA ON MOBILE / DESKTOP SIDE (Converts on scrolls) */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 w-full bg-slate-900/95 backdrop-blur-md py-3 px-4 shadow-2xl border-t border-teal-950 z-40 flex items-center justify-between gap-4 md:px-10 animate-fade-in text-white">
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Inscripción al Programa</p>
            <p className="text-sm font-black text-brand-teal mt-1">
              PROGRAMA SINCRÓNICO MÉTODO EDOS <span className="text-white font-mono font-bold ml-1">$100 USD ({formatCop(PRICING_MATH.specialPriceCop)})</span>
            </p>
          </div>
          <div className="flex-1 sm:flex-none flex items-center gap-2 w-full sm:w-auto">
            <a
              href="#diagnostico-interactivo"
              className="flex-1 sm:flex-none text-center px-4 py-2.5 border border-teal-950 text-slate-300 hover:text-white font-semibold text-xs rounded-xl transition-all"
            >
              Autodiagnóstico
            </a>
            <a
              href={PRICING_MATH.hotmartPaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center bg-brand-teal text-brand-navy font-bold px-5 py-2.5 rounded-xl shadow-md text-xs tracking-wider uppercase transition-all"
            >
              Matricularme
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
