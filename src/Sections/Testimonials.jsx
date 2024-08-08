import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import yaruq from '../assets/img/yaruq_nadeem.jpeg'
import lior from '../assets/img/lior_image.jpg'
import ionut from '../assets/img/ionut_panait_image.jpg'
import { StarFill } from 'react-bootstrap-icons'
import styles from '../styles'
const Testimonials = () => {
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
    <section className='w-screen testimonial bg-dark-900 py-12  px-2' id='skills'>
      <div className='container sm:w-[85%]  sm:mx-auto lg:mx-0 '>
        <div className='row lg:w-screen'>
          <div className='col-12 lg:w-[calc(100%-3rem)] lg:mx-auto'>
            <div className='testimonial-bx lg:rounded-none  lg:py-24 '>
              <h1 className={`${styles.h1}`}>
                Testimonials.
              </h1>
              <h4 className={`${styles.h4} my-8 xl:mb-12`}>
                Some of our proud customers
              </h4>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='testimonial-slider mt-5 xl:max-w-[70%] xl:max-w-[60rem] xl:mx-auto '
                autoPlay={false}
                autoPlaySpeed={3000}
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
                arrows={false}
              >
                <div className='w-11/12 testimonial-slider-item xl:flex xl:justify-center'>
                  <div class='card p-4 xl:p-8 xl:w-[383px] xl:h-[436px] text-center px-6 bg-light-900 rounded-lg'>
                    <div class='user-content'>
                      <img
                        src={lior}
                        className='w-16 h-16 xl:w-20 xl:h-20 m-auto rounded-full'
                        alt=''
                      />
                      <h6 className={`mb-1 mt-2 ${styles.h6DarkHeavy}`}>Lior</h6>

                      <p className={`${styles.p4Dark} opacity-60`}>
                        CEO Testamind Ecommerce
                      </p>
                      <div className='flex flex-wrap justify-center mt-2'>
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                      </div>
                      <p className={`mt-2 xl:mt-8 ${styles.p3Dark}`} align="justify">
                        I am a very old client of Hamza, long before this
                        company even exists, he showcased his technical
                        expertise and strong communication skills, which were
                        essential to the successful delivery of our ecommerce
                        tool.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-11/12 xl:flex xl:justify-center testimonial-slider-item'>
                  <div class='card p-4 xl:p-8 xl:w-[383px] xl:h-[436px] text-center px-6 bg-light-900 rounded-lg'>
                    <div class='user-content'>
                      <img
                        src={yaruq}
                        className='w-16 h-16 xl:w-20 xl:h-20 m-auto rounded-full'
                        alt=''
                      />

                      <h6 className={`mb-1 mt-2 ${styles.h6DarkHeavy}`}>Leonardo Turchi</h6>
                      <p className={`${styles.p4Dark} opacity-60`}>
                        Software Developer , Italy
                      </p>

                      <div className='flex flex-wrap justify-center mt-2'>
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                      </div>
                      <p className={`mt-2 xl:mt-8 ${styles.p3Dark}`} align="justify">
                        I am impressed by the results, very responsive
                        communication, delivered a challenging project within a
                        short span of time, with feasibility and technical
                        analysis reports. Totally recommended and I would come
                        again.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-11/12 xl:flex xl:justify-center testimonial-slider-item'>
                  <div class='card p-4 xl:p-8 xl:w-[383px] xl:h-[436px] text-center px-6 bg-light-900 rounded-lg'>
                    <div class='user-content'>
                      <img
                        src={ionut}
                        className='w-16 h-16 xl:w-20 xl:h-20 m-auto rounded-full'
                        alt=''
                      />

                      <h6 className={`mb-1 mt-2 ${styles.h6DarkHeavy}`}>Ionut John Panait</h6>
                      <p className={`${styles.p4Dark} opacity-60`}>
                        Businessman, Romania
                      </p>
                      <div className='flex flex-wrap justify-center mt-2'>
                        <StarFill />
                        <StarFill />
                        <StarFill />
                        <StarFill />
                      </div>
                      <p className={`mt-2 xl:mt-8 ${styles.p3Dark}`} align="justify">
                        I am glad I hired them, they were able to showcase their
                        technical expertise and strong communication skills,
                        which were essential to the successful delivery of our
                        MVP. We are working on another project now.
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className='custom-button-group testimonial-buttons'>
      <button className='prev text-black' onClick={previous}>
        &lt;
      </button>
      <button className='next' onClick={next}>
        &gt;
      </button>
    </div>
  )
}


export {Testimonials}