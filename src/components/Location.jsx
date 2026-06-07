const Location = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#E86020] px-5 py-2 text-sm font-bold text-white">
            Dónde encontrarnos
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-neutral-900 sm:text-5xl">
            Clínica Dental Namora
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Estamos ubicados en una zona céntrica de Santa Cruz de Tenerife,
            con fácil acceso para nuestros pacientes.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] shadow-[0_24px_70px_rgba(232,96,32,0.12)]">
          <div className="bg-[#FFF6F1] px-8 py-8 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E86020]">
              Dirección
            </p>

            <p className="mt-3 text-2xl font-extrabold text-neutral-900">
              C. Ramón y Cajal, 59
            </p>

            <p className="mt-2 text-lg text-neutral-600">
              38006 · Santa Cruz de Tenerife
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps?q=C.+Ramón+y+Cajal,+59,+38006+Santa+Cruz+de+Tenerife&output=embed"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clínica Dental Namora"
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=C.+Ramón+y+Cajal,+59,+38006+Santa+Cruz+de+Tenerife"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#E86020] px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-[#c94f18]"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location