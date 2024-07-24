import React,{useEffect,useState} from 'react'
import MobileBanner from "../assets/img/MobileBanner.png";
import BannerImg from "../assets/img/BannerImg.png";
import styles from '../styles.js'
import useWindowSize from '../hooks/windowSize.js'
import Button from '../Components/Button.jsx';

const Banner = () => {
  const windowSize = useWindowSize();
  return (
    <div className='flex flex-col sm:w-screen sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[45rem]  sm:justify-end md:justify-around md:pt-12 bg-secondary-500 pb-12 sm:bg-cover bg-right   bg-no-repeat bg-center ' style={{backgroundImage:windowSize >= 640 ? `url(${BannerImg})` : 'none' }}>
        <img className='w-screen sm:hidden' src={windowSize <'640'? MobileBanner : BannerImg} alt="" />
        <div className='flex flex-col sm:w-[75%] md:w-[70%]  text-center sm:text-start gap-8 sm:gap-5 lg:gap-10 px-8 md:pl-[10%] ' >
            <h1 className={`${styles.headingText} text-[37px]`}>Powerful Business<br/> SolutionsWith <span className='text-primary-default uppercase'>Graysol</span></h1>
            <p className={`${styles.descriptionText} leading-5 md:w-[85%]`}>
            Gray Solutions is a leading software agency that provides web app development, custom software development, cloud solutions, and IT consultation. Our team of experienced professionals uses cutting-edge technology to optimize business processes, boost productivity, and drive growth for our clients. We're committed to building long-term relationships with our clients and delivering outstanding results.
            </p>
            <Button name='GET A QUOTE' className={`${windowSize < 768 ? 'hidden' : 'visible'} px-4`}/>
        </div>
    </div>
  )
}

export default Banner