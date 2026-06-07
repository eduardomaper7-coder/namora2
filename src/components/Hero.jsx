const Hero = () => {
  const phoneNumber = '922441744'
  const whatsappNumber = '34616154605'

  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir cita en Clínica Dental Solymar Cabrera.'
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Clínica Dental Solymar Cabrera',
    description:
      'Clínica dental en Santa Cruz de Tenerife. Tratamientos dentales personalizados, atención cercana y profesional.',
    telephone: '+34 922 441 744',
    areaServed: {
      '@type': 'City',
      name: 'Santa Cruz de Tenerife',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Cruz de Tenerife',
      addressRegion: 'Santa Cruz de Tenerife',
      addressCountry: 'ES',
    },
    medicalSpecialty: 'Dentistry',
    priceRange: '€€',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34 922 441 744',
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['Spanish'],
    },
    sameAs: [`https://wa.me/${whatsappNumber}`],
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-dental-solymar-cabrera.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-12 pt-24 text-center sm:pb-16 sm:pt-28">

        {/* Título superior */}
        <div className="mb-4 flex flex-col items-center sm:mb-6">
          <span className="text-lg font-light tracking-widest text-white sm:text-2xl">
            CLÍNICA DENTAL EN SANTA CRUZ DE TENERIFE
          </span>

          <img
            src="/logo-solymar-icono.png"
            alt="Solymar Cabrera"
            className="mt-4 h-10 w-auto opacity-95 drop-shadow-lg sm:h-12 md:h-14"
          />
        </div>

        {/* H1 */}
        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Tu dentista de confianza en Santa Cruz de Tenerife
        </h1>

        {/* Texto */}
        <p className="mt-6 hidden max-w-3xl text-lg leading-9 text-white/95 sm:block sm:text-xl">
          En Clínica Dental Solymar Cabrera cuidamos tu salud bucodental con
          tratamientos personalizados, atención cercana y un equipo profesional
          enfocado en ofrecerte una sonrisa sana, bonita y natural.
        </p>

        {/* Botones principales */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-[#C8923B] px-6 py-4 text-base font-extrabold text-white shadow-xl transition hover:bg-[#A87325] sm:w-auto sm:px-8 sm:text-lg"
            aria-label="Pedir cita por WhatsApp en Clínica Dental Solymar Cabrera"
          >
            <img
              src="/whatsapp.png"
              alt=""
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden="true"
            />
            Pedir cita por WhatsApp
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="flex w-full items-center justify-center whitespace-nowrap rounded-full bg-white px-6 py-4 text-base font-extrabold text-[#C8923B] shadow-xl transition hover:bg-white/90 sm:w-auto sm:px-8 sm:text-lg"
            aria-label="Llamar a Clínica Dental Solymar Cabrera"
          >
            Llamar ahora
          </a>
        </div>

        {/* Badge */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
          <span className="rounded-full border border-white/60 bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur-sm shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Clínica dental en Tenerife
          </span>
        </div>

        {/* Ver tratamientos */}
        <a
  href="#servicios"
  className="mt-5 hidden items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold !text-white transition hover:bg-white hover:!text-[#C8923B] sm:inline-flex"
>
  Ver tratamientos dentales
</a>

        {/* Scroll */}
       <a
  href="#servicios"
  className="mt-12 hidden flex-col items-center font-medium !text-[#C8923B] sm:inline-flex"
  style={{ color: '#C8923B' }}
>
  Descubre más
  <span
    className="mt-2 text-3xl !text-[#C8923B]"
    style={{ color: '#C8923B' }}
  >
    ⌄
  </span>
</a>
      </div>

      {/* WhatsApp flotante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8923B] shadow-2xl transition hover:scale-110 hover:bg-[#A87325] sm:h-16 sm:w-16"
        aria-label="Escribir por WhatsApp a Clínica Dental Solymar Cabrera"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </a>
    </section>
  )
}

export default Hero