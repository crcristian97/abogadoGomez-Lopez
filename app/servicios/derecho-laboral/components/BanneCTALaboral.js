"use client";
import CustomButton from "../../../ui/CustomButton";

export default function BanneCTALaboral() {
  return (
    <section
      className="w-full relative flex items-center justify-center min-h-[340px] py-20 px-4"
      // Degradé en los costados
      style={{
        background:
          "linear-gradient(90deg, rgba(24,56,82,1) 70%, rgba(176,185,194,0.18) 100%), linear-gradient(270deg, rgba(24,56,82,1) 70%, rgba(176,185,194,0.18) 100%)",
        backgroundColor: "#183852",
      }}
    >
      <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          ¿Cómo iniciar un reclamo laboral?
        </h2>
        <p className="text-lg sm:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Los reclamos laborales se inician ante la <span className="font-semibold text-[#CBA240]">SECLO</span> (Servicio de Conciliación Laboral Obligatoria). Esta instancia permite llegar a un acuerdo previo al inicio de un juicio, con la posibilidad de resolver el conflicto de manera ágil y sin desgaste. 
          <br />
          Si no se logra un acuerdo, <span className="font-semibold text-[#CBA240]">te asesoramos</span> para continuar con la demanda laboral de forma segura y eficiente.
        </p>

        <CustomButton
          variant="primary"
          href="https://wa.me/"
          title="Hablá ahora por WhatsApp"
          aria-label="Hablá ahora por WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base sm:text-lg px-10 py-4"
        >
          Hablá ahora por WhatsApp
        </CustomButton>
      </div>
      {/* Degradé extra en los costados para pantallas grandes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(176,185,194,0.18) 0%, rgba(24,56,82,1) 15%, rgba(24,56,82,1) 85%, rgba(176,185,194,0.18) 100%)",
        }}
      />
    </section>
  );
}
