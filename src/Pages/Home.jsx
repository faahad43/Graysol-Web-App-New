import React from 'react'
import { HomeBanner, ChooseUs, Sponsers,Services, Certifications,Promise, Testimonials,Help,Question, Faq } from '../Sections'


const Home = () => {
  const faqs =[
    {
      "question": "What services does Graysol offer?",
      "answer": "Graysol offers a wide range of services, including software development, website and application design, mobile app development, data science and AI solutions, personal branding, and graphic design."
    },
    {
      "question": "How does Graysol ensure the quality of its services?",
      "answer": "Our team follows industry best practices, uses the latest technologies, and maintains rigorous quality assurance processes to deliver high-quality solutions that meet your business needs."
    },
    {
      "question": "Can Graysol handle both small and large projects?",
      "answer": "Absolutely! Whether you need a simple solution or a complex, large-scale project, we have the expertise and resources to handle projects of all sizes."
    },
    {
      "question": "Which industries does Graysol specialize in?",
      "answer": "We serve a wide range of industries including technology, finance, healthcare, retail, and more. Our solutions are tailored to meet the unique needs of each sector."
    },
    {
      "question": "What is the typical project timeline at Graysol?",
      "answer": "Project timelines vary depending on the scope and complexity, but we provide clear estimates during the planning phase and keep you informed throughout the project to ensure timely delivery."
    },
    {
      "question": "Does Graysol offer ongoing support after the project is completed?",
      "answer": "Yes, we provide continuous support, maintenance, and optimization services to ensure your solutions remain effective and up-to-date as your business evolves."
    },
    {
      "question": "Can Graysol integrate new solutions with our existing systems?",
      "answer": "Yes, we specialize in seamless integration, ensuring that any new software, design, or application works smoothly with your existing tools and platforms."
    },
    {
      "question": "How does Graysol approach project management?",
      "answer": "We use agile methodologies and maintain clear, consistent communication throughout each project, ensuring flexibility and delivering results that align with your vision."
    },
    {
      "question": "What sets Graysol apart from other service providers?",
      "answer": "Our commitment to quality, creativity, and client satisfaction, combined with our extensive expertise and holistic approach, makes us a trusted partner for businesses of all sizes."
    },
    {
      "question": "How do I get started with Graysol’s services?",
      "answer": "Simply reach out to us through our website or email. We’ll schedule a consultation to understand your needs and discuss how we can help bring your project to life."
    }
  ]
      
  return (
    <>
      <HomeBanner/>
      <Sponsers/>
      <ChooseUs/>
      <Services/>
      <Certifications/>
      <Promise/>
      <Testimonials/>
      <Help page="Home"/>
      <Faq faqs={faqs}/>
      <Question/>
    </>
  )
}

export {Home}