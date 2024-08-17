import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import {Home,Services,Contact,AboutUs, Blog,WordpressService,Whmcs,Magneto,Drupal,MobileApp,BlogPost,NotFound} from "./Pages/index.js";

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path='services' element={<Services/>}>
          <Route path='wordpress' element={<WordpressService/>}/>
          <Route path='whmcs' element={<Whmcs/>}/>
          <Route path='magneto' element={<Magneto/>}/>
          <Route path='drupal' element={<Drupal/>}/>
          <Route path='mobile-app' element={<MobileApp/>}/>
        </Route>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='blog' element={<Blog/>}>
          <Route path=':id' element={<BlogPost/>}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
