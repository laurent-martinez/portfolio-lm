import React from 'react'
import {motion} from 'framer-motion';

type Props = {
  directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative cursor-pointer flex'>
      <motion.img 
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{duration: 1}}
          whileInView={{opacity: 1 , x: 0}}
          src='/react.svg'
          className='rounded-full border border-gray-500 object-contain w-24 h-24 xl:w-32 xl:h-32 p-5 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 xl:w-32 xl:h-32 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl opacity-100 text-black'>
            100%
          </p>
        </div>
      </div>
    </div>
  )
}