import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5,6]
  return (
    <div className='h-screen flex flex-col mx-auto items-center justify-evenly relative overflow-hidden text-left md:flex-row max-w-full z-0'>
             <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
             <div className='relative overflow-x-scroll overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 w-full flex snap-x snap-mandatory z-20'>
                { projects.map((project,index) =>(
                    <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20'>
                        <Image src='/exampleSite.png' alt='p14 photo' width={800} height={800}/>
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='font-semibold text-center text-4xl'><span className='underline decoration-[#F7AB0A]/50'>Agency site n°1</span> </h4>
                            <p className='text-lg text-center md:text-left'>This website is designed to help you quickly and easily register as a new employee of our company. By completing the registration process, you will gain access to our employee portal,
                             which provides a range of resources and tools to help you succeed in your role.
                             To get started, click the Register button below. You will be asked to provide some personal and professional information, including your name, contact details, and job title. You may also be required to upload some documents, such as proof of identification and employment eligibility.</p>
                        </div>

                    </div>
                )
                )}
             </div>
             <div className='absolute top-[30%] w-full bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

             </div>
    </div>
  )
}