import React from 'react'
import {Banner2,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, Benefits,Faq,Question} from '../Sections/index.js'

const Services = () => {
  return (
    <>
    <Banner2 page='service'/>
    <DevelopmentFeatures/>
    <ServiceFeatures/>
    <Specialization/>
    <ServiceDetails/>
    <ServiceWorking/>
    <Help page="Service"/>
    <Benefits/>
    <Faq/>
    <Question/>
    </>
  )
}

export default Services