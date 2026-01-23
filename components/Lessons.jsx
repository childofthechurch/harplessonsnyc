'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, DollarSign, Calendar } from 'lucide-react'

export default function Lessons() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const details = [
    {
      icon: Clock,
      title: '30-Minute Lessons',
      detail: '$70',
      description: 'Perfect for younger students',
    },
    {
      icon: Clock,
      title: '60-Minute Lessons',
      detail: '$120',
      description: 'Comprehensive instruction',
    },
    {
      icon: Calendar,
      title: 'Weekly Lessons',
      detail: 'Recommended for Real Progress',
      description: 'Ongoing weekly instruction with a dedicated time slot. 24-hour notice to reschedule',
    },
  ]

  return (
    <section id="lessons" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Lessons
          </h2>
          <div className="w-20 h-[2px] bg-primary-light mx-auto mb-8" />
          <p className="text-xl text-primary-light max-w-3xl mx-auto leading-relaxed">
            I work closely with every student to build a solid musical foundation,
            strengthen technique, and nurture confidence. Lessons emphasize artistry,
            curiosity, and consistency within a supportive, encouraging environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/lessons/harp-lesson-student-nyc.jpg"
              alt="Harp lesson with student"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {details.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="w-14 h-14 bg-primary-light/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary-light" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-2xl font-serif text-primary-light mb-2">
                      {item.detail}
                    </p>
                    <p className="text-primary-light">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-cream p-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-primary-light leading-relaxed mb-8">
            For younger learners (ages 3–7), I recommend that a parent or caregiver
            participate during lessons to help with practice at home. I also assist
            families and new students in finding the right harp to rent or purchase.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-10 py-4 bg-primary text-white font-medium text-lg uppercase tracking-wider hover:bg-primary-lighter transition-colors duration-300"
          >
            Book Your First Lesson
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
