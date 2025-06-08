import PenalCard from "../../../ui/PenalCard";
import { benefits } from "../../../mock/benefitsServicesDP";

export default function BenefitsSevices() {
  return (
    <section className="py-16 bg-[#B0B9C2]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 text-[#183852]">
          ¿En qué casos interviene un abogado penal?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {benefits.map((benefit, idx) => (
            <PenalCard
              key={idx}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
