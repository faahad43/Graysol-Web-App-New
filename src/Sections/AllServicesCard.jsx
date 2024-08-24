import React from 'react'
import styles from '../styles'
import { ServiceCard } from '../Components/ServiceCard'
import Wordpress from '../assets/icons/wordpress_illustration.svg'
import Ai from '../assets/icons/ai_illustration.svg'
import Software from '../assets/icons/software_illustration.svg'
import Mobile from '../assets/icons/mobile_illustration.svg'
import Webiste from '../assets/icons/web_illustration.svg'
import Graphic from '../assets/icons/graphic_illustration.svg'
import Cloud from '../assets/icons/cloud_illustration.svg'
import Ui from '../assets/icons/ui_illustration.svg'
import Branding from '../assets/icons/personal_branding_illustration.svg'

export const AllServicesCard = () => {
  const data = [
    {
      "title": "Software Development",
      "description": "Custom software solutions designed to meet your business needs and scale as you grow.",
      "link": "/services/software-development",
      "image": Software,
      "className": ''
    },
    {
      "title": "Website Development",
      "description": "Create engaging, responsive designs that provide seamless experiences across all devices.",
      "link": "/services/web-app",
      "image": Webiste,
      "className": 'flex-row-reverse '
    },
    {
      "title": "Mobile App Development",
      "description": "Build high-performance mobile apps that engage users on both iOS and Android platforms.",
      "link": "/services/mobile-app",
      "image": Mobile,
      "className": ''
    },
    {
      "title": "Data Science & AI",
      "description": "Leverage data-driven insights and AI solutions to automate processes and drive growth.",
      "link": "/services/data-science",
      "image": Ai,
      "className": 'flex-row-reverse '
    },
    {
      "title": "WordPress & Shopify Development",
      "description": "Design and develop custom eCommerce solutions with WordPress and Shopify.",
      "link": "/services/wordpress",
      "image": Wordpress,
      "className": ''
    },
    {
      "title": "Cloud Solutions",
      "description": "Scalable cloud solutions tailored to your business needs for enhanced performance and security.",
      "link": "/services/cloud-solution",
      "image": Cloud,
      "className": 'flex-row-reverse'
    },
    {
      "title": "Graphic Design",
      "description": "Create visually striking designs that enhance your brand’s identity and appeal.",
      "link": "/services/graphic-design",
      "image": Graphic,
      "className": ''
    },
    {
      "title": "Personal Branding",
      "description": "Build a strong personal brand that resonates with your audience and amplifies your influence.",
      "link": "/services/personal-branding",
      "image": Branding,
      "className": 'flex-row-reverse'
    },
    {
      "title": "Web and Application Design",
      "description": "Professional design services to craft beautiful and functional web and mobile applications.",
      "link": "/services/web&app-design",
      "image": Ui,
      "className": 'col-span-2 w-1/2'
    }
  ]

  return (
    <div className='bg-light-900 py-12 text-center space-y-8'>
        <h1 className={styles.h1Dark}>What We Do</h1>
        <div 
            className='bg-dark-700 max-w-[1267px] w-[95%] rounded-3xl mx-auto md:place-items-center grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-8 md:gap-x-8 lg:gap-x-12 p-6 sm:px-12 md:p-8 lg:p-12'
        >
            {data.map((item, i) => (
                <ServiceCard key={i} data={item} />
            ))}
            
           
        </div>
    </div>
  )
}
