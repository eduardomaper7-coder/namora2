import { Link } from 'react-router-dom'

const cases = [
  {
    title: 'Diseño de sonrisa',
    description:
      'Planificación digital y carillas directas de composite realizadas en una sola sesión para mejorar la forma, proporción y armonía dental.',
    image: '/diseno-sonrisa.webp',
  },
  {
    title: 'Ortodoncia invisible',
    description:
      'Tratamiento mediante alineadores transparentes y planificación digital avanzada para conseguir una sonrisa más alineada, estética y funcional.',
    image: '/ortodoncia-invisible.webp',
  },
  {
    title: 'Gingivectomía estética',
    description:
      'Remodelado gingival para corregir la sonrisa gingival y mejorar la proporción entre dientes y encías.',
    image: '/gingivectomia-estetica.webp',
  },
]

const ClinicalCasesPreview = () => {
  return (
    <section id="antes-despues" className="bg-[#FFF6F1] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#E86020] px-5 py-2 text-sm font-bold text-white shadow-lg">
            Casos clínicos reales
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-neutral-900 sm:text-5xl">
            Antes y después
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Resultados obtenidos por nuestro equipo mediante tratamientos
            personalizados, planificación digital y odontología enfocada en la
            estética y la funcionalidad.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2.5rem] bg-white shadow-[0_24px_70px_rgba(232,96,32,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(232,96,32,0.18)]"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="p-7">
                <span className="inline-flex rounded-full bg-[#E86020]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#E86020]">
                  Caso clínico real
                </span>

                <h3 className="mt-4 text-2xl font-extrabold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/casos-clinicos"
            className="inline-flex rounded-full bg-[#E86020] px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-[#c94f18]"
          >
            Ver todos los casos clínicos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ClinicalCasesPreview