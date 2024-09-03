import { Header,Footer } from './Sections/index.js'
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import "./App.css"

function App() {

  const location = useLocation();

  // Check if the current path is /admin-dashboard
  const isAdminDashboard = location.pathname === '/admin-Dashboard';

  return (
    <>
      {!isAdminDashboard && <Header />}
      <Outlet />
      {!isAdminDashboard && <Footer />}
      <Toaster />
    </>
  )
}

export default App
