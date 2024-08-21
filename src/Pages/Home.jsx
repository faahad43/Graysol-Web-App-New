import React from 'react'
import { HomeBanner, ChooseUs, Sponsers,Services, Certifications,Promise, Testimonials,Help,Question, Faq } from '../Sections'


const Home = () => {
  const faqs = [
        {
            question : '',
            answer :''
        },
        {
            question : '',
            answer :''
        },
        {
            question : '',
            answer :''
        },
        {
            question : '',
            answer :''
        },
        {
            question : '',
            answer :''
        },
        {
            question : '',
            answer :''
        },
        {
            question : '',
            answer :''
        },{
            question : '',
            answer :''
        },
        {
            question : '',
            answer :''
        },
        {
            question : '',
            answer :''
        },
      ]
      
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
      <Faq faqs={faqs}/>
      <Question/>
    </>
  )
}

export {Home}