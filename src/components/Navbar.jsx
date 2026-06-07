const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-[#E86020] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-2 text-center text-[11px] sm:text-sm">
          <a
            href="https://www.google.com/maps/search/?api=1&query=C.+Ramón+y+Cajal,+59,+38006+Santa+Cruz+de+Tenerife"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            📍 C. Ramón y Cajal, 59 · 38006 Santa Cruz de Tenerife
          </a>
        </div>
      </div>

      <header className="fixed left-0 top-[32px] z-40 w-full border-b border-[#E86020]/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="/#inicio" className="flex items-center">
            <img
              src="/logo-namora.webp"
              alt="Clínica Dental Namora"
              className="h-12 w-auto md:h-16"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/#inicio"
              className="font-semibold text-neutral-900 transition hover:text-[#E86020]"
            >
              Inicio
            </a>

            <a
              href="/#servicios"
              className="font-semibold text-neutral-900 transition hover:text-[#E86020]"
            >
              Tratamientos
            </a>

            <a
              href="/equipo"
              className="font-semibold text-neutral-900 transition hover:text-[#E86020]"
            >
              Equipo
            </a>

            <a
              href="/#instalaciones"
              className="font-semibold text-neutral-900 transition hover:text-[#E86020]"
            >
              Instalaciones
            </a>

            <a
              href="/#contacto"
              className="font-semibold text-neutral-900 transition hover:text-[#E86020]"
            >
              Contacto
            </a>
          </nav>

          <a
            href="tel:822612870"
            className="whitespace-nowrap rounded-full bg-[#E86020] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#c94f18] md:px-6"
          >
            📞 822 61 28 70
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar