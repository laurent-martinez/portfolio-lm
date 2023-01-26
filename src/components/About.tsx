import Image from 'next/image';
import AboutPic from '../../public/aboutpic3.png';
import humanoid from '../../public/humanoid2.png';
import React, { useEffect, useState } from 'react'
import {useTranslation} from "react-i18next";
type Props = {}

export default function About({}: Props) {
  const [image,setImage] = useState(humanoid);
  const {t} = useTranslation('fr',{useSuspense: false});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl mx-auto items-center justify-center sm:justify-evenly p-10px '>
        <h3 className='absolute top-14 sm:top-10 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl'>{t('About.title')}</h3>
        <Image
        src={image}
        onContextMenu={(e) => e.preventDefault()}
        onSelect={(e) => e.preventDefault()}
        onMouseEnter={!isMobile ? ()=>setImage(AboutPic) : undefined }
        onMouseLeave={!isMobile ? ()=>setImage(humanoid) : undefined }
        onTouchStart={isMobile ? ()=>setImage(AboutPic) : undefined }
        onTouchEnd={isMobile ? ()=>setImage(humanoid) : undefined }
        className='cursor-pointer notmobile:hover duration-500 rounded-full mt-[4em] md:mb-0 md:mt-0 flex-shrink-0 object-cover w-56 h-56 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        alt='picture of me'
        /> 
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold font-aqua bg-clip-text text-transparent bg-gradient-to-r from-[#F7AB0A] to-[#f96531] dark:from-[#F7AB0A] dark:to-[#f1f3f1]'>{t('About.subTitle')}</h4>
            <p className='text-base p-5 line-clamp-6 sm:line-clamp-none font-roboto font-medium'>{t('About.text')} 💻💡🎨</p>
        </div>
        </div>
  )
}