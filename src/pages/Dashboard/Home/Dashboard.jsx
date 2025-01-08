import {
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaList,
  FaUserAlt,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { IoBagAddSharp, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineMenuBook } from "react-icons/md";
import { VscCodeReview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { FaBook } from "react-icons/fa6";

const Dashboard = () => {
  const [cart] = useCart();

  //   TODO: GET isAdmin value from database;
  const isAdmin = true;
  return (
    <section className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Radhuni</h1>
          <p>We serve your taste</p>
        </div>
        <ul className="menu mx-2 mt-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaUtensils></FaUtensils> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItem"
                  className="flex items-center gap-2 text-2xl"
                >
                  <IoSettingsOutline />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageBookings"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="flex items-center gap-2 text-2xl"
                >
                  <FaUsers></FaUsers> Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <FaCartPlus></FaCartPlus> My Cart ({cart.length})
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
            </>
          )}
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
