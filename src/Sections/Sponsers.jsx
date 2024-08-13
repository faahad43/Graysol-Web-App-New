import React from 'react'
import Sponsor1 from "../assets/img/sponsor1.png"
import Sponsor2 from "../assets/img/sponsor2.png"
import Sponsor3 from "../assets/img/sponsor3.png"
import Sponsor4 from "../assets/img/sponsor4.png"
import Sponsor5 from "../assets/img/sponsor5.png"
import Sponsor6 from "../assets/img/sponsor6.png"

const images = [Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6]
const Sponsers = () => {
  return (
    <div className='w-screen relative grid bg-light-900 grid-cols-3 lg:grid-cols-6 py-6 lg:py-8 xl:py-10 place-items-center lg:px-[10%] gap-5 '>
        {images.map((image,index)=>(
            <img className='w-20 lg:w-24 xl:w-28' key={index} src={image} alt="Sponsors Image" />
        
        ))}
    </div>
  )
}

export {Sponsers}

// bg-dark-100
// before:absolute before:inset-0 before:bg-dark-200 before:opacity-20
// the above are the classes that removed to make it bright also changed color to bg-light-900