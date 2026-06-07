import {
  FaHeart,
  FaUserMd,
  FaLaptopMedical,
  FaSmile,
} from 'react-icons/fa'

const features = [
  {
    icon: <FaHeart />,
    title: 'Trato cercano',
    text:
      'Queremos que te sientas cómodo desde la primera visita, con explicaciones claras y una atención personalizada.',
  },
  {
    icon: <FaUserMd />,
    title: 'Profesionales comprometidos',
    text:
      'Te acompañamos durante todo el tratamiento para ayudarte a tomar decisiones con tranquilidad y confianza.',
  },
  {
    icon: <FaLaptopMedical />,
    title: 'Tecnología digital',
    text:
      'Utilizamos herramientas modernas para mejorar la precisión de los diagnósticos y la experiencia del paciente.',
  },
  {
    icon: <FaSmile />,
    title: 'Resultados naturales',
    text:
      'Buscamos sonrisas sanas, funcionales y estéticas, respetando siempre la armonía de cada paciente.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#E86020] px-5 py-2 text-sm font-bold text-white">
            Clínica Dental Namora
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-neutral-900 sm:text-5xl">
            Una forma diferente de cuidar tu sonrisa
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            En Namora combinamos atención cercana, tecnología y planificación
            personalizada para que cada paciente reciba el tratamiento más
            adecuado para sus necesidades.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 rounded-[2rem] border border-[#E86020]/10 bg-[#FFF6F1] p-8 shadow-[0_18px_45px_rgba(232,96,32,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(232,96,32,0.15)]"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#E86020] text-2xl text-white shadow-lg">
                {item.icon}
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#E86020] p-10 text-center text-white shadow-[0_24px_70px_rgba(232,96,32,0.20)]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Clínica Dental Namora
          </p>

          <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Tu salud bucodental merece tiempo, atención y confianza
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/90">
            Nuestro objetivo es ayudarte a sonreír con tranquilidad mediante
            tratamientos personalizados, explicaciones claras y una atención
            cercana en Santa Cruz de Tenerife.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs