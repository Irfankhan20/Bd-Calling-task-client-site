import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className=" w-10 rounded-full">
            <img src={user.photoURL} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          {/* <div className="w-10 ml-20 rounded-full">
            <img src={user?.photoURL} />
          </div> */}

          <li>
            <button className="btn btn-outline btn-accent">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </button>
          </li>
          <li className="my-3">
            <button className="btn btn-outline btn-accent">
              <NavLink to="/profile">My Profile</NavLink>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyProfile;
