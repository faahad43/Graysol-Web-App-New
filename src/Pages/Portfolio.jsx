import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { PortfolioBanner, PortfolioSection, ContactForm2 } from '../Sections'


const Portfolio = () => {
  const location = useLocation(); // Get the current location

  // Determine if the current location is a nested route
  const isNestedRoute = location.pathname.includes('blog/path') && location.pathname !== '/blog';

  return (
    <div>
      {!isNestedRoute && (
        <>
            <PortfolioBanner/>
            <PortfolioSection/>
            <ContactForm2/>
        </>
        )}
        <Outlet /> {/* Renders nested routes content */}
    </div>
  )
}

export {Portfolio}