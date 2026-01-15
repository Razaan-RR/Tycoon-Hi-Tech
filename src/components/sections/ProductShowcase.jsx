import React from 'react'
import { motion } from 'framer-motion'

import Refrigerator from '../../assets/fridge.jpeg'
import mixer from '../../assets/mixer-grinder.jpeg'
import cooker from '../../assets/rice-cooker.jpeg'
import comforter from '../../assets/room-comforter.jpeg'
import TV from '../../assets/TV.jpeg'
import Fan from '../../assets/fan-1.jpeg'

const products = [
  { name: 'Refrigerator', image: Refrigerator },
  { name: 'Mixer Grinder', image: mixer },
  { name: 'LED Television', image: TV },
  { name: 'Rice Cooker', image: cooker },
  { name: 'Room Comforter', image: comforter },
  { name: 'Fan', image: Fan },
]

const ProductShowcase = () => {
  return (
    <section className="relative bg-[#050b16] text-white py-28 px-6 lg:px-16 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-blue-400">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 1, ease: 'easeOut' }}
              className="relative bg-gradient-to-br from-[#0a1a2f] to-[#020816] 
                         rounded-2xl p-5 border border-blue-500/20 
                         shadow-lg hover:shadow-2xl 
                         hover:border-blue-400/40 transition-all duration-500"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/30 rounded-full blur-3xl opacity-0 hover:opacity-70 transition-opacity duration-500" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-xl mb-5 select-none"
                draggable={false}
              />

              <h3 className="text-xl font-semibold text-blue-400">{product.name}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Premium quality appliance designed for modern living.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
