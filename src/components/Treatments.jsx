import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Limpieza dental profesional',
    description:
      'Elimina placa, sarro y manchas superficiales para mantener una sonrisa sana, fresca y cuidada.',
    image: '/funda-porcelana-siliconio-usera.jpg',
  },
  {
    title: 'Implantes dentales',
    description:
      'Recupera dientes perdidos con soluciones estables, naturales y pensadas para mejorar tu estética y masticación.',
    image: '/implantes-dentales-usera.jpg',
  },
  {
    title: 'Ortodoncia',
    description:
      'Corrige la posición de tus dientes y mejora tu mordida con tratamientos adaptados a cada paciente.',
    image: '/tratamiento-encias-usera.webp',
  },
  {
    title: 'Blanqueamiento dental',
    description:
      'Mejora el color de tus dientes de forma segura para conseguir una sonrisa más luminosa y estética.',
    image: '/endodoncia-usera.png',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-[#FBF8F2] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8923B]">
            Tratamientos dentales
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#A87325] sm:text-4xl md:text-5xl">
            Servicios dentales en Santa Cruz de Tenerife
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">
            En Clínica Dental Solymar Cabrera cuidamos tu sonrisa con
            tratamientos personalizados, tecnología actual y una atención cercana
            en Santa Cruz de Tenerife.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#C8923B]/15 bg-white shadow-[0_18px_45px_rgba(200,146,59,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(200,146,59,0.20)] sm:flex-row"
            >
              <div className="relative h-60 w-full overflow-hidden sm:h-auto sm:w-[42%]">
                <img
                  src={service.image}
                  alt={`${service.title} en Santa Cruz de Tenerife - Clínica Dental Solymar Cabrera`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
              </div>

              <div className="flex w-full flex-col justify-between p-7 sm:w-[58%]">
                <div>
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FBF8F2] text-lg font-bold text-[#C8923B] ring-1 ring-[#C8923B]/20">
                    {index + 1}
                  </span>

                  <h3 className="text-xl font-extrabold text-[#A87325] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/tratamientos"
                    className="inline-flex items-center gap-2 text-base font-bold text-[#C8923B] transition hover:text-[#A87325]"
                  >
                    Más información →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[2rem] border border-[#C8923B]/20 bg-white px-6 py-10 text-center shadow-[0_18px_45px_rgba(200,146,59,0.12)]">
          <p className="text-xl font-bold text-[#A87325]">
            ¿Buscas otro tratamiento dental?
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            También podemos ayudarte con revisiones, empastes, prótesis,
            endodoncia, estética dental y cuidado de encías.
          </p>

          <Link
            to="/tratamientos"
            className="mt-6 inline-flex items-center rounded-full bg-[#C8923B] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#A87325]"
          >
            Ver todos los tratamientos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Treatments