import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import {Home,Services,Contact,AboutUs, Blog,Portfolio,WordpressService,MobileApp,WebApp,SoftwareDevelopment,CloudSolution,GraphicDesign,PersonalBranding,DataScience,WebAndAppDesign,BlogPost,NotFound} from "./Pages/index.js";

import './index.css'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path='services' element={<Services/>}>
          <Route path='wordpress' element={<WordpressService/>}/>
          <Route path='mobile-app' element={<MobileApp/>}/>
          <Route path='web-app' element={<WebApp/>}/>
          <Route path='software-development' element={<SoftwareDevelopment/>}/>
          <Route path='cloud-solution' element={<CloudSolution/>}/>
          <Route path='graphic-design' element={<GraphicDesign/>}/>
          <Route path='personal-branding' element={<PersonalBranding/>}/>
          <Route path='data-science' element={<DataScience/>}/>
          <Route path='web&app-design' element={<WebAndAppDesign/>}/>
        </Route>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='blog' element={<Blog/>}>
          <Route path='category/:type' element=''/>
          <Route path='path/:id' element={<BlogPost/>}/>
        </Route>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path="*" element={<NotFound />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
