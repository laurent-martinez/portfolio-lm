import React,{ useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import Modal from './Modal';


type Props = {}

export default function Contact({}: Props) {
  const [modalOn,setModalOn] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e:any) => {
    e.preventDefault();
    const currentForm = form.current;
    if(currentForm == null ) return;
    setModalOn(true)
    window.onclick = (e)=> setModalOn(false);
    emailjs.sendForm('service_v95kjva', 'template_lhu6j0l', currentForm, 'NPe4hyp1niL-4pHbD')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    currentForm.reset()
  };
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row max-x-7xl    h-screen  mx-auto items-center justify-evenly px-10 '>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
      {modalOn && <Modal setModalOn={setModalOn}/>} 
    <form ref={form} onSubmit={sendEmail}  className='flex flex-col space-y-2 w-fit mx-auto'>
      <div className='flex flex-col md:flex-row space-x-2'>
        <div className='flex flex-col'>
      <label htmlFor='user_name'>Name</label>
      <input className='contact-input' type="text" name="user_name" />
        </div>
      <div className='flex flex-col'>
      <label htmlFor='user_email'>Email</label>
      <input className='contact-input' type="email" name="user_email" />
      </div>
      </div>
      <label htmlFor='subject' >Subject</label>
      <input className='contact-input' type="text" name="subject" />
      <label htmlFor='message' >Message</label>
      <textarea className='contact-input' name="message" />
      <button type="submit" value="Send" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Send</button>
    </form>
    </div>
  )
}