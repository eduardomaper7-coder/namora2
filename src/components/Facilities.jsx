import {
  FaCouch,
  FaHospital,
  FaLeaf,
  FaUserFriends,
  FaTooth,
  FaCamera,
} from 'react-icons/fa'

const spaces = [
  {
    icon: <FaCouch />,
    title: 'Sala de espera',
    text:
      'Un espacio pensado para transmitir tranquilidad, cercanía y comodidad mientras esperas tu cita.',
    image: '/instalaciones-sala-espera.jpg',
  },
  {
    icon: <FaHospital />,
    title: 'Recepción',
    text:
      'Queremos que cada paciente se sienta cómodo desde el primer momento, en un entorno moderno y agradable.',
    image: '/instalaciones-recepcion.jpg',
  },
  {
    icon: <FaLeaf />,
    title: 'Mostrador de entrada',
    text:
      'La iluminación, las plantas naturales y un ambiente relajado ayudan a generar confianza desde la llegada.',
    image: '/instalaciones-mostrador-entrada.jpg',
  },
  {
    icon: <FaUserFriends />,
    title: 'Atención al paciente',
    text:
      'Te acompañamos durante todo el tratamiento para resolver cualquier duda y ofrecerte una atención personalizada.',
    image: '/instalaciones-atencion-paciente.jpg',
  },
  {
    icon: <FaTooth />,
    title: 'Gabinetes dentales',
    text:
      'Disponemos de 3 gabinetes y sala de RX equipada con TAC dental 3D y ortopantomografía.',
    image: '/instalaciones-gabinete-dental.jpg',
  },
  {
    icon: <FaCamera />,
    title: 'Escáner intraoral',
    text:
      'Tecnología digital avanzada para obtener impresiones más precisas y cómodas para el paciente.',
    image: '/instalaciones-escaner-intraoral.jpg',
  },
]

const Facilities = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8923B]">
            Nuestras instalaciones
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#A87325] md:text-5xl">
            Conoce nuestra clínica
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Nuestra clínica abrió sus puertas en 2020 con el objetivo de ofrecer
            una experiencia cómoda, cercana y profesional. Cada detalle ha sido
            pensado para transmitir tranquilidad, confianza y bienestar.
          </p>

          <a
            href="https://www.google.es/maps/place/Centro+Odontol%C3%B3gico+Solymar+Cabrera"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#C8923B] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-[#A87325]"
          >
            Ver visita virtual 3D
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space) => (
            <article
              key={space.title}
              className="overflow-hidden rounded-[2rem] border border-[#C8923B]/15 bg-[#FBF8F2] shadow-[0_18px_45px_rgba(200,146,59,0.12)]"
            >
              <img
                src={space.image}
                alt={space.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-7">
                <div className="mb-4 text-3xl text-[#C8923B]">
                  {space.icon}
                </div>

                <h3 className="text-2xl font-extrabold text-[#A87325]">
                  {space.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {space.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities