function AboutBrand() {
  return (
    <section className="relative bg-[#050b16] text-white py-28 px-6 lg:px-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: About + Vision */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            About{' '}
            <span className="text-blue-400">Tycoon Hi-Tech Park Ltd.</span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Tycoon Hi-Tech Park Ltd. is a Bangladesh-based technology and
            electronics manufacturing company dedicated to delivering
            high-quality, innovative consumer electronics and home appliances.
            With a strong commitment to the
            <span className="text-blue-400"> “Made in Bangladesh”</span> ethos,
            we design and produce products that combine modern technology with
            reliable performance for households and businesses nationwide.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Our mission is to elevate the standard of local manufacturing and
            empower Bangladeshi consumers with products that rival global brands
            in quality, affordability, and durability.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-300">
              To become a leading electronics and appliances brand in Bangladesh
              and to expand our footprint in the global market by delivering
              innovative, reliable, and customer-centric technology solutions.
            </p>
          </div>
        </div>

        {/* Right: Mission + Commitment */}
        <div className="space-y-8">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-[#0a1a2f] to-[#020816] rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                ✔ Develop premium quality electronics and appliances engineered
                for everyday use
              </li>
              <li>
                ✔ Promote local manufacturing and support Bangladesh’s
                technological advancement
              </li>
              <li>
                ✔ Ensure customer satisfaction through excellence and efficient
                after-sales service
              </li>
              <li>
                ✔ Continuously innovate and adopt global standards in design and
                production
              </li>
            </ul>
          </div>

          {/* Commitment Card */}
          <div className="bg-gradient-to-br from-[#0a1a2f] to-[#020816] rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Our Commitment
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <span className="text-blue-400">Dependability:</span> Products
                that deliver consistent performance
              </li>
              <li>
                <span className="text-blue-400">Innovation:</span> Bringing
                modern technology to everyday living
              </li>
              <li>
                <span className="text-blue-400">Sustainability:</span> Practices
                that respect people and the environment
              </li>
              <li>
                <span className="text-blue-400">Trust:</span> Building lifelong
                relationships with customers and partners
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBrand
