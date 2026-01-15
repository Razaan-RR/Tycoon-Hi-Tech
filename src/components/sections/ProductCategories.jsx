import mixer from '../../assets/mixer-grinder.jpeg'
import cooker from '../../assets/rice-cooker.jpeg'
import comforter from '../../assets/room-comforter.jpeg'
import TV from '../../assets/TV.jpeg'

function ProductCategories() {
  const categories = [
    { title: 'Mixer Grinder', img: mixer },
    { title: 'Rice Cooker', img: cooker },
    { title: 'Room Comforter', img: comforter },
    { title: 'LED Television', img: TV },
  ]

  return (
    <section className="relative bg-[#050b16] text-white py-28 px-6 lg:px-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our <span className="text-blue-400">Product Range</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Designed to power modern homes with reliability and innovation.
          </p>
        </div>

        {/* Moving Row */}
        <div className="flex gap-8 animate-slide">
          {[...categories, ...categories].map((item, index) => (
            <div
              key={index}
              className="
                min-w-[220px] md:min-w-[260px] lg:min-w-[300px]
                bg-gradient-to-br from-[#0a1a2f] to-[#020816]
                rounded-2xl p-6 flex flex-col items-center
                border border-blue-500/20
                shadow-lg hover:shadow-2xl
                hover:scale-105 hover:border-blue-400/40
                transition-all duration-500
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-32 object-contain mb-4 rounded-lg"
                draggable={false}
              />
              <h3 className="text-lg font-semibold text-blue-400">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Premium quality appliance
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
