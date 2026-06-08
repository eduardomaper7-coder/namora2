import {
  FaClinicMedical,
  FaTooth,
  FaCouch,
  FaCamera,
} from 'react-icons/fa'

const spaces = [
  {
    icon: <FaClinicMedical />,
    title: 'Gabinete Tenerife',
    text:
      'Un espacio moderno, luminoso y equipado para realizar tratamientos dentales con comodidad y precisión.',
    images: [
      '/gabinete-tenerife-namora-1.webp',
      '/gabinete-tenerife-namora-2.webp',
      '/gabinete-tenerife-namora-3.webp',
      '/gabinete-tenerife-namora-4.webp',
    ],
  },
  {
    icon: <FaTooth />,
    title: 'Gabinete Lanzarote',
    text:
      'Un gabinete preparado para cuidar tu sonrisa en un entorno profesional, cercano y agradable.',
    images: [
      '/gabinete-lanzarote-namora-1.JPG',
      '/gabinete-lanzarote-namora-2.JPG',
      '/gabinete-lanzarote-namora-3.JPG',
      '/gabinete-lanzarote-namora-4.JPG',
    ],
  },
  {
    icon: <FaCouch />,
    title: 'Sala de espera',
    text:
      'Una zona cómoda y tranquila para que cada paciente se sienta acompañado desde el primer momento.',
    images: [
      '/sala-espera-namora-1.JPG',
      '/sala-espera-namora-2.JPG',
      '/sala-espera-namora-3.JPG',
    ],
  },
  {
    icon: <FaCamera />,
    title: 'Escáner intraoral',
    text:
      'Tecnología digital que permite tomar registros precisos de forma rápida, cómoda y sin molestias.',
    images: [
      '/escaner-intraoral-namora-1.JPG',
      '/escaner-intraoral-namora-2.JPG',
      '/escaner-intraoral-namora-3.JPG',
    ],
  },
]

const Facilities = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF6F1] py-24">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E86020]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#E86020]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#E86020]">
            Espacios Namora
          </span>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-neutral-900 md:text-5xl">
            Instalaciones pensadas para tu comodidad
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            En Clínica Dental Namora cuidamos cada detalle para que tu visita
            sea cómoda, tranquila y profesional desde que entras hasta que
            finaliza tu tratamiento.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {spaces.map((space) => (
            <article
              key={space.title}
              className="group overflow-hidden rounded-[2.2rem] bg-white shadow-[0_22px_60px_rgba(232,96,32,0.13)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(232,96,32,0.22)]"
            >
              <div className="grid h-[430px] grid-cols-2 grid-rows-2 gap-2 bg-white p-2">
                {space.images.map((image, index) => (
                  <div
                    key={image}
                    className={`relative overflow-hidden ${
                      index === 0
                        ? 'rounded-tl-[1.8rem]'
                        : index === 1
                        ? 'rounded-tr-[1.8rem]'
                        : index === 2
                        ? 'rounded-bl-[1.8rem]'
                        : 'rounded-br-[1.8rem]'
                    } ${space.images.length === 3 && index === 0 ? 'row-span-2' : ''}`}
                  >
                    <img
                      src={image}
                      alt={`${space.title} Clínica Dental Namora imagen ${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-5 p-7 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E86020] text-2xl text-white shadow-lg">
                  {space.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-neutral-900">
                    {space.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-neutral-600">
                    {space.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities