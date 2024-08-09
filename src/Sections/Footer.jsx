import React from 'react'
import styles from '../styles'
import Logo from '../assets/img/BigLogo.png'
import Phone from '../assets/icons/phone.svg'
import Location from '../assets/icons/location.svg'
import Email from '../assets/icons/email.svg'


const Footer = () => {
  return (
    <div className='bg-dark-400 w-screen'>
      <div className='w-full lg:w-[90%] sm:max-w-[1138px] lg:mx-auto text-light-900 flex flex-col lg:flex-row gap-10 py-8 px-8 sm:px-16 xl:px-0 lg:justify-between'>
        <div className={`${styles.p5} tracking-wider flex flex-col lg:w-[25%]  gap-6 lg:pt-6`}>
          <img className='w-[180px] h-[30px] lg:w-[270px] lg:h-[40px] -ml-3' src={Logo} alt="" />
          <p className={`${styles.p4}`} >Proudly Based in Pakistan</p>
          <div className='flex items-end gap-2'>
            <img className='w-[19px] h-[19px]' src={Phone} alt="phone-icon" />
            <p>+923088870328</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-[19px] h-[25px]' src={Location} alt="location-icon" />
            <p>Poornam inc.202 East Earil Drive, Suite 410,Phoenix,AZ 85012</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-[19px] h-[17px]' src={Email} alt="email-icon" />
            <p>graysol.co@gmail.com</p>
          </div>
        </div>
        <div className='space-y-8 lg:w-[25%]  '>
          <div>
            <p className={`${styles.p2Heavy} text-secondary-default`}>INFORMATION</p>
            <ul className={`${styles.p4Heavy} space-y-3 list-disc list-inside mt-5`}>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Acceptable Use Policy</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>GDPR</li>
            </ul>
          </div>
          <div  className={`${styles.p4} space-y-6`}>
            <p className={`${styles.p2Heavy} text-secondary-default`}>WE ARE AT</p>
            <p className='pl-2'>Location</p>
            <p className='pl-2'>Location</p>
          </div>
        </div>
        <div className='lg:w-[25%]  '>
          <p className={`${styles.p2Heavy} text-secondary-default`}>LATEST BLOG POST</p>
          <ul className={`${styles.p4Heavy} list-disc ml-4 mt-3`}>
              <li className='leading-7'>Configure DNS over HTTPS TLS blocking pfSense 2024-01- 03</li>
              <li className='leading-7'>Optimizing Kubernetes Rolling Updates: maxSurge 2024- 01-03</li>
              <li className='leading-7'>Redis Bloom Filter Commands | An Introduction 2024-01-04</li>
              <li className='leading-7'>LXD on Fedora | Set up & Configure 2024-01-04</li>
              <li className='leading-7'>Certbot IIS | Set up Guide 2024-01-04</li>
              <li className='leading-7'>How to Disable Sendmail AIX 2024-01-04</li>
              <li className='leading-7'>Configure DNS over HTTPS TLS blocking pfSense 2024-01-03</li>
            </ul>
        </div>
      </div>
      <div className='w-full  bg-dark-200 text-light-900  pl-[8vw] sm:pl-16 lg:pl-[10%] xl:pl-[15%] py-4 lg:py-6'>
              <p className={`font-light ${styles.p4}`}>
                <span className=' text-dark-100'>&copy; </span>
                2023 Graysol. All Rights Reserved
              </p>
      </div>
    </div>
  )
}

export {Footer}