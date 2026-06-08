const Hero = () => {
  const phoneNumber = '822612870'
  const whatsappNumber = '34660399180'

  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir cita en Clínica Dental Namora.'
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Clínica Dental Namora',
    description:
      'Clínica dental en Santa Cruz de Tenerife. Odontología cercana, estética y profesional para cuidar tu sonrisa.',
    telephone: '+34 822 61 28 70',
    areaServed: {
      '@type': 'City',
      name: 'Santa Cruz de Tenerife',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C. Ramón y Cajal, 59',
      postalCode: '38006',
      addressLocality: 'Santa Cruz de Tenerife',
      addressRegion: 'Santa Cruz de Tenerife',
      addressCountry: 'ES',
    },
    medicalSpecialty: 'Dentistry',
    priceRange: '€€',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34 822 61 28 70',
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['Spanish'],
    },
    sameAs: [`https://wa.me/${whatsappNumber}`],
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/hero-clinica-dental-namora.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/25" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center px-5 py-24 md:grid-cols-2 md:px-10">
        <div className="max-w-2xl pt-16">
          

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Sonríe con confianza en Clínica Dental Namora
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700 sm:text-xl">
            Cuidamos tu salud bucodental con una atención cercana, tratamientos
            personalizados y una experiencia cómoda desde la primera visita.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-[#E86020] px-7 py-4 text-base font-extrabold text-white shadow-xl transition hover:bg-[#c94f18] sm:text-lg"
              aria-label="Pedir cita por WhatsApp en Clínica Dental Namora"
            >
              <img
                src="/whatsapp.webp?v=2"
                alt=""
                className="h-6 w-6"
                aria-hidden="true"
              />
              WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center rounded-full border-2 border-[#E86020] bg-white px-7 py-4 text-base font-extrabold text-[#E86020] shadow-xl transition hover:bg-[#E86020] hover:text-white sm:text-lg"
              aria-label="Llamar a Clínica Dental Namora"
            >
              Llamar ahora
            </a>
          </div>

          <div className="mt-6 grid gap-3 text-sm font-semibold text-neutral-700 sm:grid-cols-3">
            <span className="rounded-2xl bg-white/85 px-4 py-3 shadow">
              Trato cercano
            </span>

            <span className="rounded-2xl bg-white/85 px-4 py-3 shadow">
              Estética dental
            </span>

            <span className="rounded-2xl bg-white/85 px-4 py-3 shadow">
              Cita rápida
            </span>
          </div>

          <a
            href="#servicios"
            className="mt-8 inline-flex font-bold text-[#E86020] hover:underline"
          >
            Ver tratamientos dentales
          </a>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#E86020] shadow-2xl transition hover:scale-110 hover:bg-[#c94f18] sm:h-16 sm:w-16"
        aria-label="Escribir por WhatsApp a Clínica Dental Namora"
      >
        <img
          src="/whatsapp.webp?v=2"
          alt="WhatsApp"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </a>
    </section>
  )
}

export default Hero