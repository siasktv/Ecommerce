import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import MainCarousel from './components/MainCarusel/MainCarusel'
import Navbar from './components/Navbar/Navbar'

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="w-full mt-[86px] max-[990px]:mt-[160px]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
