import React from 'react'

const Input = ({className="", section='', placeholder="Write here", name='', value='',onChange=''}) => {
  return (
    <input 
      className={`${className} ${section === 'question' ? 'text-dark-900 placeholder-dark-900 py-[6px] lg:py-[12px] placeholder:opacity-80':'bg-light-300 py-[8px] lg:py-[14px] placeholder-dark-900 text-dark-700 placeholder:opacity-70'}   rounded px-2  focus:placeholder-opacity-50 text-[12px] font-light md:font-normal  tracking-wide`}
     type="text"
     placeholder={placeholder}
     name={name}
     value={value}
     onChange={onChange}
     />
  )
}

export  {Input}