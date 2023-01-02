import Image from 'next/image'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-10'>
        <Image
        className='w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px] '
        src='/op.svg'
        alt='logo openclassroom'
        width={32}
        height={32}
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Développeur d{"'"}applications front-end</h4>
            <p className='font-bold text-2xl mt-1'>OPENCLASSROOM</p>
            <div className='flex space-x-2 my-2'>
            <Image
                className='rounded-full h-10 w-10'
                src='/logos_javascript.svg'
                alt='logo javascript'
                width={10}
                height={10}
            />
                   <Image
                className='rounded-full h-10 w-10'
                src='/react.svg'
                alt='logo react'
                width={10}
                height={10}
            />
                   <Image
                className='rounded-full h-10 w-10'
                src='/redux.svg'
                alt='logo redux'
                width={10}
                height={10}
            />
            </div>
            <p className='py-5 text-gray-300 uppercase'>Started work...- end work ...</p>
            <ul className='list-dic space-y-4 ml-5 text-lg'>
            <li>summary points summary points summary points</li>
            <li>summary points summary points summary points</li>
            <li>summary points summary points summary points</li>
            </ul>
        </div>
    </article>
  )
}