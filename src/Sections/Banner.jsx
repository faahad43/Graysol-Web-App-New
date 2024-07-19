import React from 'react'
import MobileBanner from "../assets/img/MobileBanner.png";
import BannerImg from "../assets/img/BannerImg.png";
import styles from '../styles.js'

const Banner = () => {
  return (
    <div className='flex flex-col bg-secondary-500 pb-12'>
        <img className='' src={MobileBanner} alt="" />
        <div className='flex flex-col text-center gap-8'>
            <h1 className={`${styles.headingText} px-8`}>Powerful Business SolutionsWith <span className='text-primary-default uppercase'>Graysol</span></h1>
            <p className={`${styles.descriptionText} px-10 leading-5`}>
            Gray Solutions is a leading software agency that provides web app development, custom software development, cloud solutions, and IT consultation. Our team of experienced professionals uses cutting-edge technology to optimize business processes, boost productivity, and drive growth for our clients. We're committed to building long-term relationships with our clients and delivering outstanding results.
            </p>
        </div>
    </div>
  )
}

export default Banner