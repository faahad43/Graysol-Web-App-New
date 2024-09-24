import React from 'react';
import Sponsor1 from "../assets/sponser/1/barnes-and-noble.png";
import Sponsor2 from "../assets/sponser/1/cnnlogo.png";
import Sponsor3 from "../assets/sponser/1/Forbes-Emblem.png";
import Sponsor4 from "../assets/sponser/1/gritdaily.png";
import Sponsor5 from "../assets/sponser/1/US-news.png";
import Sponsor6 from "../assets/sponser/1/USA-Today-logo.png";
import Sponsor7 from "../assets/sponser/1/wsfl-tv.png";
import Sponsor8 from "../assets/sponser/2/chris-davis.png";
import Sponsor9 from "../assets/sponser/2/Liquivida-logo.png";
import Sponsor10 from "../assets/sponser/2/logo_jarektadla.png";
import Sponsor11 from "../assets/sponser/2/Logo-Leverage_With_Media_PR-1920p.png";
import Sponsor12 from "../assets/sponser/2/reveal-vitality.png";
import Sponsor13 from "../assets/sponser/2/SAM-TEJADA-LOGO.png";
import Sponsor14 from "../assets/sponser/2/santos-logo.png";
import Sponsor15 from "../assets/sponser/2/chris-davis.png";
import Sponsor16 from "../assets/sponser/3/Amazon_PNG6.png";
import Sponsor17 from "../assets/sponser/3/HubSpot-Logo.png";
import Sponsor18 from "../assets/sponser/3/shopify logo.png";
import Sponsor19 from "../assets/sponser/3/vercel-logotype-dark.png";
import Sponsor20 from "../assets/sponser/3/Zapier-Logo.png";
import Sponsor21 from "../assets/sponser/4/Bolt_logo.png";
import Sponsor22 from "../assets/sponser/4/iron-gear-logo.png";
import Sponsor23 from "../assets/sponser/4/outfitters-1.png";
import Sponsor24 from "../assets/sponser/4/protein-factory.jpg";
import Sponsor25 from "../assets/sponser/4/Talabat.png";

const images = [Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6, Sponsor7, Sponsor8, Sponsor9, Sponsor10, Sponsor11, Sponsor12, Sponsor13, Sponsor14, Sponsor15, Sponsor16, Sponsor17, Sponsor18, Sponsor19, Sponsor20, Sponsor21, Sponsor22, Sponsor23, Sponsor24, Sponsor25];

const Sponsers = () => {
  // Duplicate the images array for seamless scrolling
  const allImages = [...images, ...images];

  return (
    <div className="w-full ">
      <div className="h-[120px] m-auto overflow-hidden relative w-auto">
        <ul className="flex h-full items-center w-[calc(150px*50)] animate-scroll "> {/* Adjusted the width to include both sets */}
          {allImages.map((image, index) => (
            <li className="w-[150px] h-[100px] flex items-center " key={index}>
              <img src={image} className="w-20 h-full  lg:w-24 lg:h-12 xl:w-28 xl:h-16 object-contain" alt={`Sponsor ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Sponsers };
