"use client";
import { BarChart2, Shield, Gavel, IdCard } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
};

export default function StatsService() {
  return (
    <motion.section
      className="w-full bg-[#183852] py-8 px-2 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0"
        variants={containerVariants}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center flex-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(203,162,64,0.18)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <stat.icon className="w-8 h-8 mb-2 text-[#CBA240]" aria-hidden="true" />
            <span className="font-bold text-[#CBA240] text-lg md:text-xl">{stat.title}</span>
            <span className="text-white text-sm md:text-base">{stat.subtitle}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
