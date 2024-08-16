import React,{useRef,useState} from 'react'
import {Input} from '../Components/Input'
import {Button} from '../Components/Button'
import styles from '../styles'
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const ContactForm2 = () => {
    const [email,setEmail]=useState("");
    const [firstName,setFirstName]= useState("");
    const [lastName,setLastName]= useState("");
    const [message,setMessage]= useState("");
    const [checkbox1,setCheckbox1]= useState(false);
    const [checkbox2,setCheckbox2]= useState(false);

    const form = useRef();

    const validateForm = () => {
        if (!firstName.trim()) {
            toast.error('First Name is required');
            return false;
        }
        if (!lastName.trim()) {
            toast.error('Last Name is required');
            return false;
        }
        if (!email.trim()) {
            toast.error('Email is required');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }
        if (!message.trim()) {
            toast.error('Message is required');
            return false;
        }
        if (!checkbox1) {
            toast.error('You must agree to the Privacy Policy');
            return false;
        }
        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();


        if (!validateForm()) {
            return;
        }

        const promise = emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            { publicKey: import.meta.env.VITE_PUBLIC_KEY }
        );

        toast.promise(
            promise,
            {
                loading: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Failed to send the message.',
            }
        );

        promise.then(
            () => {
                setEmail('');
                setFirstName('');
                setLastName('');
                setMessage('');
                setCheckbox1(false);
                setCheckbox2(false);
            },
            (error) => {
                console.error('Failed...', error.text);
            }
        );
    };
     

  return (
    <div className='bg-primary-700  text-light-900'>
        <div className='flex flex-col lg:flex-row max-w-[1200px] lg:w-[85%] mx-auto gap-10 lg:gap-5 py-8 md:py-14 xl:py-20'>
            <div className={`text-center lg:text-start space-y-4`}>
                <h2 className={`${styles.h2} capitalize`}>
                    Think we can’t?<br/>Think again.
                </h2>
                <p className={`${styles.p2}`}>
                    We eat tough problems for lunch.<br/>Feed us yours.
                </p>
            </div>
            <Element name='contact-form2'>
            <form 
                className={` w-[90%] flex flex-col items-center mx-auto rounded-2xl gap-4`}
                ref={form} onSubmit={sendEmail}
            >
                <div className='flex flex-col md:flex-row md:justify-around items-center w-full gap-4 md:gap-0 '>
                        <Input
                            name='user-name'
                            className='w-11/12 md:w-5/12 py-[9px]'
                            placeholder='First Name'
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                        <Input
                            name='user-lastName'
                            className='w-11/12 md:w-5/12'
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                </div>
                <Input
                    name='user-email' 
                    className='w-11/12 ' 
                    placeholder='Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <textarea 
                    className='w-11/12 h-32  lg:h-40 bg-light-300 text-dark-700 rounded px-2 py-[8px] lg:py-[16px] placeholder-dark-900 placeholder:opacity-70 focus:placeholder-opacity-50 text-[12px] resize-none font-light md:font-normal tracking-wide' 
                    placeholder='What You are working on?' 
                    resize 
                    name='message' 
                    id=""
                    value={message} 
                    onChange={(e)=>setMessage(e.target.value)}
                >
                </textarea>
                <div className='w-11/12 flex items-start space-x-3'>
                    <input type="checkbox" id='checkbox1' checked={checkbox1} onChange={(e)=>setCheckbox1(e.target.checked)} className='mt-[3px]'  />
                    <label htmlFor="checkbox1" className={`${styles.p4} tracking-wider`}>
                        I understand the information i provide in this form will be handled in accordance with gray solutions privacy policy, and I agree to its terms.
                    </label>
                </div>
                <div className='w-11/12 flex items-start space-x-3'>
                    <input type="checkbox" id='checkbox2' name='marketing-communication' checked={checkbox2} onChange={(e)=>setCheckbox2(e.target.checked)}  className='mt-[3px]'  />
                    <label htmlFor="checkbox2" className={`${styles.p4}`}>
                        I would like to receive marketing communications from gray solutions.
                    </label>
                </div>

                <Button name='Submit' className='px-10 rounded-lg mt-5 lg:mt-10 text-sm'/>
                
            </form>
            </Element>
        </div>
        
        <div className='bg-dark-900 h-4'></div>
    </div>
    
  )
}

export  {ContactForm2}