'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#lessons', label: 'Lessons' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/branding/logo_small.png"
                alt="Esther Sibiude Harp Logo"
                className={`h-16 w-auto transition-all duration-500 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
              />
              <span
                className={`font-serif text-2xl font-light transition-colors duration-500 ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                Esther Sibiude
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative transition-colors duration-500 text-sm uppercase tracking-wider group whitespace-nowrap ${
                  isScrolled
                    ? 'text-primary-light hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                }`} />
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 xl:px-6 py-2 border-2 transition-all duration-500 text-sm uppercase tracking-wider whitespace-nowrap ${
                isScrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-primary'
              }`}
            >
              Book a Lesson
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden absolute right-4 top-[70px] w-48 bg-white/50 backdrop-blur-md rounded-md shadow-xl overflow-hidden"
            >
              <div className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-900 hover:text-black hover:bg-gray-900/10 transition-colors py-2.5 px-4 text-xs uppercase tracking-wider font-medium text-center"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-gray-300 my-1" />
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mx-2 my-1 px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 text-xs uppercase tracking-wider text-center rounded"
                >
                  Book a Lesson
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
