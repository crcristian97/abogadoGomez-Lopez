import { FileText, ShieldCheck, FileCheck, ClipboardCheck } from "lucide-react";

export const caseSolicities = [
  {
    icon: <FileText className="w-8 h-8 text-[#183852]" />,
    title: "Litigios por falsificaciones",
    description: "Presuntas falsificaciones en documentos oficiales o privados.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#183852]" />,
    title: "Defensa en causas penales",
    description: "Cuando se cuestiona la autoría de firmas o textos manuscritos.",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#183852]" />,
    title: "Validación de contratos",
    description: "Testamentos, contratos y otros documentos con valor legal.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-[#183852]" />,
    title: "Asesoramiento técnico",
    description: "Para empresas y particulares que requieren confirmación de autenticidad.",
  },
];