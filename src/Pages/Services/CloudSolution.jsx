import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../../Sections/index.js'
import { cloudSolutionPage } from '../../Sections/servicesData.js'

export const CloudSolution = () => {

  return (
    <>
          <Banner page='service' pageType={cloudSolutionPage}/>
          <DevelopmentFeatures pageType={cloudSolutionPage}/>
          <ServiceFeatures pageType={cloudSolutionPage}/>
          <Specialization pageType={cloudSolutionPage}/>
          <ServiceDetails pageType={cloudSolutionPage}/>
          <ServiceWorking pageType={cloudSolutionPage}/>
          <Help page="Service" pageType={cloudSolutionPage}/>
          <ServiceBenefits pageType={cloudSolutionPage}/>
          <Faq faqs={cloudSolutionPage.faqs} />
          <Question/>
    </>
  )
}
