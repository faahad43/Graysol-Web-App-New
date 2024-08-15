import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../Sections/index.js'
import { whmcsPage } from '../Sections/servicesData.js'

export const Whmcs = () => {
  return (
    <>
          <Banner page='service' pageType={whmcsPage}/>
          <DevelopmentFeatures/>
          <ServiceFeatures pageType={whmcsPage}/>
          <Specialization/>
          <ServiceDetails pageType={whmcsPage}/>
          <ServiceWorking pageType={whmcsPage}/>
          <Help page="Service" pageType={whmcsPage}/>
          <ServiceBenefits/>
          <Faq/>
          <Question/>
    </>
  )
}
