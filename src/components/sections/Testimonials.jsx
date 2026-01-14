import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const testimonials = [
  {
    text: 'The quality and performance of Tycoon products are truly impressive! Great value for money.',
    author: '– Customer feedback',
  },
  {
    text: 'Reliable appliances with excellent after-sales support.',
    author: '– Verified customer',
  },
];

const Testimonials = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      x: -100,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
      <div className="max-w-5xl mx-auto space-y-8 px-6">
        {testimonials.map((testi, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-gradient-to-br from-[#08192f] to-[#020816] rounded-xl p-6 shadow-lg border border-blue-500/20"
          >
            <p className="text-lg mb-4 text-gray-300">&quot;{testi.text}&quot;</p>
            <p className="text-right italic text-blue-400">{testi.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
