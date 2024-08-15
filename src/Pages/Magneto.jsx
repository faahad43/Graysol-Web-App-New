import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../Sections/index.js'
import { magnetoPage } from '../Sections/servicesData.js'

export const Magneto = () => {
  return (
    <>
          <Banner page='service' pageType={ magnetoPage}/>
          <DevelopmentFeatures/>
          <ServiceFeatures pageType={magnetoPage}/>
          <Specialization/>
          <ServiceDetails pageType={magnetoPage}/>
          <ServiceWorking pageType={magnetoPage}/>
          <Help page="Service" pageType={magnetoPage}/>
          <ServiceBenefits/>
          <Faq/>
          <Question/>
    </>
  )
}
