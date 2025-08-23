import AboutSection from '@/components/about/AboutSection'
import AboutHeader from '../components/about/AboutHeader'
import React from 'react'
import Footer from '@/layout/Footer'

const About = () => {
  return (
    <div className='bg-body-primary text-primary'>
      <AboutHeader />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default About
