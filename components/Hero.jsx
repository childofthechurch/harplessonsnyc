'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src="/images/hero/esther-sibiude-harpist-nyc-hires.jpg"
          alt="Esther Sibiude - Professional Harpist"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        className="relative z-20 container mx-auto px-6 text-center text-white"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-3 sm:mb-6 leading-tight"
          style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)' }}
        >
          Harp Lessons NYC
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="w-16 sm:w-20 h-[2px] bg-white/60 mx-auto mb-4 sm:mb-8"
        />

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-4 max-w-3xl mx-auto leading-tight sm:leading-relaxed"
          style={{ textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8)' }}
        >
          Private Instruction with Esther Sibiude
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-lg md:text-xl font-medium mb-8 sm:mb-12 max-w-2xl mx-auto text-white"
          style={{ textShadow: '0 4px 16px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0, 0, 0, 0.8)' }}
        >
          Brooklyn, NYC • Now Enrolling • All Levels Welcome
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-primary font-medium text-base sm:text-lg uppercase tracking-wider hover:bg-white/90 transition-colors duration-300"
          >
            Book a First Lesson
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-white text-white font-medium text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-primary transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
