const treatments = [
  {
    name: 'Implantología',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
    note: 'Implantes dentales, coronas y rehabilitación fija sobre implantes.',
  },
  {
    name: 'Ortodoncia invisible',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    note: 'Alineadores transparentes para corregir la sonrisa de forma discreta.',
  },
  {
    name: 'Ortodoncia convencional',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    note: 'Brackets para mejorar la mordida, la alineación dental y la estética.',
  },
  {
    name: 'Periodoncia',
    image: '/tratamiento-encias-usera.jpg',
    note: 'Tratamiento de encías, enfermedad periodontal, sangrado e inflamación.',
  },
  {
    name: 'Odontología general',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    note: 'Revisiones, limpiezas, empastes, caries y cuidado bucodental diario.',
  },
  {
    name: 'Endodoncia',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    note: 'Tratamiento para conservar dientes dañados y evitar extracciones.',
  },
  {
    name: 'Blanqueamiento dental',
    image: '/blanqueamiento-dental-usera.jpg',
    note: 'Tratamiento estético para conseguir una sonrisa más luminosa.',
  },
  {
    name: 'Prótesis implantológica',
    image: '/protesis-total-usera.jpg',
    note: 'Prótesis fija sobre implantes para recuperar funcionalidad y estética.',
  },
  {
    name: 'Prótesis fija',
    image: '/fundas-zirconio-usera.jpg',
    note: 'Coronas, carillas y restauraciones en zirconio o cerámica.',
  },
  {
    name: 'Diseño de sonrisa',
    image: '/funda-porcelana-siliconio-usera.jpg',
    note: 'Tratamientos estéticos para mejorar la forma, color y armonía dental.',
  },
  {
    name: 'Bruxismo y A.T.M.',
    image: '/empastes-usera.jfif',
    note: 'Férulas de descarga y tratamiento de molestias mandibulares.',
  },
  {
    name: 'Cirugía oral',
    image: '/cirugia-dental-usera.jpg',
    note: 'Exodoncias, cordales y otros tratamientos quirúrgicos dentales.',
  },
]

const stats = [
  {
    value: '20+',
    label: 'Años de experiencia',
  },
  {
    value: '5★',
    label: 'Reseñas en Google',
  },
  {
    value: '200 m²',
    label: 'Instalaciones',
  },
]

const cases = [
  'Cierre de diastema central con composite sin desgaste del diente natural.',
  'Blanqueamiento dental y restauración estética de incisivos.',
  'Coronas de zirconio para mejorar la forma, inclinación y estética dental.',
  'Ortodoncia invisible con alineadores transparentes.',
  'Rehabilitación fija sobre implantes en casos complejos.',
  'Ortodoncia convencional para caninos sin espacio y sobremordida.',
]

const AllTreatments = () => {
  return (
    <main className="bg-[#FBF8F2] pb-20 pt-32">
      <section className="mx-auto max-w-7xl px-4">
        {/* Intro */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#C8923B] px-5 py-2 text-sm font-bold text-white shadow-lg">
            Tratamientos dentales
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#A87325] sm:text-5xl">
            Somos tu dentista de confianza en Santa Cruz de Tenerife
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Ven a conocernos y lo comprobarás. En Clínica Dental Solymar Cabrera
            realizamos los tratamientos necesarios para cuidar la salud
            bucodental de nuestros pacientes, recuperar la funcionalidad y
            mejorar la estética de la sonrisa.
          </p>

          <a
            href="/#contacto"
            className="mt-7 inline-flex rounded-full bg-[#C8923B] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#A87325]"
          >
            Contactar
          </a>
        </div>

        {/* Stats */}
        <div className="mb-16 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-[#C8923B]/20 bg-white px-6 py-8 text-center shadow-[0_18px_45px_rgba(200,146,59,0.12)]"
            >
              <p className="text-4xl font-extrabold text-[#C8923B]">
                {stat.value}
              </p>
              <p className="mt-2 text-base font-semibold text-neutral-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Texto odontología */}
        <div className="mx-auto mb-12 max-w-5xl rounded-[2rem] border border-[#C8923B]/20 bg-white px-6 py-8 text-center shadow-[0_18px_45px_rgba(200,146,59,0.10)]">
          <h2 className="text-3xl font-extrabold text-[#A87325]">
            Tratamientos odontológicos habituales
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-neutral-700">
            La odontología se encarga de las dolencias de la cavidad oral.
            Nuestro centro abarca la mayoría de las especialidades
            odontológicas, destacando especialmente la implantología, la
            ortodoncia, la estética dental, la odontología general, la
            endodoncia, la periodoncia y la rehabilitación protésica.
          </p>
        </div>

        {/* Tratamientos */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-[#C8923B]/15 bg-white shadow-[0_18px_45px_rgba(200,146,59,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(200,146,59,0.22)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} en Santa Cruz de Tenerife - Clínica Dental Solymar Cabrera`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"></div>

                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#C8923B] shadow-md">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-extrabold text-[#A87325]">
                  {treatment.name}
                </h2>

                <p className="mt-2 text-base leading-7 text-neutral-600">
                  {treatment.note}
                </p>

                <a
                  href="/#contacto"
                  className="mt-6 inline-flex font-bold text-[#C8923B] transition hover:text-[#A87325]"
                >
                  Más información →
                </a>
              </div>
            </article>
          ))}
        </div>

        
        {/* CTA final */}
        <div className="mx-auto mt-16 max-w-5xl rounded-[2rem] border border-[#C8923B]/20 bg-white px-8 py-10 text-center shadow-[0_18px_45px_rgba(200,146,59,0.12)]">
          <h2 className="text-3xl font-extrabold text-[#A87325]">
            ¿Necesitas un tratamiento personalizado?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
            Cada sonrisa es diferente. Si tienes dudas sobre qué tratamiento
            necesitas, contacta con nuestro equipo y te orientaremos de forma
            cercana y profesional.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#contacto"
              className="rounded-full bg-[#C8923B] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#A87325]"
            >
              Contactar
            </a>

            <a
              href="tel:922441744"
              className="rounded-full border-2 border-[#C8923B] px-8 py-4 text-lg font-bold text-[#C8923B] transition hover:bg-[#C8923B] hover:text-white"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AllTreatments