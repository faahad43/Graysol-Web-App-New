import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../../Sections/index.js'
import { dataSciencePage } from '../../Sections/servicesData.js'

export const DataScience = () => {
  return (
    <>
          <Banner page='service' pageType={dataSciencePage}/>
          <DevelopmentFeatures pageType={dataSciencePage}/>
          <ServiceFeatures pageType={dataSciencePage}/>
          <Specialization pageType={dataSciencePage}/>
          <ServiceDetails pageType={dataSciencePage}/>
          <ServiceWorking pageType={dataSciencePage}/>
          <Help page="Service" pageType={dataSciencePage}/>
          <ServiceBenefits pageType={dataSciencePage}/>
          <Faq faqs={dataSciencePage.faqs}/>
          <Question/>
    </>
  )
}
