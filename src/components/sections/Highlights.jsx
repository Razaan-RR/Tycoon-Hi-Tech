import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Highlights() {
  const highlightsRef = useRef(null)

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

  useEffect(() => {
    const cards = highlightsRef.current.querySelectorAll('.highlight-card')
    ScrollTrigger.batch(cards, {
      start: 'top 80%',
      onEnter: (batch) => {
        batch.forEach((card, i) => {
          const glow = card.querySelector('.card-glow')
          gsap.fromTo(
            glow,
            { scale: 0.8, opacity: 0.3 },
            {
              scale: 1,
              opacity: 0.6,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut',
              delay: i * 0.3,
            }
          )

          gsap.fromTo(
            card,
            { borderColor: 'rgba(59, 130, 246, 0.3)', boxShadow: '0 0 15px rgba(59, 130, 246, 0.1)' },
            {
              borderColor: 'rgba(59, 130, 246, 0.7)',
              boxShadow: '0 0 35px 10px rgba(59, 130, 246, 0.4)',
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              delay: i * 0.3,
              ease: 'power1.inOut',
            }
          )
        })
      },
      onLeaveBack: (batch) => {
        batch.forEach((card) => {
          const glow = card.querySelector('.card-glow')
          gsap.killTweensOf(glow)
          gsap.killTweensOf(card)
        })
      },
    })
  }, [])

  return (
    <section
      className="relative bg-[#050b16] text-white py-28 px-6 lg:px-16 overflow-hidden"
      ref={highlightsRef}
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Why <span className="text-blue-400">Tycoon</span>?
          </h2>
          <p className="text-gray-400 mt-4">
            Powering homes with innovation, trust, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="highlight-card relative bg-gradient-to-br from-[#0a1a2f] to-[#020816] rounded-2xl p-10 min-h-[220px] flex flex-col justify-center border border-blue-500/20 shadow-lg transition-all duration-500"
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

              <p className="text-gray-300 mt-4 text-sm md:text-base">{item.desc}</p>

              <div className="card-glow absolute -top-6 -right-6 w-36 h-36 bg-blue-500/40 rounded-full blur-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
