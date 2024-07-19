import React from 'react'
import { Banner, ChooseUs, Sponsers,Services, Certifications,Promise, Testimonials,Help,Question } from '../Sections'


const Home = () => {
  return (
    <>
      <Banner/>
      <Sponsers/>
      <ChooseUs/>
      <Services/>
      <Certifications/>
      <Promise/>
      <Testimonials/>
      <Help page="Home"/>
      <Question/>
    </>
  )
}

export default Home