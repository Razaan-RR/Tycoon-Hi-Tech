import mixer from '../../assets/mixer-grinder.jpeg'
import cooker from '../../assets/rice-cooker.jpeg'
import comforter from '../../assets/room-comforter.jpeg'
import TV from '../../assets/TV.jpeg'

function ProductCategories() {
  const categories = [
    { title: 'Mixer Grinder', img: mixer },
    { title: 'Rice Cooker', img: cooker },
    { title: 'Room Comforter', img: comforter },
    { title: 'TV', img: TV },
  ]

  return (
    <section className="relative bg-[#050b16] text-white py-24 overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Our <span className="text-blue-400">Product Range</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Designed to power modern homes with reliability and innovation.
        </p>
      </div>

      {/* Moving Row */}
      <div className="flex gap-8 animate-slide px-6">
        {[...categories, ...categories].map((item, index) => (
          <div
            key={index}
            className="min-w-[220px] md:min-w-[260px] lg:min-w-[300px] bg-[#0c1a2a] rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-400">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCategories
