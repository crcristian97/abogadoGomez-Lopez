"use client";
import { useState } from "react";

// Simple error icon SVG
const ErrorIcon = () => (
  <svg
    className="inline-block mr-1"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="#dc2626" />
    <path
      d="M10 5v5m0 3h.01"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactMap = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(""); // For error messages

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

  // Validaciones
  const validate = () => {
    let newErrors = { name: "", email: "", message: "" };
    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }
    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      newErrors.email = "El email no es válido.";
    }
    if (!form.message.trim()) {
      newErrors.message = "El mensaje es obligatorio.";
    }
    setErrors(newErrors);
    // Si todos los errores están vacíos, retorna true
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Limpiar error al escribir
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
    setSubmitError(""); // Clear submit error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(""); // Clear previous error
    if (!validate()) return;

    const { name, email, message } = form;
    const data = { name, email, message };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
        setSubmitError("");
      } else {
        setSubmitError(result.error || 'Por favor, intenta nuevamente');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitError("Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.");
    }
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
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4" noValidate>
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
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <small id="name-error" className="text-red-600 flex items-center mt-1">
                    <ErrorIcon />
                    {errors.name}
                  </small>
                )}
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
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <small id="email-error" className="text-red-600 flex items-center mt-1">
                    <ErrorIcon />
                    {errors.email}
                  </small>
                )}
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
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && (
                  <small id="message-error" className="text-red-600 flex items-center mt-1">
                    <ErrorIcon />
                    {errors.message}
                  </small>
                )}
              </div>
              {submitError && (
                <div className="text-red-600 flex items-center mt-2 text-sm">
                  <ErrorIcon />
                  {submitError}
                </div>
              )}
              <button
                type="submit"
                title="Enviar mensaje"
                className={`py-3 px-8 rounded-full text-lg font-bold ${accentButton} ${accentButtonText} border-0 focus:outline-none transition-colors duration-200 mt-2 shadow-md hover:bg-[#b08d36] hover:text-white`}
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
