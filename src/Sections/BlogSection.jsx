import React,{useRef,useState} from 'react'
import styles from '../styles'
import { FaPlus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import BlogCard from '../Components/BlogCard';


const BlogSection = () => {

    const [currentSlide,setCurrentSlide] = useState(0);

    const groupArray = (data, groupSize) => {
        const groups = [];
        for (let i = 0; i < data.length; i += groupSize) {
          groups.push(data.slice(i, i + groupSize));
        }
        return groups;
    };

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const groupSize = 3;
    const groupedData = groupArray(data, groupSize);
    console.log("a",groupedData);
  
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };
    const settings = {
      dots: true,
      infinite: true,
      arrows:false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => {setCurrentSlide(next);
        console.log("current: ",current, " next: ",next);
      },
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            bottom:"2rem",
            height:"2rem",
            left:"calc(50% - 108px)",
            width:"fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
           <IoArrowBackCircleOutline className='w-9 h-9 text-[#686767] hover:text-light-900' onClick={previous} />
            
          <ul className='flex justify-center gap-3' style={{ margin: "0px" }}> {dots} </ul>

          <IoArrowForwardCircleOutline className='w-9 h-9 text-[#686767] hover:text-light-900' onClick={next}/> 
        </div>
      ),
      customPaging: i => (
        <div
        className={`${currentSlide===i ? 'text-opacity-100' : 'text-opacity-40'} text-light-900  hover:text-opacity-100 text-[20px] md:text-[25px] lg:text-[30px]`}
        >
          {i + 1}
        </div>
      )
    };

  return (
    <div className='bg-dark-900 py-10'>
        <div className='bg-dark-700 relative mx-auto w-[90%] rounded-3xl pb-[7rem] py-8 px-6 space-y-12'>
            {/* The main heading  */}
            <div className='space-y-4'>
                <h1 className={`${styles.headingText} flex items-center justify-center gap-2`}>
                    Press 
                    <FaPlus className={`w-5 fill-primary-default`}/>
                    Insight
                </h1>
                <p className={`${styles.descriptionText} text-center`}>
                    Breaking news, fresh perspectives, and worthwhile info. No fluff.
                </p>
            </div>
            {/* The Filter Buttons Section */}
            <div className='space-y-4'>
                <p className={`${styles.descriptionText} text-primary-default uppercase font-normal text-center tracking-wider`}>
                    filter contents
                </p>
                <div className='grid grid-cols-2 place-items-center gap-x-4 gap-y-3'>
                
                    <button 
                    className='border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md'
                    >
                        Press
                    </button>

                    <button 
                    className='border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md'
                    >
                        Insights
                    </button>

                    <button 
                    className='border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md'
                    >
                        Gray news
                    </button>

                    <button 
                    className='border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md'
                    >
                        Featured
                    </button>
                </div>
            </div>
            {/* The Blogs Grids */}
            <div className="slider-container" style={{position:"static"}}>
                <Slider
                    className=' '
                    style={{position:"static"}}
                    ref={slider => {
                    sliderRef = slider;
                    }}
                    {...settings}
                >
                    {groupedData.map((group, index) => (
                        <div  key={index+1} >
                            <div className='px-2  grid grid-cols-1 gap-y-12'>
                                {group.map(item => (
                                    <h3 key={item}>
                                        <BlogCard/>
                                    </h3>
                                ))}
                            </div>
                        </div>
                        
                    ))}
                </Slider>
                <div>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BlogSection