import AboutSection from '@/components/about/AboutSection'
import AboutHeader from '../components/about/AboutHeader'
import React from 'react'

const About = () => {
  return (
    <div className='bg-body-primary text-primary'>
      <AboutHeader />
      <AboutSection />
    </div>
  )
}

export default About
