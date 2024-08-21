import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../../Sections/index.js'
import { webApplicationPage } from '../../Sections/servicesData.js'

export const WebApp = () => {
  return (
    <>
          <Banner page='service' pageType={webApplicationPage}/>
          <DevelopmentFeatures pageType={webApplicationPage}/>
          <ServiceFeatures pageType={webApplicationPage}/>
          <Specialization pageType={webApplicationPage}/>
          <ServiceDetails pageType={webApplicationPage}/>
          <ServiceWorking pageType={webApplicationPage}/>
          <Help page="Service" pageType={webApplicationPage}/>
          <ServiceBenefits pageType={webApplicationPage}/>
          <Faq faqs={webApplicationPage.faqs}/>
          <Question/>
    </>
  )
}
