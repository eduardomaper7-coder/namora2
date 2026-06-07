import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const schedule = [
  ['Lunes', '9:00–20:00'],
  ['Martes', '9:00–15:00'],
  ['Miércoles', '9:00–20:00'],
  ['Jueves', '9:00–20:00'],
  ['Viernes', '9:00–15:00'],
  ['Sábado', 'Cerrado'],
  ['Domingo', 'Cerrado'],
]

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#FBF8F2] py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#C8923B] px-5 py-2 text-sm font-bold text-white shadow-lg">
            Contacto
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-[#A87325] sm:text-5xl">
            Pide tu cita
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Contacta con Clínica Dental Solymar Cabrera para reservar tu cita o
            resolver cualquier duda sobre tu tratamiento dental.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-[2rem] border border-[#C8923B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(200,146,59,0.10)]">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8923B] text-xl text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#A87325]">
                    Dirección
                  </h3>
                  <p className="mt-2 text-lg leading-7 text-neutral-600">
                    C/ Tomé Cano, C. Fragata Danmark, 2 Esquina
                    <br />
                    38005 Santa Cruz de Tenerife
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#C8923B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(200,146,59,0.10)]">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8923B] text-xl text-white">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-[#A87325]">
                    Teléfono
                  </h3>
                  <a
                    href="tel:922441744"
                    className="mt-2 block whitespace-nowrap text-lg font-semibold text-neutral-600 transition hover:text-[#C8923B]"
                  >
                    922 441 744
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#C8923B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(200,146,59,0.10)]">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8923B] text-xl text-white">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold text-[#A87325]">
                    Email
                  </h3>
                  <a
                    href="mailto:clinica@solymarcabrera.com"
                    className="mt-2 block break-words text-lg font-semibold text-neutral-600 transition hover:text-[#C8923B]"
                  >
                    clinica@solymarcabrera.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#C8923B]/15 bg-white p-6 shadow-[0_18px_45px_rgba(200,146,59,0.10)] sm:p-8">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C8923B] text-xl text-white">
                <FaClock />
              </div>

              <div className="w-full min-w-0">
                <h3 className="text-xl font-extrabold text-[#A87325]">
                  Horario
                </h3>

                <div className="mt-6 space-y-4 text-base text-neutral-700 sm:text-lg">
                  {schedule.map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex flex-col border-b border-[#C8923B]/15 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    >
                      <span className="font-bold text-[#A87325]">{day}</span>
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:922441744"
                className="inline-flex justify-center rounded-full bg-[#C8923B] px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#A87325]"
              >
                Llamar ahora
              </a>

              <a
                href="https://wa.me/34616154605"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border-2 border-[#C8923B] px-7 py-4 text-base font-bold text-[#C8923B] transition hover:bg-[#C8923B] hover:text-white"
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