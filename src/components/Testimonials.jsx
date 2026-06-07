const reviews = [
  {
    text: 'Después de tantos malos tratos y malas experiencias en otras clínicas odontológicas, llegué aquí donde el trato y el trabajo son excepcionales. Te explican con mucha paciencia cada tratamiento y procedimiento. El trato con los niños es maravilloso. La Dra. Cabrera es muy paciente y cuidadosa. Miriam es encantadora y muy resolutiva. Es un equipo de trabajo fantástico, muy profesional y 100% recomendable.',
    name: 'Adriana Sequera',
    time: 'Hace 6 meses',
  },
  {
    text: 'Llevo años viniendo por su trato y profesionalidad. La Dra. Cabrera es cercana y explica todos los procedimientos para que sepas qué te van a hacer y por qué, algo que transmite mucha tranquilidad. Tengo total confianza en ella y en todo el equipo. Los precios son ajustados y la posibilidad de financiar los tratamientos también se agradece. Recomendable 100%.',
    name: 'Yaiza Suárez Afonso',
    time: 'Hace 7 meses',
  },
  {
    text: 'El equipo es maravilloso. No solo por lo grandes profesionales que son, sino porque además son todas encantadoras. Gracias especialmente a la Dra. Cabrera por explicarme todo al detalle y transmitirme tranquilidad y confianza. Me sentí genial en todo momento y salí feliz después de mi tratamiento. Ya no necesito buscar más porque encontré a las mejores.',
    name: 'Paciente verificado',
    time: 'Reseña de Google',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#FBF8F2] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#C8923B] px-5 py-2 text-sm font-bold text-white shadow-lg">
            Opiniones reales
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#A87325] sm:text-5xl">
            Lo que dicen nuestros pacientes
          </h2>

          <div className="mt-5 text-3xl tracking-[0.15em] text-[#C8923B]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Pacientes que confían en Clínica Dental Solymar Cabrera
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[420px] flex-col rounded-[2rem] border border-[#C8923B]/15 bg-white p-8 shadow-[0_18px_45px_rgba(200,146,59,0.10)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(200,146,59,0.18)]"
            >
              <div className="mb-6 text-xl tracking-[0.15em] text-[#C8923B]">
                ★★★★★
              </div>

              <p className="flex-1 text-[15px] leading-8 text-neutral-700">
                "{review.text}"
              </p>

              <div className="mt-8 border-t border-[#C8923B]/10 pt-6">
                <p className="text-xl font-bold text-[#A87325]">
                  {review.name}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex rounded-full border border-[#C8923B]/20 bg-white px-8 py-4 shadow-[0_10px_30px_rgba(200,146,59,0.10)]">
            <span className="font-semibold text-neutral-700">
              Más pacientes satisfechos cada año ⭐
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials