import { motion } from 'framer-motion'
import React from 'react'
import {useTranslation} from "react-i18next";
type Props = {}

export default function About({}: Props) {
  const {t} = useTranslation('en',{useSuspense: false});
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl mx-auto items-center justify-evenly p-10px '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>{t('About.title')}</h3>
        <motion.img
        initial={{
            x: -200
        }}
        transition={{duration: 1.2,
        opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        src="/aboutpic3.png"
        className='rounded-full mb-20 md:mb-0 flex-shrink-0 object-cover w-56 h-56 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>{t('About.subTitle')}</h4>
            <p className='text-base p-5'>{t('About.text')} 💻💡🎨</p>
        </div>
        </div>
  )
}