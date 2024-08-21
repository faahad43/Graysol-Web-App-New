import React from 'react'
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../../Sections/index.js'
import { graphicDesignPage } from '../../Sections/servicesData.js'

export const GraphicDesign = () => {
  return (
    <>
          <Banner page='service' pageType={graphicDesignPage}/>
          <DevelopmentFeatures pageType={graphicDesignPage}/>
          <ServiceFeatures pageType={graphicDesignPage}/>
          <Specialization pageType={graphicDesignPage}/>
          <ServiceDetails pageType={graphicDesignPage}/>
          <ServiceWorking pageType={graphicDesignPage}/>
          <Help page="Service" pageType={graphicDesignPage}/>
          <ServiceBenefits pageType={graphicDesignPage}/>
          <Faq faqs={graphicDesignPage.faqs}/>
          <Question/>
    </>
  )
}
