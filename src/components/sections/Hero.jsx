import fridgeImg from '../../assets/fridge.jpeg' 
import factoryBg from '../../assets/factory.jpeg' 
import logo from '../../assets/Tycoon-Logo.png'

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a1a2f] to-[#000000]" />

        {/* Faded Factory Image */}
        <img
          src={factoryBg}
          alt="Factory"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Navbar Logo Area (Hero Brand Touch) */}
      <div className="relative z-10 px-6 lg:px-16 pt-6">
        <img src={logo} alt="Tycoon Logo" className="w-32 lg:w-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-16">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Innovating <span className="text-blue-400">Everyday</span> Living
          </h1>

          <p className="mt-4 text-gray-300 text-base md:text-lg">
            Premium Electronics & Home Appliances, proudly made in Bangladesh.
            Built for performance, durability, and trust.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:scale-105 transition">
              Explore Products
            </button>

            <button className="px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition">
              Find Dealer
            </button>
          </div>
        </div>

        {/* Right Product Image */}
        <div className="relative mt-12 lg:mt-0">
          <img
            src={fridgeImg}
            alt="Tycoon Refrigerator"
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] drop-shadow-[0_0_25px_rgba(0,180,255,0.35)]"
          />
        </div>
      </div>

      {/* Tech Words Marquee */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-40">
        <div className="whitespace-nowrap animate-marquee text-xl font-semibold tracking-widest text-blue-400">
          Reliable • Durable • Smart Technology • Energy Efficient • Trusted
          Nationwide • Reliable • Durable • Smart Technology • Energy Efficient
          • Trusted Nationwide
        </div>
      </div>
    </section>
  )
}

export default Hero