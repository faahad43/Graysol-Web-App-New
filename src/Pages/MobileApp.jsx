import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../Sections/index.js'
import { mobileAppPage } from '../Sections/servicesData.js'

export const MobileApp = () => {
  return (
    <>
          <Banner page='service' pageType={mobileAppPage}/>
          <DevelopmentFeatures/>
          <ServiceFeatures pageType={mobileAppPage}/>
          <Specialization/>
          <ServiceDetails pageType={mobileAppPage}/>
          <ServiceWorking pageType={mobileAppPage}/>
          <Help page="Service" pageType={mobileAppPage}/>
          <ServiceBenefits/>
          <Faq/>
          <Question/>
    </>
  )
}
