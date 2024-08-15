import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../Sections/index.js'
import { drupalPage } from '../Sections/servicesData.js'

export const Drupal = () => {
  return (
    <>
          <Banner page='service' pageType={drupalPage}/>
          <DevelopmentFeatures/>
          <ServiceFeatures pageType={drupalPage}/>
          <Specialization/>
          <ServiceDetails pageType={drupalPage}/>
          <ServiceWorking pageType={drupalPage}/>
          <Help page="Service" pageType={drupalPage}/>
          <ServiceBenefits/>
          <Faq/>
          <Question/>
    </>
  )
}
