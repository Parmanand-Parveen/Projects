import { Fragment, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Herosection from './components/Hero-section'
import Info from './components/Info'
import WhyUs from './components/WhyUs'
import FeaturedCourses from './components/FeaturedCourses'
import OurInstructor from './components/OurInstructor'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
   
  return (
    <Fragment clasName="overflow-x-hidden">
      <Header />
      <Herosection/>
      <Info/> 
      <WhyUs/>
      <FeaturedCourses/>
      <OurInstructor/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </Fragment>
  )
}

export default App
