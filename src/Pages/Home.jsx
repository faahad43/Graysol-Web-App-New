import React from 'react'
import { HomeBanner, ChooseUs, Sponsers,Services, Certifications,Promise, Testimonials,Help,Question, Faq } from '../Sections'


const Home = () => {
  return (
    <>
      <HomeBanner/>
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

export {Home}