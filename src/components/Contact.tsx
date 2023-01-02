import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser';

type Props = {}

export default function Contact({}: Props) {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e:any) => {
      e.preventDefault();
      const currentForm = form.current;
      if(currentForm == null ) return;
      emailjs.sendForm('service_v95kjva', 'template_lhu6j0l', currentForm, 'NPe4hyp1niL-4pHbD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row max-x-7xl    h-screen  mx-auto items-center justify-evenly px-10 '>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
    <form ref={form} onSubmit={sendEmail}  className='flex flex-col space-y-2 w-fit mx-auto'>
      <div className='flex md:flex-row space-x-2'>
        <div className='flex flex-col'>
      <label>Name</label>
      <input className='contact-input' type="text" name="user_name" />
        </div>
      <div className='flex flex-col'>
      <label>Email</label>
      <input className='contact-input' type="email" name="user_email" />
      </div>
      </div>
      <label>Subject</label>
      <input className='contact-input' type="text" name="subject" />
      <label>Message</label>
      <textarea className='contact-input' name="message" />
      <button type="submit" value="Send" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Send</button>
    </form>
    </div>
  )
}