import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div ref={formRef} className="max-w-3xl mx-auto px-6">
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-blue-400">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#08192f] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-blue-400">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-[#08192f] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-blue-400">Message</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-[#08192f] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
