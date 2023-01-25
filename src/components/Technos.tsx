import React from 'react'
import Skill from './Skill';
import SkillData from '../Datas/skills.json';
import {useTranslation} from "react-i18next";

type Props = {}
type Skills = {
  img: string;
  level: string;
  title?:string;
}
export default function Technos({}: Props) {
  const {t} = useTranslation('fr',{useSuspense: false});
  return (
    <div 
    className='h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen xl:px-10 relative justify-center  mx-auto items-center'>
       <h3 className='absolute top-14 sm:top-10 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl'>{t('skills.title')}</h3>
       <h3 className='absolute top-24 sm:top-36 uppercase tracking-[3px] text-gray-500 text-sm'>{t('skills.subtitle')}</h3>
       <div className='mt-20 grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-5'>
          {SkillData.map((data: Skills,index : number)=>{
            return <Skill key={index} {...data}/>
          })}
       </div>
    </div>
  )
}