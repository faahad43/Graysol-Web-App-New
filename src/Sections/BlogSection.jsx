import React,{useEffect, useRef,useState} from 'react'
import styles from '../styles'
import { FaPlus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import BlogCard from '../Components/BlogCard';
import useWindowSize from '../hooks/windowSize';



const BlogSection = () => {
    const data = [
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: false,
        insight: false,
        graynews: false,
      },
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: true,
        insight: false,
        graynews: false,
      },
      {
        time: '1min',
        title:'aaaaaaaaa',
        feature: true,
        press: true,
        insight: false,
        graynews: true,
      },
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: true,
        insight: false,
        graynews: false,
      },
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: false,
        insight: true,
        graynews: false,
      },
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: true,
        insight: false,
        graynews: false,
      },
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: false,
        insight: false,
        graynews: false,
      },
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: true,
        insight: false,
        graynews: false,
      },
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: false,
        insight: true,
        graynews: false,
      },
      {
        time: '1min',
        title:'Walker Mattox, CEO of Gray Solutions, on Building a Dynamic Team of Solutioneers',
        feature: true,
        press: false,
        insight: true,
        graynews: false,
      },
      
    ];

    const groupArray = (data, groupSize,filterButton) => {
        const groups = [];
        const filterData = data.filter((item) => item[filterButton]===true);
        for (let i = 0; i < filterData.length; i += groupSize) {
          groups.push(filterData.slice(i, i + groupSize));
        }
       
        return groups;
    };
    let groupSize;
    const windowSize = useWindowSize();
    const [currentSlide,setCurrentSlide] = useState(0);
    const [filterButton,setFilterButton] = useState('press');
    const [groupedData, setGroupedData] = useState(groupArray(data, groupSize, filterButton));
    let sliderRef = useRef(null);


    useEffect(() => {
      groupSize = windowSize < 640 ? 3 : windowSize < 1024 ? 6 : 9;
      setGroupedData(groupArray(data, groupSize, filterButton));
      // setCurrentSlide(0);
      sliderRef.slickGoTo(0);
  }, [filterButton,windowSize]);

  
    
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
      beforeChange: (current, next) => {setCurrentSlide(next)},
      appendDots: dots => (
        
        <div
          style={{
            bottom:"2rem",
            height:"2rem",
            left: "50%",
            transform: "translateX(-50%)",
            margin: "0 auto",
            width:"fit-content",
            
          }}
        >
          <div className={`${groupedData.length === 1 ? 'hidden':'block'} flex justify-center items-center gap-[15px] w-fit`}>
            <IoArrowBackCircleOutline className='w-9 h-9 text-[#686767] hover:text-light-900' onClick={previous} />
              
            <ul className={`flex justify-center gap-3`} style={{ margin: "0px" }}> {dots} </ul>

            <IoArrowForwardCircleOutline className='w-9 h-9 text-[#686767] hover:text-light-900' onClick={next}/> 
          </div>
           
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
        <div className='bg-dark-700 relative mx-auto w-[90%] max-w-[1200px] rounded-3xl pb-[7rem] py-8 px-6 space-y-12'>
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
                <div className='md:w-[95%] lg:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 place-items-center gap-x-8 md:gap-x-0 gap-y-3'>
                
                    <button 
                    className={`${filterButton == 'press' ? 'bg-primary-default': 'bg-transparent'} justify-self-end md:justify-self-center border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md`}
                    onClick={()=>setFilterButton('press')}
                    >
                        Press
                    </button>

                    <button 
                    className={`${filterButton == 'insight' ? 'bg-primary-default': 'bg-transparent'} justify-self-start md:justify-self-center border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md`}
                    onClick={()=>setFilterButton('insight')}
                    >
                        Insights
                    </button>

                    <button 
                    className={`${filterButton == 'graynews' ? 'bg-primary-default': 'bg-transparent'} justify-self-end md:justify-self-center border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md`}
                    onClick={()=>setFilterButton('graynews')}
                    >
                        Gray news
                    </button>

                    <button 
                    className={`${filterButton == 'feature' ? 'bg-primary-default': 'bg-transparent'} justify-self-start md:justify-self-center border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md`}
                    onClick={()=>setFilterButton('feature')}
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
                            <div className='px-2 md:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-5'>
                                {group.map(item => (
                                    <BlogCard/>
                                  
                                ))}
                            </div>
                        </div>
                        
                    ))}
                    
                     
                     {groupedData.length === 1 ? <></> :''}
                </Slider>
            </div>
        </div>
        
    </div>
  )
}

export default BlogSection