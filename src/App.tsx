import { useState, useEffect } from "react";
import { 
  COURSE_MODULES, 
  CORE_BONUSES, 
  FAST_ACTION_BONUSES, 
  PRICING_MATH, 
  TIMELINE_PHASES, 
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
  BookOpen, 
  Check, 
  ChevronDown, 
  HelpCircle, 
  Lock, 
  Tv, 
  FileText, 
  Smartphone, 
  UserCheck, 
  Star 
} from "lucide-react";

export default function App() {
  // Local state for FAQs expanding/collapsing
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  
  // State for visual urgency countdown timer (Hotmart/Launch style)
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });
  
  // State for sticky mobile CTA banner
  const [showStickyCta, setShowStickyCta] = useState(false);

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
          // Reset to mock 12 hours once expired
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

  // Safe formatting helpers for currency
  const formatUsd = (val: number) => `$${val} USD`;
  const formatCop = (val: number) => `${val.toLocaleString("es-CO")} COP`;

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans">
      
      {/* 1. TOP ANNOUNCEMENT BAR (Urgency and Scarcity) */}
      <div className="bg-gradient-to-r from-brand-navy to-slate-900 text-white text-xs sm:text-sm font-medium py-2.5 px-4 text-center border-b border-rose-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-rose-500/25 text-rose-300 font-bold px-2 py-0.5 rounded-md border border-rose-500/40 uppercase tracking-wider text-[10px]">
            <Flame className="w-3.5 h-3.5 fill-rose-300 animate-pulse" /> Oferta de Lanzamiento
          </span>
          <p className="text-slate-200">
            Ahorra un <span className="text-emerald-400 font-bold">89%</span>. Solo <strong>50 cupos VIP</strong> con acceso a mentoría directa en vivo.
          </p>
          <div className="flex items-center gap-1 font-mono text-rose-400 font-bold mt-1 sm:mt-0 bg-slate-950/40 px-2 py-0.5 rounded border border-slate-800">
            <span>{String(timeLeft.hours).padStart(2, "0")}h</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <header className="relative bg-gradient-to-b from-rose-50/40 via-white to-slate-50/20 pt-12 pb-20 sm:pb-28 overflow-hidden">
        {/* Soft background glow circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-teal-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          {/* Logo / Sub-brand */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white/80 rounded-full shadow-sm border border-rose-100">
              {/* Custom visual EDOS brain icon representation */}
              <div className="flex shrink-0">
                <span className="w-2.5 h-5 rounded-l-full bg-brand-coral" />
                <span className="w-2.5 h-5 rounded-r-full bg-brand-teal" />
              </div>
              <span className="font-display font-black text-brand-navy tracking-tight text-sm">EDOS</span>
              <span className="h-3 w-px bg-slate-200" />
              <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-wider">Educación y Orientación</span>
            </div>
          </div>

          {/* Core Program Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 rounded-full border border-rose-100 text-rose-700 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-brand-coral" /> PLAN MAESTRO: PROGRAMA SINCRÓNICO
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-brand-navy max-w-4xl mx-auto leading-[1.1] sm:leading-[1.05]">
            Aprende a abordar la <span className="text-brand-coral relative">sexualidad de tus hijos<span className="absolute left-0 bottom-1 w-full h-1.5 bg-brand-coral/10 rounded-full" /></span> adolescentes sin tabúes, pánico ni silencios
          </h1>

          {/* Subheadline (Resonant promise) */}
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            6 encuentros interactivos en vivo con especialistas en <strong className="font-medium text-brand-navy">Trabajo Social, Psicología y Medicina</strong>. Prepárate hoy para sanar el vínculo familiar y evitar que la pornografía o el internet sean los educadores de tu hogar.
          </p>

          {/* Live dates & format capsule */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto bg-white p-4 rounded-2xl shadow-sm border border-slate-100/80">
            <div className="flex items-center justify-center gap-2.5 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
              <Calendar className="w-5 h-5 text-brand-coral shrink-0" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clases En Vivo</p>
                <p className="text-xs sm:text-sm font-semibold text-brand-navy">11 al 27 de Agosto</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
              <Clock className="w-5 h-5 text-brand-teal shrink-0" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duración Total</p>
                <p className="text-xs sm:text-sm font-semibold text-brand-navy">12 Horas de Formación</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 py-1.5">
              <Users className="w-5 h-5 text-brand-navy shrink-0" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Metodología</p>
                <p className="text-xs sm:text-sm font-semibold text-brand-navy">Sincrónica & Práctica</p>
              </div>
            </div>
          </div>

          {/* CTA Group */}
          <div className="pt-4 space-y-3 max-w-md mx-auto">
            <a
              href="#oferta-exclusiva"
              className="group relative w-full inline-flex items-center justify-center gap-3 bg-brand-coral hover:bg-brand-coral-dark text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer text-center text-sm sm:text-base tracking-wide"
            >
              <span>¡SÍ, QUIERO RESERVAR MI CUPO HOY!</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-[11px] text-slate-400 font-mono flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Pago 100% seguro a través de Hotmart • Garantía de 7 días
            </p>
          </div>

          {/* Tatiana Invitation Video Placeholder Area */}
          <div className="pt-8 max-w-3xl mx-auto">
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-brand-navy p-1 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/src/assets/images/program_mockup_1783088518714.jpg')" }} />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Tv className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-base sm:text-lg">
                    [VIDEO INVITACIÓN] Conoce a Tatiana Domínguez Valencia
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mt-1">
                    Mira un resumen de 2 minutos sobre cómo el Método EDOS transformará la comunicación afectiva de tu familia.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-white/10 text-rose-300 border border-white/10">
                  Video Oficial EDOS • 2:15 Min
                </span>
              </div>
            </div>
          </div>

          {/* Credibility Strip */}
          <div className="pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 font-mono tracking-wider uppercase">Un Programa Respaldado Por Autoridad Científica y Psicosocial</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-500 text-xs font-semibold">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Trabajo Social Clínico</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Enfoque Médico Científico</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Mediación Parental Afectiva</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-teal" /> Respaldo Hotmart Garantizado</span>
            </div>
          </div>
        </div>
      </header>


      {/* 3. WHO THIS IS FOR SECTION (Skimmable & Targeted) */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">Población Objetivo</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-brand-navy">
              ¿Para quién es vital este Plan Maestro?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Identifica si eres parte de los adultos responsables que no están dispuestos a dejar la educación de sus adolescentes al azar o en manos de redes sociales de internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Group 1: Parents */}
            <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100/60 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg">Padres de Familia & Cuidadores</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Que sienten pánico al ver crecer a sus hijos y temen no saber qué responder ante temas espinosos como la masturbación, el noviazgo, el despertar del placer o los riesgos digitales.
                </p>
                <span className="inline-block text-xs font-mono text-rose-600 bg-rose-50 px-2.5 py-1 rounded">Crianza Afectiva</span>
              </div>
            </div>

            {/* Group 2: Educators */}
            <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100/60 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg">Docentes, Rectores & Profesionales</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Profesores y directores escolares que necesitan herramientas técnicas e interdisciplinarias validadas científicamente para orientar a los alumnos en el aula de clases bajo un marco asertivo.
                </p>
                <span className="inline-block text-xs font-mono text-teal-600 bg-teal-50 px-2.5 py-1 rounded">Capacitación Técnica ESI</span>
              </div>
            </div>

            {/* Group 3: Shame & Taboo */}
            <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100/60 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg">Adultos paralizados por el Tabú o la Vergüenza</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Familias criadas bajo represión o silencio que desean de todo corazón cortar esa cadena histórica y brindar a sus jóvenes una guía segura, honesta y respetuosa libre de culpa.
                </p>
                <span className="inline-block text-xs font-mono text-purple-600 bg-purple-50 px-2.5 py-1 rounded">Ruptura del Tabú</span>
              </div>
            </div>

            {/* Group 4: Digital Prevention */}
            <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100/60 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg">Familias en Alerta por Riesgos en Internet</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Padres que quieren proteger a sus hijos frente al consumo desmedido de pornografía, el ciberacoso (grooming), el sexting presionado y las influencias nocivas de creadores de contenido sin ética.
                </p>
                <span className="inline-block text-xs font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded">Protección Digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. THE PROBLEM / PAIN SECTION (Emotionally charged but professional) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background graphics */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest font-mono">La cruda realidad allá afuera</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white">
              Si tú no educas a tu hijo sobre sexualidad... <br className="hidden sm:inline" />
              <span className="text-rose-400">¿Quién crees que lo está haciendo por ti?</span>
            </h2>
            <div className="h-1.5 w-24 bg-rose-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-rose-400 font-display text-4xl font-bold">85%</div>
              <h3 className="font-display font-semibold text-white text-base">La Pornografía como Guía</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                De los adolescentes acceden a contenido pornográfico explícito en internet antes de los 13 años. Aprenden sobre intimidad mediante la violencia y la distorsión, ante el silencio de los hogares.
              </p>
            </div>

            <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-rose-400 font-display text-4xl font-bold">9 de 10</div>
              <h3 className="font-display font-semibold text-white text-base">Temor a Preguntar en Casa</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Nueve de cada diez jóvenes afirman que prefieren buscar respuestas de sexo en Google o con amigos antes que con sus padres, por terror absoluto a ser juzgados o castigados.
              </p>
            </div>

            <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-rose-400 font-display text-4xl font-bold">TikTok</div>
              <h3 className="font-display font-semibold text-white text-base">Consejos y Mitos de Redes</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                El algoritmo de redes premia el mito y los métodos anticonceptivos caseros inservibles. La falta de base médica genera infecciones, embarazos precoces y vergüenza para consultar a un doctor.
              </p>
            </div>
          </div>

          <blockquote className="bg-slate-800/40 border-l-4 border-rose-500 p-6 rounded-r-2xl text-left max-w-3xl mx-auto italic">
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              "El pánico no previene, la prohibición solo genera complicidad con el peligro. La única protección real para un adolescente es un canal de diálogo asertivo y un adulto que sepa qué decir sin asustarse."
            </p>
            <cite className="block text-xs font-mono text-rose-400 mt-2 font-semibold">
              — Magíster Tatiana Domínguez, Fundadora de EDOS
            </cite>
          </blockquote>
        </div>
      </section>


      {/* 5. THE TRANSFORMATION / BIG PROMISE */}
      <section className="py-20 bg-rose-50/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="inline-block text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">La Gran Promesa del Método EDOS</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight leading-tight">
                De la angustia paralizante a la complicidad y el diálogo seguro
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                El Plan Maestro es un entrenamiento vivencial diseñado para erradicar el miedo del adulto y la timidez del joven. Al finalizar este programa, habrás conquistado la claridad mental que necesitas para proteger a tus seres queridos.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-navy text-sm">Menos Temor, Más Respuestas</h4>
                    <p className="text-slate-500 text-xs">Aprenderás exactamente cómo reaccionar ante dudas difíciles de sexo sin titubear.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-navy text-sm">Lenguaje Práctico y Cercano</h4>
                    <p className="text-slate-500 text-xs">Dominarás el vocabulario anatómico y preventivo correcto despojado de morbo.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-navy text-sm">Decisiones y Autocuidado</h4>
                    <p className="text-slate-500 text-xs">Prepararás a tus hijos para blindar su proyecto de vida ante cualquier crisis relacional.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-md space-y-6">
                <h3 className="font-display font-bold text-brand-navy text-lg flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-brand-coral" /> La ruta de transformación en vivo
                </h3>
                
                <div className="space-y-4 font-mono text-xs text-slate-500">
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex justify-between gap-4">
                    <div>
                      <p className="font-bold text-brand-navy">PASO 1: Sanación y Cuerpo</p>
                      <p className="text-[11px] mt-0.5">Sanar la relación con el cuerpo y desmontar la culpa anatómica.</p>
                    </div>
                    <span className="text-[10px] font-bold text-rose-500 uppercase self-center bg-rose-50 px-2 py-0.5 rounded shrink-0">Semana 1</span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex justify-between gap-4">
                    <div>
                      <p className="font-bold text-brand-navy">PASO 2: Límites y Consentimiento</p>
                      <p className="text-[11px] mt-0.5">Construir el Semáforo de Consentimiento físico y digital.</p>
                    </div>
                    <span className="text-[10px] font-bold text-teal-500 uppercase self-center bg-teal-50 px-2 py-0.5 rounded shrink-0">Semana 2</span>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex justify-between gap-4">
                    <div>
                      <p className="font-bold text-brand-navy">PASO 3: Proyecto de Vida Blindado</p>
                      <p className="text-[11px] mt-0.5">Unir anticoncepción real con las metas del futuro del joven.</p>
                    </div>
                    <span className="text-[10px] font-bold text-brand-navy uppercase self-center bg-slate-100 px-2 py-0.5 rounded shrink-0">Semana 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 6. PROGRAM FORMAT SECTION (Scientific Basis) */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-coral uppercase tracking-widest font-mono">Metodología Académica</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-brand-navy">
              Un Modelo Interdisciplinario de Alto Impacto
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Combinamos las tres ramas fundamentales de la orientación familiar para garantizar la solidez científica de cada sesión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50/50 border border-slate-100 rounded-2xl text-center space-y-3">
              <span className="inline-flex px-3 py-1 bg-rose-50 text-rose-600 rounded-full font-mono text-xs font-bold">Rama Psicosocial</span>
              <h3 className="font-display font-bold text-slate-950 text-base">Trabajo Social</h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Enfoque de restitución de derechos de niños y adolescentes. Trabaja dinámicas familiares y entornos protectores frente al abuso.
              </p>
            </div>

            <div className="p-6 bg-slate-50/50 border border-slate-100 rounded-2xl text-center space-y-3">
              <span className="inline-flex px-3 py-1 bg-teal-50 text-teal-600 rounded-full font-mono text-xs font-bold">Rama de Comportamiento</span>
              <h3 className="font-display font-bold text-slate-950 text-base">Psicología Afectiva</h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Aborda el desarrollo cognitivo, autoconcepto, asertividad en las relaciones, pánico a la masturbación y mediación parental afectiva.
              </p>
            </div>

            <div className="p-6 bg-slate-50/50 border border-slate-100 rounded-2xl text-center space-y-3">
              <span className="inline-flex px-3 py-1 bg-brand-navy/5 text-brand-navy rounded-full font-mono text-xs font-bold">Rama Médica Preventiva</span>
              <h3 className="font-display font-bold text-slate-950 text-base">Medicina General</h3>
              <p className="text-slate-500 text-xs sm:text-sm">
                Brinda la información anticonceptiva real sobre ITS/VIH y derriba los peligrosos mitos propagados en TikTok por desinformación.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 7. DETAILED MODULES / CURRICULUM SECTION (Elegant Accordion) */}
      <section className="py-20 bg-slate-50/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">Plan de Estudios Oficial</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-brand-navy">
              Estructura Curricular del Plan Maestro
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Explora las temáticas científicas del Método EDOS. Haz clic en cada módulo para desplegar las clases, los dolores que manejamos y los recursos prácticos descargables.
            </p>
          </div>

          <Accordion />
          
          <div className="mt-8 text-center p-4 bg-white rounded-xl border border-slate-100 text-xs text-slate-500">
            Cada módulo ha sido estructurado para resolver de forma directa las dudas de crianza, entregando guías que se quedan contigo para siempre en Hotmart.
          </div>
        </div>
      </section>


      {/* 8. INTERACTIVE MID-PAGE SURVEY (MANDATORY Engagement component) */}
      <section className="py-20 bg-gradient-to-b from-rose-50/20 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold text-brand-coral uppercase tracking-widest font-mono">Interactúa Con Nosotros</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-brand-navy">
              ¿Quieres saber qué tan preparado estás?
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Responde este breve test de autodiagnóstico. Al finalizar, nuestro sistema analizará tu caso y te dará una recomendación curricular a la medida.
            </p>
          </div>

          <Quiz />
        </div>
      </section>


      {/* 9. THE OFFER STACK (Irresistible value representation) */}
      <section id="oferta-exclusiva" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 relative z-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Todo Incluido en tu Inscripción
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              La Oferta Inmejorable: <br />
              El Stack del Plan Maestro "Educarte"
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Consigue el acompañamiento en vivo y llévate gratis los 7 bonos de blindaje de alta transformación de por vida.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-stretch">
            {/* Left: Product Mockup and Description */}
            <div className="lg:w-5/12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-1 rounded-3xl bg-slate-800 border border-slate-700 overflow-hidden shadow-2xl">
                  {/* Visual mockup from generate_image */}
                  <img 
                    src="/src/assets/images/program_mockup_1783088518714.jpg" 
                    alt="Método EDOS Program Mockup"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover rounded-2xl hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">El Vehículo Principal</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-2">
                    <strong>"Educarte Live"</strong>: 6 Encuentros en Vivo de Alta Transformación. Aprende junto a profesionales a sanar el vínculo familiar y actuar con precisión psicosocial y clínica.
                  </p>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mt-3 pt-3 border-t border-slate-800">
                    <span>Valor Real de Mercado:</span>
                    <span className="line-through text-rose-400 font-semibold">{formatUsd(250)} (~{formatCop(1000000)})</span>
                  </div>
                </div>
              </div>

              {/* Security indicators */}
              <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800 space-y-2">
                <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Matrícula 100% Protegida
                </p>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Hotmart encriptará todos tus datos financieros de forma estricta. Cuentas con 7 días enteros para evaluar las clases. Si no es lo que esperabas, solicitas un reembolso y te devolvemos el dinero sin hacer preguntas.
                </p>
              </div>
            </div>

            {/* Right: Premium Bonuses list */}
            <div className="lg:w-7/12 space-y-4 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar space-y-4 bg-slate-950/30 p-4 sm:p-6 rounded-3xl border border-slate-800/80">
              <h4 className="font-display font-bold text-slate-300 text-xs tracking-wider uppercase mb-2">Los 7 Bonos de Regalo Potenciados:</h4>
              
              {CORE_BONUSES.map((bonus, idx) => (
                <div key={bonus.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 font-display font-bold text-sm flex items-center justify-center shrink-0">
                    B{idx + 1}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h5 className="font-display font-bold text-white text-sm sm:text-base leading-tight">
                        {bonus.title}
                      </h5>
                      <span className="text-[10px] font-bold font-mono text-emerald-400 uppercase tracking-wider">Hoy: GRATIS</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {bonus.hook}
                    </p>
                    <div className="text-[10px] font-mono text-slate-500 text-right">
                      Valor: <span className="line-through">{formatUsd(bonus.valueUsd)} ({formatCop(bonus.valueCop)})</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Fast Action bonuses divider */}
              <div className="py-2 border-y border-slate-800/60 my-6">
                <p className="text-xs font-bold text-amber-400 font-mono tracking-widest uppercase flex items-center gap-1.5 justify-center">
                  <Flame className="w-4 h-4" /> BONUS DE ACCIÓN RÁPIDA (ESCASEZ AGUDA)
                </p>
              </div>

              {FAST_ACTION_BONUSES.map((bBonus, idx) => (
                <div key={bBonus.id} className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-rose-950/10 border border-amber-500/30 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-display font-bold text-sm flex items-center justify-center shrink-0">
                    VIP
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <h5 className="font-display font-bold text-white text-sm sm:text-base leading-tight flex items-center gap-1">
                        {bBonus.title}
                      </h5>
                      <span className="text-[10px] font-bold font-mono text-amber-400 uppercase tracking-wider">
                        {idx === 0 ? "Primeros 50" : "¡GRATIS!"}
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


      {/* 10. VALUE STACK MATH SECTION (Visually strong comparison) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">Transparencia Total</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight">
              La Matemática Detrás de tu Inscripción
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Si fueras a comprar cada uno de los elementos de este programa por separado, este sería el valor real comercial de mercado:
            </p>
          </div>

          {/* Table Design */}
          <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-4 border-b border-slate-100 grid grid-cols-12 text-xs font-bold font-mono uppercase text-slate-500 tracking-wider">
              <div className="col-span-8 sm:col-span-9">Producto / Entregable</div>
              <div className="col-span-2 text-right">Valor USD</div>
              <div className="col-span-2 text-right">Valor COP</div>
            </div>

            <div className="divide-y divide-slate-50 font-medium text-xs sm:text-sm">
              <div className="px-5 py-4 grid grid-cols-12 text-slate-800">
                <div className="col-span-8 sm:col-span-9 font-display font-bold text-brand-navy">
                  6 Encuentros en Vivo ("Educarte Live")
                </div>
                <div className="col-span-2 text-right text-slate-600">$250 USD</div>
                <div className="col-span-2 text-right text-slate-600">$1.000.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700">
                <div className="col-span-8 sm:col-span-9">Bono 1: Videoteca VIP de Respuestas Rápidas</div>
                <div className="col-span-2 text-right text-slate-500">$85 USD</div>
                <div className="col-span-2 text-right text-slate-500">$345.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700">
                <div className="col-span-8 sm:col-span-9">Bono 2: Certificado Académico Oficial</div>
                <div className="col-span-2 text-right text-slate-500">$42 USD</div>
                <div className="col-span-2 text-right text-slate-500">$170.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700">
                <div className="col-span-8 sm:col-span-9">Bono 3: Cuaderno de Copiado de Plantillas</div>
                <div className="col-span-2 text-right text-slate-500">$57 USD</div>
                <div className="col-span-2 text-right text-slate-500">$230.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700">
                <div className="col-span-8 sm:col-span-9">Bono 4: Escudo Digital de Control Parental</div>
                <div className="col-span-2 text-right text-slate-500">$49 USD</div>
                <div className="col-span-2 text-right text-slate-500">$200.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700">
                <div className="col-span-8 sm:col-span-9">Bono 5: Manual de Primeros Auxilios Emocionales</div>
                <div className="col-span-2 text-right text-slate-500">$35 USD</div>
                <div className="col-span-2 text-right text-slate-500">$140.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700">
                <div className="col-span-8 sm:col-span-9">Bono 6: Planificador del Proyecto de Vida</div>
                <div className="col-span-2 text-right text-slate-500">$65 USD</div>
                <div className="col-span-2 text-right text-slate-500">$260.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700">
                <div className="col-span-8 sm:col-span-9">Bono 7: Biblioteca Digital de Libros ESI</div>
                <div className="col-span-2 text-right text-slate-500">$75 USD</div>
                <div className="col-span-2 text-right text-slate-500">$300.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700 bg-amber-500/5">
                <div className="col-span-8 sm:col-span-9 font-bold text-amber-800">
                  Bono VIP: Mentoría Grupal en Zoom (Primeros 50)
                </div>
                <div className="col-span-2 text-right text-slate-500">$150 USD</div>
                <div className="col-span-2 text-right text-slate-500">$600.000 COP</div>
              </div>

              <div className="px-5 py-4 grid grid-cols-12 text-slate-700 bg-amber-500/5">
                <div className="col-span-8 sm:col-span-9 font-bold text-amber-800">
                  Curso Completo: Educación Sexual Niñez
                </div>
                <div className="col-span-2 text-right text-slate-500">$97 USD</div>
                <div className="col-span-2 text-right text-slate-500">$400.000 COP</div>
              </div>

              {/* Gross Sum Row */}
              <div className="px-5 py-4.5 bg-slate-100 grid grid-cols-12 font-mono text-xs sm:text-sm font-bold text-slate-600">
                <div className="col-span-8 sm:col-span-9 uppercase tracking-wider">Valor Real Consolidado</div>
                <div className="col-span-2 text-right line-through text-rose-500">{formatUsd(PRICING_MATH.totalValueUsd)}</div>
                <div className="col-span-2 text-right line-through text-rose-500">{formatCop(PRICING_MATH.totalValueCop)}</div>
              </div>

              {/* Real Value Reveal */}
              <div className="px-5 py-7 bg-emerald-50 grid grid-cols-12 items-center border-t-2 border-emerald-500">
                <div className="col-span-12 sm:col-span-6 space-y-1 text-center sm:text-left">
                  <span className="inline-flex px-2 py-0.5 rounded-full bg-emerald-500 text-white font-mono font-bold text-[10px] tracking-wide uppercase">
                    Precio de Lanzamiento Único
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-emerald-950">
                    Tu Oferta Grand Slam
                  </h4>
                  <p className="text-emerald-800 text-xs font-light">
                    Un solo pago. Acceso garantizado de por vida.
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-6 text-center sm:text-right mt-4 sm:mt-0 space-y-1">
                  <div className="text-3xl sm:text-4xl font-display font-black text-emerald-950">
                    {formatUsd(PRICING_MATH.specialPriceUsd)} <span className="text-sm font-semibold text-emerald-700 font-mono">/ {formatCop(PRICING_MATH.specialPriceCop)}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">
                    *Equivalente a una fracción de una sola consulta privada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 11. TIMELINE & CALENDAR SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-coral uppercase tracking-widest font-mono">Hoja de Ruta de Lanzamiento</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-brand-navy">
              Fechas de Ejecución & Clases en Vivo
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Conoce nuestro calendario técnico y programa familiar para que agendes cada encuentro interactivo sin falta.
            </p>
          </div>

          {/* Timeline Phases */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {TIMELINE_PHASES.map((phase, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100/60 shadow-sm relative space-y-4">
                <div className="absolute -top-3.5 left-6 bg-brand-navy text-white text-xs font-mono font-bold px-3 py-1 rounded-full border-2 border-white shadow-sm">
                  {phase.dates}
                </div>
                
                <div className="pt-2">
                  <span className="text-[10px] font-mono font-bold text-brand-coral uppercase tracking-widest">
                    {phase.phaseName}
                  </span>
                  <h3 className="font-display font-bold text-brand-navy text-sm sm:text-base mt-0.5">
                    {phase.title}
                  </h3>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="space-y-2 text-xs">
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Tareas:</strong> {phase.tasks}
                  </p>
                  <p className="text-slate-500 font-light">
                    <strong>Acompaña:</strong> {phase.team}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium bg-teal-50 text-teal-700 px-2 py-0.5 rounded border border-teal-100/60">
                    <Check className="w-3 h-3 text-teal-500" /> {phase.technicalDeliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Classes Schedule Calendar list */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-navy text-base sm:text-lg">
                    Calendario Oficial de Encuentros ESI (19:00 COT)
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    6 clases en vivo dictadas de forma sincrónica para todo el continente americano.
                  </p>
                </div>
              </div>
              <span className="inline-flex self-start sm:self-center items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-rose-50 text-rose-700 border border-rose-100 shrink-0">
                Zona Horaria: Colombia / Ecuador / Perú (COT)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LIVE_CLASSES_DATES.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100/80 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-100 text-slate-800 font-display font-bold text-xs flex flex-col items-center justify-center shrink-0 shadow-sm leading-tight">
                    <span className="text-[10px] text-slate-400 font-mono uppercase font-normal">{item.day}</span>
                    <span className="text-brand-navy font-black">{idx + 1}</span>
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-display font-bold text-brand-navy text-sm leading-tight">{item.theme}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.date} • {item.hour}</p>
                    <span className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-0.5">
                      <CheckCircle className="w-3 h-3" /> Grabación Disponible
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 12. TESTIMONIALS & SOCIAL PROOF SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">Resultados en los Hogares</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-brand-navy">
              Respaldado por Padres & Profesionales de la Salud
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Conoce el testimonio honesto de familias que decidieron romper el círculo de la timidez y el tabú en toda Latinoamérica.
            </p>
          </div>

          {/* Main Text Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>
                <div>
                  <div className="h-px bg-slate-100 my-3" />
                  <p className="font-display font-bold text-brand-navy text-xs sm:text-sm">
                    {test.name}
                  </p>
                  <p className="text-slate-400 text-[10px] font-mono">
                    {test.role}
                  </p>
                  <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-100">
                    {test.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Screenshots Mock Area */}
          <div className="bg-rose-50/20 rounded-3xl p-6 sm:p-8 border border-rose-100/60 space-y-6">
            <h3 className="font-display font-bold text-center text-brand-navy text-base sm:text-lg">
              Evidencia Real: Capturas de Pantalla de la Comunidad VIP de EDOS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SCREENSHOT_TESTIMONIALS.map((scr) => (
                <div key={scr.id} className="bg-white p-4.5 rounded-xl border border-rose-100/40 shadow-sm space-y-3">
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


      {/* 13. MENTOR PROFILE SECTION (Tatiana Domínguez Valencia) */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
            {/* Left: Beautiful generated portrait */}
            <div className="w-48 h-64 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-rose-100 shadow-lg shrink-0">
              <img 
                src="/src/assets/images/tatiana_portrait_3_4_1783090264828.jpg" 
                alt="Magíster Tatiana Domínguez Valencia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right: Academic Bio */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-coral uppercase tracking-widest font-mono">Conoce a tu mentora</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-navy tracking-tight leading-tight">
                Tatiana Domínguez Valencia
              </h2>
              <p className="text-[11px] font-mono text-slate-400">
                Trabajadora Social • Magíster en Salud Sexual y Reproductiva • Autora Universitaria
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Tatiana Domínguez Valencia es Trabajadora Social, Magíster en Salud Sexual y Reproductiva, docente universitaria y autora. Con un amplio recorrido en la restitución de derechos de niños, niñas y adolescentes en el ICBF y organizaciones no gubernamentales, ha llevado sus investigaciones y conferencias sobre ESI a escenarios globales en toda la región. 
              </p>
              
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Como fundadora de <strong>EDOS</strong>, ha transformado la manera en que miles de padres y educadores abordan temas espinosos como la pornografía, el abuso, el consentimiento y los métodos anticonceptivos, uniendo la precisión médica con el acompañamiento psicosocial.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1"><UserCheck className="w-4 h-4 text-brand-teal" /> Fundadora de EDOS</span>
                <span className="flex items-center gap-1"><UserCheck className="w-4 h-4 text-brand-teal" /> Ex-Consultora ICBF</span>
                <span className="flex items-center gap-1"><UserCheck className="w-4 h-4 text-brand-teal" /> Especialista en ESI</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 14. FAQ SECTION (Overcome visual resistance) */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest font-mono">Preguntas Frecuentes</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-brand-navy tracking-tight">
              Preguntas sin Rodeos sobre el Programa
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Resolvemos tus inquietudes y temores de forma transparente para que realices tu matrícula con total paz mental.
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
                    className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
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
                    <div className="p-4.5 sm:p-5 text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center p-6 bg-rose-50/20 rounded-2xl border border-rose-100/40 max-w-xl mx-auto space-y-3">
            <p className="text-xs text-slate-600">
              ¿Tienes una duda adicional no contemplada en este listado? Chatea directamente con el equipo de Tatiana en WhatsApp y recibe asesoría prioritaria de admisiones.
            </p>
            <a
              href={PRICING_MATH.whatsappContactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Chatear en WhatsApp VIP
            </a>
          </div>
        </div>
      </section>


      {/* 15. FINAL CTA SECTION (Strong emotional and practical close) */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-rose-100/30 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <div className="flex items-center justify-center gap-1 mb-2 text-rose-500">
            <Flame className="w-6 h-6 animate-bounce" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-coral">Oportunidad Única</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-brand-navy tracking-tight leading-tight max-w-3xl mx-auto">
            No dejes el futuro de tu familia al azar. Toma el control hoy mismo.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Tu hijo crecerá mañana, y la desinformación en las redes nunca descansa. Prepárate con profesionales, llévate los 7 bonos exclusivos de por vida y blinda la comunicación afectiva de tu hogar.
          </p>

          <div className="p-6 bg-white rounded-3xl border border-rose-100/80 shadow-md max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="text-left space-y-1">
              <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">Precio de Lanzamiento Único</span>
              <div className="text-2xl sm:text-3xl font-display font-black text-brand-navy">
                $100 USD <span className="text-sm font-semibold text-slate-500 font-mono">/ 335.000 COP</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-snug">
                Un único pago. Sin mensualidades ni cargos ocultos en Hotmart.
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={PRICING_MATH.hotmartPaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-coral hover:bg-brand-coral-dark text-white font-bold py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer text-sm"
              >
                <span>MATRICULARME EN HOTMART</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[9px] text-slate-400 font-mono text-center">
                🔒 Checkout seguro y encriptado por Hotmart
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-center gap-8 text-xs text-slate-500">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Garantía de Satisfacción</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Acceso de por vida</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Certificado Incluido</span>
          </div>
        </div>
      </section>


      {/* 16. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-10 px-4 border-t border-slate-800 text-center space-y-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <div className="flex">
              <span className="w-2.5 h-5 rounded-l-full bg-brand-coral" />
              <span className="w-2.5 h-5 rounded-r-full bg-brand-teal" />
            </div>
            <span className="font-display font-bold text-white text-sm ml-1.5">MÉTODO EDOS</span>
          </div>
          
          <p className="text-[11px] font-light max-w-md text-slate-400 text-center sm:text-right leading-relaxed">
            Este sitio web no forma parte del sitio web de Facebook ni de Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
          </p>
        </div>

        <div className="max-w-5xl mx-auto h-px bg-slate-800/80 my-4" />

        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px]">
          <p>© 2026 EDOS Educación y Orientación Familiar. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Soporte Técnico</a>
          </div>
        </div>
      </footer>


      {/* 17. STICKY CTA ON MOBILE / DESKTOP SIDE (Converts on scrolls) */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md py-3 px-4 shadow-2xl border-t border-rose-100 z-40 flex items-center justify-between gap-4 md:px-10 animate-fade-in">
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Inscripción al Plan Maestro</p>
            <p className="text-sm font-black text-brand-navy mt-1">
              MÉTODO EDOS <span className="text-emerald-600 font-mono font-bold ml-1">$100 USD ({formatCop(PRICING_MATH.specialPriceCop)})</span>
            </p>
          </div>
          <div className="flex-1 sm:flex-none flex items-center gap-2 w-full sm:w-auto">
            <a
              href="#diagnostico-interactivo"
              className="flex-1 sm:flex-none text-center px-4 py-2.5 border border-slate-200 text-brand-navy hover:bg-slate-50 font-semibold text-xs rounded-xl transition-all"
            >
              Hacer Autoevaluación
            </a>
            <a
              href={PRICING_MATH.hotmartPaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none text-center bg-brand-coral hover:bg-brand-coral-dark text-white font-bold px-5 py-2.5 rounded-xl shadow-md text-xs tracking-wider uppercase transition-all"
            >
              Matricularme
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
