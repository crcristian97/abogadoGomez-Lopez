export default function CustomCard({ title = '', description = '', link = '', bg = '' }) {
    return (
      <div
        className={`rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between min-h-[260px] ${bg} bg-cover bg-center relative`}
        style={{ backgroundBlendMode: "multiply", backgroundColor: "rgba(24, 56, 82, 0.7)" }}
      >
        <div className="relative z-10">
          <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
          <p className="text-[#ededed] text-sm mb-4">{description}</p>
        </div>
        <a
          href={link}
          className="relative z-10 text-[#CBA240] text-sm font-semibold hover:underline mt-auto"
        >
          Leer más &gt;
        </a>
        <div className="absolute inset-0 bg-[#183852] opacity-65 z-0" />
      </div>
    );
    }