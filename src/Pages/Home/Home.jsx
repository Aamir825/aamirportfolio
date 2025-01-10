import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects'
import HeroSection from '@/components/HeroSection/HeroSection'
import Technologies from '@/components/Technologies/Technologies'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Technologies/>
      <FeaturedProjects/>
    </>
  )
}

export default Home