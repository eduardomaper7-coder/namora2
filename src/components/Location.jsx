const Location = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#C8923B] px-5 py-2 text-sm font-bold text-white">
            Nuestra ubicación
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#A87325] sm:text-5xl">
            Estamos en Santa Cruz de Tenerife
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            Visítanos en nuestra clínica dental. Te recibiremos en un entorno
            cómodo, moderno y pensado para que te sientas tranquilo desde el
            primer momento.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#C8923B]/15 shadow-[0_20px_60px_rgba(200,146,59,0.12)]">

          <div className="bg-[#FBF8F2] px-8 py-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8923B]">
              Dirección
            </p>

            <p className="mt-3 text-xl font-semibold text-neutral-700">
              C/ Tomé Cano, esquina C. Fragata Danmark, 2
            </p>

            <p className="mt-1 text-neutral-500">
              38005 · Santa Cruz de Tenerife
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Calle+Tom%C3%A9+Cano+esquina+Fragata+Danmark+2+Santa+Cruz+de+Tenerife&output=embed"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clínica Dental Solymar Cabrera"
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Calle+Tom%C3%A9+Cano+esquina+Fragata+Danmark+2+Santa+Cruz+de+Tenerife"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#C8923B] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#A87325]"
          >
            Abrir en Google Maps
          </a>
        </div>

      </div>
    </section>
  )
}

export default Location