import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* Información */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/logo-solymar.png"
                alt="Clínica Dental Solymar Cabrera"
                className="h-10 w-auto"
              />

              <img
                src="/logo-solymar-icono.png"
                alt=""
                aria-hidden="true"
                className="h-6 w-auto opacity-90"
              />
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-white/85">
              Clínica dental en Santa Cruz de Tenerife con más de 20 años de
              experiencia. Especialistas en implantología, ortodoncia,
              estética dental y tratamientos personalizados para cuidar tu
              sonrisa.
            </p>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Implantología · Ortodoncia Invisible · Estética Dental ·
              Periodoncia · Endodoncia · Prótesis Dentales
            </p>

            {/* Redes sociales */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.facebook.com/solymarcabreracentroodontologico/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8923B]/30 text-xl text-[#C8923B] transition hover:bg-[#C8923B] hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/solymar_cabrera/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8923B]/30 text-xl text-[#C8923B] transition hover:bg-[#C8923B] hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-[#C8923B]">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/85">
              <p>
                C/ Tomé Cano, C. Fragata Danmark, 2 Esquina
                <br />
                38005 Santa Cruz de Tenerife
              </p>

              <p>
                <a
                  href="tel:922441744"
                  className="whitespace-nowrap font-bold text-white transition hover:text-[#C8923B]"
                >
                  922 441 744
                </a>
              </p>

              <p>
                <a
                  href="mailto:clinica@solymarcabrera.com"
                  className="text-[#C8923B] transition hover:text-white"
                >
                  clinica@solymarcabrera.com
                </a>
              </p>

              <p>
                <a
                  href="https://wa.me/34616154605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white transition hover:text-[#C8923B]"
                >
                  WhatsApp: 616 154 605
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-white/85">
            ¿Necesitas pedir cita o más información?
          </p>

          <Link
            to="/#contacto"
            className="rounded-full bg-[#C8923B] px-8 py-3 text-lg font-bold text-white transition hover:bg-[#A87325]"
          >
            Solicitar cita
          </Link>
        </div>

        {/* Footer inferior */}
        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-base text-white/70">
            © 2026 Clínica Dental Solymar Cabrera. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#C8923B]">
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