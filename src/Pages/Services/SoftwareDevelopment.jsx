import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../../Sections/index.js'
import { softwareDevelopmentPage } from '../../Sections/servicesData.js'

export const SoftwareDevelopment = () => {
  return (
    <>
          <Banner page='service' pageType={softwareDevelopmentPage}/>
          <DevelopmentFeatures pageType={softwareDevelopmentPage}/>
          <ServiceFeatures pageType={softwareDevelopmentPage}/>
          <Specialization pageType={softwareDevelopmentPage}/>
          <ServiceDetails pageType={softwareDevelopmentPage}/>
          <ServiceWorking pageType={softwareDevelopmentPage}/>
          <Help page="Service" pageType={softwareDevelopmentPage}/>
          <ServiceBenefits pageType={softwareDevelopmentPage}/>
          <Faq faqs={softwareDevelopmentPage.faqs}/>
          <Question/>
    </>
  )
}
