import React from 'react';
import styles from '../styles';
import Atom from  '../assets/icons/feature1.svg';
import Sheild from '../assets/icons/feature2.svg';
import Clock from '../assets/icons/whiteClock.svg';
import Warning from '../assets/icons/warning.svg';
import Arrow from '../assets/icons/doubleArrow.svg';
import Settings from '../assets/icons/settings.svg';
import SheildIcon from '../assets/icons/shield.svg';
import Like from '../assets/icons/like.svg';
import Notebook from '../assets/icons/notebook.svg';
import DevelopmentCard from '../Components/DevelopmentCard';

function Benefits() {

  const cardStyles = {
    cardStyling :'cardShadow text-dark-900 bg-light-900 h-68 px-4 pt-3 sm:py-8 lg:py-6 xl:py-8 sm:px-[8%] lg:px-4 xl:px-6  sm:gap-8 lg:gap-4 lg:flex-col lg:flex-1 ',
    headingStyle :'text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-snug',
    descriptionStyle :'text-[12px] md:text-[14px] lg:text-[16px] font-normal leading-snug',
   
} 

const data = [
    {
        img:Like,
        imgStyle:'w-[50px] h-[49px]',
        heading:'Software development & support',
        description:'We offer end-to-end development & support services that cater to the unique requirements of your business. Our team of experienced developers implements the latest technologies and best practices to create scalable, efficient, and secure software solutions that drive your business forward.',
    },
    {
        img:Notebook,
        imgStyle:'w-[40px] h-[55px]',
        heading:'End to end support',
        description:'Our team of expert developers and support engineers provide top-notch services to clients across various industries. Graysol understand the importance of reliable and efficient software support in ensuringseamless business operations. That’s why we offer comprehensive software support services designed to address all your concerns and requirements. ',
    },
    {
        img:SheildIcon,
        imgStyle:'w-[40px] h-[50px]',
        heading:'Secure & agile methodologies',
        description:'We follow an Agile development process that ensurestimely delivery, regular updates, and open communication with our clients. At Graysol, we believe that software development & support are critical components of any business, and we are committed to providing the highest quality services to our clients without compromising onsecurity. ',
    },
  ]
  
  return (
    <div className='bg-dark-900 text-center py-12 space-y-16'>
          <h1 className={`${styles.headingText} w-4/5 lg:w-3/4 2xl:w-3/5 mx-auto`}>
              Benefits of Software Development Outsourcing
          </h1>
          <div className='flex'>
            <div className='w-[80%] xl:w-[75%]  mx-auto text-light-900 grid grid-cols-6 md:grid-cols-12 border-primary-default'>
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default col-span-1 md:hidden'></div>
                  <div className='relative col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 border-b-2 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6 after:hidden lg:after:block after:absolute after:w-screen after:border-t-2 after:border-primary-default after:-bottom-[2px] after:-left-[40%] xl:after:-left-[50%] '>
                    {/* The absolute in the above div is for the line that shows on larger screen extending the borders */}
                    <img className='w-[40px] md:w-[55px] ' src={Settings} alt="" />
                    <h4 className='text-[16px] md:text-[20px]'>Focus on Core Business</h4>
                    <p className={`text-[12px] md:text-[15px] font-light lg:font-normal`}>
                      You can focus on your core business by outsourcing a software development team.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div> 
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0  border-b-2 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[30px] md:w-[35px]' src={Arrow} alt="" />
                    <h4 className='text-[16px] md:text-[20px]'>Can Utilize a Broader Range of Experts</h4>
                    <p className={`text-[12px] md:text-[15px] font-light lg:font-normal`}>
                      You can get your work done by the best software engineers without compromising the quality of the work.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div> 
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 lg:border-l-2 border-b-2 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[40px] md:w-[45px]' src={Warning} alt="" />
                    <h4 className='text-[16px] md:text-[20px]'>Save Your Money</h4>
                    <p className={`text-[12px] md:text-[15px] font-light lg:font-normal`}>
                      You can reduce your upfront cost by outsourcing your work to a software development company.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0 lg:border-l-0 border-b-2  lg:border-b-0 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[40px] md:w-[45px]' src={Clock} alt="" />
                    <h4 className='text-[16px] md:text-[20px]'>Faster time to Market</h4>
                    <p className={`text-[12px] md:text-[15px] font-light lg:font-normal`}>
                    Outsourcing software development ensures a faster turnaround time to market the product.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 lg:border-l-2 border-b-2 md:border-b-0 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[40px] md:w-[45px]' src={Sheild} alt="" />
                    <h4 className='text-[16px] md:text-[20px]'>Save Your Time</h4>
                    <p className={`text-[12px] md:text-[15px] font-light lg:font-normal`}>
                      Software development takes less time when you outsource some of the tasks to another company.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0 border-primary-default flex flex-col items-center gap-3 lg:gap-5 pt-10 pb-5 xl:pb-8 px-4 lg:px-6'>
                    <img className='w-[40px] md:w-[50px]' src={Atom} alt="" />
                    <h4 className='text-[16px] md:text-[20px]'>Lower Risk</h4>
                    <p className={`text-[12px] md:text-[15px] font-light lg:font-normal`}>
                      By outsourcing to an external development company, you can deliver a high-quality project on time by reducing the level of risk.
                    </p>
                  </div>
                  <div className='md:hidden'></div>
              </div> 
            </div>
            
          </div>

          <div className='w-[90%] max-w-[1150px] mx-auto rounded-2xl bg-dark-700 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-4 xl:gap-8 2xl:gap-16 p-8 sm:px-[5%] lg:px-6 xl:px-10 2xl:px-16 sm:py-12 xl:py-20'>
            {data.map((item,index) => (
                <DevelopmentCard key={index} heading={item.heading} description={item.description} img={item.img} imgStyle={item.imgStyle} styles={cardStyles}/>
            ))}
          </div>
          
    </div>
  );
}

export default Benefits;
