import React from 'react'
import Image from 'next/image';

type Props = {
  img: string;
  prcent:number;
  title?:string;
}

export default function Skill({img,prcent,title}: Props) {
  return (
    <div className='group relative cursor-pointer flex'>
      <Image
          alt={`${img} logo`}
          src={img}
          className='rounded-2xl border border-gray-500 object-contain w-24 h-24 xl:w-32 xl:h-32 p-5  filter group-hover:grayscale transition duration-300 ease-in-out'
          width={24}
          height={24}
      />
      <div className='absolute opacity-0 group-hover:opacity-90 transition duration-300 xl:w-32 xl:h-32 ease-in-out dark:group-hover:bg-white group-hover:bg-black h-24 w-24 rounded-2xl z-0'>
        <div className='flex flex-col items-center justify-center h-full gap-5'>
          <p className='text-xl sm:text-3xl opacity-100 text-white dark:text-[#242424] font-semibold underline decoration-[#F7AB0A] p-2'>{title}</p>
          <p className='text-xl sm:text-3xl opacity-100 text-white dark:text-black'>
            {prcent}%
          </p>
        </div>
      </div>
    </div>
  )
}