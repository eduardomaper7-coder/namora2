import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Higiene dental profesional',
    description:
      'Una limpieza profunda para eliminar placa, sarro y manchas, dejando tu boca fresca y tu sonrisa más cuidada.',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Implantes dentales',
    description:
      'Recupera la seguridad al sonreír y masticar con soluciones fijas, estéticas y adaptadas a tu caso.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Ortodoncia',
    description:
      'Alineamos tu sonrisa y mejoramos tu mordida con tratamientos cómodos, planificados y personalizados.',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Blanqueamiento dental',
    description:
      'Ilumina tu sonrisa con un tratamiento estético seguro, eficaz y pensado para lograr un resultado natural.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-end gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#E86020]">
              Tratamientos Namora
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Cuidamos tu sonrisa con tratamientos a medida
            </h2>
          </div>

          <p className="text-lg leading-8 text-neutral-600 sm:text-xl">
            En Clínica Dental Namora, en Santa Cruz de Tenerife, combinamos
            atención cercana, estética dental y planificación personalizada para
            que cada visita sea cómoda, clara y eficaz.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-[2rem] bg-[#FFF6F1] shadow-[0_18px_45px_rgba(232,96,32,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(232,96,32,0.22)] ${
                index === 0 || index === 3 ? 'lg:translate-y-8' : ''
              }`}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} en Clínica Dental Namora, Santa Cruz de Tenerife`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-extrabold text-[#E86020] shadow-lg">
                  {index + 1}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-neutral-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {service.description}
                </p>

                <Link
                  to="/tratamientos"
                  className="mt-6 inline-flex items-center font-bold text-[#E86020] transition hover:text-[#c94f18]"
                >
                  Más información →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid overflow-hidden rounded-[2rem] bg-[#E86020] shadow-[0_24px_70px_rgba(232,96,32,0.25)] md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
              Primera visita
            </p>

            <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              ¿No sabes qué tratamiento necesitas?
            </h3>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
              Te orientamos con una valoración personalizada para encontrar la
              opción más adecuada para tu sonrisa.
            </p>
          </div>

          <div className="flex items-center justify-center bg-white/10 p-8">
            <Link
              to="/tratamientos"
              className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-extrabold text-[#E86020] shadow-lg transition hover:bg-white/90"
            >
              Ver todos los tratamientos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Treatments