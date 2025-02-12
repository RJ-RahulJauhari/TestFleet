import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Navbar></Navbar>
        <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
