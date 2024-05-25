import { Link, NavLink } from "react-router-dom";

import { BsCart2 } from "react-icons/bs";

import useAuth from "../../hooks/useAuth";
import MyProfile from "./MyProfile";

const Navbar = () => {
  const { user, handleSignOut } = useAuth();
  console.log(user);

  const navItems = (
    <>
      <li className="text-xl font-semibold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#00fecb] underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-semibold">
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#00fecb] underline" : ""
          }
        >
          Products
        </NavLink>
      </li>
      <li className="text-xl font-semibold">
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-[#00fecb] underline" : ""
          }
        >
          ContuctUs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="drawer shadow-xl dark:bg-black dark:text-green-700  lg:max-w-7xl lg:mx-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar  opacity-90 lg:max-w-7xl lg:mx-auto lg:h-[80px] ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          {/* todo */}

          <div className=" w-full">
            <div className=" flex w-5/6">
              <Link to="/" className="flex items-center  ">
                <img
                  className="w-12 h-12"
                  src="https://i.ibb.co/C9vq4Pj/logo-tech-modified.png"
                  alt=""
                />
                <div className="flex-1 px-2 mx-2 md:text-xl text-bold text-[#1b776c]">
                  GREEMIND
                </div>
              </Link>

              <div className="flex-none  ml-28 hidden lg:block ">
                <ul className="menu menu-horizontal">{navItems}</ul>
              </div>
            </div>
            {/* cart & profile icon  */}
            <div className="flex gap-6">
              <button className="w-9 h-9">
                <Link to="/addtocart" className="flex items-center h-full">
                  <BsCart2 />
                </Link>
              </button>
            </div>

            {/* data show depend on user  */}
            <div className="flex-1">
              <button>
                <Link></Link>
              </button>
              <div className="flex  mb-3 justify-end">
                {user?.email ? (
                  <>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-ghost lg:text-xl font-semibold"
                    >
                      LogOut
                    </button>
                    <span className=" ">
                      <MyProfile></MyProfile>
                    </span>
                  </>
                ) : (
                  <li className="text-xl font-semibold">
                    <NavLink
                      to="/login"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#00f8e7] underline"
                          : ""
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sidebar content here */}
      <div className="drawer-side mt-16 z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
