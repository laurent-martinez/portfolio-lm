import Image from 'next/image';
import Link from 'next/link';
import loader from '../../public/loader.svg';
import code from '../../public/github2.svg';
import React, { useEffect, useState } from 'react'
import datas from '../Datas/datas.json';
import {useTranslation} from "react-i18next";

type Props = {}

type Project = {
  img: string,
  imgTablet: string,
  imgMobile: string,
  title: string,
  src?: string | null | undefined,
  repo: string,
  text: string,
  learnPoints: String[]
}

export default function Projects({}: Props) {
  const {t} = useTranslation('fr',{useSuspense: false});
  const [jsonData, setJsonData] = useState<any>([]);

  useEffect(() => {
    setJsonData(datas);
  }, []);
  
if(jsonData.length == 0) {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
          <Image alt='loader spinner' src={loader} className='animate-spin fill-[#F7AB0a] duration-50'/>
    </div>

  )
}

  return (
    <div className='h-screen flex flex-col mx-0 sm:mx-auto items-center justify-center relative overflow-hidden text-left md:flex-row max-w-full z-0'>
             <h3 className='absolute top-14 sm:top-10 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl'>{t('projects.title')}</h3>
             <div className='relative overflow-x-scroll overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 w-full flex snap-x snap-mandatory z-20'>
                {jsonData.map((project: Project,index: number) =>(
                    <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col select-none lg:flex-row  lg:space-y-5 sm:mb-10 items-center justify-start lg:justify-center  sm:py-10 px-20 '>
                        <div className=' px-0 md:px-10 max-w-6xl flex flex-col items-center'>
                          {project.src ? 
                              <Link className='font-semibold text-center mx-auto text-2xl whitespace-nowrap sm:text-4xl font-aqua hover:text-[#F7AB0A] flex' href={project.src} target='_blank'>
                                 <span className='underline decoration-[#F7AB0A]/50'>{project.title}</span>
                                 <svg width="15" height="15" viewBox="0 0 100 100" fill="none" className='h-15 w-15 text-grey hover:text-[#F7AB0A]'>
                                 <path d="M88.8889 83.194V82.4385C95.4111 79.7163 100 73.2774 100 65.7719V18.0555C100 13.2669 98.0977 8.67438 94.7116 5.28832C91.3256 1.90227 86.7331 0 81.9444 0H34.7222C30.9045 6.66308e-05 27.1851 1.20985 24.0978 3.45565C21.0106 5.70145 18.7144 8.86775 17.5389 12.4999H16.4222C11.3556 12.4999 7.04444 14.2833 4.07778 17.7999C1.2 21.2054 0 25.7443 0 30.5554V79.1663C0 85.0551 2.12778 90.3551 6.16667 94.1662C10.2 97.9606 15.7944 99.9717 22.2222 99.9717H44L66.6444 99.9995H66.6556C72.0778 100.027 77.45 98.8884 81.6167 96.2217C85.95 93.444 88.8889 89.0273 88.8889 83.194ZM16.4222 20.8332H16.6667V65.7663C16.6667 70.5549 18.5689 75.1474 21.955 78.5335C25.3411 81.9195 29.9336 83.8218 34.7222 83.8218H80.5333C80.3556 86.144 79.1889 87.8773 77.1222 89.1996C74.7167 90.744 71.0667 91.6884 66.6889 91.6662H66.6667L43.9889 91.6384H22.2222C17.5389 91.6384 14.1111 90.194 11.8889 88.0996C9.67778 86.0218 8.33333 82.9996 8.33333 79.1663V30.5554C8.33333 27.0276 9.22222 24.6277 10.4444 23.1721C11.5833 21.8277 13.4 20.8332 16.4222 20.8332ZM50.1222 19.4443H76.3889C77.494 19.4443 78.5538 19.8833 79.3352 20.6647C80.1166 21.4461 80.5555 22.5059 80.5555 23.611V49.8831C80.5555 50.9881 80.1166 52.0479 79.3352 52.8293C78.5538 53.6107 77.494 54.0497 76.3889 54.0497C75.2838 54.0497 74.224 53.6107 73.4426 52.8293C72.6612 52.0479 72.2222 50.9881 72.2222 49.8831V33.6665L43.2222 62.6664C42.8377 63.0641 42.3778 63.3813 41.8693 63.5995C41.3608 63.8176 40.814 63.9323 40.2608 63.9368C39.7076 63.9414 39.1589 63.8357 38.647 63.6259C38.135 63.4162 37.6699 63.1066 37.2789 62.7152C36.8879 62.3238 36.5787 61.8584 36.3694 61.3463C36.1602 60.8341 36.055 60.2854 36.0601 59.7321C36.0651 59.1789 36.1803 58.6322 36.3989 58.124C36.6176 57.6157 36.9352 57.1561 37.3333 56.7719L66.3333 27.7776H50.1222C49.0172 27.7776 47.9573 27.3387 47.1759 26.5573C46.3945 25.7759 45.9556 24.7161 45.9556 23.611C45.9556 22.5059 46.3945 21.4461 47.1759 20.6647C47.9573 19.8833 49.0172 19.4443 50.1222 19.4443Z" fill="#F7AB0A"/>
                                 </svg>
                              </Link> : 
                                <h4 className='font-semibold text-center mx-auto text-2xl whitespace-nowrap sm:text-4xl font-aqua'>{project.title}</h4>
                          }
                            <div>
                            <Link href={project.repo} className='italic font-thin text-gray-700 dark:text-gray-300 dark:hover:text-[#F7AB0A] text-lg hover:text-[#F7AB0A] flex my-1 md:my-5' target='_blank'>
                            <p className='text-lg font-semibold text-center line-clamp-6 lg:line-clamp-none md:text-left font-roboto mr-2'>{project.text}</p>
                            <svg  className="hover:fill-[#F7AB0A]/80 fill-[grey] h-6 w-6 hover:scale-125 hover:motion-safe:animate-pulse " viewBox="0 0 16 16">
                            <title>Lien Github</title>
                            <path  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38 1.5882-.536 2.9683-1.5567 3.946-2.9182C15.4737 11.3102 15.9997 9.67624 16 8c0-4.42-3.58-8-8-8Z"/>
                            </svg>
                            </Link>
                            </div>
                            
                        <Image
                        draggable={false} 
                        src={project.img}  alt={project.title} className='min-h-[100px] min-w-[200px] md:h-[360px] md:w-[640px] mx-0  sm:flex mt-0 pt-0 shadow-xl dark:shadow-[#F7AB0A]/30 ' width={640} height={360}/>
                        {/* <Image src={project.imgMobile} alt='photo mobile' width={170} height={360} className='w-[85px] h-[180px] shadow-xl dark:shadow-[#F7AB0A]/30  sm:hidden mt-0 pt-0'/>
                        <Image src={project.imgTablet} alt='photo tablet' width={387} height={408} className='hidden sm:flex lg:hidden w-[258px] h-[272px] mt-0 pt-0 shadow-xl dark:shadow-[#F7AB0A]/30'/>  */}
                        </div>
                            <ul>
                              {project.learnPoints.map((learn,index)=> {
                                return <li key={index} className='underline dark:decoration-[#F7AB0A]/30 decoration-[#F7AB0A] underline-offset-8 sm:py-2'>{learn}</li>
                              })}
                            </ul>

                    </div>
                )
                )}
             </div>
             <div className='absolute top-[30%] w-full bg-[#F7AB0A]/30 dark:bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
             </div>
    </div>
  )
}