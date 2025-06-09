"use client";

import BlogPost from "../../components/BlogPost";

export default function ContrabandoBlogPost( { params } ) {
  const { slug } = params;
  const postData = {
    title: "SOBRE EL DELITO DE ENCUBRIMIENTO DE CONTRABANDO",
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
      <>
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
            <img
              src="https://res.cloudinary.com/dgzi8i2ji/image/upload/v1749252409/delito-contrabando-en-buenos-aires.webp"
              alt="Delito de contrabando en Buenos Aires"
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxHeight: 320, objectFit: "cover" }}
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
      </>
      </div>
    )
  };

  return (
    <main className="min-h-screen bg-white">
      <BlogPost {...postData} />
    </main>
  );
} 