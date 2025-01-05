import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/sharedPages/Navbar";
import Footer from "../pages/sharedPages/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  return (
    <>
      {isLogin || <Navbar></Navbar>}

      <Outlet></Outlet>

      {isLogin || <Footer></Footer>}
    </>
  );
};

export default MainLayout;
