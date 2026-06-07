const treatments = [
  {
    name: 'Implantología',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    note: 'Implantes dentales, coronas y rehabilitación fija sobre implantes.',
  },
  {
    name: 'Ortodoncia invisible',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
    note: 'Alineadores transparentes para corregir la sonrisa de forma discreta.',
  },
  {
    name: 'Ortodoncia convencional',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    note: 'Brackets para mejorar la mordida, la alineación dental y la estética.',
  },
  {
    name: 'Periodoncia',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80',
    note: 'Tratamiento de encías, sangrado, inflamación y enfermedad periodontal.',
  },
  {
    name: 'Odontología general',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    note: 'Revisiones, limpiezas, empastes, caries y cuidado bucodental diario.',
  },
  {
    name: 'Endodoncia',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    note: 'Tratamiento para conservar dientes dañados y evitar extracciones.',
  },
  {
    name: 'Blanqueamiento dental',
    image:
      'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=1200&q=80',
    note: 'Tratamiento estético para conseguir una sonrisa más luminosa.',
  },
  {
    name: 'Prótesis implantológica',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    note: 'Prótesis fija sobre implantes para recuperar funcionalidad y estética.',
  },
  {
    name: 'Prótesis fija',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    note: 'Coronas, carillas y restauraciones en zirconio o cerámica.',
  },
  {
    name: 'Diseño de sonrisa',
    image:
      'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=1200&q=80',
    note: 'Tratamientos estéticos para mejorar forma, color y armonía dental.',
  },
  {
    name: 'Bruxismo y A.T.M.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    note: 'Férulas de descarga y tratamiento de molestias mandibulares.',
  },
  {
    name: 'Cirugía oral',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80',
    note: 'Exodoncias, cordales y otros tratamientos quirúrgicos dentales.',
  },
]

const AllTreatments = () => {
  return (
    <main className="bg-white pb-20 pt-36">
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#E86020]">
              Tratamientos dentales
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
              Soluciones dentales para cuidar tu sonrisa
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-600 sm:text-xl">
              En Clínica Dental Namora ofrecemos tratamientos personalizados
              para mejorar tu salud bucodental, recuperar la funcionalidad y
              conseguir una sonrisa natural y estética.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#contacto"
                className="inline-flex justify-center rounded-full bg-[#E86020] px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-[#c94f18]"
              >
                Pedir cita
              </a>

              <a
                href="tel:822612870"
                className="inline-flex justify-center rounded-full border-2 border-[#E86020] bg-white px-8 py-4 text-lg font-extrabold text-[#E86020] transition hover:bg-[#E86020] hover:text-white"
              >
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-[#FFF6F1] p-3 shadow-[0_24px_70px_rgba(232,96,32,0.14)]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
              alt="Tratamientos dentales en Clínica Dental Namora"
              className="h-[460px] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-[#FFF6F1] p-8 text-center shadow-[0_20px_60px_rgba(232,96,32,0.10)]">
          <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Odontología integral en Santa Cruz de Tenerife
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-neutral-600">
            Abarcamos diferentes áreas de la odontología para ofrecerte una
            atención completa: implantología, ortodoncia, estética dental,
            periodoncia, endodoncia, prótesis, cirugía oral y odontología
            general.
          </p>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className={`group overflow-hidden rounded-[2rem] bg-[#FFF6F1] shadow-[0_18px_45px_rgba(232,96,32,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(232,96,32,0.18)] ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? 'h-80' : 'h-56'
                }`}
              >
                <img
                  src={treatment.image}
                  alt={`${treatment.name} en Clínica Dental Namora`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#E86020] shadow-md">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h2 className="absolute bottom-5 left-5 right-5 text-2xl font-extrabold text-white">
                  {treatment.name}
                </h2>
              </div>

              <div className="p-6">
                <p className="text-base leading-7 text-neutral-600">
                  {treatment.note}
                </p>

                <a
                  href="/#contacto"
                  className="mt-6 inline-flex font-bold text-[#E86020] transition hover:text-[#c94f18]"
                >
                  Consultar tratamiento →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl rounded-[2.5rem] bg-[#E86020] px-8 py-12 text-center text-white shadow-[0_24px_70px_rgba(232,96,32,0.25)]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Clínica Dental Namora
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            ¿No sabes qué tratamiento necesitas?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/90">
            Cada sonrisa es diferente. Contacta con nuestro equipo y te
            orientaremos de forma cercana, clara y profesional.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#contacto"
              className="rounded-full bg-white px-8 py-4 text-lg font-extrabold !text-[#E86020] shadow-lg transition hover:bg-white/90"
            >
              Pedir cita
            </a>

            <a
              href="tel:822612870"
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-extrabold text-white transition hover:bg-white hover:!text-[#E86020]"
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