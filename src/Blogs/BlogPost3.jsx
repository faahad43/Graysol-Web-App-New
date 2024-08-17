import React from 'react'

export const BlogPost3 = ({title='',time='',coverPic=''}) => {
  return (
    <div>
      <img src={coverPic} alt="Blog cover photo" />
        <h1>{title}</h1>
        <p>{time}</p>
        BlogPost3
    </div>
  )
}
