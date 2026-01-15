import fridgeImg from '../../assets/fridge.jpeg'
import factoryBg from '../../assets/factory.jpeg'
import logo from '../../assets/Tycoon-Logo.png'

function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a1a2f] to-[#000000]" />
        <img
          src={factoryBg}
          alt="Factory"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 pt-6 flex justify-center lg:justify-start">
        <img
          src={logo}
          alt="Tycoon Logo"
          className="w-24 sm:w-28 md:w-32 lg:w-40"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 mt-6 lg:mt-0">
        <div className="max-w-full lg:max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight lg:leading-tight pt-20">
            Innovating <span className="text-blue-400">Everyday</span> Living
          </h1>

          <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg">
            Premium Electronics & Home Appliances, proudly made in Bangladesh.
            Built for performance, durability, and trust.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
            <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:scale-105 transition transform">
              Explore Products
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition">
              Find Dealer
            </button>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto">
          <img
            src={fridgeImg}
            alt="Tycoon Refrigerator"
            className="w-[180px] sm:w-[260px] md:w-[320px] lg:w-[420px] max-w-full"
          />
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-0 w-full overflow-x-hidden">
        <div className="whitespace-nowrap animate-marquee text-sm sm:text-base md:text-lg font-semibold tracking-widest text-blue-400">
          Reliable • Durable • Smart Technology • Energy Efficient • Trusted
          Nationwide • Reliable • Durable • Smart Technology • Energy Efficient
          • Trusted Nationwide
        </div>
      </div>
    </section>
  )
}

export default Hero
