'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Signature/Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-serif text-3xl mb-2">Esther Sibiude</h3>
            <p className="text-white/70">Harp Lessons NYC</p>
          </motion.div>

          {/* Divider */}
          <div className="w-20 h-[1px] bg-white/30" />

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 text-white/80"
          >
            <p>Park Slope, Brooklyn, NY</p>
            <p>
              <a
                href="tel:9174638958"
                className="hover:text-white transition-colors duration-300"
              >
                917-463-8958
              </a>
            </p>
            <p>
              <a
                href="mailto:harplessonsbyesther@gmail.com"
                className="hover:text-white transition-colors duration-300"
              >
                harplessonsbyesther@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-12 h-12 border-2 border-white/30 hover:border-white rounded-full flex items-center justify-center group transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp
              className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300"
              strokeWidth={2}
            />
          </motion.button>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm text-white/60 pt-8 border-t border-white/10 w-full"
          >
            © 2025 Esther Sibiude. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
