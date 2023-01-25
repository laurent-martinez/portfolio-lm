import React from 'react'
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import datas from '../Datas/Schools.json';
import {useTranslation} from "react-i18next";

type Props = {}

export default function Experience({}: Props) {
  const {t} = useTranslation('fr',{useSuspense: false});

  
  return (
    <motion.div
    initial={{opacity: 0}} 
    animate={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-14 sm:top-10 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl'>{t('education.title')}</h3>
        <div className='w-full flex sm:space-x-5 overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 p-2 sm:p-10 snap-x snap-mandatory mt-4 sm:mt-10 h-600'>
          {datas.map((data,index)=>{
            return <ExperienceCard key={index} {...data}/>
          })}
        </div>
    </motion.div>
  )
}