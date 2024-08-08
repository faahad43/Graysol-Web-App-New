import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import web from '../assets/img/web.png'
import mobile from '../assets/img/mobile.png'
import backend from '../assets/img/backend.png'
import creator from '../assets/img/creator.png'
import { useNavigate } from 'react-router-dom'
import styles from '../styles'

const Services = () => {
  const navigate = useNavigate()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1400, min: 1000 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 1000, min: 350 },
      items: 1
    }
  }

  return (
    <section className='w-screen skill py-8 xl:py-16 px-3 bg-dark-900 sm:flex sm:justify-center' id='skills'>
      <div className='container sm:w-[85%]'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx bg-dark-700 lg:pt-24 lg:pb-40'>
              <h1 className={`${styles.h1}text-light-900 font-light`}>Our Services</h1>
              <h6 className={`${styles.h6} lg:pt-8`}>
                We provide a wide range of services to help you achieve your
                business goals.
              </h6>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
                autoPlay={false}
                autoPlaySpeed={3000}
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
                arrows={false}
              >
                <Tilt className='w-3/4 xl:w-[1/2] m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/1')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950 rounded-[20px] border-primary-default border-2 py-5 px-12 min-h-[280px] xl:min-h-[430px] xl:min-w-[383px] flex justify-evenly items-center flex-col'
                    >
                      <img src={web} className='w-16 h-16 xl:w-20 xl:h-20 object-contain' />
                      <h4 className={`${styles.h4Heavy}`}>
                        Web App Development
                      </h4>
                    </div>
                  </motion.div>
                </Tilt>
                <Tilt className='w-3/4 xl:w-[1/2] m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/2')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950  border-primary-default border-2 rounded-[20px] py-5 px-12 min-h-[280px] xl:min-h-[430px] xl:min-w-[383px] flex justify-evenly items-center flex-col'
                    >
                      <img src={mobile} className='w-16 h-16 xl:w-20 xl:h-20 object-contain' />
                      <h4 className={`${styles.h4Heavy} `}>
                        Data Science
                        <br />
                        Machine Learning & Computer Vision
                      </h4>
                    </div>
                  </motion.div>
                </Tilt>
                <Tilt className='w-3/4 xl:w-[1/2]  m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/3')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950  border-primary-default border-2 rounded-[20px] py-6 px-12 min-h-[280px] xl:min-h-[430px] xl:min-w-[383px] flex justify-evenly items-center flex-col'
                    >
                      <img src={backend} className='w-16 h-16 xl:w-20 xl:h-20 object-contain' />
                      <h4 className={`${styles.h4Heavy}`}>
                        Custom Software Development
                      </h4>
                    </div>
                  </motion.div>
                </Tilt>
                <Tilt className='w-3/4 xl:w-[1/2] m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/4')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950  border-primary-default border-2 rounded-[20px] py-5 px-12 min-h-[280px] xl:min-h-[430px] xl:min-w-[383px] flex justify-evenly items-center flex-col'
                    >
                      <img src={creator} className='w-16 h-16 xl:w-20 xl:h-20 object-contain' />
                      <h4 className={`${styles.h4Heavy}`}>
                        Cloud Solutions
                      </h4>
                    </div>
                  </motion.div>
                </Tilt>
                        
                <Tilt className='w-3/4 xl:w-[1/2] m-auto skill-slider-item'>
                  <motion.div
                    variants={fadeIn('right', 'spring', 0.5 * 0, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    onClick={() => {
                      console.log('clicked')
                      navigate('/servicesDescription/4')
                    }}
                  >
                    <div
                      options={{ max: 45, scale: 1, speed: 450 }}
                      className='bg-blue-950  border-primary-default border-2 rounded-[20px] py-5 px-12 min-h-[280px] xl:min-h-[430px] xl:min-w-[383px] flex justify-evenly items-center flex-col'
                    >
                      <img src={mobile} className='w-16 h-16 xl:w-20 xl:h-20 object-contain' />
                      <h4 className={`${styles.h4Heavy}`}>
                        Wordpress & Shopify Store Development
                      </h4>
                    </div>
                  </motion.div>
                </Tilt>
                        
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  )
}

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className='custom-button-group xl:-mt-24'>
      <button className='prev text-black ' onClick={previous}>
        &lt;
      </button>
      <button className='next' onClick={next}>
        &gt;
      </button>
    </div>
  )
}


export {Services}