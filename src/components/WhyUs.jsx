import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/clinica-dental-namora-interior.JPG',
    alt: 'Interior de Clínica Dental Namora en Santa Cruz de Tenerife',
  },
  {
    image: '/clinica-dental-namora-gabinete.JPG',
    alt: 'Gabinete dental de Clínica Dental Namora en Santa Cruz de Tenerife',
  },
  {
    image: '/equipo-clinica-dental-namora.JPG',
    alt: 'Equipo de Clínica Dental Namora en Santa Cruz de Tenerife',
  },
]

const values = [
  {
    number: '01',
    title: 'Atención cercana',
    text: 'Te escuchamos, resolvemos tus dudas y te acompañamos en cada paso del tratamiento.',
  },
  {
    number: '02',
    title: 'Tratamientos a medida',
    text: 'Cada sonrisa es diferente. Por eso diseñamos planes personalizados según tus necesidades.',
  },
  {
    number: '03',
    title: 'Estética y salud',
    text: 'Buscamos resultados naturales, funcionales y pensados para que sonrías con confianza.',
  },
  {
    number: '04',
    title: 'Clínica en Santa Cruz',
    text: 'Un espacio cómodo y profesional para cuidar tu salud bucodental cerca de ti.',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#E86020]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E86020]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#E86020]">
              Clínica Dental Namora
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Una clínica pensada para que te sientas tranquilo
            </h2>
          </div>

          <p className="text-lg leading-8 text-neutral-600 sm:text-xl">
            En Namora cuidamos tu sonrisa con un trato humano, explicaciones
            claras y tratamientos personalizados en Santa Cruz de Tenerife.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FFF6F1] p-3 shadow-[0_24px_70px_rgba(232,96,32,0.16)]">
            <div className="relative h-[520px] overflow-hidden rounded-[2rem]">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/95 p-6 shadow-xl backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E86020]">
                  Tu sonrisa, en buenas manos
                </p>

                <p className="mt-2 text-2xl font-extrabold text-neutral-900">
                  Odontología cercana, estética y personalizada
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition ${
                    currentSlide === index
                      ? 'w-8 bg-[#E86020]'
                      : 'w-3 bg-black/20'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {values.map((item) => (
              <div
                key={item.number}
                className="group rounded-[2rem] border border-[#E86020]/10 bg-white p-6 shadow-[0_16px_45px_rgba(232,96,32,0.10)] transition hover:-translate-y-1 hover:bg-[#FFF6F1]"
              >
                <div className="flex gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E86020] text-lg font-extrabold text-white shadow-lg">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-extrabold text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-base leading-7 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[2rem] bg-[#E86020] p-6 text-white shadow-[0_20px_55px_rgba(232,96,32,0.25)]">
              <p className="text-2xl font-extrabold">
                ¿Quieres conocernos?
              </p>

              <p className="mt-2 text-white/90">
                Pide tu cita y te ayudamos a encontrar el tratamiento más
                adecuado para ti.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
  <a
    href="/#contacto"
    className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-[#C84A12] px-4 py-3 font-bold text-white transition hover:bg-[#B84310]"
  >
    Contactar
  </a>

  <a
    href="tel:822612870"
    className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full border-2 border-white px-4 py-3 font-bold text-white transition hover:bg-white hover:text-[#E86020]"
  >
    Llamar ahora
  </a>

  <a
    href="/equipo"
className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-3 font-bold !text-[#E86020] transition hover:bg-white/90"  >
    Ver equipo
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs