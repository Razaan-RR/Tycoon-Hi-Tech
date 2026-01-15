import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('Sending...')

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error(error)
      setStatus('Server error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative bg-[#050b16] text-white py-28 px-6 lg:px-16 overflow-hidden">
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get in <span className="text-blue-400">Touch</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="bg-gradient-to-br from-[#0a1a2f] to-[#020816]
                     rounded-2xl p-10 border border-blue-500/20 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#050b16]
                         border border-blue-500/30 text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#050b16]
                         border border-blue-500/30 text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-[#050b16]
                         border border-blue-500/30 text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-gradient-to-r from-blue-500 to-cyan-400
                          px-8 py-3 rounded-lg font-semibold text-black
                          transition-all duration-300
                          ${
                            loading
                              ? 'opacity-50 cursor-not-allowed'
                              : 'hover:from-cyan-400 hover:to-blue-500'
                          }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p className="text-center text-sm text-blue-400 mt-2">{status}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
