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
    cardStyling :'cardShadow text-dark-900 bg-light-900 h-68 px-4  pt-3',
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
          <h1 className={`${styles.headingText}`}>
              Benefits of Software Development Outsourcing
          </h1>
          <div className='flex'>
            <div className='w-[10%] relative after:hidden lg:after:block after:absolute after:top-[calc(50%-5px)] xl:after:top-[calc(50%-6px)] after:w-full after:border-t-2 after:border-primary-default after:right-0'></div>
            <div className='w-[80%]  mx-auto text-light-900 grid grid-cols-6 md:grid-cols-12 border-primary-default'>
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default col-span-1 md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 border-b-2 border-primary-default flex flex-col items-center gap-3 pt-10 pb-5 px-4 '>
                    <img className='w-[40px]' src={Settings} alt="" />
                    <h4>Focus on Core Business</h4>
                    <p className={`text-[12px] font-light lg:font-normal`}>
                      You can focus on your core business by outsourcing a software development team.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div> 
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0  border-b-2 border-primary-default flex flex-col items-center gap-3 pt-10 pb-5 px-4'>
                    <img className='w-[30px]' src={Arrow} alt="" />
                    <h4>Can Utilize a Broader Range of Experts</h4>
                    <p className={`text-[12px] font-light lg:font-normal`}>
                      You can get your work done by the best software engineers without compromising the quality of the work.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div> 
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 lg:border-l-2 border-b-2 border-primary-default flex flex-col items-center gap-3 pt-10 pb-5 px-4'>
                    <img className='w-[40px]' src={Warning} alt="" />
                    <h4>Save Your Money</h4>
                    <p className={`text-[12px] font-light lg:font-normal`}>
                      You can reduce your upfront cost by outsourcing your work to a software development company.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0 lg:border-l-0 border-b-2  lg:border-b-0 border-primary-default flex flex-col items-center gap-3 pt-10 pb-5 px-4'>
                    <img className='w-[40px] ' src={Clock} alt="" />
                    <h4>Faster time to Market</h4>
                    <p className={`text-[12px] font-light lg:font-normal`}>
                    Outsourcing software development ensures a faster turnaround time to market the product.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-x-0 lg:border-l-2 border-b-2 md:border-b-0 border-primary-default flex flex-col items-center gap-3 pt-10 pb-5 px-4'>
                    <img className='w-[40px]' src={Sheild} alt="" />
                    <h4>Save Your Time</h4>
                    <p className={`text-[12px] font-light lg:font-normal`}>
                      Software development takes less time when you outsource some of the tasks to another company.
                    </p>
                  </div>
                  <div className='border-b-2 border-primary-default md:hidden'></div>
              </div>  
              <div className='grid grid-cols-subgrid col-span-6 lg:col-span-4'>
                  <div className='md:hidden'></div>
                  <div className='col-span-4 md:col-span-6 lg:col-span-4 border-x-2 md:border-r-0 border-primary-default flex flex-col items-center gap-3 pt-10 pb-5 px-4'>
                    <img className='w-[40px]' src={Atom} alt="" />
                    <h4>Lower Risk</h4>
                    <p className={`text-[12px] font-light lg:font-normal`}>
                      By outsourcing to an external development company, you can deliver a high-quality project on time by reducing the level of risk.
                    </p>
                  </div>
                  <div className='md:hidden'></div>
              </div> 
            </div>
            <div className='w-[10%] relative after:hidden lg:after:block after:absolute after:top-[calc(50%-5px)] xl:after:top-[calc(50%-6px)] after:w-full after:border-t-2 after:border-primary-default after:right-0'></div>
          </div>

          <div className='w-[90%]  mx-auto rounded-2xl bg-dark-700 p-8 flex flex-col gap-6'>
            {data.map((item,index) => (
                <DevelopmentCard key={index} heading={item.heading} description={item.description} img={item.img} imgStyle={item.imgStyle} styles={cardStyles}/>
            ))}
          </div>
          
    </div>
  );
}

export default Benefits;
