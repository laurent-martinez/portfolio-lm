import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Cursor,useTypewriter} from "react-simple-typewriter"
import BackgroundCircle from './BackgroundCircle'
import {useTranslation} from "react-i18next";
type Props = {}

export default function Hero({}: Props) {
    const {t} = useTranslation('en',{useSuspense: false});
    const [text,count]= useTypewriter({
        words: [t("hero.animateText.first"),t("hero.animateText.second"),t("hero.animateText.third"),t("hero.animateText.fourth")],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <Image className='relative object-cover mx-auto rounded-full' src='/moi2.png' alt="my avatar" width={128} height={128}/>
        <div className='z-20'>
        <h2 className='uppercase text-sm text-gray-500 pb-2 tracking-[15px]'>{t('hero.title')}</h2>
        <h1 className='text-5xl lg:text-6xl font-bold px-10'>
            <span className='dark:text-white text-gray-700 mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5 px-10 md:px-0 flex flex-col md:flex-row justify-evenly'>
            <Link href="#about"><div className='heroButton'>{t('hero.menu.about')}</div></Link>
            <Link href="#experience"><div className='heroButton'>{t('hero.menu.experiences')}</div></Link>
            <Link href="#skills"><div className='heroButton'>{t('hero.menu.skills')}</div></Link>
            <Link href="#projects"><div className='heroButton'>{t('hero.menu.projects')}</div></Link>
        </div>
        </div>
    </div>
  )
}