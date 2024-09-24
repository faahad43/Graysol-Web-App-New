import React,{useRef,useState} from 'react'
import {Button} from '../Components/Button'
import styles from '../styles'
import {Input} from '../Components/Input'
// import TrustPilot from '../assets/img/trustpilot.jpg'
import TrustPilot from '../assets/icons/Trustpilot.svg'
import GoogleLogo from '../assets/img/GoogleLogo.png'
import Star from '../assets/icons/Star.svg'
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Question = () => {
    const [email,setEmail]=useState("");
    const [name,setName]= useState("");
    const [message,setMessage]= useState("");
    const [phoneNumber,setPhoneNumber]= useState("");   

    const form = useRef();

    const validateForm = () => {
    
        if (!name.trim()) {
            toast.error('Name is required');
            return false;
        }
        if (!email.trim()) {
            toast.error('Email is required');
            return false;
        }
        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }
        if (!message.trim()) {
            toast.error('Message is required');
            return false;
        }
        return true;
    };


    const sendEmail = (e) => {
        e.preventDefault();

        // Validate form before sending
        if (!validateForm()) {
            return;
        }

        const promise = emailjs.sendForm(
            process.env.VITE_SERVICE_ID,
            process.env.VITE_TEMPLATE_ID, 
            form.current, {
            publicKey: process.env.VITE_PUBLIC_KEY,
            })
        
        toast.promise(
                promise,
                {
                    loading: 'Sending...',
                    success: 'Message sent successfully!',
                    error: 'Failed to send the message.',
                },
                {
                    duration: 4000, // Optional duration for the toast
                }
            );
            promise.then(
                () => {
                    setEmail('');
                    setName('');
                    setMessage('');
                },
                (error) => {
                    console.error('Failed...', error.text);
                }
            );
        
      };


  return (
    <Element name='question-form'>
    <div className='bg-dark-900 w-screen flex flex-col items-center justify-center py-8 lg:py-20 gap-10 lg:gap-20'>
        <form
            ref={form} onSubmit={sendEmail} 
            className='w-[90%] sm:w-[80%] max-w-[1138px] bg-primary-700 rounded flex flex-col items-center justify-center py-5 lg:py-8 px-5 text-center text-light-900 gap-3 rounded-xl'>
           <div>
                <h1 className={`${styles.h1}`}>Got questions?</h1>
                <h6 className={`${styles.h6} w-11/12 mx-auto text-center my-3`}>We'll be happy to answer. A solutions specialist will get back to you within 12 hours.</h6>
           </div>
            <div className='flex flex-col md:flex-row md:justify-around items-center w-full gap-2 md:gap-0 '>
                <Input 
                    name='user-name'
                    className='w-11/12 md:w-5/12 '
                    placeholder='Your Name'
                    section='question'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <Input 
                    name='user-phoneNo' 
                    className='w-11/12 md:w-5/12' 
                    placeholder='Phone Number' 
                    section='question'
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                />
            </div>
            <Input
                    name='user-email' 
                    className='w-11/12 ' 
                    placeholder='Email'
                    section='question'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
            />
            <textarea 
                name='message'
                className='w-11/12 h-32 lg:h-40  text-dark-900 rounded px-2 py-[6px] lg:py-[12px] placeholder-dark-500 placeholder:opacity-80 focus:placeholder-opacity-50 text-[12px] resize-none font-light md:font-normal tracking-wide'
                placeholder='How can we help you?' 
                resize id=""
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
            <Button name='Submit' type='submit' vlaue='Send'  className='px-10 rounded-lg mt-5 text-sm'/>
        </form>
        <div className='w-[calc(100%-3vw)] bg-light-900 py-4 lg:py-6 xl:py-9 gap-4 md:gap-10 lg:gap-20 flex flex-col md:flex-row md:justify-center  items-center'>
            <a href="https://www.trustpilot.com/review/graysol.co?utm_medium=trustbox&utm_source=TrustBoxReviewCollector" target='_blank' rel="noopener noreferrer">
            <div className='flex items-center'>
                <img className='w-[105px] mr-1.5 lg:w-[140px] xl:w-[195px]' src={TrustPilot} alt="" />
                <div className='flex items-end gap-[2px]'>
                    <div className='flex'>
                        {Array.from({length: 5},(_,index)=>(
                            <img key={index} className='w-[18px] lg:w-[25px] xl:w-[33px]' src={Star} alt="" />
                        ))}
                    </div>
                    <p className={` ${styles.p4HeavyDark} pt-[5px] xl:pt-[10px]`}>
                        <span className='font-semibold'>4.5</span>/5 based on <span className='underline'>281 Reviews</span>
                    </p>
                </div>
            </div>
            </a>
            <div className='flex'>
                <img className='w-[105px] lg:w-[140px] xl:w-[136px]' src={GoogleLogo} alt="" />
                <div className='flex items-center gap-[2px]'>
                    <div className='flex'>
                        {/* printing the star 5 times */}
                        {Array.from({length: 5},(_,index)=>(
                            <img key={index} className='w-[18px] lg:w-[25px] xl:w-[33px]' src={Star} alt="" />
                        ))}
                    </div>
                    <p className={` ${styles.p4HeavyDark} pt-[5px] xl:pt-[10px]`}>
                        <span className='font-semibold'>4.7</span>/5 based on <span className='underline'>412 Reviews</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </Element>
  )
}

export {Question}