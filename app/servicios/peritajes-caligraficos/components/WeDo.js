"use client";

import {
  PenLine,
  Signature,
  FileText,
  FlaskConical,
} from "lucide-react";

export default function WeDo() {
  return (
    <section className="bg-[#183852] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-[#CBA240] text-2xl sm:text-3xl font-semibold mb-10">
          ¿Qué analizamos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Escritura adulterada */}
          <div className="bg-[#CBA240] rounded-xl p-6 flex flex-col gap-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#e2c77a] cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <PenLine className="text-[#183852]" size={28} />
              <span className="font-semibold text-[#183852] text-lg">
                Escritura adulterada
              </span>
            </div>
            <p className="text-[#183852] text-base">
              Analizamos posibles manipulaciones, sobrescrituras o adulteraciones en textos manuscritos con métodos especializados.
            </p>
          </div>
          {/* Firmas falsificadas */}
          <div className="bg-[#CBA240] rounded-xl p-6 flex flex-col gap-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#e2c77a] cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <Signature className="text-[#183852]" size={28} />
              <span className="font-semibold text-[#183852] text-lg">
                Firmas falsificadas
              </span>
            </div>
            <p className="text-[#183852] text-base">
              Detectamos si una firma fue falsificada o modificada, determinando la autoría con alto grado de certeza técnica.
            </p>
          </div>
          {/* Documentos legales */}
          <div className="bg-[#CBA240] rounded-xl p-6 flex flex-col gap-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#e2c77a] cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="text-[#183852]" size={28} />
              <span className="font-semibold text-[#183852] text-lg">
                Documentos legales
              </span>
            </div>
            <p className="text-[#183852] text-base">
              Verificamos la validez y autenticidad de testamentos, contratos, pagarés y otros documentos cruciales para juicios.
            </p>
          </div>
          {/* Análisis físico-químico */}
          <div className="bg-[#CBA240] rounded-xl p-6 flex flex-col gap-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#e2c77a] cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <FlaskConical className="text-[#183852]" size={28} />
              <span className="font-semibold text-[#183852] text-lg">
                Análisis físico-químico
              </span>
            </div>
            <p className="text-[#183852] text-base">
              Estudios de tinta, papel y cronología de documentos para determinar fechas de elaboración y autenticidad de materiales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
