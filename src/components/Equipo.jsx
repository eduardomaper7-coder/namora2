import {
  FaAward,
  FaStar,
  FaUsers,
  FaWhatsapp,
  FaPhoneAlt,
} from 'react-icons/fa'

const topProfessionals = [
  {
    name: 'Dra. Solymar R. Cabrera Morales',
    area: 'Prostodoncia y Estética Dental',
    subtitle: 'Máster en Cirugía y Licenciada en Odontología',
    image: '/equipo-solymar-cabrera.jpg',
    license: 'Nº Colegiada: 38000914',
    details: [
      '2003 – Licenciada en Odontología – Universidad de Granada.',
      '2015 – Especialista Universitaria en Implantología y Prostodoncia Clínica (UDIMA), realizada en la Clínica I2 del Dr. Luis Cuadrado de Vicente en Madrid.',
    ],
  },
  {
    name: 'Dra. Laura Melián Rodríguez',
    area: 'Cirugía e Implantología Dental',
    subtitle: 'Máster en Rehabilitación con Implantes y Biomateriales',
    image: '/equipo-laura-melian.jpg',
    license: 'Nº Colegiada: 38001247',
    details: [
      '2015 – Graduada en Odontología – Universidad de Zaragoza.',
      '2016 – Master of Implantology & Oral Rehabilitation (E.S.O.R.I.B. – European School of Oral Rehabilitation Implantology & Biomaterials).',
    ],
  },
]

const middleProfessionals = [
  {
    name: 'Dra. Esmeralda Tavío Correa',
    area: 'Ortodoncia Invisible y Convencional',
    subtitle: 'Diplomada en Ortodoncia · Licenciada en Odontología',
    image: '/equipo-esmeralda-tavio.jpg',
    license: 'Nº Colegiada: 38001330',
    details: [
      'Ortodoncia invisible, ortodoncia fija convencional, ortodoncia removible y ortopedia maxilar.',
      '1996 – Licenciada en Odontología – Universidad Central de Venezuela, Caracas.',
      '2014 – Diplomatura Internacional en Ortopedia Maxilar y Ortodoncia Fija – Universidad Rómulo Gallegos.',
    ],
  },
  {
    name: 'Srta. Miriam Lozano Polegre',
    area: 'Atención y Asesoramiento al Paciente',
    subtitle: 'Acompañamiento personalizado',
    image: '/equipo-miriam-lozano.jpg',
    license: '',
    details: [
      'Acompañamiento y asesoramiento a todos nuestros pacientes.',
      'Más de 6 años en el sector dental y más de 20 años en atención al público.',
    ],
  },
]

const finalProfessionals = [
  {
    name: 'Srta. Romina Porcel Sanz',
    area: 'Técnico Superior en Higiene Bucodental',
    subtitle: 'Higiene bucodental y apoyo clínico',
    image: '/equipo-romina-porcel.jpg',
    license: '',
    details: ['Titulada desde el año 2011.'],
  },
  {
    name: 'Srta. Luna María Jerez López',
    area: 'Técnico Superior en Higiene Bucodental',
    subtitle: 'Higiene bucodental y apoyo clínico',
    image: '/equipo-luna-jerez.jpg',
    license: '',
    details: ['Titulada desde el año 2019.'],
  },
  {
    name: 'Sr. José García Santiago',
    area: 'Atención al Paciente y Dirección',
    subtitle: 'Gestión clínica y atención personalizada',
    image: '/equipo-jose-garcia.jpg',
    license: '',
    details: [
      'Desde 2007 dedicado en exclusiva a la gestión de clínica y a la atención de nuestros pacientes.',
    ],
  },
]

