'use client'

import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill, RiFirebaseFill } from 'react-icons/ri'
import { SiShadcnui, SiMui } from 'react-icons/si'

const technologies = [
  { Icon: FaHtml5, color: '#ffff' },
  { Icon: FaCss3Alt, color: '#ffff' },
  { Icon: FaJs, color: '#ffff' },
  { Icon: FaReact, color: '#ffff' },
  { Icon: RiTailwindCssFill, color: '#ffff' },
  { Icon: SiShadcnui, color: '#ffff' },
  { Icon: SiMui, color: '#ffff' },
  { Icon: RiFirebaseFill, color: '#ffff' },
]

const Technologies = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#040013] to-[#4a0050]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-1">
          Built with modern <span className='text-purple-400'>technologies</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-16">
          From development to deployment, using the latest tools and frameworks.
        </p>
        
        <div className="grid grid-cols-4">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className={`flex flex-col items-center border-[#a7a7a7] gap-2 p-10 ${index % 4 !== 3 ? 'border-r' : ''} ${index >= 4 ? 'border-t' : ''}`}
            >
              <tech.Icon 
                size={32} 
                color={tech.color}
                className="transition-transform duration-200 hover:scale-125" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies