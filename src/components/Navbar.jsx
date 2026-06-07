const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-[#C8923B] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-1 text-center text-[11px] sm:text-sm">
          <a
            href="https://www.google.com/maps/search/?api=1&query=C%2F+Tom%C3%A9+Cano%2C+C.+Fragata+Danmark%2C+2+Esquina%2C+38005+Santa+Cruz+de+Tenerife"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            📍 C/ Tomé Cano, C. Fragata Danmark, 2 Esquina, 38005 Santa Cruz de Tenerife
          </a>
        </div>
      </div>

      <header className="fixed left-0 top-[24px] z-40 w-full border-b border-[#C8923B]/20 bg-white/95 backdrop-blur-md sm:top-[28px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          
          <a href="/#inicio" className="flex items-center gap-2">
            <img
              src="/logo-solymar.png"
              alt="Solymar Cabrera"
              className="h-8 w-auto md:h-10"
            />

            <img
              src="/logo-solymar-icono.png"
              alt="Logo Solymar Cabrera"
              className="h-6 w-auto md:h-7"
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/#inicio"
              className="text-base font-semibold text-black transition hover:text-[#C8923B]"
            >
              Inicio
            </a>

            <a
              href="/#servicios"
              className="text-base font-semibold text-black transition hover:text-[#C8923B]"
            >
              Tratamientos
            </a>

            <a
              href="/#antes-despues"
              className="text-base font-semibold text-black transition hover:text-[#C8923B]"
            >
              Antes y Después
            </a>

            <a
              href="/equipo"
              className="text-base font-semibold text-black transition hover:text-[#C8923B]"
            >
              Equipo
            </a>

            <a
              href="/#instalaciones"
              className="text-base font-semibold text-black transition hover:text-[#C8923B]"
            >
              Instalaciones
            </a>

            <a
              href="/#contacto"
              className="text-base font-semibold text-black transition hover:text-[#C8923B]"
            >
              Contacto
            </a>
          </nav>

          <a
            href="tel:922441744"
            className="whitespace-nowrap rounded-lg bg-[#C8923B] px-3 py-2 text-xs font-bold text-white shadow-md transition hover:bg-[#A87325] md:px-5 md:py-2.5 md:text-sm"
          >
            📞 <span className="hidden md:inline">Llama al</span> 922 441 744
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar