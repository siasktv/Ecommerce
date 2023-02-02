import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="mt-[86px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
