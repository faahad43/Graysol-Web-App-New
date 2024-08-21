import React,{useEffect, useRef,useState} from 'react'
import styles from '../styles'
import { FaPlus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Element } from 'react-scroll'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {BlogCard} from '../Components/BlogCard';
import useWindowSize from '../hooks/windowSize';
import {data} from './blogdata.js';
import { useParams,Link } from 'react-router-dom';




const BlogSection = () => {
    /**
     * Data is an array of objects, each representing a blog post and is imported from blogdata.js
     * Groups and filters an array of data based on the provided group size and filter criteria.
     * 
     * This function filters the input data array according to the specified filter button, 
     * then divides the filtered data into smaller groups of the specified size.
     * 
     * @param {Array} data - The array of blog post data to be filtered and grouped.
     * @param {number} groupSize - The maximum number of items per group.
     * @param {string} filterButton - The key used to filter the data. Items where this key is `true` will be included.
     * 
     * @returns {Array} An array of grouped data arrays, each containing up to `groupSize` items.
     * 
     * @example
     * const groupedData = groupArray(data, 3, 'press');
     * // Returns an array where each sub-array contains up to 3 items, all filtered by the 'press' criteria.
     */

    const groupArray = (data, groupSize,filterButton) => {
        const groups = [];
        const filterData = filterButton === ''?  data : data.filter((item) => item[filterButton]===true);
        for (let i = 0; i < filterData.length; i += groupSize) {
          groups.push(filterData.slice(i, i + groupSize));
        }
       
        return groups;
    };
    const {type = ''} = useParams();
    
    let groupSize;
    const windowSize = useWindowSize(); //to change the number of blogs displayed on different screen sizes
    const [currentSlide,setCurrentSlide] = useState(0);
    const [filterButton,setFilterButton] = useState(type);
    const [groupedData, setGroupedData] = useState(groupArray(data, groupSize, filterButton));
    let sliderRef = useRef(null);


    useEffect(() => {
      groupSize = windowSize < 640 ? 3 : windowSize < 1024 ? 6 : 9;
      setGroupedData(groupArray(data, groupSize, filterButton));
      sliderRef.slickGoTo(0);
      
  }, [filterButton,windowSize]);

  useEffect(() => {
    setFilterButton(type);
}, [type]);
    
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
          {/* the conditional rendering is being done here so if we only have one page in blog catergory then the pagination and arrows doesn't appear */}
          <div className={`${groupedData.length === 1 ? 'hidden':'block'} flex justify-center items-center gap-[15px] w-fit`}>
            <IoArrowBackCircleOutline className='w-9 h-9 text-[#686767] hover:text-light-900' onClick={previous} />
              
            <ul className={`flex justify-center gap-3`} style={{ margin: "0px" }}> {dots} </ul>

            <IoArrowForwardCircleOutline className='w-9 h-9 text-[#686767] hover:text-light-900' onClick={next}/> 
          </div>
           
        </div>
      ),
      customPaging: i => (
        <h5
        className={`${currentSlide===i ? 'text-opacity-100' : 'text-opacity-40'} text-light-900  hover:text-opacity-100 text-[20px] md:text-[25px] lg:text-[30px]`}
        >
          {i + 1}
        </h5>
      )
    };

  return (
    <div className='bg-dark-900 py-10'>
        <Element name='blog-section'>
        <div className='bg-dark-700 relative mx-auto w-[90%] max-w-[1200px] rounded-3xl pb-[7rem] py-8 px-6 space-y-12'>
            {/* The main heading  */}
            <div className='space-y-4'>
                <h1 className={`${styles.h1} flex items-center justify-center gap-2`}>
                    Press 
                    <FaPlus className={`w-5 fill-primary-default`}/>
                    Insight
                </h1>
                <p className={`${styles.p2} text-center`}>
                    Breaking news, fresh perspectives, and worthwhile info. No fluff.
                </p>
            </div>
            {/* The Filter Buttons Section */}
            <div className='space-y-4'>
                <p className={`${styles.p2Heavy} text-primary-default uppercase  text-center tracking-wider`}>
                    filter contents
                </p>
                <div className='md:w-[95%] lg:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 place-items-center gap-x-8 md:gap-x-0 gap-y-3'>
                  <Link to='/blog/category/press'>
                    <button 
                    className={`${filterButton == 'press' ? 'bg-primary-default': 'bg-transparent'} justify-self-end md:justify-self-center border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md`}
                    >
                        Press
                    </button>
                    </Link>

                    <Link to='/blog/category/insight'>
                    <button 
                    className={`${filterButton == 'insight' ? 'bg-primary-default': 'bg-transparent'} justify-self-start md:justify-self-center border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md`}
                    >
                        Insights
                    </button>
                    </Link>

                    <Link to='/blog/category/graynews'>
                    <button 
                    className={`${filterButton == 'graynews' ? 'bg-primary-default': 'bg-transparent'} justify-self-end md:justify-self-center border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md`}
        
                    >
                        Gray news
                    </button>
                    </Link>

                    <Link to='/blog/category/feature'>
                    <button 
                    className={`${filterButton == 'feature' ? 'bg-primary-default': 'bg-transparent'} justify-self-start md:justify-self-center border-primary-default border-solid border-2 capitalize text-light-900 font-light md:font-normal w-36 py-2 tracking-widest rounded-md`}
                    
                    >
                        Featured
                    </button>
                    </Link>
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
                 
                  {/* this map function is for the number of pages */}
                    {groupedData.map((group, index) => (
                        <div  key={index+1} >
                            <div className='px-2 md:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-9 sm:gap-x-5'>
                              {/* this map function is to show specific number of blog card on each page */}
                                {group.map(item => (
                                    <BlogCard key={item.id} data ={item}/>
                                  
                                ))}
                            </div>
                        </div>
                        
                    ))}
                    {/* this is added beacause if we only have a single div in slider then react  slidck slider react it thrice to avoid this we have redenred the same data if there is onky div in data */}
                    {groupedData.length === 1 ? 
                    groupedData.map((group, index) => (
                      <div  key={index+1} >
                          <div className='px-2 md:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-9 sm:gap-x-5'>
                            {/* this map function is to show specific number of blog card on each page */}
                              {group.map(item => (
                                  <BlogCard key={item.id} data ={item}/>
                                
                              ))}
                          </div>
                      </div>
                      
                  ))
                    :''}
                    
                     
                </Slider>
            </div>
        </div>
        </Element>
    </div>
  )
}

export { BlogSection}

