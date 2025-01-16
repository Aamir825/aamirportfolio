'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill, RiFirebaseFill } from 'react-icons/ri'
import { SiShadcnui, SiMui } from 'react-icons/si'

const technologies = [
  { Icon: FaHtml5, color: '#ffff' },
  { Icon: FaCss3Alt, color: '#ffff'},
  { Icon: FaJs, color: '#ffff'},
  { Icon: FaReact, color: '#ffff'},
  { Icon: RiTailwindCssFill, color: '#ffff'},
  { Icon: SiShadcnui, color: '#ffff'},
  { Icon: SiMui, color: '#ffff'},
  { Icon: RiFirebaseFill, color: '#ffff'},
]

const Technologies = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' })

  return (
    <section
      className="py-16 px-4 bg-gradient-to-r from-[#040013] to-[#4a0050]"
      ref={ref}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-white mb-1">
          Built with modern <span className="text-purple-400">technologies</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-16">
          From development to deployment, using the latest tools and frameworks.
        </p>

        <div className="grid grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center border-[#a7a7a7] gap-2 p-10 ${index % 4 !== 3 ? 'border-r' : ''} ${index >= 4 ? 'border-t' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <tech.Icon size={32} color={tech.color} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Technologies
