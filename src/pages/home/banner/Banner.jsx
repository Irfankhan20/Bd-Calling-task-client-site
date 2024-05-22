// import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="rounded-xl lg:max-w-7xl  bg-[#C1DCDC] lg:h-[512px] lg:mx-auto">
      <div className="flex justify-between w-full">
        {/* 1st div  */}
        <div className=" mt-10 ml-10">
          <h2 className="text-5xl font-extrabold ">
            Buy your <br /> dream plants
          </h2>
          <div className="mt-6">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="What are you looking for?"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-8 h-8 opacity-70 bg-[#C1DCDC] px-2 rounded-lg cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* 2nd div  */}
        <div className="w-2/3 flex justify-end  ">
          <div className="flex justify-between w-full">
            <img
              className="w-[180px] h-[130px] mt-64 ml-20"
              src="https://i.ibb.co/7J87X4Y/Vector-186.png"
              alt=""
            />
            <img
              className="w-[113px] h-[154px] mt-10 mr-5"
              src="https://i.ibb.co/bK56Kms/Vector-187.png"
              alt=""
            />
          </div>
          <div className="absolute mt-28 mr-20">
            <img
              className="md:w-[450px] md:h-[400px] "
              src="https://i.ibb.co/1KMSK2t/Rectangle-2.png"
              alt=""
            />
            <img
              className="md:w-[411px] md:h-[500px] ml-14 bottom-[500px] relative "
              src="https://i.ibb.co/DzMf2m7/c736256eb1f7aea1945f94fa8929b37b.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
