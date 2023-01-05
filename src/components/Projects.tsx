import Image from 'next/image'
import React from 'react'
import projects from '../Datas/Projects';

type Props = {}

export default function Projects({}: Props) {

  return (
    <div className='h-screen flex flex-col mx-0 sm:mx-auto items-center justify-evenly relative overflow-hidden text-left md:flex-row max-w-full z-0'>
             <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
             <div className='relative overflow-x-scroll overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 w-full flex snap-x snap-mandatory z-20'>
                { projects.map((project,index) =>(
                    <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20'>
                        <Image src={project.img} alt={project.title} className='h-[300px] w-[300px] md:h-[400px] md:w-[500px] mx-0' width={400} height={400}/>
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='font-semibold text-center text-2xl whitespace-nowrap sm:text-4xl font-aqua'><span className='underline decoration-[#F7AB0A]/50'>{project.title}</span> </h4>
                            <p className='text-lg text-center line-clamp-6 lg:line-clamp-none md:text-left font-roboto'>{project.text}</p>
                        </div>

                    </div>
                )
                )}
             </div>
             <div className='absolute top-[30%] w-full bg-[#F7AB0A]/30 dark:bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

             </div>
    </div>
  )
}