import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import HomeAbout from '../components/home/HomeAbout'
import HomeWork from '../components/home/HomeWork'
import Footer from '../layout/Footer'

const HomePage = () => {
  return (
    <div className='bg-body-primary text-primary'>
      <HomeHeader />
      <HomeAbout />
      <HomeWork />
      <Footer />
    </div>
  )
}

export default HomePage
