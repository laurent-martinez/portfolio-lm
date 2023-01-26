import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import reactLogoGold from '../../public/reactzordi.png';
import pro3 from '../../public/pro3logo.png';
import pro5 from '../../public/pro5logo.png';
import {Cursor,useTypewriter} from "react-simple-typewriter"
import BackgroundCircle from './BackgroundCircle'
import {useTranslation} from "react-i18next";
import { motion } from "framer-motion"

type Props = {}

export default  function Hero({}: Props) {
    const [image, setImage]= useState('/pro3logo.png')
    const {t} =  useTranslation('fr',{useSuspense: false});
    const [text]= useTypewriter({
        words: [t("hero.animateText.first"),t("hero.animateText.second"),t("hero.animateText.third"),t("hero.animateText.fourth")],
        loop: true,
        delaySpeed: 2000,
    })
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        setIsMobile(true);
      }
    }, []);
  return (
    <div className='h-screen flex flex-col  items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <Image 
        className='relative object-cover mx-auto bg-[#F7AB0A]/25 duration-500 dark:bg-transparent p-5 rounded-3xl'
         src={image}
          onContextMenu={(e) => e.preventDefault()}
          onSelect={(e) => e.preventDefault()}
          onMouseEnter={!isMobile ? ()=> setImage('/pro6logo.png') : undefined}
           onMouseLeave={!isMobile ? ()=> setImage('/pro3logo.png') : undefined} 
           onTouchStart={isMobile ? ()=> setImage('/pro6logo.png') : undefined}
           onTouchEnd={isMobile ? ()=> setImage('/pro3logo.png') : undefined} 
           alt="my avatar" width={300} height={300} priority={true}/>
        <div className='z-20'>
            <motion.div
                initial={{
                            x: -500,
                            scale: 0.5,
                            opacity: 0
                        }}
                animate={{
                            x: 0,
                            scale: 1,
                            opacity: 1
                        }}
                transition={{
                            duration: .800,
                        }}>
        <h2 className='px-10 uppercase text-sm text-gray-500 pb-2 tracking-[15px] font-roboto leading-8'>{t('hero.title')}</h2>
            </motion.div>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold px-10'>
            <span className='dark:text-white text-gray-700 mr-3 font-aqua'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <motion.div className='pt-5 px-10 md:px-0 flex flex-col sm:flex-row justify-evenly'
            initial={{
                x: 500,
                scale: 0.5,
                opacity: 0
            }}
            animate={{
                x: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{
                duration: .800,
            }}>
            <Link href="#experience"><div className='heroButton font-roboto'>{t ? t('hero.menu.experiences'): 'loading...'}</div></Link>
            <Link href="#projects"><div className='heroButton font-roboto'>{t ? t('hero.menu.projects') : 'loading...'}</div></Link>
            <Link href="#skills"><div className='heroButton font-roboto'>{t ? t('hero.menu.skills'): 'loading...'}</div></Link>
            <Link href="#about"><div className='heroButton font-roboto'>{t ? t('hero.menu.about'): 'loading...'}</div></Link>
        </motion.div>
        </div>
    </div>
  )
}