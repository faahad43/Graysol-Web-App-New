import React from 'react'
import { AboutPageBanner, AboutCompanyStats, AboutCompanyVision, ContactForm2, AboutTeamLead } from '../Sections'

const AboutUs = () => {
  return (
    <div>
        <AboutPageBanner/>
        <AboutTeamLead/>
        <AboutCompanyStats/>
        <AboutCompanyVision/>
        <ContactForm2/>
    </div>
  )
}

export  {AboutUs}