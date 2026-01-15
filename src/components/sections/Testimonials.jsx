import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: 'The quality and performance of Tycoon products are truly impressive! Great value for money.',
    author: '– Customer feedback',
  },
  {
    text: 'Reliable appliances with excellent after-sales support.',
    author: '– Verified customer',
  },
]

const Testimonials = () => {
  return (
    <section className="relative bg-[#050b16] text-white py-28 px-6 lg:px-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Our <span className="text-blue-400">Customers Say</span>
        </h2>

        <div className="space-y-10">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.3, duration: 1, ease: 'easeOut' }}
              className="
                bg-gradient-to-br from-[#0a1a2f] to-[#020816]
                rounded-2xl p-8 border border-blue-500/20
                shadow-lg hover:shadow-2xl
                hover:border-blue-400/40 transition-all duration-500
              "
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                “{testi.text}”
              </p>

              <p className="text-right italic text-blue-400 text-sm">
                {testi.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
