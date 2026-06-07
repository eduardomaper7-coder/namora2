const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Clínica Dental Solymar Cabrera",
    telephone: "+34 922 441 744",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Tomé Cano, C. Fragata Danmark, 2 Esquina",
      addressLocality: "Santa Cruz de Tenerife",
      postalCode: "38005",
      addressCountry: "ES",
    },
    areaServed: [
      "Santa Cruz de Tenerife",
      "La Laguna",
      "Tenerife",
    ],
    medicalSpecialty: "Dentistry",
    priceRange: "€€",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  )
}

export default SEO