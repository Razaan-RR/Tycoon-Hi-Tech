import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AboutBrand() {
  const missionRef = useRef(null)
  const commitmentRef = useRef(null)

  useEffect(() => {
    const animateSection = (sectionRef) => {
      const section = sectionRef.current
      if (!section) return

      const heading = section.querySelector('h3')

      heading.innerHTML = heading.textContent
        .split('')
        .map(
          (char) => `<span class="inline-block overflow-hidden">${char}</span>`
        )
        .join('')

      const bullets = section.querySelectorAll('ul li')

      const animateContent = () => {
        gsap.fromTo(
          heading.querySelectorAll('span'),
          { x: -10, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.08, 
            duration: 0.7, 
            ease: 'power2.out',
          }
        )

        // Bullets animation
        gsap.fromTo(
          bullets,
          { x: -15, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.3, 
            duration: 0.8, 
            ease: 'power2.out',
          }
        )
      }

      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: animateContent,
        onEnterBack: animateContent,
      })
    }

    animateSection(missionRef)
    animateSection(commitmentRef)
  }, [])

  return (
    <section className="relative bg-[#050b16] text-white py-28 px-6 lg:px-16 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-72 md:w-[30rem] h-72 md:h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            About{' '}
            <span className="text-blue-400">Tycoon Hi-Tech Park Ltd.</span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed text-sm md:text-base">
            Tycoon Hi-Tech Park Ltd. is a Bangladesh-based technology and
            electronics manufacturing company dedicated to delivering
            high-quality, innovative consumer electronics and home appliances.
            With a strong commitment to the
            <span className="text-blue-400"> “Made in Bangladesh”</span> ethos,
            we design and produce products that combine modern technology with
            reliable performance for households and businesses nationwide.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
            Our mission is to elevate the standard of local manufacturing and
            empower Bangladeshi consumers with products that rival global brands
            in quality, affordability, and durability.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              To become a leading electronics and appliances brand in Bangladesh
              and to expand our footprint in the global market by delivering
              innovative, reliable, and customer-centric technology solutions.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div
            className="bg-gradient-to-br from-[#0a1a2f] to-[#020816] rounded-2xl p-6 md:p-8 border border-blue-500/20 overflow-hidden"
            ref={missionRef}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
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

          <div
            className="bg-gradient-to-br from-[#0a1a2f] to-[#020816] rounded-2xl p-6 md:p-8 border border-blue-500/20 overflow-hidden"
            ref={commitmentRef}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Our Commitment
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
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
