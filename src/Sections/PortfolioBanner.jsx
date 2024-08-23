import React,{useState} from 'react'
import styles from '../styles'
import {Button} from '../Components/Button'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-scroll';
import Bg1 from '../assets/img/BlurBgPic.png'

const PortfolioBanner = () => {

    const [currentSlide,setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {setCurrentSlide(next)},
        arrows:false,
        autoplay:true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        appendDots: dots => (
        <div
        className=''
            style={{
            top:'85%',
            height:'fit-content',
            }}
        >   
            {/* This is for changing the number of slider to lines */}
                <ul className='flex justify-center gap-8' style={{ marginRight: "30px" }}> {dots} </ul>
            
            
        </div>
        ),
        // Setting the custom paging for the slider
        customPaging: i => (
        <div
            className={`w-12 h-[8px] rounded active:bg-primary-default ${currentSlide === i ? 'bg-primary-default': 'bg-[#464646]'}`}>    
        </div>
        )
    };

  return (
    <div className='bg-dark-900 '>
        
        {/*the slider start from here */}
        <div className="slider-container w-full mx-auto text-light-900">
            <Slider className=' '  {...settings}>
                {/* 1st Slide */}
                <div className='relative flex flex-col items-center text-center'>
                    <img
                        className='absolute inset-0 object-cover w-full h-full z-0'
                        src={Bg1} alt="The background image" 
                    />   
                    <div className="z-10 relative mx-auto w-[95%] pt-10 pb-[calc(22%)] space-y-16">
                        <div className='space-y-4 pt-16'>
                            
                            <h1 className={`${styles.h1} capitalize`}>
                                Graysol's Portfolio: A Showcase of Excellence
                            </h1>
                        </div>
                        <div>
                            <Link to='blog-section' smooth={true} duration={100} offset={-40}>
                                <Button name='Read on' className='px-9 rounded-lg tracking-wider rounded-lg' />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* 2nd slide */}
                <div className='relative flex flex-col items-center text-center'>
                    <img
                        className='absolute inset-0 object-cover w-full h-full z-0'
                        src={Bg1} alt="The background image" 
                    />   
                    <div className="z-10 relative mx-auto w-[95%] pt-10 pb-[calc(22%)] space-y-16">
                        <div className='space-y-4 pt-16'>
                            
                            <h1 className={`${styles.h1} capitalize`}>
                                Innovative Solutions for Your Business Needs
                            </h1>
                        </div>
                        <div>
                            <Link to='blog-section' smooth={true} duration={100} offset={-40}>
                                <Button name='Read on' className='px-9 rounded-lg tracking-wider' />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* 3rd Slide */}
                <div className='relative flex flex-col items-center text-center'>
                    <img
                        className='absolute inset-0 object-cover w-full h-full z-0'
                        src={Bg1} alt="The background image" 
                    />   
                    <div className="z-10 relative mx-auto w-[95%] pt-10 pb-[calc(22%)] space-y-16">
                        <div className='space-y-4 pt-16'>
                            
                            <h1 className={`${styles.h1} capitalize`}>
                                Our Portfolio: A Testament to Quality and Results
                            </h1>
                        </div>
                        <div>
                            <Link to='blog-section' smooth={true} duration={100} offset={-40}>
                                <Button name='Read on' className='px-9 rounded-lg tracking-wider' />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* 4th Slide */}
                <div className='relative flex flex-col items-center text-center'>
                    <img
                        className='absolute inset-0 object-cover w-full h-full z-0'
                        src={Bg1} alt="The background image" 
                    />   
                    <div className="z-10 relative mx-auto w-[95%] pt-10 pb-[calc(22%)] space-y-16">
                        <div className='space-y-4 pt-16'>
                           
                            <h1 className={`${styles.h1} capitalize`}>
                                Explore Our Diverse Projects and Achievements
                            </h1>
                        </div>
                        <div>
                            <Link to='blog-section' smooth={true} duration={100} offset={-40}>
                                <Button name='Read on' className='px-9 rounded-lg tracking-wider' />
                            </Link>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </div>
        {/* slider ends here */}
    </div>
  )
}

export { PortfolioBanner}