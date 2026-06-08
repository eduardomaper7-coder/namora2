import { useEffect, useState } from 'react'
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
      '/gabinete-lanzarote-namora-2.webp',
      '/gabinete-lanzarote-namora-3.webp',
    ],
  },
  {
    icon: <FaCouch />,
    title: 'Sala de espera',
    text:
      'Una zona cómoda y tranquila para que cada paciente se sienta acompañado desde el primer momento.',
    images: [
      '/sala-espera-namora-1.webp',
      '/sala-espera-namora-2.webp',
      '/sala-espera-namora-3.webp',
    ],
  },
  {
    icon: <FaCamera />,
    title: 'Escáner intraoral',
    text:
      'Tecnología digital que permite tomar registros precisos de forma rápida, cómoda y sin molestias.',
    images: [
      '/escaner-intraoral-namora-1.webp',
      '/escaner-intraoral-namora-2.webp',
      '/escaner-intraoral-namora-3.webp',
    ],
  },
]

const Facilities = () => {
  const [activeIndexes, setActiveIndexes] = useState(
    spaces.map(() => 0)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prev) =>
        prev.map((index, spaceIndex) =>
          (index + 1) % spaces[spaceIndex].images.length
        )
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

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
          {spaces.map((space, spaceIndex) => (
            <article
              key={space.title}
              className="group overflow-hidden rounded-[2.2rem] bg-white shadow-[0_22px_60px_rgba(232,96,32,0.13)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(232,96,32,0.22)]"
            >
              <div className="relative h-[430px] overflow-hidden bg-white">
                {space.images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${space.title} Clínica Dental Namora imagen ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                      activeIndexes[spaceIndex] === index
                        ? 'scale-100 opacity-100'
                        : 'scale-105 opacity-0'
                    }`}
                    loading="lazy"
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                <div className="absolute bottom-5 left-5 flex gap-2">
                  {space.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setActiveIndexes((prev) =>
                          prev.map((item, i) =>
                            i === spaceIndex ? index : item
                          )
                        )
                      }
                      className={`h-2.5 rounded-full transition ${
                        activeIndexes[spaceIndex] === index
                          ? 'w-8 bg-white'
                          : 'w-2.5 bg-white/50'
                      }`}
                      aria-label={`Ver imagen ${index + 1} de ${space.title}`}
                    />
                  ))}
                </div>
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