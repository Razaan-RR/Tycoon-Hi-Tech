function Highlights() {
  const highlights = [
    {
      title: 'Designed for Performance',
      desc: 'Precision engineering that ensures durability and long-lasting quality in every product.',
      big: false,
    },
    {
      title: '500,000+',
      desc: 'Happy customers across Bangladesh',
      big: true,
    },
    {
      title: '10+ Years',
      desc: 'Of experience in electronics manufacturing',
      big: true,
    },
    {
      title: 'After Sales You Can Trust',
      desc: 'Nationwide service support and reliable warranty system.',
      big: false,
    },
  ]

  return (
    <section className="bg-black text-white py-28 px-6 lg:px-16">
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Why <span className="text-blue-400">Tycoon</span>?
        </h2>
        <p className="text-gray-400 mt-4">
          Powering homes with innovation, trust, and performance.
        </p>
      </div>

      {/* Story Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#08192f] to-[#020816] rounded-2xl p-10 min-h-[220px]
                       flex flex-col justify-center border border-blue-500/20
                       hover:border-blue-400/60 transition"
          >
            {item.big ? (
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400">
                {item.title}
              </h3>
            ) : (
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
                {item.title}
              </h3>
            )}

            <p className="text-gray-300 mt-4 text-sm md:text-base">
              {item.desc}
            </p>

            {/* Glow Accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Highlights
