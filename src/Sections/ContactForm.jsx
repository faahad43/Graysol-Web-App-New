import React,{useRef,useState} from 'react'
import styles from '../styles'
import {Input} from '../Components/Input'
import {Button} from '../Components/Button'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
    const [email,setEmail]=useState("");
    const [firstName,setFirstName]= useState("");
    const [lastName,setLastName]= useState("");
    const [message,setMessage]= useState("");
    const [companyName,setCompanyName]= useState("");
    const [phoneNo,setPhoneNo]= useState("");
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
        if (!phoneNo.trim()) {
            toast.error('Phone Number is required');
            return false;
        }
        if (!companyName.trim()) {
            toast.error('Company Name is required');
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
            process.env.VITE_SERVICE_ID,
            process.env.VITE_TEMPLATE_ID,
            form.current,
            { publicKey: process.env.VITE_PUBLIC_KEY }
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
                setCompanyName('');
                setPhoneNo('');
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
    <div id='contact-form' className='bg-dark-900 pt-10 md:pt-16 pb-16 lg:pb-20 space-y-8 '>
        <h1 className={`${styles.h1} text-center`}>Reach Us</h1>
        <form 
            ref={form} onSubmit={sendEmail}
            className={`bg-dark-300 w-[90%] sm:w-[80%] max-w-[1200px] flex flex-col items-center mx-auto rounded-2xl py-10 md:py-14 gap-4`}>
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
            <div className='flex flex-col md:flex-row md:justify-around items-center w-full gap-4 md:gap-0 '>
                    <Input
                    name='user-email' 
                    className='w-11/12 md:w-5/12' 
                    placeholder='Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input 
                    name='user-phoneNo'
                    className='w-11/12 md:w-5/12' 
                    placeholder='Phone Number'
                    value={phoneNo}
                    onChange={(e)=>setPhoneNo(e.target.value)}
                    />
            </div>
            <Input
                name='company-name' 
                className='w-11/12 ' 
                placeholder='Company Name'
                value={companyName}
                onChange={(e)=>setCompanyName(e.target.value)}
            />
            <textarea 
                className='w-11/12 h-32 h-32 lg:h-40 bg-light-300 text-dark-700 rounded px-2 py-[8px] lg:py-[16px] placeholder-dark-900 placeholder:opacity-70 focus:placeholder-opacity-50 text-[12px] resize-none font-light md:font-normal  tracking-wide' placeholder='What You are working on?' 
                resize 
                name='message'
                id=""
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
            >
            </textarea>
            <div className='w-11/12 flex items-start space-x-3'>
                <input type="checkbox" id='checkbox1' checked={checkbox1} onChange={(e)=>setCheckbox1(e.target.checked)} className='mt-[3px]'  />
                <label htmlFor="checkbox1" className={`${styles.p4}`}>
                    I UNDERSTAND THE INFORMATION I PROVIDE IN THIS FORM WILL BE HANDLED IN ACCORDANCE WITH GRAY SOLUTIONS PRIVACY POLICY, AND I AGREE TO ITS TERMS.
                </label>
            </div>
            <div className='w-11/12 flex items-start space-x-3'>
                <input type="checkbox" name='marketing-communication' id='checkbox2' checked={checkbox2} onChange={(e)=>setCheckbox2(e.target.checked)}  className='mt-[3px]'  />
                <label htmlFor="checkbox2" className={`${styles.p4}`}>
                    I WOULD LIKE TO RECEIVE MARKETING COMMUNICATIONS FROM GRAY SOLUTIONS.
                </label>
            </div>

            <Button name='Submit' className='px-10 rounded-lg mt-5 text-sm'/>
            
        </form>
    </div>
  )
}

export {ContactForm}