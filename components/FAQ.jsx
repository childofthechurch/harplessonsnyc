'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'At what age can my child start taking harp lessons?',
    answer:
      'Children can begin learning the harp as early as three years old. The smaller size and affordability of a lever harp make it an ideal choice for young beginners. For children under eight years old, I encourage a parent or caretaker to attend lessons to help support at-home practice.',
  },
  {
    question: 'Can I rent a harp?',
    answer:
      'Yes! I can guide you in selecting the right instrument and help facilitate a rental. Harp rentals typically start at $70 per month.',
  },
  {
    question: 'Where do the lessons take place?',
    answer:
      'You have three options: At my home in Park Slope, Brooklyn; at your home (if you live in New York); or online via Zoom.',
  },
  {
    question: 'Do I need to bring my harp to lessons?',
    answer:
      'No, when you take lessons at my home, you will use one of my harps.',
  },
  {
    question: 'What kind of music can you play on the harp?',
    answer:
      'The harp is an incredibly versatile instrument that can be used in a wide range of musical genres, including Classical, Celtic & Folk, Bluegrass, Pop & Rock, and Jazz & World Fusion. Thanks to modern advancements, the harp is now more adaptable than ever.',
  },
]

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="border-b border-primary-light/20 last:border-b-0"
    >
      <button
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-xl font-medium text-primary pr-8 group-hover:text-primary-lighter transition-colors duration-300">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <Plus className="w-6 h-6 text-primary-light" strokeWidth={2} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-primary-light leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={ref} className="py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32"
          >
            <img
              src="/images/performances/harp-performance-st-peters-church-nyc.jpg"
              alt="Esther Sibiude performing"
              className="w-full h-auto"
            />
          </motion.div>

          {/* FAQ Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              FAQ
            </h2>
            <div className="w-20 h-[2px] bg-primary-light mb-12" />

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  toggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
