import { useState } from 'react'
import { Header,Footer } from './Sections/index.js'
import { Outlet } from 'react-router-dom'
import "./App.css"
function App() {


  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
