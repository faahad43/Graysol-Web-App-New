import React from 'react'

const Input = ({className="", placeholder="Write here"}) => {
  return (
    <input className={`${className}  text-neutral-default rounded px-2 py-[6px] placeholder-neutral-default focus:placeholder-opacity-50 text-[12px]`} type="text" placeholder={placeholder}/>
  )
}

export default Input