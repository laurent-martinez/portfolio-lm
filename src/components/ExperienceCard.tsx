import Image from 'next/image'
import Link from 'next/link'


type Props = {
  logo : string,
  title: string,
  name: string,
  technos: {name: string, img: string}[],
  summary: string[],
  doe: string,
  dos: string,
  link: string,

}

export default function ExperienceCard(data: Props) {
  const RandomColor = () => {
    const rancol = "#"+Math.floor(Math.random() * 16777215).toString(16)
    return rancol
  }
const rancol = data.name.split('')


  

  return (
    <article className='flex flex-col rounded-lg justify-center items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[700px] snap-center py-4 px-0 sm:p-10 dark:bg-[#292929] bg-white lg:opacity-40 lg:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-10'>
        <Link href={data.link} target='_blank'>
        <Image
        className='w-32 h-32  object-contain object-center xl:w-[100px] xl:h-[100px] hover:animate-pulse mt-2'
        src={data.logo}
        alt='logo openclassroom'
        width={32}
        height={32}
        />
        </Link>
        <div className='sm:px-2 md:px-10 flex flex-col items-center'>
            <h4 className='text-2xl md:text-4xl font-light mx-auto' >{data.title}</h4>
            <p className='font-bold text-xl sm:text-2xl mt-1 mx-auto drop-shadow-2xl'>{data.name}</p>
            <div className='grid grid-cols-4 sm:flex sm:flex-wrap gap-2  my-2 '>
              {data.technos.map((tech,index)=>{
                return <Image
                key={index}
                className='rounded h-10 w-10 text-white'
                src={tech.img}
                alt={tech.name}
                width={10}
                height={10}
                title={tech.name}
                />
              })}
            </div>
            <p className='py-5 text-gray-700 dark:text-gray-300 uppercase mx-auto'>From {data.dos} to {data.doe}</p>
            <ul className='space-y-1 text-lg divide-y divide-[#F7AB0A] divide-opacity-25 mx-auto'>
              {data.summary.map((sum,index)=>{
                return <li   key={index}><span className='rounded-full bg-[#F7AB0A] w-10 h-10'></span>{sum}</li>
              })}
            </ul>
        </div>
    </article>
  )
}