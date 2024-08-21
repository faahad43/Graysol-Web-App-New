import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../../Sections/index.js'
import { personalBrandingPage } from '../../Sections/servicesData.js'

export const PersonalBranding = () => {
  return (
    <>
          <Banner page='service' pageType={personalBrandingPage}/>
          <DevelopmentFeatures pageType={personalBrandingPage}/>
          <ServiceFeatures pageType={personalBrandingPage}/>
          <Specialization pageType={personalBrandingPage}/>
          <ServiceDetails pageType={personalBrandingPage}/>
          <ServiceWorking pageType={personalBrandingPage}/>
          <Help page="Service" pageType={personalBrandingPage}/>
          <ServiceBenefits pageType={personalBrandingPage}/>
          <Faq faqs={personalBrandingPage.faqs}/>
          <Question/>
    </>
  )
}
