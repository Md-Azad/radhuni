import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const [cart] = useCart();

  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        alert("something went worng on signout.", err.message);
      });
  };
  const navOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/menu" className="mx-4">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/Order/salad">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Radhuni</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn mr-2">
          <Link to="/dashboard/myCart">
            <MdShoppingCart className="text-xl" />
            <div className="badge badge-secondary">
              +{user?.email ? cart.length : "0"}
            </div>
          </Link>
        </button>

        {!user?.email ? (
          <Link to="/login" className="btn btn-success">
            Login
          </Link>
        ) : (
          <button onClick={handleSignOut} className="btn btn-info">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
