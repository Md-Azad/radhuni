import { FaCalendar, FaCartPlus, FaHome, FaList } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
import { MdOutlineMenuBook } from "react-icons/md";
import { VscCodeReview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Radhuni</h1>
          <p>We serve your taste</p>
        </div>
        <ul className="menu mx-2 mt-4">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="flex items-center gap-2 text-2xl"
            >
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="flex items-center gap-2 text-2xl"
            >
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myCart"
              className="flex items-center gap-2 text-2xl"
            >
              <FaCartPlus></FaCartPlus> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reviews"
              className="flex items-center gap-2 text-2xl"
            >
              <VscCodeReview />
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bokings"
              className="flex items-center gap-2 text-2xl"
            >
              <FaList></FaList> My Bookings
            </NavLink>
          </li>
          <div className="divider divider-info"></div>

          <li>
            <NavLink to="/" className="flex items-center gap-2 text-2xl">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="flex items-center gap-2 text-2xl">
              <MdOutlineMenuBook />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Order/salad"
              className="flex items-center gap-2 text-2xl"
            >
              <IoBagAddSharp />
              Order
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Dashboard;
