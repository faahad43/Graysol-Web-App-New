import React from 'react'
import styles from '../styles'
import GoogleCloud from "../assets/img/GoogleCloud.png"
import GoogleNetwork from "../assets/img/GoogleNetwork.png"
import GoogleSecurity from "../assets/img/GoogleSecurity.png"
import Iso from "../assets/img/iso.png"
import Ukas from "../assets/img/Ukas.png"
import SafeAdmin from "../assets/img/SafeAdmin.png"
import AwsDatabase from "../assets/img/aws-database.png"
import AwsArchitect from "../assets/img/AWS-Architect.png"


const Certifications = () => {

    const images = [GoogleCloud, GoogleNetwork, GoogleSecurity,AwsArchitect,  SafeAdmin, AwsDatabase, Iso, Ukas ];

  return (
    <div className='w-screen bg-dark-900 py-8 flex flex-col items-center gap-10'>
        <h2 className={`${styles.headingText}`}>Our Certifications</h2>
        <div className='w-[calc(100%-3rem)] border-2 border-primary-default rounded bg-dark-700 justify-center gap-8 flex flex-wrap py-8'>
            {images.map((image,index)=>(
                <img className='w-[80px] object-contain' key={index} src={image} alt="Cetification image" />
            ))}
        </div>
    </div>
  )
}

export default Certifications