"use client";
import { useState } from "react";

const ContactMap = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Palette colors
  const primaryBg = "bg-[#183852]";
  const accent = "text-[#CBA240]";
  const accentBg = "bg-[#CBA240]";
  const lightBg = "bg-[#183852]";
  const white = "bg-[#183852]";
  const darkText = "text-[#CBA240]";
  const accentBorder = "border-[#CBA240]";
  const accentFocus = "focus:border-[#CBA240] focus:ring-[#CBA240]/30";
  const accentButton = "bg-[#CBA240] hover:bg-[#b49536]";
  const accentButtonText = "text-[#183852]";

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className={`${lightBg} body-font relative py-20 px-2`}>
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
        {/* FORMULARIO */}
        <div className={`lg:w-1/3 w-full ${white} flex flex-col justify-center items-center md:mr-auto rounded-2xl shadow-2xl p-10 border border-[#CBA240]`}>
          <h2 className={`${accent} text-2xl mb-2 font-bold title-font text-center`}>
            Contacto 
          </h2>
          <p className={`leading-relaxed mb-6 ${darkText} text-center text-base`}>
            Envíanos tu consulta y te responderemos a la brevedad.
          </p>
          {submitted ? (
            <p className="text-green-400 mb-6 text-center font-semibold">
              ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className={`leading-7 text-sm ${accent} font-semibold`}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent rounded-lg border-2 ${accentBorder} ${accentFocus} text-base outline-none ${darkText} py-2 px-4 leading-8 transition-colors duration-200 ease-in-out placeholder-[#CBA240]/70`}
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className={`leading-7 text-sm ${accent} font-semibold`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent rounded-lg border-2 ${accentBorder} ${accentFocus} text-base outline-none ${darkText} py-2 px-4 leading-8 transition-colors duration-200 ease-in-out placeholder-[#CBA240]/70`}
                  placeholder="tu@email.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className={`leading-7 text-sm ${accent} font-semibold`}
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`w-full bg-transparent rounded-lg border-2 ${accentBorder} ${accentFocus} h-32 text-base outline-none ${darkText} py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder-[#CBA240]/70`}
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className={`py-3 px-8 rounded-full text-lg font-bold ${accentButton} ${accentButtonText} border-0 focus:outline-none transition-colors duration-200 mt-2 shadow-md`}
              >
                Enviar
              </button>
            </form>
          )}
          <p className="text-xs text-[#CBA240] mt-5 text-center">
            Tus datos serán tratados con confidencialidad.
          </p>
        </div>
        {/* MAPA */}
        <div
          className={`lg:w-2/3 w-full ${primaryBg} rounded-2xl overflow-hidden flex flex-col justify-end relative shadow-2xl min-h-[400px]`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.045859176801!2d-58.38344648747715!3d-34.60300185734959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf2558b3af%3A0xed6e034fe6d8b650!2sCarlos%20Pellegrini%20465%20Piso%209%C2%B0%2C%20Oficina%2071%2C%20C1084%20San%20Nicolas%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1749248958418!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{
              border: 0,
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              minHeight: 400,
              borderRadius: "1rem",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Estudio Lopez Gomez"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
