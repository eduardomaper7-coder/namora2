import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock } from 'react-icons/fa'

const schedule = [
  ['Lunes', '9:00–17:00'],
  ['Martes', '9:00–17:00'],
  ['Miércoles', '12:00–20:00'],
  ['Jueves', '10:00–20:00'],
  ['Viernes', '9:00–14:00'],
  ['Sábado', 'Cerrado'],
  ['Domingo', 'Cerrado'],
]

const ContactSection = () => {
  const whatsappUrl =
    'https://wa.me/34660399180?text=Hola%2C%20quiero%20pedir%20cita%20en%20Cl%C3%ADnica%20Dental%20Namora.'

  return (
    <section id="contacto" className="scroll-mt-28 bg-[#FFF6F1] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#E86020] px-5 py-2 text-sm font-bold text-white shadow-lg">
            Contacto
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-neutral-900 sm:text-5xl">
            Pide tu cita en Namora
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Llámanos o escríbenos por WhatsApp para reservar tu cita en Clínica
            Dental Namora.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(232,96,32,0.10)]">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E86020] text-xl text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-neutral-900">
                    Dirección
                  </h3>

                  <p className="mt-2 text-lg leading-7 text-neutral-600">
                    C. Ramón y Cajal, 59
                    <br />
                    38006 Santa Cruz de Tenerife
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(232,96,32,0.10)]">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E86020] text-xl text-white">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-neutral-900">
                    Teléfono
                  </h3>

                  <a
                    href="tel:822612870"
                    className="mt-2 block whitespace-nowrap text-lg font-semibold text-neutral-600 transition hover:text-[#E86020]"
                  >
                    822 61 28 70
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(232,96,32,0.10)]">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E86020] text-xl text-white">
                  <FaWhatsapp />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-neutral-900">
                    WhatsApp
                  </h3>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block whitespace-nowrap text-lg font-semibold text-neutral-600 transition hover:text-[#E86020]"
                  >
                    660 39 91 80
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(232,96,32,0.10)] sm:p-8">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E86020] text-xl text-white">
                <FaClock />
              </div>

              <div className="w-full min-w-0">
                <h3 className="text-xl font-extrabold text-neutral-900">
                  Horario
                </h3>

                <div className="mt-6 space-y-4 text-base text-neutral-700 sm:text-lg">
                  {schedule.map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex flex-col border-b border-[#E86020]/15 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    >
                      <span className="font-bold text-neutral-900">{day}</span>

                      <span
                        className={`mt-1 leading-7 sm:mt-0 sm:text-right ${
                          hours === 'Cerrado'
                            ? 'font-semibold text-neutral-400'
                            : 'font-semibold text-neutral-700'
                        }`}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:822612870"
                className="inline-flex justify-center rounded-full bg-[#E86020] px-7 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-[#c94f18]"
              >
                Llamar ahora
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border-2 border-[#E86020] bg-white px-7 py-4 text-base font-extrabold text-[#E86020] transition hover:bg-[#E86020] hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection