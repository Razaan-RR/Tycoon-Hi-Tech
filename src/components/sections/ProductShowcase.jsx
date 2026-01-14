import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Refrigerator from "../../assets/fridge.jpeg";
import mixer from "../../assets/mixer-grinder.jpeg";
import cooker from "../../assets/rice-cooker.jpeg";
import comforter from "../../assets/room-comforter.jpeg";
import TV from "../../assets/TV.jpeg";
import Fan from "../../assets/fan-1.jpeg";

const products = [
  { name: "Refrigerator", image: Refrigerator },
  { name: "Mixer Grinder", image: mixer },
  { name: "LED Television", image: TV },
  { name: "Rice Cooker", image: cooker },
  { name: "Room Comforter", image: comforter },
  { name: "Fan", image: Fan },
];

const ProductShowcase = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20">
        {products.map((product, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-gradient-to-br from-[#08192f] to-[#020816] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-blue-500/20"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg mb-4 select-none"
              style={{
                WebkitTapHighlightColor: "transparent",
                userSelect: "none",
                outline: "none",
              }}
              draggable={false}
            />
            <h3 className="text-xl font-semibold text-blue-400">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
