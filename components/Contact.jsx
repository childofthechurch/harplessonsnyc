'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = (e) => {
    // Track form submission
    try {
      // Google Ads Conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16923342394/ZBRgCOeh6KkaELrs1oU_'
        })
      }

      // GA4 Event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'submit_contact_form', {
          'event_category': 'Lead Generation',
          'event_label': 'Lesson Request Form',
          'value': 1
        })
      }

      // Meta Pixel Lead Event
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Harp Lesson Request',
          content_category: 'Lesson Inquiry'
        })
      }

      console.log('✓ Form submission tracked across all platforms')
    } catch (error) {
      console.error('Error tracking form submission:', error)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Get in Touch
          </h2>
          <div className="w-20 h-[2px] bg-primary-light mx-auto mb-8" />
          <p className="text-xl text-primary-light max-w-2xl mx-auto">
            Ready to begin your harp journey? Fill out the form below or reach out
            directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              action="https://formspree.io/f/mrbpoaqr"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-primary-light/30 focus:border-primary focus:outline-none transition-colors duration-300 text-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-primary-light/30 focus:border-primary focus:outline-none transition-colors duration-300 text-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-primary-light/30 focus:border-primary focus:outline-none transition-colors duration-300 text-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider"
                >
                  Student's Age (Optional)
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  className="w-full px-4 py-3 border border-primary-light/30 focus:border-primary focus:outline-none transition-colors duration-300 text-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="referral_source"
                  className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider"
                >
                  How did you hear about me? (Optional)
                </label>
                <select
                  id="referral_source"
                  name="referral_source"
                  className="w-full px-4 py-3 pr-10 border border-primary-light/30 focus:border-primary focus:outline-none transition-colors duration-300 text-primary bg-white appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23585c53' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="">Please select</option>
                  <option value="Google search">Google search</option>
                  <option value="Park Slope Parents / local parent group">Park Slope Parents / local parent group</option>
                  <option value="Facebook or Instagram">Facebook or Instagram</option>
                  <option value="Friend or family referral">Friend or family referral</option>
                  <option value="School or teacher recommendation">School or teacher recommendation</option>
                  <option value="Flyer or local posting">Flyer or local posting</option>
                  <option value="Returning student">Returning student</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-primary-light/30 focus:border-primary focus:outline-none transition-colors duration-300 text-primary resize-none"
                  placeholder="Tell me about your musical background, interests, or any questions you have..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full px-10 py-4 bg-primary text-white font-medium text-lg uppercase tracking-wider hover:bg-primary-lighter transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-3xl text-primary mb-8">
                Or reach out directly
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:harplessonsbyesther@gmail.com"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center space-x-4 text-primary-light hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary-light/10 rounded-full flex items-center justify-center group-hover:bg-primary-light/20 transition-colors duration-300">
                    <Mail className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-lg">harplessonsbyesther@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:9174638958"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center space-x-4 text-primary-light hover:text-primary transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary-light/10 rounded-full flex items-center justify-center group-hover:bg-primary-light/20 transition-colors duration-300">
                    <Phone className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-lg">917-463-8958</span>
                </motion.a>
              </div>
            </div>

            <div className="pt-8">
              <img
                src="/images/contact/harp-hands-close-up.png"
                alt="Harp hands close-up"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
