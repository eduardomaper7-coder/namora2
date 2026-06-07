const FeaturedBox = () => {
  return (
    <section className="bg-[#FBF8F2] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#C8923B]/15 bg-white shadow-[0_24px_70px_rgba(200,146,59,0.14)] lg:min-h-[540px]">
          
          {/* Imagen */}
          <div className="h-[280px] w-full lg:h-[540px] lg:w-[62%]">
            <img
              src="/clinica-dental.jpg"
              alt="Clínica Dental Solymar Cabrera en Santa Cruz de Tenerife"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[1.7rem] border border-[#C8923B]/20 bg-white p-6 shadow-[0_20px_60px_rgba(200,146,59,0.16)] sm:p-8 md:p-10">
              
              <span className="inline-flex rounded-full bg-[#C8923B] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                Somos tu dentista de confianza
              </span>

              <h2 className="mt-5 text-2xl font-extrabold leading-tight text-[#A87325] sm:text-4xl">
                Cuida tu sonrisa con una atención{' '}
                <span className="text-[#C8923B]">personalizada</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En Clínica Dental Solymar Cabrera estudiamos tu caso de forma
                individual para ofrecerte tratamientos dentales adaptados a tus
                necesidades, cuidando la salud bucodental y la estética de tu
                sonrisa.
              </p>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                Ven a conocernos y lo comprobarás. Te esperamos en Santa Cruz de
                Tenerife con un trato cercano, profesional y de confianza.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:922441744"
                  className="inline-flex justify-center rounded-full bg-[#C8923B] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#A87325] sm:px-7 sm:py-4 sm:text-base"
                >
                  Llamar al 922 441 744
                </a>

                <a
                  href="/#contacto"
                  className="inline-flex justify-center rounded-full border-2 border-[#C8923B] px-6 py-3 text-sm font-bold text-[#C8923B] transition hover:bg-[#C8923B] hover:text-white sm:px-7 sm:py-4 sm:text-base"
                >
                  Contactar
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox