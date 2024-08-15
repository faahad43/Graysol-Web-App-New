import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import {Banner,DevelopmentFeatures, ServiceFeatures,Specialization,ServiceDetails,ServiceWorking,Help, ServiceBenefits,Faq,Question} from '../Sections/index.js'
import { wordpressPage } from '../Sections/servicesData.js';

const Services = () => {
  const location = useLocation(); // Get the current location

  // Determine if the current location is a nested route
  const isNestedRoute = location.pathname.includes('services/') && location.pathname !== '/services';

  return (
    <div>
      {!isNestedRoute && (
        <>
          <Banner page='service' pageType={wordpressPage}/>
          <DevelopmentFeatures/>
          <ServiceFeatures pageType={wordpressPage}/>
          <Specialization/>
          <ServiceDetails pageType={wordpressPage}/>
          <ServiceWorking pageType={wordpressPage}/>
          <Help page="Service" pageType={wordpressPage}/>
          <ServiceBenefits/>
          <Faq/>
          <Question/>
        </>
      )}
      <Outlet /> {/* Renders nested routes content */}
    </div>
  )
}

export  {Services}