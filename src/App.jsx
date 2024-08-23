import { Header,Footer } from './Sections/index.js'
import { Outlet} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import "./App.css"

function App() {

  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App
