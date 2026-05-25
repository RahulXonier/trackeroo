import React from 'react'
import Main from '../../components/layout/Main'
import Companies from '../../components/layout/Companies'
import Features from '../../components/layout/Features'
import RealTime from '../../components/layout/RealTime'
import Choose from '../../components/layout/Choose'
import TestimonialCarousel from '../../components/layout/Testimonial'



const Home = () => {
  return (
   <>
   <Main/>
   <Companies/>
   <Features/>
   <RealTime/>
   <Choose/>
   <TestimonialCarousel/>
   </>
  )
}

export default Home