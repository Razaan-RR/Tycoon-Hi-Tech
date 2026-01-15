import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Contact = () => {
  const formRef = useRef()

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="relative bg-[#050b16] text-white py-28 px-6 lg:px-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get in <span className="text-blue-400">Touch</span>
        </h2>

        <div
          ref={formRef}
          className="bg-gradient-to-br from-[#0a1a2f] to-[#020816]
                     rounded-2xl p-10 border border-blue-500/20
                     shadow-lg"
        >
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-blue-400">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#050b16]
                           border border-blue-500/30
                           focus:outline-none focus:ring-2 focus:ring-blue-400
                           text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-blue-400">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#050b16]
                           border border-blue-500/30
                           focus:outline-none focus:ring-2 focus:ring-blue-400
                           text-white placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-blue-400">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-lg bg-[#050b16]
                           border border-blue-500/30
                           focus:outline-none focus:ring-2 focus:ring-blue-400
                           text-white placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              className="
                bg-gradient-to-r from-blue-500 to-cyan-400
                hover:from-cyan-400 hover:to-blue-500
                px-8 py-3 rounded-lg font-semibold
                transition-all duration-300 text-black
                shadow-lg hover:shadow-xl
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
