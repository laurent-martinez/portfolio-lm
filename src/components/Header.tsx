import { motion } from "framer-motion"
import React from "react"
import { SocialIcon } from "react-social-icons"
import {useTranslation} from "react-i18next";


type Props = {}


function Header({}: Props) {
    const {t, i18n} = useTranslation('en',{useSuspense: false});
    const handleLangChange = (e : any) => {
        i18n.changeLanguage(e.target.value)
    }
  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7x1 mx-auto z-20 xl:items-center ">
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
            className="flex flex-row items-center"
            >
    <SocialIcon url="https://www.instagram.com/martilaurier"
    className="hover:text-[#f7AB0A]"
    fgColor="gray"
    bgColor="transparent"/>
        <SocialIcon url="https://github.com/laurent-martinez"
    className="hover:text-[#f7AB0A]"
    fgColor="gray"
    bgColor="transparent"/>
        <SocialIcon 
    className="hover:text-[#f7AB0A]"
    url="https://www.instagram.com/martilaurier"
    fgColor="gray"
    bgColor="transparent"/>

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
            className="flex flex-row items-center text-gray-300 cursor-pointer hover:text-[#f7AB0A]"
            >
        
            <SocialIcon
            className=" cursor-pointer hover:bg-clip-[#f7AB0A]"
            url="#contact"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            />
        
       
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">{t('header.contact')}</p>
            <select className="px-3 py-1 mx-5 bg-gray-200 text-[rgb(36,36,36)] " onChange={handleLangChange}>
                <option value="en">EN</option>
                <option value="fr">FR</option>
            </select>
        </motion.div>
    </header>
  )
}

export default Header