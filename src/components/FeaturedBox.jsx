const FeaturedBox = () => {
  const whatsappUrl =
    'https://wa.me/34660399180?text=Hola%2C%20quiero%20pedir%20cita%20en%20Cl%C3%ADnica%20Dental%20Namora.'

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-[0_24px_70px_rgba(232,96,32,0.14)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative h-[520px] lg:h-[640px]">
            <img
              src="/clinica-namora-principal.webp"
              alt="Clínica Dental Namora en Santa Cruz de Tenerife"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-[1.7rem] bg-white/95 p-5 shadow-xl backdrop-blur sm:right-auto sm:max-w-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E86020]">
                Clínica Dental Namora
              </p>

              <p className="mt-2 text-2xl font-extrabold text-neutral-900">
                En Santa Cruz de Tenerife
              </p>
            </div>

            <div className="absolute -right-6 top-10 hidden w-48 overflow-hidden rounded-[1.7rem] border-4 border-white shadow-2xl lg:block">
              <img
                src="/clinica-namora-equipo.webp"
                alt="Equipo de Clínica Dental Namora"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center bg-[#FFF6F1] p-6 sm:p-10 lg:p-14">
            <div>
              <span className="inline-flex rounded-full bg-[#E86020] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                Tu sonrisa, nuestra prioridad
              </span>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight text-neutral-900 sm:text-5xl">
                Cuidamos tu sonrisa como si fuera nuestra
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
                En Clínica Dental Namora creemos que una buena experiencia
                dental empieza por escuchar. Por eso dedicamos el tiempo
                necesario a entender tus necesidades y explicarte cada
                tratamiento de forma clara y cercana.
              </p>

              <p className="mt-4 text-base leading-8 text-neutral-600 sm:text-lg">
                Nuestro objetivo es ayudarte a conseguir una sonrisa sana,
                funcional y natural en un entorno cómodo y profesional en Santa
                Cruz de Tenerife.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:822612870"
                  className="inline-flex justify-center rounded-full bg-[#E86020] px-8 py-4 font-bold text-white shadow-lg transition hover:bg-[#c94f18]"
                >
                  Llamar al 822 61 28 70
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full border-2 border-[#E86020] bg-white px-8 py-4 font-bold text-[#E86020] shadow-lg transition hover:bg-[#E86020] hover:text-white"
                >
                  WhatsApp
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#E86020]/10 bg-white p-5 shadow-sm">
                  <p className="font-bold text-[#E86020]">Atención cercana</p>
                </div>

                <div className="rounded-2xl border border-[#E86020]/10 bg-white p-5 shadow-sm">
                  <p className="font-bold text-[#E86020]">Tecnología digital</p>
                </div>

                <div className="rounded-2xl border border-[#E86020]/10 bg-white p-5 shadow-sm">
                  <p className="font-bold text-[#E86020]">
                    Tratamientos personalizados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox