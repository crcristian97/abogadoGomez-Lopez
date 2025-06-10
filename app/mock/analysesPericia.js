import { PenLine, Signature, FileText, FlaskConical } from "lucide-react";

export const analyses = [
  {
    icon: <PenLine className="w-8 h-8 text-[#183852]" />,
    title: "Escritura adulterada",
    description:
      "Analizamos posibles manipulaciones, sobrescrituras o adulteraciones en textos manuscritos con métodos especializados.",
  },
  {
    icon: <Signature className="w-8 h-8 text-[#183852]" />,
    title: "Firmas falsificadas",
    description:
      "Detectamos si una firma fue falsificada o modificada, determinando la autoría con alto grado de certeza técnica.",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#183852]" />,
    title: "Documentos legales",
    description:
      "Verificamos la validez y autenticidad de testamentos, contratos, pagarés y otros documentos cruciales para juicios.",
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-[#183852]" />,
    title: "Análisis físico-químico",
    description:
      "Estudios de tinta, papel y cronología de documentos para determinar fechas de elaboración y autenticidad de materiales.",
  },
];