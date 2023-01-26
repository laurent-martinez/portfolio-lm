import Image from 'next/image'
import {useTheme} from 'next-themes';
import React from 'react'
import About from '../src/components/About'
import Experience from '../src/components/Experience'
import Header from "../src/components/Header"
import Hero from '../src/components/Hero'
import Contact from '../src/components/Contact';
import Technos from '../src/components/Technos';
import Projects from '../src/components/Projects';
import Link from 'next/link';
import Head from 'next/head';



type Props = {}






export default function Home({}: Props) {
  const {theme, setTheme} = useTheme()
  return (
    <div className={theme === 'light' ? 'bg-[#fdf9d3] text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-none md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80' : 'bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 dark scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'}>
      <Head>
        <title>Laurent Martinez</title>
        <meta name="description" content="Laurent Martinez, Développeur front-end"/>
        <link rel='icon'href='/favicon1.svg'/>
      </Head>
      <Header/>
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      {/* Experiences  */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      <section id='skills' className='snap-center'>
        <Technos />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='contact' className='snap-start'>
        <Contact />
      </section>
      <footer className='mb-20 cursor-pointer z-800 w-15 flex flex-row justify-between items-center bottom-10 sticky sm:bottom-5 px-2'>
      <Link href='#hero'>
       <div className='flex justify-start'>
         <Image src='/top.svg' alt='photo profil avatar' className='rounded-full h-19 w-19 filter hover:grayscale dark:grayscale dark:hover:grayscale-0 cursor-pointer' width={35} height={35}/>
       </div>
      </Link>
      <button  onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light') }className=' bg-[#F7AB0A] dark:bg-gray-400 hover:bg-gray-400 dark:hover:bg-[#F7AB0A] text-white dark:text-white font-bold py-2 px-4 rounded z-500 flex  justify-end items-end'  >{theme === 'light' ? <Image src="/moon.svg" alt="change color mode" width={32} height={32}
      /> : <Image src="/sun.svg" alt="change color mode" width={32} height={32}/>}</button>
      </footer>
    </div>
  )
}
