import { useState,useEffect } from 'react'
import { Header,Footer } from './Sections/index.js'
import { Outlet, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import "./App.css"

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <>
      <ScrollToTop/>
      <Header/>
      <Outlet/>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App
