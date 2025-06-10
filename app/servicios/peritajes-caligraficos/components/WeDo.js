"use client";
import { motion } from "framer-motion";

// Variantes para animaciones
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
  whileHover: { scale: 1.05, boxShadow: "0 8px 32px 0 rgba(203,162,64,0.18)", backgroundColor: "#e2c77a" },
};

// Subcomponente para cada análisis
function AnalysisCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-[#CBA240] rounded-xl p-6 flex flex-col gap-2 shadow-md "
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="whileHover"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="font-semibold text-[#183852] text-lg">
          {title}
        </span>
      </div>
      <p className="text-[#183852] text-base">
        {description}
      </p>
    </motion.div>
  );
}

export default function WeDo({
  heading = "¿Qué analizamos?",
  items = analyses,
}) {
  return (
    <motion.section
      className="bg-[#183852] py-14 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-[#CBA240] text-2xl sm:text-3xl font-semibold mb-10">
          {heading}
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {items.map((item, idx) => (
            <AnalysisCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
