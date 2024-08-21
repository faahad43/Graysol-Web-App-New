import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../../Sections/index.js'
import { webAndAppPage } from '../../Sections/servicesData.js'

export const WebAndAppDesign = () => {
  return (
    <>
        <Banner page='service' pageType={webAndAppPage}/>
        <DevelopmentFeatures pageType={webAndAppPage}/>
        <ServiceFeatures pageType={webAndAppPage}/>
        <Specialization pageType={webAndAppPage}/>
        <ServiceDetails pageType={webAndAppPage}/>
        <ServiceWorking pageType={webAndAppPage}/>
        <Help page="Service" pageType={webAndAppPage}/>
        <ServiceBenefits pageType={webAndAppPage}/>
        <Faq faqs={webAndAppPage.faqs}/>
        <Question/>
    </>
  )
}
