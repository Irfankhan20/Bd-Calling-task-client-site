import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, handleSignOut } = useAuth();
  console.log(user);

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mx-3">
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">ContuctUs</NavLink>
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
              <button>
                <Link className="flex items-center ">
                  <BsCart2 />
                </Link>
              </button>
              <button>
                <Link className="flex items-center">
                  <CgProfile />
                </Link>
              </button>
            </div>

            {/* data show depend on user  */}
            <div className="flex-1">
              <button>
                <Link></Link>
              </button>
              <div className="flex mb-3 justify-end">
                {user ? (
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn h-12 md:h-[60px]">
                      <img
                        className="h-12 w-12 rounded-3xl  md:h-[60px]  md:rounded-[30px]"
                        src={user?.photoURL}
                        alt=""
                      />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>{user?.displayName}</li>
                      <li>
                        <Link to="/dashboard/myProfile">
                          <button className="border border-red-600">
                            Dashboard
                          </button>
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleSignOut}>LogOut</button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn md:h-[60px]">
                      <HiOutlineMenuAlt3 />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li className="">
                        <Link className="" to="/">
                          <button>Dasboard</button>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link className="" to="/login">
                          <button>Login</button>
                        </Link>
                      </li>
                    </ul>
                  </div>
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
