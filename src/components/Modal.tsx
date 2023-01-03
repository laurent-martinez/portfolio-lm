import React from 'react'

type Props = {
    setModalOn:(active: boolean) => void;
}

export default function Modal({setModalOn}: Props) {
  return (
    <div className='fixed top-5 right-5 z-50 '>
        <div className='flex justify-center items-center'>
            <div className='flex-col justify-center bg-[#F7AB0A] py-6 px-16 border-2 border-gray-500 rounded-xl font-semibold' >
                Email sent!
            </div>
        </div>
    </div>
  )
}