const ProfessionalCard = ({ person }) => {
  return (
    <article className="h-full overflow-hidden rounded-[2rem] border border-[#C8923B]/15 bg-white shadow-[0_18px_45px_rgba(200,146,59,0.12)]">
      <div className="grid h-full md:grid-cols-[240px_1fr]">
        <div className="h-80 md:h-full">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex h-full flex-col p-8">
          <span className="inline-flex w-fit rounded-full bg-[#FBF8F2] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#C8923B]">
            {person.area}
          </span>

          <h3 className="mt-5 text-2xl font-extrabold text-[#A87325]">
            {person.name}
          </h3>

          <p className="mt-2 font-semibold text-neutral-700">
            {person.subtitle}
          </p>

          {person.license && (
            <p className="mt-2 text-sm font-semibold text-[#C8923B]">
              {person.license}
            </p>
          )}

          <ul className="mt-5 flex-1 space-y-3 text-base leading-7 text-neutral-600">
            {person.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C8923B]"></span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

const TeamPage = () => {
  return (
    <main className="bg-[#FBF8F2] pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-4">
        <section className="text-center">
          <span className="inline-flex rounded-full bg-[#C8923B] px-5 py-2 text-sm font-bold text-white">
            Nuestro equipo
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-[#A87325] md:text-6xl">
            ¡Ven a conocernos!
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-neutral-600">
            Una de las características diferenciales de nuestros profesionales es
            su vocación de servicio y la pasión que transmiten a nuestros
            pacientes durante cada tratamiento.
          </p>
        </section>

        <section className="mt-16">
  <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(200,146,59,0.15)]">
    <img
      src="/equipo-clinica-solymar.jpg"
      alt="Equipo Clínica Dental Solymar Cabrera"
      className="h-[260px] w-full object-cover sm:h-[400px]"
    />
  </div>
</section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-lg">
            <FaAward className="mx-auto text-4xl text-[#C8923B]" />
            <h3 className="mt-4 text-4xl font-extrabold text-[#A87325]">
              20+
            </h3>
            <p className="mt-2 text-neutral-600">Años de experiencia</p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-center shadow-lg">
            <FaStar className="mx-auto text-4xl text-[#C8923B]" />
            <h3 className="mt-4 text-4xl font-extrabold text-[#A87325]">
              5★
            </h3>
            <p className="mt-2 text-neutral-600">Reseñas en Google</p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-center shadow-lg">
            <FaUsers className="mx-auto text-4xl text-[#C8923B]" />
            <h3 className="mt-4 text-4xl font-extrabold text-[#A87325]">
              200m²
            </h3>
            <p className="mt-2 text-neutral-600">Instalaciones</p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold text-[#A87325]">
            El equipo humano de la clínica
          </h2>

          <p className="mt-6 text-lg leading-9 text-neutral-600">
            Lo más importante no son nuestras instalaciones ni los medios
            materiales. Lo verdaderamente importante son las personas que cada
            día ponen todo su empeño en ofrecer la mejor atención a nuestros
            pacientes. Esta es nuestra forma de trabajar cada día.
          </p>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-4xl font-extrabold text-[#A87325]">
            Conoce a nuestros profesionales
          </h2>

          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
            {topProfessionals.map((person) => (
              <ProfessionalCard key={person.name} person={person} />
            ))}
          </div>

          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
            {middleProfessionals.map((person) => (
              <ProfessionalCard key={person.name} person={person} />
            ))}
          </div>

          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
            {finalProfessionals.slice(0, 2).map((person) => (
              <ProfessionalCard key={person.name} person={person} />
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-[760px]">
            <ProfessionalCard person={finalProfessionals[2]} />
          </div>
        </section>

        <section className="mt-24">
          <div className="rounded-[2rem] bg-[#C8923B] px-8 py-16 text-center text-white shadow-[0_20px_60px_rgba(200,146,59,0.25)]">
            <span className="font-bold uppercase tracking-[0.2em] text-white/80">
              Dando el 120% cada día
            </span>

            <h2 className="mt-5 text-4xl font-extrabold">
              Nuestros pacientes son los verdaderos protagonistas
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Trabajamos con toda nuestra ilusión para ofrecer el mejor servicio
              y acompañar a cada paciente con cercanía, profesionalidad y
              confianza.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:922441744"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold !text-[#A87325]"
              >
                <FaPhoneAlt />
                Llamar ahora
              </a>

              <a
                href="https://wa.me/34616154605"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-4 font-bold text-white"
              >
                <FaWhatsapp />
                Pedir cita por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default TeamPage