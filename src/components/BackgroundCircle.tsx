import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity:0
    }}
    animate={{
      scale: [1,2,2,3,1],
      opacity: [.1,.2,.4,.8,.1,1],
      borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
      duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
      <div className='absolute border dark:border-[#333333] border-[#333333]/25 rounded-full w-[200px] h-[200px] mt-52 animate-ping'/>
      <div className='absolute border dark:border-[#333333] border-[#333333]/15 rounded-full w-[300px] h-[300px] mt-52'/>
      <div className='absolute border dark:border-[#333333] border-[#333333]/15 rounded-full w-[500px] h-[500px] mt-52'/>
      <div className='absolute border dark:border-[#F7AB0A] border-[#F7AB0A] opacity-20 rounded-full w-[650px] h-[650px] mt-52 animate-pulse'/>
      <div className='absolute border dark:border-[#333333] border-[#333333]/15 rounded-full w-[800px] h-[800px] mt-52'/>
    </motion.div>
  )
}