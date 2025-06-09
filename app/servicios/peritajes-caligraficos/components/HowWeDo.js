import React from "react";
import {
  FileText,
  Search,
  FlaskConical,
  FileSignature,
} from "lucide-react";

export default function HowWeDo() {
  return (
    <section className="bg-[#B0B9C2] py-12 px-4 rounded-2xl shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#183852] mb-4 drop-shadow">
            ¿Cómo realizamos la pericia?
          </h2>
          <p className="text-[#183852] text-lg">
            Nuestro proceso combina rigor científico, experiencia y tecnología para garantizar resultados confiables y válidos judicialmente.
          </p>
        </div>
        <div className="md:w-1/2">
          <ol className="space-y-8">
            <li className="flex items-start gap-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <FileText className="w-8 h-8 text-[#CBA240]" strokeWidth={2.2} />
              </div>
              <div>
                <span className="font-semibold text-lg text-[#183852] block">Recepción y análisis del material</span>
                <p className="text-[#183852] text-sm mt-1">
                  Se recopilan los documentos originales y cualquier escrito de comparación necesario para el análisis.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <Search className="w-8 h-8 text-[#CBA240]" strokeWidth={2.2} />
              </div>
              <div>
                <span className="font-semibold text-lg text-[#183852] block">Examen gráfico y técnico</span>
                <p className="text-[#183852] text-sm mt-1">
                  Analizamos características propias de la escritura (presión, ritmo, trazos) y las comparamos con muestras auténticas.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <FlaskConical className="w-8 h-8 text-[#CBA240]" strokeWidth={2.2} />
              </div>
              <div>
                <span className="font-semibold text-lg text-[#183852] block">Estudio físico-químico</span>
                <p className="text-[#183852] text-sm mt-1">
                  Evaluación de tinta, papel y antigüedad mediante métodos especializados cuando corresponde.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <div className="flex-shrink-0">
                <FileSignature className="w-8 h-8 text-[#CBA240]" strokeWidth={2.2} />
              </div>
              <div>
                <span className="font-semibold text-lg text-[#183852] block">Informe técnico</span>
                <p className="text-[#183852] text-sm mt-1">
                  Redactamos un dictamen detallado con conclusiones fundamentadas, que puede ser presentado en Tribunales.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-start hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200 border border-[#CBA240]">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-10 h-10 text-[#CBA240]" strokeWidth={2.4} />
              <h3 className="font-bold text-xl text-[#CBA240]">¿Cuánto tarda una pericia caligráfica?</h3>
            </div>
            <p className="text-[#183852] text-base leading-relaxed">
              El plazo depende de la complejidad y volumen del material. Habitualmente, entregamos dictámenes técnicos entre <span className="font-semibold text-[#CBA240]">7 y 15 días hábiles</span>. Para casos urgentes, ofrecemos informes rápidos bajo solicitud especial.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-start hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200 border border-[#CBA240]">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-10 h-10 text-[#CBA240]" strokeWidth={2.4} />
              <h3 className="font-bold text-xl text-[#CBA240]">¿Qué validez tiene un dictamen pericial?</h3>
            </div>
            <p className="text-[#183852] text-base leading-relaxed">
              Nuestros informes cumplen con los estándares exigidos por la Justicia y son aceptados en juzgados civiles, penales y laborales en todo el país. Además, la intervención de <span className="font-semibold text-[#CBA240]">peritos oficiales</span> otorga confianza y respaldo legal a cada análisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
