import { useForm } from "react-hook-form";

import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";
// import productReview from "../../../public/productReview.json";
import Swal from "sweetalert2";
// import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
  const { loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    //   formState: { errors },
  } = useForm();
  const productDetails = useLoaderData();
  const id = productDetails?._id;
  console.log(id);
  //

  // data get
  const { data: product = [], refetch } = useQuery({
    queryKey: ["product"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${id}`);
      return res.data;
    },
  });
  console.log(product);

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

  return (
    <div className="md:mt-[103px] max-w-screen-xl  mx-auto">
      <div className="card rounded-xl  my-5 h-fit p-3  md:h-[750px] bg-base-100 shadow-xl">
        <div className="h-[380px]  grid justify-center">
          <img className="h-[370px]" src={productDetails.image} alt="" />
        </div>
        <div className="card-body px-5 ">
          <h2 className="card-title text-4xl">{productDetails.name}</h2>
          <div className="badge badge-secondary">NEW</div>

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
          <div className="flex items-center  md:w-2/6 gap-2 md:gap-5">
            <div className="flex-1 gap-2">
              {/* <div className="flex gap-2">
                {product?.uploader !== userInfo ? (
                  <>
                    {" "}
                    {voter?.includes(userInfo) ? (
                      <>
                        <button
                          disabled
                          onClick={() => voteHandle(1)}
                          className="btn text-2xl"
                        >
                          <FaRegThumbsUp></FaRegThumbsUp>
                          {upvote}
                        </button>
                        <button
                          disabled
                          onClick={() => voteHandle(-1)}
                          className="btn text-2xl"
                        >
                          <FaRegThumbsDown></FaRegThumbsDown>
                          {downvote}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => voteHandle(1)}
                          className="btn text-2xl"
                        >
                          <FaRegThumbsUp></FaRegThumbsUp>
                          {upvote}
                        </button>
                        <button
                          onClick={() => voteHandle(-1)}
                          className="btn text-2xl"
                        >
                          <FaRegThumbsDown></FaRegThumbsDown>
                          {downvote}
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <button
                      disabled
                      onClick={() => voteHandle(1)}
                      className="btn text-2xl"
                    >
                      <FaRegThumbsUp></FaRegThumbsUp>
                      {upvote}
                    </button>
                    <button
                      disabled
                      onClick={() => voteHandle(-1)}
                      className="btn text-2xl"
                    >
                      <FaRegThumbsDown></FaRegThumbsDown>
                      {downvote}
                    </button>
                  </>
                )}
              </div> */}
            </div>
            <div className="flex-1">
              {/* <div className="flex justify-evenly  gap-2 ">
                <button onClick={addReport} className="btn text-red-600">
                  {" "}
                  <FaBan className="text-2xl"></FaBan>{" "}
                </button>
              </div> */}
            </div>
          </div>
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
      {/* <div className=" max-w-7xl  shadow-2xl h-[800px] my-20 bg-base-300 border-4  mx-auto">
        {product?.uploader !== userInfo && (
          <AddReview
            userInfo={userInfo}
            reviewerContainer={reviewerContainer}
            handleSubmitForm={handleSubmitForm}
          ></AddReview>
        )}
      </div> */}
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
