import { motion } from "framer-motion"
import React from "react"
import { SocialIcon } from "react-social-icons"
import {useTranslation} from "react-i18next";
import Link from "next/link";
import Image from "next/image";



type Props = {}


function Header({}: Props) {
    // const [hover,setHover] = useState<boolean>(false)
    // console.log(hover);

    const {t, i18n} = useTranslation('fr',{useSuspense: false});
    const handleLangChange = (e : any) => {
        i18n.changeLanguage(e.target.value)
    }
  return (
    <header className="sticky top-0 flex sm:p-5  justify-between max-w-7x1 mx-auto z-20 xl:items-center ">
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
            }}
            className="flex flex-row items-center mt-1"
            >
    {/* <SocialIcon url="https://www.instagram.com/martilaurier"
    className="hover:text-[#f7AB0A] hover:scale-125"
    fgColor="gray"
    bgColor="transparent"
    /> */}
        {/* <Link href="https://www.linkedin.com/" target="_blank">
        <svg  viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg" className="ml-3 hover:fill-[#F7AB0A]/80 fill-[grey] h-7 w-7 hover:scale-125 hover:motion-safe:animate-pulse ">
        <title>Lien Linkedin</title>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.69231 0C5.65218 0 3.69561 0.810437 2.25302 2.25302C0.810437 3.69561 0 5.65218 0 7.69231V92.3077C0 94.3478 0.810437 96.3044 2.25302 97.747C3.69561 99.1896 5.65218 100 7.69231 100H92.3077C94.3478 100 96.3044 99.1896 97.747 97.747C99.1896 96.3044 100 94.3478 100 92.3077V7.69231C100 5.65218 99.1896 3.69561 97.747 2.25302C96.3044 0.810437 94.3478 0 92.3077 0H7.69231ZM15.7692 38.4615H30.3846V84.6154H15.7692V38.4615ZM31.3462 23.1154C31.3462 25.3085 30.4749 27.4118 28.9242 28.9626C27.3734 30.5134 25.2701 31.3846 23.0769 31.3846C20.8838 31.3846 18.7805 30.5134 17.2297 28.9626C15.6789 27.4118 14.8077 25.3085 14.8077 23.1154C14.8077 20.9222 15.6789 18.8189 17.2297 17.2682C18.7805 15.7174 20.8838 14.8462 23.0769 14.8462C25.2701 14.8462 27.3734 15.7174 28.9242 17.2682C30.4749 18.8189 31.3462 20.9222 31.3462 23.1154ZM84.6154 56.5923C84.6154 42.7077 75.6385 37.3077 66.7231 37.3077C63.8093 37.1661 60.9083 37.7781 58.3 39.0846C56.3231 40.0846 54.2538 42.3462 52.6538 46.3H52.2462V38.4615H38.4615V84.6538H53.1231V60.0769C52.9154 57.5615 53.7154 54.3077 55.3615 52.3769C57.0154 50.4385 59.3615 49.9769 61.1538 49.7462H61.7154C66.3769 49.7462 69.8385 52.6308 69.8385 59.9V84.6461H84.5L84.6154 56.5923Z" />
        </svg>
    </Link> */}
    <Link href="https://github.com/laurent-martinez" target="_blank">
    <svg  className="ml-3 hover:fill-[#F7AB0A]/80 fill-[grey] h-9 w-9 hover:scale-125 hover:motion-safe:animate-pulse " viewBox="0 0 16 16">
    <title>Lien Github</title>
    <path  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38 1.5882-.536 2.9683-1.5567 3.946-2.9182C15.4737 11.3102 15.9997 9.67624 16 8c0-4.42-3.58-8-8-8Z"/>
    </svg>
    </Link>
    {/* <a href="CV_Martinez_Laurent.pdf" download>
            <svg  className="ml-3 hover:fill-[#F7AB0A]/80 fill-[grey] h-7 w-7 hover:scale-125 hover:motion-safe:animate-pulse " viewBox="0 0 448 448"  >
            <title>Télécharger</title>
            <path d="M48 0C21.5 0 0 21.5 0 48V400C0 426.5 21.5 448 48 448H400C426.5 448 448 426.5 448 400V48C448 21.5 426.5 0 400 0H48ZM146.88 133.234C166.516 133.234 183.962 140.023 196.809 150.205C208.689 159.657 214.253 169.112 219.107 177.598L185.184 194.547C182.757 188.982 179.837 183.16 172.338 176.865C164.09 170.313 155.86 168.381 148.814 168.381C121.188 168.381 106.644 194.074 106.644 222.668C106.644 260.241 125.805 278.888 148.814 278.888C171.114 278.888 180.092 263.378 185.894 253.453L219.6 270.66C213.285 280.586 207.226 290.295 193.65 299.729C186.388 304.819 169.673 314.766 145.914 314.766C100.586 314.766 64 281.81 64 223.87C64 173.234 98.415 133.234 146.88 133.234ZM222.363 138.562H267.928L303.31 260.24L338.435 138.562H384L324.621 309.674H281.01L222.363 138.563V138.562Z" />
            </svg>
    </a> */}
        </motion.div>
        <motion.div
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
            }}
            className="flex flex-row items-center text-gray-300 mt-1 cursor-pointer hover:text-[#f7AB0A]"
            >
        <Link href="#contact">
        <svg viewBox="0 0 20 16" className="hover:fill-[#F7AB0A]/80 fill-[grey] h-6 w-10 hover:scale-125 hover:motion-safe:animate-pulse ">
        <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 6.99L2 2H18ZM18 14H2V4L10 9L18 4V14Z"/>
        </svg>
        </Link>
            <p className="ml-2 uppercase hidden lg:inline-flex text-sm text-gray-500 dark:text-gray-400">{t('header.contact')}</p>
            <select className="cursor-pointer px-4 py-1 mx-5 bg-gray-200 focus:[#F7AB0A] text-[rgb(36,36,36)] " onChange={handleLangChange}>
                <option value="fr">FR</option>
                <option value="en">EN</option>
            </select>
        </motion.div>
    </header>
  )
}
export default Header