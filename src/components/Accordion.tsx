import { useState } from "react";
import { COURSE_MODULES, CourseModule } from "../data";
import { ChevronDown, GraduationCap, Sparkles, AlertCircle, CheckCircle } from "lucide-react";

export default function Accordion() {
  const [openModuleId, setOpenModuleId] = useState<string | null>("module-1");

  const toggleModule = (id: string) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {COURSE_MODULES.map((mod: CourseModule) => {
        const isOpen = openModuleId === mod.id;

        return (
          <div
            key={mod.id}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
              isOpen
                ? "border-purple-200 shadow-md ring-1 ring-purple-100"
                : "border-slate-100 hover:border-slate-200 hover:shadow-sm"
            }`}
          >
            {/* Accordion Trigger */}
            <button
              onClick={() => toggleModule(mod.id)}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors font-display font-bold text-lg ${
                  isOpen ? "bg-brand-navy text-white" : "bg-purple-50 text-brand-navy"
                }`}>
                  0{mod.number}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                      Módulo {mod.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Enfoque: {mod.number === 1 ? "El Enfoque del Ser" : mod.number === 2 ? "El Enfoque del Otro" : "El Mundo y el Futuro"}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-display font-semibold text-brand-navy mt-1.5">
                    {mod.title}
                  </h4>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-navy" : ""}`} />
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-[1600px] border-t border-slate-50" : "max-h-0"
              }`}
            >
              <div className="p-5 sm:p-6 bg-slate-50/40 space-y-6">
                {/* Module Objective */}
                <div className="bg-purple-50/30 border border-purple-100/40 p-4 rounded-xl flex gap-3">
                  <GraduationCap className="w-5 h-5 text-brand-navy shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-brand-navy">Objetivo del Módulo</h5>
                    <p className="text-sm text-slate-700 mt-1">{mod.objective}</p>
                  </div>
                </div>

                {/* Class Sessions List */}
                <div className="space-y-6">
                  {mod.classes.map((cls, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-4"
                    >
                      {/* Class Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-50 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h5 className="font-display font-bold text-brand-navy text-sm sm:text-base">
                            {cls.title}
                          </h5>
                        </div>
                        <span className="inline-flex self-start sm:self-center items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          Liderado por: {cls.ledBy}
                        </span>
                      </div>

                      {/* Pain Handled */}
                      <div className="flex gap-2.5 items-start">
                        <AlertCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Desafío Familiar que se Aborda:</p>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                            {cls.painHandled}
                          </p>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="bg-purple-50/10 border border-purple-100/30 p-3.5 rounded-lg space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-purple-800 uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-brand-navy" />
                          Herramientas Prácticas que te llevas:
                        </div>
                        <ul className="space-y-1.5">
                          {cls.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="font-medium">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
