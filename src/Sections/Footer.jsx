import React from 'react'
import styles from '../styles'
import Logo from '../assets/img/BigLogo.png'
import Phone from '../assets/icons/phone.svg'
import Location from '../assets/icons/location.svg'
import Email from '../assets/icons/email.svg'


const Footer = () => {
  return (
    <div className=''>
      <div className='w-full bg-dark-400 text-light-900 flex flex-col gap-10 py-8 px-8'>
        <div className='text-[14px] font-extralight] flex flex-col gap-6'>
          <img className='w-[180px] h-[30px] -ml-3' src={Logo} alt="" />
          <p >Proudly Based in Pakistan</p>
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
        <div className='space-y-8'>
          <div>
            <h4 className={`${styles.subHeadingText} text-secondary-default`}>INFORMATION</h4>
            <ul className='text-[16px] space-y-3 list-disc list-inside mt-5 font-abhaya'>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Acceptable Use Policy</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>GDPR</li>
            </ul>
          </div>
          <div  className='text-[14px] space-y-6'>
            <h4 className={`${styles.subHeadingText} text-secondary-default`}>WE ARE AT</h4>
            <p className='pl-2'>Location</p>
            <p className='pl-2'>Location</p>
          </div>
        </div>
        <div>
          <h4 className={`${styles.subHeadingText} text-secondary-default`}>LATEST BLOG POST</h4>
          <ul className='text-[16px] list-disc ml-4 mt-3 font-abhaya'>
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
      <div className='w-full bg-dark-200 text-light-900 pl-[8vw] py-2'>
              <p className={`font-extralight text-[12px]`}>
                <span className=' text-dark-100'>&copy; </span>
                2023 Graysol. All Rights Reserved
              </p>
      </div>
    </div>
  )
}

export default Footer