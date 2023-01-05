import Image from 'next/image'
import React, { useEffect } from 'react'

type Props = {
  src : string,
  title: string,
  name: string,
  technos: {name: string, img: string}[],
  summary: string[],
  doe: string,
  dos: string,

}

export default function ExperienceCard({src, title,name,technos,summary,doe,dos}: Props) {


  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[700px] snap-center py-4 px-0 sm:p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-10'>
        <Image
        className='w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px] '
        src={src}
        alt='logo openclassroom'
        width={32}
        height={32}
        />
        <div className='sm:px-2 md:px-10 flex flex-col items-center sm:items-start'>
            <h4 className='text-2xl sm:text-4xl font-light'>{title}</h4>
            <p className='font-bold text-xl sm:text-2xl mt-1'>{name}</p>
            <div className='flex space-x-2 my-2'>
              {technos.map((tech,index)=>{
                return <Image 
                key= {index}
                className='rounded-full h-10 w-10'
                src={tech.img}
                alt={tech.name}
                width={10}
                height={10}
                />
              })}
            </div>
            <p className='py-5 text-gray-300 uppercase'>From {dos} to {doe}</p>
            <ul className=' space-y-1 sm:ml-5 text-lg divide-y divide-[#F7AB0A] divide-opacity-25'>
              {summary.map((sum,index)=>{
                return <li key={index}><span className='rounded-full bg-[#F7AB0A] w-10 h-10'></span>{sum}</li>
              })}
            </ul>
        </div>
    </article>
  )
}