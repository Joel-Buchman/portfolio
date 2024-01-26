import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Joel, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>Being a passionate software developer is an exhilarating journey where creativity meets logic, 
              as one delves into the intricate world of coding to bring innovative ideas to life. 
              The constant pursuit of refining skills and embracing new technologies becomes a driving force, 
              transforming challenges into opportunities for growth and mastery in the ever-evolving 
              realm of software development.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;