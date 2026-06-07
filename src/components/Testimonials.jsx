const reviews = [
  {
    text:
      'Acudí a Layra por un frenillo corto de mi bebé de 2 meses. El trato ha sido fabuloso y tras la operación se preocuparon de cómo fue evolucionando mi pequeña. Solo tengo palabras de agradecimiento para ella y para todo el equipo.',
    name: 'Carolina Luis Torres',
    time: 'Hace 4 meses',
  },
  {
    text:
      'Estoy súper contenta de haber dado con una clínica tan cercana y profesional. La clínica es muy acogedora y los profesionales han sido espectaculares conmigo. Gracias al Dr. Juan Pablo, Luzma y Ainhoa. Un 10 sobre 10.',
    name: 'Aynara Perez Medina',
    time: 'Hace 4 meses',
  },
  {
    text:
      'Si buscas una clínica de confianza, donde te sientas seguro, Namora es tu lugar. Los profesionales son de lo mejor del sector, claros, transparentes y te asesoran en todo. La Dra. Luz Marina tiene manos de oro.',
    name: 'Paciente de Namora',
    time: 'Reseña de Google',
  },
]

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E86020]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-[#E86020]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#E86020] px-5 py-2 text-sm font-bold text-white shadow-lg">
            Opiniones reales
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-neutral-900 sm:text-5xl">
            Pacientes que confían en Clínica Dental Namora
          </h2>

          <div className="mt-5 text-3xl tracking-[0.15em] text-[#E86020]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Reseñas de pacientes que destacan nuestro trato cercano,
            profesionalidad y confianza.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className={`flex min-h-[380px] flex-col rounded-[2rem] border border-[#E86020]/10 bg-[#FFF6F1] p-8 shadow-[0_18px_45px_rgba(232,96,32,0.10)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(232,96,32,0.18)] ${
                index === 1 ? 'lg:-translate-y-6' : ''
              }`}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="text-xl tracking-[0.15em] text-[#E86020]">
                  ★★★★★
                </div>

                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#E86020] shadow-sm">
                  Google
                </span>
              </div>

              <p className="flex-1 text-[15px] leading-8 text-neutral-700">
                “{review.text}”
              </p>

              <div className="mt-8 border-t border-[#E86020]/10 pt-6">
                <p className="text-xl font-extrabold text-neutral-900">
                  {review.name}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-[2rem] bg-[#E86020] px-8 py-10 text-center text-white shadow-[0_24px_70px_rgba(232,96,32,0.22)]">
          <p className="text-3xl font-extrabold">
            Tu experiencia también importa
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/90">
            En Namora trabajamos cada día para que cada paciente se sienta
            escuchado, acompañado y seguro durante su tratamiento.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials