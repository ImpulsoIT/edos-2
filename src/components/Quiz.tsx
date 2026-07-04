import { useState, FormEvent } from "react";
import { SURVEY_QUESTIONS, SURVEY_QUESTIONS as questions, PRICING_MATH } from "../data";
import { Sparkles, ArrowRight, HelpCircle, Check, RotateCcw } from "lucide-react";

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleSelectOption = (questionId: string, points: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    setSubmitSuccess(false);
    setEmail("");
    setName("");
    setPhone("");
  };

  // Determine the dominant category of worry
  const getDiagnostic = () => {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    Object.values(answers).forEach((val) => {
      if (typeof val === "string" && val in counts) {
        counts[val as keyof typeof counts] += 1;
      }
    });

    const maxPoints = Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0];

    switch (maxPoints) {
      case "A":
        return {
          title: "Parálisis de Comunicación (Falta de Pautas Exactas)",
          tagline: "Te preocupa quedarte en blanco o empeorar las cosas por no usar los términos correctos.",
          advice: "Tu hogar necesita urgentemente guiones estructurados para desarmar la vergüenza inicial. Te beneficiarás enormemente del MÓDULO 1 y especialmente del Cuaderno de Copiado: Plantillas de Conversación (Bono 3), el cual te quitará la presión de pensar qué decir.",
          focusBono: "Bono 3: Cuaderno de Copiado de Conversaciones"
        };
      case "B":
        return {
          title: "Ansiedad por Exposición Digital (Pornografía y Redes)",
          tagline: "Sientes que el internet y las redes sociales de internet están educando a tu hijo antes que tú.",
          advice: "Tu prioridad es el blindaje digital y desmitificar la fantasía de la pornografía. Tu plan incluye MÓDULO 1 (Clase 2) para desarmar el pánico al autoerotismo y el Escudo Digital (Bono 4) para configurar restricciones parentales efectivas en menos de 5 minutos.",
          focusBono: "Bono 4: Escudo Digital y Control Parental"
        };
      case "C":
        return {
          title: "Alerta de Vulnerabilidad Crítica (Límites y Consentimiento)",
          tagline: "Te aterra que sufran abusos, noviazgos violentos o tomen decisiones apresuradas que afecten su proyecto de vida.",
          advice: "Necesitas dotar a tu hijo de herramientas de asertividad interpersonal. El MÓDULO 2 (Consentimiento y Seducción) te enseñará a usar 'El Semáforo del Consentimiento' para que tu hijo aprenda a poner límites inquebrantables frente a presiones grupales o de pareja.",
          focusBono: "Bono 5: Botiquín Emocional & Módulo de Consentimiento"
        };
      case "D":
        default:
        return {
          title: "Distanciamiento por Barrera Defensiva (Silencio y Tabú)",
          tagline: "El silencio se ha apoderado de tu casa y sientes que tus adolescentes evitan hablar contigo.",
          advice: "Tu primer paso es restaurar la confianza perdida sin sonar autoritario. Te recomendamos centrarte en las técnicas de mediación parental afectiva de nuestro equipo interdisciplinario y la Videoteca VIP de Respuestas Rápidas (Bono 1) para dar respuestas cortas de 3 minutos sin rodeos.",
          focusBono: "Bono 1: Videoteca VIP de Respuestas Rápidas"
        };
    }
  };

  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          phone,
          source: "interactive-quiz",
          answers
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.error("Error submitting lead:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const diagnostic = getDiagnostic();
  const progressPercent = Math.round(((currentStep + (isCompleted ? 1 : 0)) / questions.length) * 100);

  return (
    <div id="diagnostico-interactivo" class="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-rose-100 glow-coral">
      {/* Header bar */}
      <div class="bg-gradient-to-r from-brand-navy to-slate-900 px-6 py-6 sm:px-10 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Autoevaluación Familiar
          </span>
          <h3 class="text-xl sm:text-2xl font-display font-semibold tracking-tight text-white">
            Termómetro de Riesgo Comunicativo ESI
          </h3>
          <p class="text-slate-300 text-xs sm:text-sm mt-1">
            Responde estas 3 preguntas y recibe un diagnóstico inmediato sobre tu nivel de preparación.
          </p>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-center">
          <div class="text-right hidden sm:block">
            <p class="text-xs text-slate-400">Progreso</p>
            <p class="text-sm font-mono font-semibold text-rose-400">{progressPercent}%</p>
          </div>
          <div class="w-16 h-16 rounded-full border-4 border-slate-700 flex items-center justify-center relative">
            <svg className="w-full h-full transform -rotate-90 absolute">
              <circle
                cx="32"
                cy="32"
                r="26"
                className="stroke-slate-700 fill-none"
                strokeWidth="4"
              />
              <circle
                cx="32"
                cy="32"
                r="26"
                className="stroke-brand-teal fill-none transition-all duration-300"
                strokeWidth="4"
                strokeDasharray="163.36"
                strokeDashoffset={163.36 - (163.36 * progressPercent) / 100}
              />
            </svg>
            <span class="text-xs font-mono font-bold text-slate-200">{currentStep + 1}/{questions.length}</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div class="p-6 sm:p-10 min-h-[340px] flex flex-col justify-between">
        {!isCompleted ? (
          <div>
            {/* Question label */}
            <div class="mb-6">
              <span class="text-xs font-semibold text-rose-500 tracking-wider uppercase">
                Pregunta de Diagnóstico {currentStep + 1}
              </span>
              <h4 class="text-lg sm:text-xl font-display font-medium text-brand-navy mt-1">
                {questions[currentStep].question}
              </h4>
            </div>

            {/* Answer Cards Grid */}
            <div class="grid grid-cols-1 gap-3.5 mb-8">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(questions[currentStep].id, option.points)}
                  class="w-full text-left p-4 rounded-2xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50/20 active:bg-rose-50/40 transition-all flex items-start gap-4 group cursor-pointer"
                >
                  <span class="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-rose-100 border border-slate-200 group-hover:border-rose-300 text-slate-600 group-hover:text-rose-700 text-xs font-bold flex items-center justify-center shrink-0 transition-colors">
                    {option.points}
                  </span>
                  <div>
                    <p class="font-medium text-slate-800 text-sm sm:text-base group-hover:text-brand-navy transition-colors">
                      {option.label}
                    </p>
                    <span class="inline-block text-xs font-mono text-slate-400 mt-1">
                      Área de impacto: {option.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation buttons */}
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                class="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand-navy font-medium py-1 transition-colors cursor-pointer"
              >
                Volver a la pregunta anterior
              </button>
            )}
          </div>
        ) : (
          /* Diagnostic Screen */
          <div class="space-y-6">
            <div class="p-5 sm:p-7 rounded-2xl bg-brand-peach/40 border border-rose-100/60">
              <div class="flex items-start gap-3.5">
                <div class="p-2.5 rounded-xl bg-rose-500 text-white shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span class="text-xs font-semibold text-rose-600 tracking-wide uppercase">
                    Diagnóstico Personalizado
                  </span>
                  <h4 class="text-xl font-display font-semibold text-brand-navy mt-1">
                    {diagnostic.title}
                  </h4>
                  <p class="text-rose-950 font-medium text-sm mt-1">
                    {diagnostic.tagline}
                  </p>
                </div>
              </div>

              <div class="h-px bg-rose-200/40 my-4" />

              <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                {diagnostic.advice}
              </p>

              <div class="mt-4 p-3.5 rounded-xl bg-white border border-rose-100 flex items-center justify-between flex-wrap gap-2">
                <span class="text-xs text-slate-500">Recurso de emergencia recomendado para ti:</span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-teal-50 text-teal-700 border border-teal-200">
                  <span class="w-2 h-2 rounded-full bg-teal-500" />
                  {diagnostic.focusBono}
                </span>
              </div>
            </div>

            {/* Email and Lead Form Integration */}
            {!submitSuccess ? (
              <form onSubmit={handleLeadSubmit} class="bg-slate-50 border border-slate-100 p-5 sm:p-7 rounded-2xl space-y-4">
                <div class="text-center max-w-lg mx-auto mb-4">
                  <h5 class="text-sm sm:text-base font-display font-bold text-brand-navy">
                    ¿Quieres recibir este diagnóstico detallado en PDF y apartar tu cupo provisional con descuento?
                  </h5>
                  <p class="text-xs text-slate-500 mt-1">
                    Déjanos tus datos de contacto reales. No enviamos spam y protegemos tu confidencialidad al 100%.
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-slate-800"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp (con indicativo de país, ej: +57)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-slate-800"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="w-full py-3.5 px-6 rounded-xl bg-rose-500 hover:bg-rose-600 disabled:bg-slate-300 text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Procesando Diagnóstico...</span>
                  ) : (
                    <>
                      <span>Quiero mi Diagnóstico en PDF + Reservar Cupo Provisional</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div class="p-6 rounded-2xl bg-teal-50 border border-teal-100 text-center space-y-3">
                <div class="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h5 class="text-base sm:text-lg font-display font-semibold text-slate-900">
                  ¡Registro y Cupo Provisional Reservado Exitosamente, {name}!
                </h5>
                <p class="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                  Hemos enviado tu diagnóstico detallado del **{diagnostic.title}** a tu correo **{email}**. Para asegurar tu cupo y recibir el Bono de Acción Rápida de Tatiana, únete de inmediato a nuestro grupo cerrado VIP de WhatsApp.
                </p>
                <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://chat.whatsapp.com/EDOS_VIP_PLACEHOLDER"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all"
                  >
                    <span>Entrar al Grupo VIP de WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleReset}
                    class="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors py-2"
                  >
                    <RotateCcw className="w-3 h-3" /> Repetir cuestionario
                  </button>
                </div>
              </div>
            )}

            {/* Value context under the diagnostic */}
            <div class="text-center">
              <p class="text-xs text-slate-400">
                Al completar este cuestionario has dado el primer paso. Tu diagnóstico está alineado directamente con las materias y profesionales del <strong class="text-slate-600">Plan Maestro: Método EDOS</strong>.
              </p>
              {!submitSuccess && (
                <button
                  onClick={handleReset}
                  class="mt-3 inline-flex items-center gap-1 text-xs text-slate-500 hover:text-brand-navy hover:underline transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Reiniciar Autoevaluación
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
