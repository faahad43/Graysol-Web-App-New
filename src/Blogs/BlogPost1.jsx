import React from 'react'
import styles from '../styles.js'
import Pic from '../assets/blog/Ai_Comic.webp'

export const BlogPost1 = ({title='',time='',coverPic=''}) => {
  return (
<div className='bg-light-900 py-12 px-[7%] md:px-[17%] lg:px-[20%] xl:px-[25%] space-y-5 lg:space-y-8'>
      <h1 className={styles.h3Dark}>{title}</h1>
      <p className={styles.p2Dark}>{time} Read</p>
      
      {/* add the dynamic content here */}
       <div className={`${styles.p2Dark} space-y-8`}>

        <p >
          These are my thoughts after dealing with a difficult client, who could not understand that his “proposed-solution” was technically not possible.
        </p>

        <p>
        Software development is not just sitting in front of a computer and writing some lines of code and expecting from the computer to magically do what we intend it to do.
        Unfortunately, this is how most of the clients and business people think, who have no technical knowledge of software development process.
        </p>

        <p>
        While developing a software program, much of the time is spent planning how exactly to implement a given feature, thinking about how it will interact with the rest of the codebase, considering which algorithm will have the best performance in this case, and so on.
        </p>

        <p>
        The main reason is that computers are dumb, really dumb. They can be dumb extremely fast, but they are dumb nonetheless. The only reason your computer might not appear dumb to you is because dozens of thousands of programmers put immense amounts of work into making it so. In their natural state, computers are as dumb as a brick.
        </p>

        <p>
        As a result, no matter how specific you think the requirements and specifications you gave your programmers for the new project are, they are certainly not specific enough for a computer. That’s because when non-technical people describe things they always do it with the unspoken assumption that the recipient of their descriptions is a human, i.e. a person with common sense and a certain minimum set of knowledge about the world. Computers don’t have common sense. As a result, much of the programmer’s job is in translating the business’s relatively vague requirements into extremely specific instructions for the computer.
        </p>

        <p>
        Let me know what you think about this behavior of clients who don’t value programmer’s hard work and think they can find a better person who will deliver them the magical piece of code they want, for 10 bucks, in just 1 day. Lol.
        And don’t get me started about Chat-GPT users.
        </p>

        <p>
          This comic is a great illustration of the problem:
        </p>

        <img 
        src={Pic}
        alt="comic illustartion about AI replacing programmers"
        className={`md:h-[25rem] xl:h-[30rem] object-contain rounded-none`}
       />

       </div>
    </div>
  )
}
