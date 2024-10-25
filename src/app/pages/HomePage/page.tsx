import HeroSlider from '../../../../components/HeroSection'
import Navbar from '../../../../components/NavBar'
import IndustrySection from '../../../../components/IntroSection'
import React from 'react'
import TeamSection from '../../../../components/TeamSection'
import Testimonials from '../../../../components/Testimonials'
import Footer from '../../../../components/Footer'

function Homepage() {
  return (
    <>
    {/* <Navbar /> */}
    <HeroSlider />
    <IndustrySection />
    <TeamSection/>
    <Testimonials />
    {/* <Footer /> */}
    </>
  )
}

export default Homepage