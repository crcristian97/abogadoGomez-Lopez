'use client';

import Script from 'next/script';

/**
 * Componente para renderizar schema markup como JSON-LD
 * @param {Object} schemas - Array de objetos schema markup
 */
export default function SchemaMarkup({ schemas }) {
  if (!schemas || !Array.isArray(schemas)) {
    return null;
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
} 