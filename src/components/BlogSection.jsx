const posts = [
  {
    category: 'Implantes dentales',
    title: '¿Cuándo conviene valorar un implante dental?',
    excerpt:
      'Una solución para recuperar piezas perdidas, mejorar la masticación y volver a sonreír con seguridad.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    category: 'Prevención',
    title: 'Limpieza dental profesional: más que una sonrisa limpia',
    excerpt:
      'Ayuda a prevenir sarro, caries y problemas de encías antes de que aparezcan molestias.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    category: 'Estética dental',
    title: 'Blanqueamiento dental: claves antes de empezar',
    excerpt:
      'Un tratamiento supervisado puede mejorar el tono de tus dientes de forma segura y natural.',
    image:
      'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
]

const BlogSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#E86020]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E86020]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#E86020]">
              Consejos dentales
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl">
              Aprende a cuidar tu sonrisa cada día
            </h2>
          </div>

          <p className="text-lg leading-8 text-neutral-600">
            Artículos sencillos y útiles de Clínica Dental Namora para resolver
            dudas frecuentes sobre salud bucodental, prevención y estética
            dental.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group overflow-hidden rounded-[2.5rem] bg-[#FFF6F1] shadow-[0_24px_70px_rgba(232,96,32,0.14)] transition hover:-translate-y-1">
            <div className="relative h-[420px] overflow-hidden">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 text-white">
                <span className="inline-flex rounded-full bg-[#E86020] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
                  {posts[0].category}
                </span>

                <h3 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                  {posts[0].title}
                </h3>

                <p className="mt-3 max-w-2xl text-lg leading-8 text-white/90">
                  {posts[0].excerpt}
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {posts.slice(1).map((post) => (
              <article
                key={post.title}
                className="group grid overflow-hidden rounded-[2rem] bg-[#FFF6F1] shadow-[0_18px_45px_rgba(232,96,32,0.10)] transition hover:-translate-y-1 sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="h-64 overflow-hidden sm:h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E86020]">
                    {post.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-extrabold leading-tight text-neutral-900">
                    {post.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/blog"
            className="inline-flex rounded-full bg-[#E86020] px-8 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-[#c94f18]"
          >
            Ver todos los consejos
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogSection