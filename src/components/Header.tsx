import { motion } from "framer-motion"
import React from "react"
import {useTranslation} from "react-i18next";
import Link from "next/link";




type Props = {}


function Header({}: Props) {

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
    <Link href="https://github.com/laurent-martinez" target="_blank">
    <svg  className="ml-3 hover:fill-[#F7AB0A]/80 fill-[grey] h-9 w-9 hover:scale-125 hover:motion-safe:animate-pulse " viewBox="0 0 16 16">
    <title>Lien Github</title>
    <path  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38 1.5882-.536 2.9683-1.5567 3.946-2.9182C15.4737 11.3102 15.9997 9.67624 16 8c0-4.42-3.58-8-8-8Z"/>
    </svg>
    </Link>
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