import React from 'react'
import {Banner2,DevelopmentFeatures, Wordpress,Specialization,CustomWordpress,WordpressWorking,Help, Benefits,Faq,Question} from '../Sections/index.js'

const Services = () => {
  return (
    <>
    <Banner2 page='service'/>
    <DevelopmentFeatures/>
    <Wordpress/>
    <Specialization/>
    <CustomWordpress/>
    <WordpressWorking/>
    <Help page="Service"/>
    <Benefits/>
    <Faq/>
    <Question/>
    </>
  )
}

export default Services