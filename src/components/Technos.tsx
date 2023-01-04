import React from 'react'
import Skill from './Skill';
type Props = {}

export default function Technos({}: Props) {
  return (
    <div 
    className='h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen xl-px-10 relative justify-center  mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
       <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
       <div className='mt-20 grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-5'>
        < Skill  img='/react.svg' title='React' prcent={95}/>
        < Skill img='/redux.svg' title='Redux' prcent={80}/>
        < Skill img='/next1.svg' title='Next' prcent={50}/>
        < Skill img='/logos_javascript.svg' title='Js' prcent={95}/>
        < Skill  img='/ts.svg' title='Ts' prcent={95}/>
        < Skill img='/html.svg' title='HTML' prcent={80}/>
        < Skill img='/css.svg' title='CSS' prcent={50}/>
        < Skill img='/sass.svg' title='Sass' prcent={95}/>
        < Skill  img='/npm.svg' title='NPM' prcent={95}/>
        < Skill  img='/docker.svg' title='Docker' prcent={95}/>
        < Skill  img='/tailwind.svg' title='Tailwind' prcent={95}/>
        < Skill  img='/figma.svg' title='Figma' prcent={95}/>
        < Skill  img='/git.svg' title='Git' prcent={95}/>
        < Skill  img='/jest.svg' title='Jest' prcent={95}/>
       </div>
    </div>
  )
}