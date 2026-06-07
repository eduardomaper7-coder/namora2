const cases = [
  {
    title: 'Diseño de sonrisa',
    description:
      'Mejora integral de la estética dental para conseguir una sonrisa más armónica, natural y luminosa.',
    before: '/antes-diseno-sonrisa.jpg',
    after: '/despues-diseno-sonrisa.jpg',
  },
  {
    title: 'Cierre de diastema',
    description:
      'Corrección del espacio entre los incisivos mediante composite sin desgaste del diente natural.',
    before: '/antes-cierre-diastema.jpg',
    after: '/despues-cierre-diastema.jpg',
  },
  {
    title: 'Blanqueamiento y restauración',
    description:
      'Combinación de blanqueamiento dental y restauraciones estéticas para conseguir una sonrisa más uniforme.',
    before: '/antes-blanqueamiento-restauracion.jpg',
    after: '/despues-blanqueamiento-restauracion.jpg',
  },
  {
    title: 'Blanqueamiento dental',
    description:
      'Tratamiento estético para aclarar el color dental y devolver luminosidad a la sonrisa.',
    before: '/antes-blanqueamiento.jpg',
    after: '/despues-blanqueamiento.jpg',
  },
  {
    title: 'Coronas de zirconio',
    description:
      'Restauración estética mediante coronas de zirconio para mejorar forma, alineación y apariencia dental.',
    before: '/antes-coronas-zirconio.jpg',
    after: '/despues-coronas-zirconio.jpg',
  },
  {
    title: 'Ortodoncia invisible',
    description:
      'Corrección de la alineación dental mediante alineadores transparentes para conseguir una sonrisa más armónica.',
    before: '/antes-ortodoncia-invisible.jpg',
    after: '/despues-ortodoncia-invisible.jpg',
  },
  {
    title: 'Restauración estética con composite',
    description:
      'Cierre de espacios y mejora de la forma dental mediante restauraciones conservadoras.',
    before: '/antes-restauracion-composite.jpg',
    after: '/despues-restauracion-composite.jpg',
  },
  {
    title: 'Rehabilitación sobre implantes',
    description:
      'Recuperación completa de la funcionalidad y estética dental mediante rehabilitación fija sobre implantes.',
    before: '/antes-rehabilitacion-implantes.jpg',
    after: '/despues-rehabilitacion-implantes.jpg',
  },
  {
    title: 'Corrección de sobremordida',
    description:
      'Tratamiento ortodóncico para conseguir una mordida equilibrada y una sonrisa más estética.',
    before: '/antes-sobremordida.jpg',
    after: '/despues-sobremordida.jpg',
  },
  {
    title: 'Caninos sin espacio',
    description:
      'Reposicionamiento de caninos mediante ortodoncia sin necesidad de extraer otras piezas dentales.',
    before: '/antes-caninos-sin-espacio.jpg',
    after: '/despues-caninos-sin-espacio.jpg',
  },
  {
    title: 'Rehabilitación de bruxismo',
    description:
      'Reconstrucción funcional y estética en pacientes con desgaste dental severo provocado por bruxismo.',
    before: '/antes-bruxismo.png',
    after: '/despues-bruxismo.jpg',
  },
]

const BeforeAfter = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8923B]">
            Casos reales
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#A87325] md:text-5xl">
            Antes y después
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Los tratamientos dentales no solo recuperan la salud bucodental,
            también transforman la sonrisa y mejoran la confianza de nuestros
            pacientes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[2rem] border border-[#C8923B]/15 bg-[#FBF8F2] shadow-[0_18px_45px_rgba(200,146,59,0.12)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(200,146,59,0.18)]"
            >
              <div className="grid grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.before}
                    alt={`Antes ${item.title} - Clínica Dental Solymar Cabrera`}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-64"
                    loading="lazy"
                  />
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={item.after}
                    alt={`Después ${item.title} - Clínica Dental Solymar Cabrera`}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-64"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-extrabold text-[#A87325]">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}

          <article className="flex min-h-[420px] flex-col justify-center rounded-[2rem] border border-[#C8923B]/20 bg-[#C8923B] p-8 text-center text-white shadow-[0_18px_45px_rgba(200,146,59,0.22)] transition hover:-translate-y-1 hover:bg-[#A87325]">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Tu caso puede ser el siguiente
            </span>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight">
              ¿Quieres mejorar tu sonrisa?
            </h3>

            <p className="mt-4 leading-8 text-white/90">
              Estudiaremos tu caso de forma personalizada para ayudarte a
              conseguir una sonrisa sana, funcional y estética.
            </p>

            <div className="mt-8 flex flex-col gap-3">
             <a
  href="tel:922441744"
  className="rounded-full bg-white px-6 py-4 font-bold !text-[#C8923B] transition hover:bg-[#FBF8F2]"
>
  Llamar ahora
</a>

              <a
                href="https://wa.me/34616154605"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white px-6 py-4 font-bold text-white transition hover:bg-white hover:text-[#A87325]"
              >
                Pedir cita por WhatsApp
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter