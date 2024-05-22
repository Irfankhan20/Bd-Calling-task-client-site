import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const Categories = () => {
  return (
    <div className="mb-32">
      <div className="text-center ">
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-[#8E8E8E] pt-3 pb-5">
          Find what you are looking for
        </p>
      </div>

      <div className="  justify-center h-[841px] bg-[#C1DCDC] pt-10 px-56 grid grid-cols-3">
        {/* div-1  */}
        <div className="mx-auto">
          <img
            className="w-[352px] h-[551px] shadow-2xl"
            src="https://i.ibb.co/BTQYP3X/img-1.jpg"
            alt=""
          />
          <h2 className="text-center font-bold pt-2">Natural Plants</h2>
        </div>
        {/* div-2  */}
        <div className="mx-auto mt-6">
          <img
            className="w-[352px] h-[600px] shadow-2xl"
            src="https://i.ibb.co/7KGMCms/valentine-467x700.jpg"
            alt=""
          />
          <div className="text-center">
            <h2 className="text-center font-bold pt-2">Plant Accessories</h2>
            <p className="text-[#6F7D7D] py-2">
              Horem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
            <Link>
              <button className="flex gap-2 items-center bg-white px-4 py-2 rounded-lg font-medium mx-auto mt-2">
                Explore{" "}
                <span className="">
                  <HiArrowLongRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        {/* div-3  */}
        <div className="mx-auto">
          <img
            className="w-[352px] h-[551px] shadow-2xl"
            src="https://i.ibb.co/9qL2zjt/artificial-plants-large-artifi-1664426675-292189ee-progressive.jpg"
            alt=""
          />
          <h2 className="text-center font-bold pt-2">Artificial Plants</h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;
