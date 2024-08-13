import React, { useState } from 'react'
import styles from '../styles'
import { IoIosArrowDown } from "react-icons/io";
import {Button} from '../Components/Button';
import useWindowSize from '../hooks/windowSize';

const Specialization = () => {

  const technologies = [
    {
        name:'Web',
        description:'Creating dynamic and responsive websites tailored to your needs.'
    },
    {
        name:'Hosting',
        description:'Reliable and secure hosting solutions for all your web applications.'
    },
    {
        name:'Ruby',
        description:'Expertise in Ruby development for robust and scalable applications.'
    },
    {
        name:'PHP',
        description:'Delivering efficient and secure PHP solutions for web projects.'
    },
    {
        name:'Python',
        description:'Building powerful applications with Python\'s versatile capabilities.'
    },
    {
        name:'Cross-Platform',
        description:'Developing apps that work seamlessly across multiple platforms.'
    },
  ]

  const [visibility,setVisibility] = useState(Array(technologies.length).fill(false));
  const [arrowFillColor,setArrowFillColor] = useState(Array(technologies.length).fill(false));
  const windowSize = useWindowSize();

//   this function is only changing the visibilty to block of hovered specialized field
  const handleMouseEnter = (index) => {
    if (windowSize <= 768) return; // to not show the hover effect on smaller screen
    const newVisibility = visibility.map((v, i) => (i === index ? true : v));
    setVisibility(newVisibility);
  };

//   this function is only changing the visibilty to hidden of hovered specialized field
  const handleMouseLeave = (index) => {
    if (windowSize <= 768) return;// to not show the hover effect on smaller screen
    const newVisibility = visibility.map((v, i) => (i === index ? false : v));
    setVisibility(newVisibility);
  };

//   this function is only changing the visibilty of hovered specialized field by toggling, this is for small screen upto 768px
  const handleClick= (index) => {
    const newVisibility = visibility.map((v, i) => (i === index ? !visibility[i] : v));
    setVisibility(newVisibility);
  }

// used for changing the arrow color whenever hovered or clicked
  const handleArrowColor= (index) => {
    const newColor = arrowFillColor.map((v, i) => (i === index ? !arrowFillColor[i] : v));
    setArrowFillColor(newColor);
  }

  return (
    <div className='bg-dark-900 py-10 space-y-8'>
        <h1 className={`${styles.h1} text-center`}>We specialize in</h1>
        <div className='bg-dark-700 mx-auto max-w-[1267px] rounded-2xl flex flex-col w-[85%] gap-y-12 md:gap-y-16 lg:gap-y-24 pb-10 md:pt-5 md:pb-20 lg:pt-8'>
            <div className=' grid place-items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 md:gap-y-10 lg:gap-y-16'>
                {technologies.map((item,index)=>(
                    <div key={index} className='relative flex items-center justify-center py-5 border-b-2 border-primary-default w-44 xl:w-72 h-24'>
                        <h4 className={`${styles.h4} text-center `}>{item.name}</h4>
                        <div
                            key={index} 
                            className='absolute bottom-2 right-2' 
                            onMouseEnter={()=>handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            onClick={()=>handleClick(index)}
                        >
                            <IoIosArrowDown className={`${arrowFillColor[index] ? 'max-md:fill-primary-default scale-150': 'scale-100'} md:hover:fill-primary-default md:hover:scale-150 duration-150 cursor-pointer`} size={22} color='#686767' onClick={()=>handleArrowColor(index)} />
                        </div>
                        <div className={`${styles.p3} ${visibility[index] ? 'block':'hidden'} absolute h-28 w-full bg-dark-200 top-[105%] z-50 p-3 rounded-b-md `}>{item.description}</div>
                    </div>
                ))}
            </div>
            <Button name='chat with us' className='px-5 self-center'/>
        </div>
        
    </div>
  )
}

export {Specialization}