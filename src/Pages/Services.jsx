import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../Sections/index.js'

const Services = () => {
  return (
    <>
    <Banner page='service'/>
    <DevelopmentFeatures/>
    <ServiceFeatures/>
    <Specialization/>
    <ServiceDetails/>
    <ServiceWorking/>
    <Help page="Service"/>
    <ServiceBenefits/>
    <Faq/>
    <Question/>
    </>
  )
}

export  {Services}