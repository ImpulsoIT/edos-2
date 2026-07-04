import { useState } from "react";
import { COURSE_MODULES, CourseModule } from "../data";
import { ChevronDown, GraduationCap, Sparkles, AlertCircle, FileText, CheckCircle } from "lucide-react";

export default function Accordion() {
  const [openModuleId, setOpenModuleId] = useState<string | null>("module-1");

  const toggleModule = (id: string) => {
    setOpenModuleId((prev) => (prev === id ? null : id));
  };

  return (
    <div class="space-y-4">
      {COURSE_MODULES.map((mod: CourseModule) => {
        const isOpen = openModuleId === mod.id;

        return (
          <div
            key={mod.id}
            class={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
              isOpen
                ? "border-rose-200 shadow-md ring-1 ring-rose-100"
                : "border-slate-100 hover:border-slate-200 hover:shadow-sm"
            }`}
          >
            {/* Accordion Trigger */}
            <button
              onClick={() => toggleModule(mod.id)}
              class="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
            >
              <div class="flex items-start sm:items-center gap-4">
                <div class={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors font-display font-bold text-lg ${
                  isOpen ? "bg-rose-500 text-white" : "bg-rose-50 text-rose-600"
                }`}>
                  0{mod.number}
                </div>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100">
                      Módulo {mod.number}
                    </span>
                    <span class="text-xs font-mono text-slate-400">
                      Enfoque: {mod.number === 1 ? "del Ser" : mod.number === 2 ? "del Otro" : "del Mundo y Futuro"}
                    </span>
                  </div>
                  <h4 class="text-base sm:text-lg font-display font-semibold text-brand-navy mt-1.5">
                    {mod.title}
                  </h4>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-rose-500" : ""}`} />
            </button>

            {/* Accordion Content */}
            <div
              class={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-[1600px] border-t border-slate-50" : "max-h-0"
              }`}
            >
              <div class="p-5 sm:p-6 bg-slate-50/40 space-y-6">
                {/* Module Objective */}
                <div class="bg-rose-50/30 border border-rose-100/40 p-4 rounded-xl flex gap-3">
                  <GraduationCap className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 class="text-xs font-bold uppercase tracking-wider text-rose-600">Objetivo del Módulo</h5>
                    <p class="text-sm text-slate-700 mt-1">{mod.objective}</p>
                  </div>
                </div>

                {/* Class Sessions List */}
                <div class="space-y-6">
                  {mod.classes.map((cls, idx) => (
                    <div
                      key={idx}
                      class="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-4"
                    >
                      {/* Class Header */}
                      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-50 pb-3">
                        <div class="flex items-center gap-2">
                          <span class="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <h5 class="font-display font-bold text-brand-navy text-sm sm:text-base">
                            {cls.title}
                          </h5>
                        </div>
                        <span class="inline-flex self-start sm:self-center items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100 font-mono">
                          <span class="w-1.5 h-1.5 rounded-full bg-teal-500" />
                          Liderado por: {cls.ledBy}
                        </span>
                      </div>

                      {/* Pain Handled */}
                      <div class="flex gap-2.5 items-start">
                        <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <p class="text-xs font-bold text-slate-400 uppercase tracking-wide">Dolor Específico que se Ataca:</p>
                          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">
                            {cls.painHandled}
                          </p>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div class="bg-teal-50/10 border border-teal-100/30 p-3.5 rounded-lg space-y-2">
                        <div class="flex items-center gap-1.5 text-xs font-bold text-teal-800 uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                          Herramientas Prácticas que te llevas:
                        </div>
                        <ul class="space-y-1.5">
                          {cls.deliverables.map((del, dIdx) => (
                            <li key={dIdx} class="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                              <span class="font-medium">{del}</span>
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
