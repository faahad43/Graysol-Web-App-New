import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../Sections/index.js'
import { serviceMainPage } from '../Sections/servicesData.js';

const Services = () => {
  const location = useLocation(); // Get the current location

  // Determine if the current location is a nested route
  const isNestedRoute = location.pathname.includes('services/') && location.pathname !== '/services';

  return (
    <div>
      {!isNestedRoute && (
        <>
          <Banner page='service' pageType={serviceMainPage}/>
          <DevelopmentFeatures pageType={serviceMainPage}/>
          <ServiceFeatures pageType={serviceMainPage}/>
          <Specialization pageType={serviceMainPage}/>
          <ServiceDetails pageType={serviceMainPage}/>
          <ServiceWorking pageType={serviceMainPage}/>
          <Help page="Service" pageType={serviceMainPage}/>
          <ServiceBenefits pageType={serviceMainPage}/>
          <Faq faqs={serviceMainPage.faqs}/>
          <Question/>
        </>
      )}
      <Outlet /> {/* Renders nested routes content */}
    </div>
  )
}

export  {Services}