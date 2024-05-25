import { useForm } from "react-hook-form";

import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";

import Swal from "sweetalert2";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const ProductDetails = () => {
  const { loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const productDetails = useLoaderData();
  const id = productDetails?._id;
  console.log(productDetails);

  // data get
  const { data: product = [], refetch } = useQuery({
    queryKey: ["product"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const handleFormSubmit = async (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const rating = data.rating;
    const comment = data.comment;
    const productId = productDetails._id;
    const reviewData = { name, email, rating, comment, productId };
    console.log(reviewData);

    // send data to the server

    fetch("https://bd-calling-job-task-server.vercel.app/addProductReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.insertedId) {
          refetch();
          Swal.fire({
            title: "New Review Added!",
            text: "Explore the GREEMIND",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  const cartFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const productQuantity = form.number.value;
    const productName = productDetails.name;
    const productImage = productDetails.image;
    const productPrice = productDetails.price;
    const cartValue = {
      productQuantity,
      productName,
      productImage,
      productPrice,
    };
    console.log(cartValue);

    fetch("https://bd-calling-job-task-server.vercel.app/cartdata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartValue),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Item Added to Cart!",
            text: "Check your cart",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="md:mt-[103px] max-w-screen-xl  mx-auto">
      <div className="card rounded-xl  my-5 h-fit p-3  md:h-[750px] bg-base-100 shadow-xl">
        <div className="h-[380px]  grid justify-center">
          <img className="h-[370px]" src={productDetails.image} alt="" />
        </div>
        <div className="card-body px-5 ">
          <h2 className="card-title text-4xl">{productDetails.name}</h2>
          <div className="badge badge-accent text-white font-bold">New</div>

          <span className="text-lg  font-medium ">
            <span>Reviews : {productDetails.average_rating}</span>
            <FaStar className="text-orange-500 text-xl inline mb-[5px]"></FaStar>
          </span>
          <span>#plants</span>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            commodi adipisci deserunt fugit veniam non earum ipsum ipsam eaque
            nemo?
          </p>
          <form onSubmit={cartFormData}>
            <input
              className="border border-[#1b776c] p-2 w-36"
              type="number"
              name="number"
              id=""
            />
            <Link>
              <button className="btn bg-[#0cc4b0] text-white hover:bg-[#1b776c]">
                ADD TO CART
              </button>
            </Link>
          </form>
        </div>
      </div>

      {/* reviews sliders */}
      <p className="text-3xl text-center pt-10 text-slate-800 font-bold my-6">
        User Feedback
      </p>
      {/* review data send to compo  */}
      <div className="flex justify-center ">
        <div className="max-w-7xl bg-slate-50 w-fit grid md:grid-cols-3 gap-1 md:gap-3  ">
          {product?.map((review) => (
            <Reviews key={review._id} review={review}></Reviews>
          ))}
        </div>
      </div>

      <div className=" max-w-xl my-20 mx-auto bg-slate-100 mb-20">
        <form
          className="card-body bg-slate-100"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <p className="text-center text-4xl my-6 ">Add a review</p>

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

          <div className="form-control flex-1 mt-3">
            <label>Rating Selection</label>
            <select
              className="h-12"
              {...register("rating", { required: true })}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Comment</span>
            </label>
            <textarea
              {...register("comment", { required: true })}
              placeholder="Add Your Comments"
              className="textarea textarea-bordered textarea-md w-full "
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#0cc4b0] text-white hover:bg-[#1b776c]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
