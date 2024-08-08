import React,{useState,useRef} from 'react'
import styles from '../styles'
import Commas from '../assets/icons/commas.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AboutCompanyVision = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  return (
    <div className='bg-dark-900 pt-12  md:pt-16 pb-8 md:pb-10 sm:px-[10%] lg:px-[5%] text-light-900 space-y-16 lg:space-y-20'>

      <div className='space-y-3 '>
        <h2 className={`${styles.aboutUsHeading} capitalize text-center`}>
            what we believe in
        </h2>
        <h3 
          className={`font-medium text-[20px] xl:text-[40px] text-center capitalize tracking-wide`}>
          Trust, safety, and <span className='text-primary-default'>
            people-first
            </span> collaboration always.
        </h3>
      </div>

      <div className='grid grid-cols-3 w-[90%] max-w-[1250px] mx-auto'>
        <div className='grid grid-cols-subgrid col-span-3 border-b-[3px]  border-primary-default'>
          <h3 className='col-span-1  font-medium text-[20px] xl:text-[40px] tracking-wide mt-auto pb-7 lg:pb-9  mx-auto'>
            Our Values
          </h3>
          <div className='col-span-2 border-l-[3px] border-primary-default pl-5 md:pl-10 lg:pl-16 lg:pr-2 pb-3 md:pb-5 lg:pb-7 lg:pt-5 space-y-4'>
            <p className={styles.descriptionText}>
              As a company within the Gray family, we share and live by these values each day.
            </p>
            <ul className={`${styles.descriptionText} list-disc`}>
              <li>
                We put safety and quality of life first.
              </li>
              <li>
                We are customer and relationship driven.
              </li>
              <li>
                We treat others the way we want to be treated, where everyone is welcome and respected.
              </li>
            </ul>
          </div>
        </div>

        <div className='grid grid-cols-subgrid col-span-3 border-b-[3px] border-primary-default '>
          <h3 className='col-span-1 font-medium text-[20px] xl:text-[40px] text-center tracking-wide mt-auto pb-7 md:pb-12  mx-auto'>
            Our Vision
          </h3>
          <div className='col-span-2 border-l-[3px] border-primary-default pl-5 md:pl-10 lg:pl-16 lg:pr-2 py-5 md:py-10 lg:py-14'>
            <p className={styles.descriptionText}>
              The trusted leader in process innovation where the best want to belong.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-subgrid col-span-3 border-b-[3px] border-primary-default '>
          <h3 className='col-span-1 font-medium text-[20px] xl:text-[40px] text-center tracking-wide mt-auto pb-7 lg:pb-12 mx-auto'>
            Our Vision
          </h3>
          <div className='col-span-2 border-l-[3px] border-primary-default pl-5 md:pl-10 lg:pl-16 lg:pr-2 py-5 md:pt-10 lg:pt-12 lg:pb-8'>
            <p className={styles.descriptionText}>
              Trusted advisors delivering outcome based solutions through deep collaboration and lasting partnerships, while providing fulfilling team experiences.
            </p>
          </div>
        </div>
      </div>

      <div className='space-y-8 lg:space-y-16 max-w-[1250px] mx-auto'>
        <h2 className={`${styles.aboutUsHeading} text-center`}>
          Our Histroy
        </h2>
        <div className={`relative flex flex-col lg:flex-row w-[90%] xl:w-full mx-auto gap-12 lg:gap-6 xl:gap-12`}>
            <div className='space-y-6 lg:w-2/5 text-center lg:text-start'>
              <h3 className='font-medium text-[20px] sm:text-[25px] md:text-[28px] lg:text-[33px] xl:text-[40px]  tracking-wide'>
                Where it Began
              </h3>
              <p className={`${styles.descriptionText} capitalize `}>
                When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on inside-the-box thinking. Fast forward to today, and we’re a thriving system integrator who is revolutionizing business for our customers and ourselves.
              </p>
              <div className='space-y-3 flex flex-col items-center lg:items-start lg:pt-5'>
                <img
                  className='w-6'
                  src={Commas}
                  alt="The commas icons" 
                />
                <p className={`${styles.descriptionText}`}>
                  There’s nothing more inspiring than seeing a product out in the world that our Solutioneers have influenced or helped bring to market with innovative thinking.
                </p>
                <p className='text-[13px] font-light md:font-normal tracking-wider'>
                  Walker Mattox
                </p>
              </div>
              
            </div>
            <div className='w-full lg:w-3/5  border-2 border-primary-default'>
                <Slider 
                  ref={slider => {sliderRef = slider;}}
                  {...settings}>
                  <div className=' p-6 md:p-8 space-y-10 lg:space-y-16'>
                    <h4 className=' font-medium text-[23px] lg:text-[35px]'>
                      Gray Solution Is Founded
                    </h4>
                    <div className='space-y-3 lg:space-y-5'>
                      <div className='flex items-center gap-2 tracking-wide text-[13px] lg:text-[15px]'>
                          <span 
                          className='w-2 h-2 static inline-block bg-primary-default rounded-full'>
                          </span> 
                          2018
                      </div>
                      <p className='capitalize font-light lg:font-normal text-[15px] lg:text-[18px]'>
                        When CEO Walker Mattox founded Gray Solutions, he set out to shake up an industry that relies too heavily on Inside-the-box thinking. Backed by Gray, a global leader recognized for services spanning engineering, design, construction, and specialty equipment manufacturing, Gray Solutions earned its stripes on a world-class pet food operation. Fast forward to today, and we're a thriving system integrator who is revolutionizing business for our customers and ourselves.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider>
            </div>
        </div>
        <div className='text-center flex justify-center items-center gap-3 text-[20px] font-normal tracking-wider'>
             <IoIosArrowBack className='hover:fill-primary-default hover:cursor-pointer' onClick={previous} size={25}/>
             <h5>{currentSlide+1} / 6</h5> 
             <IoIosArrowForward className='hover:fill-primary-default hover:cursor-pointer' onClick={next} size={25}/>
        </div>
      </div>

    </div>
  )
}

export {AboutCompanyVision}