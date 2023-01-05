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
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-10'>
        <Image
        className='w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px] '
        src={src}
        alt='logo openclassroom'
        width={32}
        height={32}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{title}</h4>
            <p className='font-bold text-2xl mt-1'>{name}</p>
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
            <ul className='list-dic space-y-1 ml-5 text-lg'>
              {summary.map((sum,index)=>{
                return <li key={index}>{sum}</li>
              })}
            </ul>
        </div>
    </article>
  )
}