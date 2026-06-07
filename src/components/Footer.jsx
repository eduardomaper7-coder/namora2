import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#E86020] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <img
              src="/logo-namora.webp"
              alt="Clínica Dental Namora"
              className="h-16 w-auto"
            />

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Clínica Dental Namora en Santa Cruz de Tenerife. Un espacio donde
              la salud, la estética dental y la atención personalizada se unen
              para ayudarte a sonreír con confianza.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/namoradental/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-white hover:text-[#E86020]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/namoratedetusonrisa/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-white hover:text-[#E86020]"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/34660399180"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-xl transition hover:bg-white hover:text-[#E86020]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="lg:text-right">
            <h3 className="text-3xl font-extrabold">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-lg text-white/90">
              <p>
                C. Ramón y Cajal, 59
                <br />
                38006 Santa Cruz de Tenerife
              </p>

              <p>
                <a
                  href="tel:822612870"
                  className="font-bold transition hover:text-white/70"
                >
                  822 61 28 70
                </a>
              </p>

              <p>
                <a
                  href="https://wa.me/34660399180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold transition hover:text-white/70"
                >
                  WhatsApp: 660 39 91 80
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-white/10 p-8 text-center backdrop-blur-sm">
          <p className="text-lg text-white/90">
            ¿Necesitas pedir cita o resolver alguna duda?
          </p>

          <Link
            to="/#contacto"
            className="mt-5 inline-flex rounded-full bg-white px-8 py-4 text-lg font-extrabold text-[#E86020] transition hover:bg-white/90"
          >
            Solicitar cita
          </Link>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © 2026 Clínica Dental Namora. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/90">
            <Link to="/legal" className="transition hover:text-white">
              Aviso legal
            </Link>

            <Link to="/privacidad" className="transition hover:text-white">
              Política de privacidad
            </Link>

            <Link to="/cookies" className="transition hover:text-white">
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer