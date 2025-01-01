import { Outlet } from "react-router-dom";
import Navbar from "../pages/sharedPages/Navbar";
import Footer from "../pages/sharedPages/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
