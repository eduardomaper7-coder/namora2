import { Link } from 'react-router-dom'

const professionals = [
  {
    name: 'Dra. Luz Marina López Acevedo',
    role: 'Odontóloga',
    image: '/dra-luz-marina-lopez-acevedo.png',
    text:
      'Odontóloga especializada en periodoncia, rehabilitación neuro oclusal y estética facial con ácido hialurónico. Su enfoque integral combina salud bucal, funcionalidad y armonía estética.',
  },
  {
    name: 'Dr. Juan Pablo López Defilló',
    role: 'Odontólogo',
    image: '/dr-juan-pablo-lopez-defillo.png',
    text:
      'Odontólogo especializado en estética dental, rehabilitación protésica y diseño de sonrisa digital. Aplica técnicas avanzadas como First Fit y blanqueamiento dental para lograr resultados precisos y naturales.',
  },
  {
    name: 'Carmen Rosa Sánchez',
    role: 'Higienista Dental',
    image: '/carmen-rosa-sanchez.png',
    text:
      'Con amplia trayectoria en higiene dental y asistencia clínica, destaca por su dedicación, calidez y cercanía con los pacientes. Su experiencia y compromiso son garantía de confianza.',
  },
]

const Equipo = () => {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#FFF6F1] px-4 pb-20 pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#E86020]">
                Equipo Namora
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
                Nuestros profesionales dentales
              </h1>

              <p className="mt-6 text-xl leading-9 text-neutral-600">
                Comprometidos con tu salud bucal, la estética dental y tu
                bienestar.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] shadow-[0_24px_70px_rgba(232,96,32,0.16)]">
              <img
  src="/DSC_0027.JPG"
  alt="Clínica Dental Namora en Santa Cruz de Tenerife"
  className="h-[420px] w-full object-cover"
/>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8">
            {professionals.map((person, index) => (
              <article
                key={person.name}
                className={`grid overflow-hidden rounded-[2.5rem] bg-[#FFF6F1] shadow-[0_20px_60px_rgba(232,96,32,0.12)] md:grid-cols-2 ${
                  index % 2 !== 0 ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="min-h-[360px]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex items-center p-8 sm:p-10 lg:p-14">
                  <div>
                    <span className="inline-flex rounded-full bg-[#E86020] px-5 py-2 text-sm font-bold text-white">
                      {person.role}
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                      {person.name}
                    </h2>

                    <p className="mt-5 text-lg leading-9 text-neutral-600">
                      {person.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF6F1] px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#E86020]">
              Clínica Dental Namora
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl">
              Un entorno pensado para que te sientas bien
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-600">
              Sabemos que una buena experiencia comienza con un buen entorno.
              Por eso, en Namora hemos creado un espacio moderno, acogedor y
              equipado con tecnología avanzada.
            </p>

            <p className="mt-4 text-lg leading-9 text-neutral-600">
              En nuestra clínica dental en Santa Cruz de Tenerife ofrecemos un
              servicio integral centrado en salud bucal, estética dental y
              bienestar general.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:822612870"
                className="inline-flex justify-center rounded-full bg-[#E86020] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#c94f18]"
              >
                Llamar ahora
              </a>

              <a
                href="https://wa.me/34660399180"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border-2 border-[#E86020] bg-white px-8 py-4 font-bold text-[#E86020] transition hover:bg-[#E86020] hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] shadow-[0_24px_70px_rgba(232,96,32,0.16)]">
            <img
  src="/DSC_0018.JPG"
  alt="Instalaciones de Clínica Dental Namora"
  className="h-[520px] w-full object-cover"
/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Equipo