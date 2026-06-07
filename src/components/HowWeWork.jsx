import {
  FaTooth,
  FaSmile,
  FaAward,
  FaUserMd,
} from 'react-icons/fa'

const features = [
  {
    icon: <FaAward />,
    title: '20 años de experiencia',
    text: 'Dos décadas ayudando a nuestros pacientes a recuperar la salud y la confianza en su sonrisa.',
  },
  {
    icon: <FaUserMd />,
    title: 'Atención personalizada',
    text: 'Cada paciente es único. Estudiamos cada caso para ofrecer el tratamiento más adecuado.',
  },
  {
    icon: <FaTooth />,
    title: 'Implantología avanzada',
    text: 'Trabajamos con sistemas y materiales fiables para recuperar la funcionalidad y estética dental.',
  },
  {
    icon: <FaSmile />,
    title: 'Estética dental',
    text: 'Ortodoncia invisible, blanqueamientos, carillas y diseño de sonrisa para resultados naturales.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FBF8F2] py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-[#C8923B] px-5 py-2 text-sm font-bold text-white">
            Clínica Dental Solymar Cabrera
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#A87325] sm:text-5xl">
            Tu sonrisa en las mejores manos
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Combinamos experiencia, tecnología y atención cercana para ofrecer
            tratamientos dentales adaptados a cada paciente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-[#C8923B]/15 bg-white p-8 text-center shadow-[0_18px_45px_rgba(200,146,59,0.10)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(200,146,59,0.18)]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C8923B] text-2xl text-white">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-[#A87325]">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-white p-8 text-center shadow-[0_18px_45px_rgba(200,146,59,0.10)]">
          <p className="text-lg leading-8 text-neutral-700">
            Nuestro centro abarca la mayoría de las especialidades odontológicas,
            destacando la implantología, la ortodoncia invisible, la estética
            dental, la periodoncia, la endodoncia y la rehabilitación protésica.
          </p>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs