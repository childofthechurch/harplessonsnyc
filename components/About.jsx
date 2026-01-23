'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const scrollToContact = (e) => {
  e.preventDefault()
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden"
          >
            <motion.div style={{ y }} className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/teacher/esther-sibiude-professional-harpist.jpg"
                  alt="Esther Sibiude - Professional Harpist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-8">
              About Esther
            </h2>

            <div className="w-20 h-[2px] bg-primary-light mb-8" />

            <div className="space-y-6 text-primary-light leading-relaxed text-lg">
              <p>
                My name is Esther. Originally from France, I grew up in Germany where I
                started learning the harp at age 7. For this reason I can teach harp
                lessons in French, German or English!
              </p>

              <p>
                I am classically trained, and teach in a range of styles: classical,
                jazz, improvisation, folk and more. Since I moved to New York in 2016, I
                trained with <strong>Brandee Younger</strong>, a Grammy-nominated harpist
                who teaches at NYU and at the New School.
              </p>

              <p>
                Brandee's harp pedagogy infuses classical, jazz, soul and funk influences
                into a new harp tradition pioneered by her predecessors Dorothy Ashby and
                Alice Coltrane. Like Younger, I don't restrict the harp to one single
                genre of music, encouraging my students to explore and experiment.
              </p>

              <p>
                I love to guide and watch a new harp player embark on the beautiful harp
                journey. Remember, it's never too early or too late to start to play the
                harp!
              </p>

              <div className="pt-6">
                <motion.a
                  href="#contact"
                  onClick={scrollToContact}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center text-primary font-medium uppercase tracking-wider group py-3 px-6 -ml-6 rounded-lg hover:bg-primary-light/5 cursor-pointer"
                >
                  <span>Start Your Journey</span>
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
