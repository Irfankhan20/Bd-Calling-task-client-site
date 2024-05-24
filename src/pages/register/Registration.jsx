import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    //   formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const imageFile = { image: data.image[0] };
    console.log(name, email, password, imageFile);
  };
  return (
    <div className="card font-serif  shrink-0 w-full max-w-lg mx-auto mt-5 md:mt-40 lg:mt-60  shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(handleFormSubmit)}>
        <p className="text-center text-4xl my-6 ">Registration Form</p>
        <div className="grid justify-center">
          {/* <SocialLogin></SocialLogin> */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Type Your Password"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Your image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0cc4b0] text-white hover:bg-[#114c45]">
            Register
          </button>
        </div>
        <p>
          Have Account? please
          <Link
            to="/login"
            className="text-blue-600 ml-4 text-lg font-bold underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
