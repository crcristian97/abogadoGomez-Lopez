"use client";

// Subcomponente para cada análisis
function AnalysisCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-[#CBA240] rounded-xl p-6 flex flex-col gap-2 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#e2c77a] cursor-pointer">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-[#183852]" size={28} />
        <span className="font-semibold text-[#183852] text-lg">
          {title}
        </span>
      </div>
      <p className="text-[#183852] text-base">
        {description}
      </p>
    </div>
  );
}

export default function WeDo({
  heading = "¿Qué analizamos?",
  items = analyses,
}) {
  return (
    <section className="bg-[#183852] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-[#CBA240] text-2xl sm:text-3xl font-semibold mb-10">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <AnalysisCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
