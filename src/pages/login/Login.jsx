import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import Swal from "sweetalert2";

import { toast } from "react-toastify";
import SocialLogin from "../socialLogin/SocialLogin";
// import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
  const { handleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  console.log(error);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const value = { email, password };
    console.log(value);

    //signIn user
    handleSignIn(email, password)
      .then((result) => {
        console.log(result.user);

        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        toast.error("Login failed. Please check your email and password.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };
  return (
    <div className="card font-serif  shrink-0 w-full max-w-sm mx-auto mt-5 md:mt-40 lg:mt-60  shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body ">
        <p className="text-center text-4xl my-6 ">Login Form</p>
        <div className="grid justify-center">
          <SocialLogin></SocialLogin>
        </div>
        <div className="grid justify-center">
          {/* <SocialLogin></SocialLogin> */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        {/* <span className="text-red-700 font-medium text-sm">{error}</span> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0cc4b0] text-white hover:bg-[#114c45]">
            Login
          </button>
        </div>
        <p>
          New here? please
          <Link
            to="/register"
            className="text-blue-600 ml-4 text-lg font-bold underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
