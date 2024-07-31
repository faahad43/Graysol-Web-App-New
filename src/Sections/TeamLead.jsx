import React from 'react'
import styles from '../styles'
import TeamLead1 from '../assets/img/aboutPerson1.png'
import TeamLead2 from '../assets/img/aboutPerson2.png'

const TeamLead = () => {

  const teamLeadData = [
    {
        name: 'Walkor Mattox',
        position: 'Founder + CEO',
        image: TeamLead1,
    },
    {
        name: 'Marcella Buttler',
        position: 'Chief People Officer',
        image: TeamLead2,
    },
    {
        name: 'Walkor Mattox',
        position: 'Founder + CEO',
        image: TeamLead1,
    },
    {
        name: 'Kristin',
        position: 'Chief Of Staff',
        image: TeamLead2,
    },
  ];

  return (
    <div className='bg-dark-900 py-8 text-center'>
            <h2 className={`${styles.aboutUsHeading}`}>
                Get to Know Us
            </h2>
            <p className={`${styles.descriptionText} mt-5 px-[8%]`}>
                Our head Solutioneers lead with passion and humility, and they keep it real with a healthy dose of sarcasm.
            </p>
            <div className={`w-full bg-dark-800 mt-3 py-8 grid grid-cols-1 place-items-center gap-8`}>
                {teamLeadData.map((data, index) => (
                    <div key={index} className='text-center flex flex-col items-center gap-1'>
                        <div 
                        className='bg-primary-700 w-64 h-64 flex justify-center items-end rounded-lg' 
                        style={{background: 'linear-gradient(180deg, #131313 -70.89%, #20052C 100%)'}}>
                            <img 
                            className='w-52 h-58 max-w-[441px] max-h-[571px]' 
                            src={data.image} 
                            alt="Team Lead Image" />
                        </div>
                        <h5 className={`text-light-900 mt-1 text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] tracking-wide`}>
                            {data.name}
                        </h5>
                        <p className={`${styles.descriptionText} opacity-50 `}>
                            {data.position}
                        </p>
                    
                    </div>
                ))}
            
            </div>
    </div>
  )
}

export default TeamLead