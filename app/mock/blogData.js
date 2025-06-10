import Image from "next/image";

  export const blogData = [
  {
    title: "SOBRE EL DELITO DE ENCUBRIMIENTO DE CONTRABANDO",
    description: "Vamos a analizar uno de los temas consultados en el estudio: el delito de encubrimiento de contrabando.",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252409/delito-contrabando-en-buenos-aires.webp",
    author: "Dra. Estefanía Gómez",
    date: "09 Junio 2025",
    category: "Derecho penal",
    introduction: "Vamos a analizar uno de los temas consultados en el estudio: el delito de encubrimiento de contrabando.",
    pregunta1: "¿Qué es el delito de encubrimiento de contrabando?",
    respuesta1: "Se trata de una figura prevista en el artículo 874 del Código Aduanero (Ley 22.415) que se configura básicamente en dos supuestos:",
    lista1: [
      "Que exista un delito de contrabando, sin importar si es en grado de tentativa o consumado",
      "Que quien oficie de encubridor, lo haga sin necesidad de responder a una promesa previa en ese sentido"
    ],
    blockquote: "El bien jurídico tutelado es asegurar el debido funcionamiento de la administración de justicia, con la particularidad de que esta figura busca resguardar también en forma indirecta el adecuado, normal y eficaz ejercicio del servicio aduanero.",
    titleText1: "Estructura del delito",
    text1: "El encubrimiento de contrabando se estructura en función de:",
    text1lista1: [
      "Cuatro figuras penales básicas",
      "Dos agravadas (cuando el encubridor fuera un funcionario o empleado público)",
      "Una exención de pena para casos específicos"
    ],
    readingTime: "6",
    slug: "delito-encubrimiento-contrabando",
    content: (
      <div>
        <div className="bg-[#f9f7f3] rounded-xl p-6 md:p-10 my-8 shadow-md">
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            Se trata de una figura prevista en el artículo 874 del Código Aduanero (Ley 22.415) que se configura básicamente en dos supuestos:
            <br />
            <span className="ml-4 block">
              1) Que exista un delito de contrabando, sin importar si es en grado de tentativa o consumado;
              <br />
              2) Que quien oficie de encubridor, lo haga sin necesidad de responder a una promesa previa en ese sentido.
            </span>
          </p>
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            Como puede apreciarse de lo expresado en el punto 2) no se requiere promesa previa del encubridor, a diferencia de lo que regula el Código Penal, tratándose así de un delito posterior y en principio sin necesidad de conexión anterior; pues su conexión lo convertiría al presunto encubridor en partícipe o colaborador del contrabando. De modo que, primero resulta preciso demostrar la existencia del delito principal (contrabando) para entonces endilgar la figura del encubrimiento.
          </p>
          <div className="flex justify-center my-6">
            <Image
              src="https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252409/delito-contrabando-en-buenos-aires.webp"
              alt="Delito de contrabando en Buenos Aires"
              title="Delito de contrabando en Buenos Aires"
              width={1200}
              height={630}
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: 320, objectFit: "cover" }}
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              loading="lazy"
            />
          </div>
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            El bien jurídico tutelado es aquí, asegurar el debido funcionamiento de la administración de justicia, con la particularidad de que esta figura busca resguardar también en forma indirecta el adecuado, normal y eficaz ejercicio del servicio aduanero, entendido este como el control sobre la introducción, extracción y circulación de mercaderías, tutelado a través del delito de contrabando, con el cual está íntimamente relacionado.
            <br />
            Como corolario de ello, también a través de esta figura se busca proteger el debido contralor que deben ejercer las fuerzas federales: la Gendarmería Nacional, Prefectura Naval Argentina, Policía de Seguridad Aeronáutica y Policía Federal Argentina, a quienes la ley otorga de potestades de prevención en las causas por los delitos previstos en el Código Aduanero.
          </p>
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            El encubrimiento de contrabando se estructura en función de <span className="font-semibold">cuatro figuras penales básicas</span> y <span className="font-semibold">dos agravadas</span> (cuando el encubridor fuera un funcionario o empleado público o un integrante de las fuerzas de seguridad o cuando la adquisición o recepción de mercaderías provenientes de contrabando constituyere una actividad habitual), a las que se suma la disposición del artículo 875 del Código Aduanero, que consagra una exención de pena para el caso en que el encubrimiento fuera ejecutado a favor de determinadas personas.
            <br />
            En su figura básica la pena prevista por el encubrimiento de contrabando es de prisión de 6 meses a 3 años y en la agravada de 9 meses a 4 años.
          </p>
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            Es preciso tener en cuenta, que para que se configure el delito de contrabando y el encubrimiento de contrabando, el monto de la mercadería tiene que superar la condición objetiva de punibilidad prevista en el Art. 947 del Código Aduanero, actualizado por la Ley 27.340 (B.O. 28/11/2017), la cual prevé que el valor en plaza debe superar la suma de <span className="font-semibold">$500.000</span> cuando se trate de mercaderías en general y <span className="font-semibold">$160.000</span> cuando se trate de tabaco y sus derivados (Art. 877 a 879 C.A.).
          </p>
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            Y es en este punto en particular, la condición objetiva de punibilidad, donde se presenta muchas veces el tema de mayor conflicto: diferenciar si estamos en presencia de un encubrimiento o de una infracción como las descriptas en los artículos 985, 986 y 987 (Tenencia Injustificada de Mercadería de Origen Extranjero con Fines Comerciales o Industriales).
          </p>
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            En ese sentido puede emplearse como criterio el volumen o cantidad de mercadería objeto del ilícito; así, si se trata de un volumen o cantidad abundante, se considera que se está en presencia de un encubrimiento de contrabando. Pero también existe otro criterio, como determinar si el receptor de la mercadería tiene para con ella fines comerciales o industriales, o la mercadería careciere de estampillado fiscal o aduanero, con lo cual, se configuraría el tipo previsto como infracción y no como delito.
          </p>
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            Por su parte, la Justicia Federal actualizó el monto establecido en el art. 947 del Código Aduanero, de conformidad con lo establecido en Art. 953 del mismo digesto normativo, en cuanto a las infracciones aduaneras.
          </p>
          <p className="text-[#183852] leading-relaxed text-lg mb-4">
            Ante un planteo de la Aduana Tucumán, el Juzgado Federal n° 2, a cargo del Doctor José Manuel Díaz Vélez, resolvió en la causa “Marin Ordoñez, Martín Alberto s/ Inf. Ley 22.415” (expediente nro. 5287/2024), la vigencia del art. 953 del Código Aduanero, actualizando el monto del importe indicado en el art. 947, elevándolo de Quinientos mil Pesos (<span className="font-semibold">$500.000</span>) a <span className="font-semibold">CATORCE MILLONES CIENTO NOVENTA Y TRES MIL DOSCIENTOS CUARENTA Y TRES PESOS ($14.193.243)</span>. Reconociendo la competencia de la Aduana para entender en todos los hechos donde el valor implicado sea inferior al mencionado.
          </p>
          <p className="text-[#183852] leading-relaxed text-lg">
            Este fallo sienta un precedente importante y novedoso, dado que al reconocer la vigencia del art. 953 del Código Aduanero, soluciona el problema que viene generando la desactualización del importe sobre el cual una acción punible debe ser considerada delito y requerir la intervención de la Justicia.
          </p>
        </div>
      </div>
    )
  },
  {
    slug: "el-derecho-a-la-salud-el-amparo-como-remedio",
    title: "EL DERECHO A LA SALUD — EL AMPARO COMO REMEDIO",
    description: "El amparo es clave para exigir cobertura de salud ante negativas de obras sociales o prepagas en Argentina.",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252283/derecho-a-la-salud-en-buenos-aires.webp",
    author: "Dr. López",
    date: "09 Junio 2025",
    category: "Derecho a la salud",
    readingTime: "5",
    introduction: "El amparo es clave para exigir cobertura de salud ante negativas de obras sociales o prepagas en Argentina.",
    pregunta1: "¿Qué es el amparo en materia de salud?",
    respuesta1: "El amparo es una acción judicial rápida y efectiva prevista en la Ley 16.986, utilizada para proteger derechos fundamentales, como el acceso a la salud, cuando existen situaciones de urgencia o la vía ordinaria resulta ineficaz.",
    lista1: [
      "El derecho a la salud es un Derecho Humano fundamental, reconocido en la Constitución Nacional y en tratados internacionales.",
      "La Corte Suprema de Justicia de la Nación ha priorizado el derecho a la vida y la salud por sobre derechos patrimoniales.",
      "El amparo es el medio judicial más idóneo cuando la urgencia del caso impide recurrir a otros procesos.",
      "El artículo 75 inciso 22 de la Constitución Nacional otorga jerarquía constitucional a los tratados internacionales que reconocen el derecho a la salud."
    ],
    blockquote: "La acción de amparo es particularmente pertinente en materias como la preservación de la salud y la integridad física. Frente a un grave problema, la urgencia del caso se contrapone al ejercicio de soluciones administrativas ordinarias. (CSJN: Fallos 330:4647; 325:292)",
    titleText1: "Requisitos para interponer un amparo en salud",
    text1: "La introducción del Artículo 43 en la Constitución Nacional y la Ley 16.986 establecen los siguientes requisitos para la admisibilidad de la acción de amparo:",
    text1lista1: [
      "No debe existir otro medio judicial más idóneo.",
      "Es viable contra actos u omisiones de autoridades públicas o particulares.",
      "El acto debe lesionar, restringir, alterar o amenazar derechos o garantías reconocidos en la Constitución Nacional.",
      "La lesión debe ser con arbitrariedad o ilegalidad manifiesta."
    ],
    titleText2: "Medios de prueba en el amparo de salud",
    text2: "Para iniciar la acción de amparo ante el incumplimiento de una prestación por parte de la obra social o prepaga, se recomienda ofrecer los siguientes medios de prueba:",
    text2lista1: [
      "Informe médico: Documento elaborado por un profesional especialista que describe antecedentes, situación actual y tratamientos o medicamentos recomendados.",
      "Pericial médica: Informe de perito médico oficial para esclarecer dudas sobre la pretensión médica, detallando ventajas de tratamientos o medicamentos de alto costo.",
      "Documental: Acreditar afiliación, historia clínica, certificados de discapacidad, incumplimiento de peticiones y presupuestos de costos médicos.",
      "Testimonial: Testimonios sobre los padecimientos y tratamientos del afectado, incluyendo profesionales de la salud.",
      "Negativa de la obra social o prepaga: Prueba de la negativa a cubrir el tratamiento, prótesis o medicamento recetado."
    ],
    titleText3: "El Programa Médico Obligatorio (PMO) y la jurisprudencia",
    text3: "Las prestadoras de salud suelen alegar que ciertos medicamentos o prestaciones no están regulados en el PMO. Sin embargo, la Corte Suprema ha sostenido que el derecho a la salud no puede limitarse a lo previsto en el PMO, ya que este representa un piso mínimo de cobertura. La jurisprudencia exige a las instituciones de salud extremar los servicios para garantizar la recuperación del paciente, incluso más allá de las exigencias del PMO.",
    content: (
      <div
        className="bg-[#f5f7fa] p-6 sm:p-8 my-6 rounded-xl border border-[#cba240] font-semibold"
        style={{
          margin: "2rem 0",
          padding: "2rem",
          backgroundColor: "#f5f7fa",
          fontWeight: "bold",
        }}
      >
        <div className="m-4 p-4 sm:m-6 sm:p-6">
          <p className="text-[#183852] mb-4">
            <strong>El derecho a la salud y el amparo: <span className="font-bold">protección judicial ante la negativa de cobertura</span></strong>
          </p>
          <p className="text-[#183852] mb-4">
            En nuestro estudio, hemos acompañado a <span className="font-bold">numerosos pacientes y familias</span> en la defensa de su derecho a la salud, especialmente cuando las obras sociales o prepagas rechazan la cobertura de medicamentos, tratamientos o prestaciones médicas esenciales. El <span className="font-bold">amparo</span>, previsto en la Ley 16.986, es la herramienta judicial más eficaz para exigir el cumplimiento de este derecho fundamental.
          </p>
          <p className="text-[#183852] mb-4">
            El <span className="font-bold">derecho a la salud</span> está reconocido en la <span className="font-bold">Constitución Nacional</span> y en tratados internacionales con jerarquía constitucional (art. 75 inc. 22). La <span className="font-bold">Corte Suprema de Justicia de la Nación</span> ha sostenido reiteradamente que la salud y la vida tienen prioridad sobre intereses patrimoniales, y que el Estado tiene la obligación indelegable de garantizar el acceso a prestaciones médicas adecuadas.
          </p>
          <p className="text-[#183852] mb-4">
            Cuando una persona enfrenta una <span className="font-bold">urgencia médica</span> y la vía administrativa resulta ineficaz o demasiado lenta, el amparo se convierte en el camino judicial más rápido y adecuado. Así lo ha señalado la Corte Suprema: <span className="font-bold">“La acción de amparo es particularmente pertinente en materias como la preservación de la salud y la integridad física. Frente a un grave problema, la urgencia del caso se contrapone al ejercicio de soluciones administrativas ordinarias”</span> (CSJN: Fallos 330:4647; 325:292).
          </p>
          <p className="text-[#183852] mb-2">
            <strong>¿Cuándo procede el amparo en salud?</strong>
          </p>
          <ul className="list-disc pl-6 text-[#183852] mb-4">
            <li><span className="font-bold">No debe existir otro medio judicial más idóneo</span> para la protección del derecho.</li>
            <li>Puede interponerse contra actos u omisiones de autoridades públicas o particulares (obras sociales, prepagas, etc.).</li>
            <li>El acto debe lesionar, restringir, alterar o amenazar derechos reconocidos en la Constitución Nacional.</li>
            <li>La lesión debe ser <span className="font-bold">manifiestamente arbitraria o ilegal</span>.</li>
          </ul>
          <p className="text-[#183852] mb-2">
            <strong>Pruebas recomendadas en el amparo de salud:</strong>
          </p>
          <ul className="list-disc pl-6 text-[#183852] mb-4">
            <li>
              <strong>Informe médico:</strong> <span className="font-bold">Documento de un profesional especialista</span> que detalle la enfermedad, el tratamiento indicado y la urgencia de la cobertura.
            </li>
            <li>
              <strong>Pericia médica:</strong> En caso de controversia, puede solicitarse la intervención de un <span className="font-bold">perito oficial</span> para fundamentar la necesidad del tratamiento o medicamento.
            </li>
            <li>
              <strong>Documental:</strong> Afiliación a la obra social/prepaga, historia clínica, certificados de discapacidad, constancias de reclamos previos y presupuestos de costos médicos.
            </li>
            <li>
              <strong>Testimoniales:</strong> Declaraciones de profesionales de la salud o familiares que acrediten la situación del paciente.
            </li>
            <li>
              <strong>Negativa formal:</strong> Prueba de la negativa de la obra social o prepaga a cubrir la prestación solicitada.
            </li>
          </ul>
          <p className="text-[#183852] mb-4">
            Es importante destacar que las prestadoras de salud suelen argumentar que ciertos medicamentos o tratamientos no están incluidos en el <span className="font-bold">Programa Médico Obligatorio (PMO)</span>. Sin embargo, la jurisprudencia sostiene que el PMO es un <span className="font-bold">piso mínimo de cobertura</span> y no puede ser utilizado para restringir el acceso a prestaciones esenciales cuando está en juego la salud o la vida del paciente.
          </p>
          <p className="text-[#183852]">
            Si te encontrás en una situación similar, <span className="font-bold">consultá con un abogado especializado</span>. El amparo puede ser la vía más rápida y efectiva para proteger tu derecho a la salud y acceder a los tratamientos que necesitás.
          </p>
        </div>
      </div>    
    )
  },
  {
    slug: "trabajo-freelance-en-argentina",
    title: "DISTINCIÓN ENTRE EMPLEADO Y CONTRATISTA PRIVADO",
    description: "Diferencias legales clave entre empleados y freelancers en Argentina tras la Ley 27.742 y el Decreto 847/24.",
    image: "https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749250677/trabajo-freelancer-abogado-buenos-aires.webp",
    author: "Dra. Estefanía Gómez",
    date: "09 Junio 2025",
    category: "Derecho laboral",
    readingTime: "5",
    avatar: "EG",
    featured: false,
    introduction: "Diferencias legales clave entre empleados y freelancers en Argentina tras la Ley 27.742 y el Decreto 847/24.",
    pregunta1: "¿Qué es un trabajador freelance o contratista independiente?",
    respuesta1: "En Argentina, un freelancer es una persona que presta servicios de manera autónoma, sin estar bajo relación de dependencia, y que puede trabajar para uno o varios clientes. La figura del contratista independiente se diferencia del empleado tradicional porque no está sujeto a las directivas, horarios ni estructura organizacional del contratante, y asume sus propios riesgos y obligaciones fiscales y de seguridad social.",
    lista1: [
      "Tecnología y TI: Desarrolladores de software, diseñadores web, consultores de TI, analistas de datos, especialistas en ciberseguridad.",
      "Servicios Creativos: Diseñadores gráficos, redactores, creadores de contenido, fotógrafos, videógrafos, consultores de marketing.",
      "Consultoría: Consultores de negocios, asesores financieros, consultores de recursos humanos, gerentes de proyectos.",
    ],
    blockquote: "La legislación base de Argentina (la Ley de Contrato de Trabajo) protege esencialmente el trabajo en relación de dependencia. Por lo tanto, la distinción entre el empleado y el contratista independiente debe hacerse en base a cómo se presenta en la realidad la relación y no en cómo las partes contratantes quieran hacerla ver.",
    titleText1: "¿Qué sectores o industrias utilizan estos trabajadores o contratistas independientes?",
    text1: "Los trabajadores independientes o contratistas privados se encuentran en diversos sectores y industrias, como la tecnología, el diseño gráfico, la consultoría, la educación y la capacitación. Su flexibilidad y especialización los hacen especialmente valiosos en proyectos específicos o tareas altamente especializadas.",
    text1lista1: [
      "Tecnología y TI: Desarrolladores de software, diseñadores web, consultores de TI, analistas de datos, especialistas en ciberseguridad.",
      "Servicios Creativos: Diseñadores gráficos, redactores, creadores de contenido, fotógrafos, videógrafos, consultores de marketing.",
      "Consultoría: Consultores de negocios, asesores financieros, consultores de recursos humanos, gerentes de proyectos.",
      "Educación y Capacitación: Tutores, formadores corporativos, desarrolladores de contenido de e-learning.",
    ],
    titleText2: "¿Qué cambió con la Ley 27.742 y el Decreto 847/24?",
    text2: "La Ley 27.742, conocida como Bases y Puntos de Partida para la Libertad de los Argentinos, junto con el Decreto 847/24, introdujo la posibilidad de que los trabajadores independientes puedan contratar hasta tres colaboradores para desarrollar su actividad, sin que esto implique la existencia de una relación de dependencia laboral. Además, se simplificaron los trámites fiscales y de seguridad social, y se creó un nuevo régimen de registración para estos trabajadores ante la AFIP (actual ARCA).",
    text2lista1: [
      "Ley 27.742: Bases y Puntos de Partida para la Libertad de los Argentinos.",  
      "Decreto 847/24: Reglamento de la Ley 27.742.",
      "AFIP (actual ARCA): Autoridad fiscal argentina.",
    ],
    titleText3: "¿Cómo distinguir entre relación de dependencia y trabajo independiente?",
    text3: "La legislación base de Argentina (la Ley de Contrato de Trabajo) protege esencialmente el trabajo en relación de dependencia. Por lo tanto, la distinción entre el empleado y el contratista independiente debe hacerse en base a cómo se presenta en la realidad la relación y no en cómo las partes contratantes quieran hacerla ver.",
    content: (
      <div className="my-8 p-6 md:p-10 bg-[#f9f7f3] rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[#183852]">EL TRABAJO FREELANCE – DISTINCIÓN ENTRE EMPLEADO Y CONTRATISTA PRIVADO.</h2>
        <p className="text-[#183852] mb-4">
          Un tema interesante dentro del ámbito laboral ha surgido con la Ley N° 27.742 y el Decreto N° 847/24 dispuesta por la AFIP (ahora denominada ARCA) en cuanto se introduce un cambio crucial para los trabajadores independientes en Argentina, permitiendo una colaboración regulada sin perder autonomía. 
        </p>
        <p className="text-[#183852] mb-4">
          Desde la sanción de la Ley 27.3742 - denominada Bases y Puntos de Partida para la Libertad de los Argentinos – los trabajadores independientes ahora pueden formar equipos propios pero sin tener una relación de dependencia, fomentando la creación de redes productivas y  permitiendo que un trabajador independiente cuente con hasta tres colaboradores, sin generar una relación de dependencia laboral. 
        </p>
        <p className="text-[#183852] mb-4">
          Además, simplifica las obligaciones fiscales y de seguridad social, ofreciendo flexibilidad y protección para todos los involucrados.
        </p>
        <h3 className="font-bold mb-2 text-[#183852]">¿Qué sectores o industrias utilizan éstos trabajadores o contratistas independientes?</h3>
        <ul className="list-disc pl-6 text-[#183852] mb-4">
          <li><strong>Tecnología y TI:</strong> Desarrolladores de software, diseñadores web, consultores de TI, analistas de datos, especialistas en ciberseguridad.</li>
          <li><strong>Servicios Creativos:</strong> Diseñadores gráficos, redactores, creadores de contenido, fotógrafos, videógrafos, consultores de marketing.</li>
          <li><strong>Consultoría:</strong> Consultores de negocios, asesores financieros, consultores de recursos humanos, gerentes de proyectos.</li>
          <li><strong>Servicios Profesionales:</strong> Abogados (para casos específicos), contadores (para proyectos específicos), arquitectos, ingenieros.</li>
          <li><strong>Educación y Capacitación:</strong> Tutores, formadores corporativos, desarrolladores de contenido de e-learning.</li>
        </ul>
        <p className="text-[#183852] mb-4">
          Estos sectores utilizan usualmente trabajadores o contratistas independientes para proyectos específicos, o tareas altamente especializadas que no requieren una relación laboral por tiempo indeterminado, como son las que regula la Ley de Contrato de Trabajo en Argentina.
        </p>
        <p className="text-[#183852] mb-4">
          En éste punto es importante resaltar que la legislación base de Argentina (la Ley de Contrato de Trabajo) protege esencialmente el trabajo en relación de dependencia. Por lo tanto la distinción entre el empleado y el contratista independiente debe hacerse en base a como se presenta en la realidad la relación y no en como las partes contratantes quieran hacerla ver.
        </p>
        <p className="text-[#183852] mb-2">
          De esa forma, tal como la ha establecido la doctrina y la jurisprudencia en materia laboral, la determinación de la “dependencia” de un empleado se hace en base a los siguientes parámetros:
        </p>
        <ul className="list-disc pl-6 text-[#183852] mb-4">
          <li><strong>Dependencia Económica:</strong> El trabajador depende principalmente o exclusivamente de la entidad contratante para sus ingresos.</li>
          <li><strong>Dependencia Técnica:</strong> El trabajador sigue instrucciones y está sujeto a la dirección técnica y supervisión de la entidad contratante.</li>
          <li><strong>Dependencia Legal:</strong> El trabajador está sujeto al poder disciplinario de la entidad contratante.</li>
          <li><strong>Dependencia Organizacional:</strong> El trabajador está integrado en la estructura organizacional de la entidad contratante, usando sus herramientas, instalaciones y trabajando en horarios fijos.</li>
        </ul>
        <p className="text-[#183852] mb-2">
          A diferencia del empleado en relación de dependencia, el trabajo freelance o de contratista privado, ofrece las siguientes características:
        </p>
        <ul className="list-disc pl-6 text-[#183852] mb-4">
          <li>Operan su propio negocio</li>
          <li>Ofrecen servicios a múltiples clientes</li>
          <li>Usan sus propias herramientas y métodos</li>
          <li>No están sujetos a supervisión directa ni control disciplinario</li>
          <li>Se les paga por proyectos específicos o resultados en lugar de por tiempo trabajado bajo dirección.</li>
        </ul>
        <p className="text-[#183852] mb-4">
          Por dicho motivo es muy importante que el contrato se realice en base a:
        </p>
        <ol className="list-decimal pl-6 text-[#183852] mb-4">
          <li>Una identificación clara del alcance del trabajo;</li>
          <li>Definición clara de los resultados esperados y los plazos;</li>
          <li>Cómo  y cuándo se pagará al freelancer o contratista privado (por ejemplo, tarifa fija, tarifa por hora, cronograma de pagos);</li>
          <li>El plazo del acuerdo (período fijo o por proyecto);</li>
          <li>Declaración explícita de que las partes pretenden crear una relación de contratista independiente, no de empleo y por un tiempo determinado que tiene relación con la tarea encomendada;</li>
          <li>Clarificación de que el contratista independiente es responsable de sus propios impuestos, seguridad social y seguros;</li>
          <li>Condiciones bajo las cuales cualquiera de las partes puede terminar el acuerdo;</li>
          <li>Cláusulas que aborden la propiedad del trabajo creado.</li>
        </ol>
        <p className="text-[#183852] mb-4">
          Con respecto a éste último punto es importante resaltar que, en base a lo dispuesto por la Ley de Propiedad Intelectual (Ley 11.723) el autor de una obra es el propietario original de los derechos de propiedad intelectual.
        </p>
        <p className="text-[#183852] mb-4">
          Es por ello que, para que la empresa contratante de un trabajador freelance posea la propiedad intelectual creada por éste, el contrato debe incluir una cláusula de cesión clara. Esta cláusula debe declarar explícitamente que el freelancer cede todos los derechos, títulos e intereses en la obra creada bajo el acuerdo a la entidad contratante al finalizar o al realizar el pago. Sin dicha cláusula, la entidad contratante puede tener solo una licencia para usar la obra, no la propiedad total.
        </p>
      </div>
    )
  }
];
