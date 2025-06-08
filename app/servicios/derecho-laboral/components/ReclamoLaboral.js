import PenalCard from "../../../ui/PenalCard";
import {
  Handshake,
  BadgeAlert,
  UserX,
  FileText,
  ShieldAlert,
} from "lucide-react";

const reclamos = [
  {
    title: "Despido sin causa",
    description:
      "Te asesoramos para reclamar la indemnización que corresponde y proteger tus derechos laborales.",
    icon: UserX,
  },
  {
    title: "Trabajo no registrado / trabajo en negro",
    description:
      "Luchamos para que tus aportes y derechos sean reconocidos.",
    icon: BadgeAlert,
  },
  {
    title: "Maltrato laboral",
    description:
      "Defendemos tu integridad y garantizamos que no seas víctima de abuso en el ámbito laboral.",
    icon: ShieldAlert,
  },
  {
    title: "Liquidación final mal realizada",
    description:
      "Verificamos que te paguen correctamente todas las indemnizaciones y beneficios.",
    icon: FileText,
  },
  {
    title: "Accidentes de trabajo no cubiertos",
    description:
      "Te acompañamos para obtener la cobertura y compensación justa ante accidentes laborales.",
    icon: Handshake,
  },
  {
    title: "Descuentos indebidos en el salario",
    description:
      "Reclamamos por deducciones injustificadas o ilegales en tu sueldo para que recibas el pago completo que te corresponde.",
    icon: FileText,
  },
];

export default function ReclamoLaboral() {
  return (
    <section
      className="w-full"
      style={{
        background: "#B0B9C2",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#183852]">
          ¿Qué podés reclamar como trabajador?
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-stretch w-full"
        >
          {reclamos.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-1"
              style={{
                minWidth: "260px",
                maxWidth: "340px",
                background: "#B0B9C2",
                margin: "0 auto",
              }}
            >
              <PenalCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
