import React,{useState} from 'react'
import styles from '../styles'
import Button from '../Components/Button'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bg1 from '../assets/img/BlurBgPic.png'

const BlogBanner = () => {

    const [currentSlide,setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {setCurrentSlide(next)},
        arrows:false,
        appendDots: dots => (
        <div
        className=''
            style={{
            top:'85%',
            height:'fit-content',
            }}
        >   
            
                <ul className='flex justify-center gap-8' style={{ marginRight: "30px" }}> {dots} </ul>
            
            
        </div>
        ),
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
                <div className='relative flex flex-col items-center text-center'>
                    <img
                        className='absolute inset-0 object-cover w-full h-full z-0'
                        src={Bg1} alt="The background image" 
                    />   
                    <div className="z-10 relative mx-auto w-[95%] pt-10 pb-[calc(22%)] space-y-16">
                        <div className='space-y-4'>
                            <h6 
                                className={`${styles.descriptionText} font-medium tracking-widest uppercase`}
                                style={{ color: '#722594' }}>
                                Featured
                            </h6>
                            <h1 className={`${styles.headingText} capitalize`}>
                                Gray solutions named top 20 system integrator
                            </h1>
                        </div>
                        <Button name='Read on' className='px-9 rounded-md tracking-wider' />
                    </div>
                </div>
        {/* 2nd slide */}
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
                
            </Slider>
        </div>
        {/* slider ends here */}
    </div>
  )
}

export default BlogBanner