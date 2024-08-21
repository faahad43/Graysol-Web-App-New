import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../../Sections/index.js'
import { wordpressPage } from '../../Sections/servicesData.js'

export const WordpressService = () => {
  return (
    <>
          <Banner page='service' pageType={wordpressPage}/>
          <DevelopmentFeatures pageType={wordpressPage}/>
          <ServiceFeatures pageType={wordpressPage}/>
          <Specialization pageType={wordpressPage}/>
          <ServiceDetails pageType={wordpressPage}/>
          <ServiceWorking pageType={wordpressPage}/>
          <Help page="Service" pageType={wordpressPage}/>
          <ServiceBenefits pageType={wordpressPage}/>
          <Faq faqs={wordpressPage.faqs}/>
          <Question/>
    </>
  )
}
