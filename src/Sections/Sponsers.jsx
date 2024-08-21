import React from 'react'
import Sponsor1 from "../assets/sponser/1/barnes-and-noble.png"
import Sponsor2 from "../assets/sponser/1/cnnlogo.png"
import Sponsor3 from "../assets/sponser/1/Forbes-Emblem.png"
import Sponsor4 from "../assets/sponser/1/gritdaily.png"
import Sponsor5 from "../assets/sponser/1/US-news.png"
import Sponsor6 from "../assets/sponser/1/USA-Today-logo.png"
import Sponsor7 from "../assets/sponser/1/wsfl-tv.png"
import Sponsor8 from "../assets/sponser/2/chris-davis.png"
import Sponsor9 from "../assets/sponser/2/Liquivida-logo.png"
import Sponsor10 from "../assets/sponser/2/logo_jarektadla.png"
import Sponsor11 from "../assets/sponser/2/Logo-Leverage_With_Media_PR-1920p.png"
import Sponsor12 from "../assets/sponser/2/reveal-vitality.png"
import Sponsor13 from "../assets/sponser/2/SAM-TEJADA-LOGO.png"
import Sponsor14 from "../assets/sponser/2/santos-logo.png"
import Sponsor15 from "../assets/sponser/2/WINNERGY_LARGE_LOGO_WHITE.png"
import Sponsor16 from "../assets/sponser/3/Amazon_PNG6.png"
import Sponsor17 from "../assets/sponser/3/HubSpot-Logo.png"
import Sponsor18 from "../assets/sponser/3/shopify logo.png"
import Sponsor19 from "../assets/sponser/3/vercel-logotype-dark.png"
import Sponsor20 from "../assets/sponser/3/Zapier-Logo.png"
import Sponsor21 from "../assets/sponser/4/Bolt_logo.png"
import Sponsor22 from "../assets/sponser/4/iron-gear-logo.png"
import Sponsor23 from "../assets/sponser/4/outfitters-1.png"
import Sponsor24 from "../assets/sponser/4/protein-factory.jpg"
import Sponsor25 from "../assets/sponser/4/Talabat.png"


const images = [Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6, Sponsor7, Sponsor8, Sponsor9, Sponsor10, Sponsor11, Sponsor12, Sponsor13, Sponsor14, Sponsor16, Sponsor17, Sponsor18, Sponsor19, Sponsor20, Sponsor21, Sponsor22, Sponsor23, Sponsor24, Sponsor25]
const Sponsers = () => {
  const allImages = [...images,...images,...images]
  return (
    <div className='relative w-[250%] overflow-hidden bg-light-900  py-6 lg:py-8 xl:py-10 lg:px-[10%] '>
      <div className='flex gap-x-16 animate-scroll items-center justify-around w-auto'>
        {allImages.map((image, index) => (
          <img className='w-20 h-10 lg:w-24 lg:h-12 xl:w-28 xl:h-16 object-contain' key={index} src={image} alt="Sponsors Image" />
        ))}
      </div>
      
    </div>
  )
}

export {Sponsers}

// bg-dark-100
// before:absolute before:inset-0 before:bg-dark-200 before:opacity-20
// the above are the classes that removed to make it bright also changed color to bg-light-900