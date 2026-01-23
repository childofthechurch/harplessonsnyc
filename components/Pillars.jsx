'use client'

import { motion } from 'framer-motion'
import { User, Music, Star } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    icon: User,
    title: 'Adults',
    description:
      'Beginner-friendly lessons for adults returning to music or starting for the first time. Structured but relaxed, with guidance tailored to your personal goals: technique, repertoire, or simply discovering a new hobby.',
  },
  {
    icon: Music,
    title: 'Children',
    description:
      'Engaging lessons that blend music, coordination, creative expression, and parent-supported practice. Perfect for young beginners starting their musical journey.',
  },
  {
    icon: Star,
    title: 'Experienced Musicians',
    description:
      'For students with prior harp, piano, violin, or other musical experience looking to refine technique or explore new genres like jazz and improvisation.',
  },
]

export default function Pillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
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
    <section ref={ref} className="py-32 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Who I Teach
          </h2>
          <div className="w-20 h-[2px] bg-primary-light mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                }}
                className="bg-white p-10 group cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-16 h-16 bg-primary-light/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-light/20 transition-colors duration-300"
                >
                  <Icon className="w-8 h-8 text-primary-light" strokeWidth={1.5} />
                </motion.div>

                <h3 className="font-serif text-2xl text-primary mb-4">
                  {pillar.title}
                </h3>

                <p className="text-primary-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
