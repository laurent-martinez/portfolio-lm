import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import loader from '../../public/loader.svg';
import React, { useEffect, useState } from 'react'
import datas from '../Datas/datas.json';
import {useTranslation} from "react-i18next";

type Props = {}



export default function Projects({}: Props) {
//   const [datas, setDatas] = useState<any | null>(null);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('../Datas/datas.json');
//        return  setDatas(response.data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//     fetchData();
//   }, []); // the empty array makes this a one-time effect

// console.log(datas);
  const [isLoading,setIsLoading] = useState(true);
  const {t} = useTranslation('fr',{useSuspense: false});



  return (
    <div className='h-screen flex flex-col mx-0 sm:mx-auto items-center justify-evenly relative overflow-hidden text-left md:flex-row max-w-full z-0'>
             <h3 className='absolute top-14 sm:top-10 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl'>{t('projects.title')}</h3>
             <div className='relative overflow-x-scroll overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 w-full flex snap-x snap-mandatory z-20'>
                {datas ? datas.map((project,index) =>(
                    <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 sm:mb-10 items-center justify-start lg:justify-center  sm:py-10 px-20 '>
                        <Image src={project.img} onLoad={()=>setIsLoading(false)} alt={project.title} className='min-h-[200px] min-w-[300px] md:h-[360px] md:w-[640px] mx-0 hidden lg:flex mt-0 pt-0 shadow-xl dark:shadow-[#F7AB0A]/30 ' width={640} height={360}/>
                        <Image src={project.imgMobile} onLoad={()=>setIsLoading(false)} alt='photo mobile' width={170} height={360} className='w-[85px] h-[180px] shadow-xl dark:shadow-[#F7AB0A]/30  sm:hidden mt-0 pt-0'/>
                        <Image src={project.imgTablet} onLoad={()=>setIsLoading(false)} alt='photo tablet' width={387} height={408} className='hidden sm:flex lg:hidden w-[258px] h-[272px] mt-0 pt-0 shadow-xl dark:shadow-[#F7AB0A]/30'/> 
                        {isLoading && <Image alt='loader spinner' src={loader} className='animate-spin fill-[#F7AB0a] duration-50'/>}
                        <div className=' px-0 md:px-10 max-w-6xl flex flex-col items-center'>
                            <Link className='font-semibold text-center mx-auto text-2xl whitespace-nowrap sm:text-4xl font-aqua hover:text-[#F7AB0A]' href={project.src} target='_blank'><span className='underline decoration-[#F7AB0A]/50'>{project.title}</span> </Link>
                            <Link href={project.repo} className='italic font-thin text-gray-700 dark:text-gray-300 dark:hover:text-[#F7AB0A] text-lg hover:text-[#F7AB0A] ' target='_blank'>CODE</Link>
                            <p className='text-lg font-semibold text-center line-clamp-6 lg:line-clamp-none md:text-left font-roboto mb-4'>{project.text}</p>
                            <ul>
                              {project.learnPoints.map((learn,index)=> {
                                return <li key={index} className='underline dark:decoration-[#F7AB0A]/30 decoration-[#F7AB0A] underline-offset-8 sm:py-2'>{learn}</li>
                              })}
                            </ul>
                        </div>

                    </div>
                )
                ) : <h1>Loading...</h1>}
             </div>
             <div className='absolute top-[30%] w-full bg-[#F7AB0A]/30 dark:bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

             </div>
    </div>
  )
}