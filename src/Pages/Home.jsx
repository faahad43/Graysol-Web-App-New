import React from 'react'
import { Banner, ChooseUs, Sponsers,Services, Certifications,Promise, Testimonials,Help,Question, Faq } from '../Sections'


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
      <Faq/>
      <Question/>
    </>
  )
}

export default Home