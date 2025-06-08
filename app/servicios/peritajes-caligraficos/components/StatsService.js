"use client";
import { BarChart2, Shield, Gavel, IdCard } from "lucide-react";

const stats = [
  {
    icon: BarChart2,
    title: "+15 años",
    subtitle: "de experiencia",
  },
  {
    icon: Shield,
    title: "Matrícula",
    subtitle: "SCJBA & CPCBA",
  },
  {
    icon: Gavel,
    title: "Validez",
    subtitle: "Judicial nacional",
  },
  {
    icon: IdCard,
    title: "7 - 15 días",
    subtitle: "Entrega ágil",
  },
];

export default function StatsService() {
  return (
    <section className="w-full bg-[#183852] py-8 px-2 md:px-0">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center flex-1"
          >
            <stat.icon className="w-8 h-8 mb-2 text-[#CBA240]" aria-hidden="true" />
            <span className="font-bold text-[#CBA240] text-lg md:text-xl">{stat.title}</span>
            <span className="text-white text-sm md:text-base">{stat.subtitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
