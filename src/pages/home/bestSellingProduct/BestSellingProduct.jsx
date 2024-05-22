import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const BestSellingProduct = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto mt-20">
      <div className="grid grid-cols-4">
        {/* div-1  */}
        <div className="mt-10 ml-5">
          <h2 className="text-4xl font-bold">
            Best Selling <br /> Plant
          </h2>
          <p className="text-[#A3A3A3] py-3">
            Easiest way to <br /> healthy life by buying <br /> your favorite
            plants
          </p>
          <Link>
            <button className="bg-[#C1DCDC] flex items-center gap-2 px-4 py-2 rounded-lg font-semibold">
              See more{" "}
              <span>
                <BsArrowRight />
              </span>
            </button>
          </Link>
        </div>
        {/* div-2  */}
        <div className="w-[300px] h-[436px]">
          <img src="https://i.ibb.co/Lp5JYdw/Frame-14.png" alt="" />
          <h2 className="text-[#1E1E1E] font-semibold pt-3">Natural Plants</h2>
          <p className="text-[#AAAAAA]">1,400.00 TK</p>
        </div>
        {/* div-3  */}
        <div className="w-[300px] h-[436px]">
          <img src="https://i.ibb.co/ChqxZJy/Frame-15.png" alt="" />
          <h2 className="text-[#1E1E1E] font-semibold pt-3">
            Artificial Plants
          </h2>
          <p className="text-[#AAAAAA]">900.00 TK</p>
        </div>
        {/* div-4  */}
        <div className="w-[300px] h-[436px]">
          <img src="https://i.ibb.co/QPY8T5F/Frame-16.png" alt="" />
          <h2 className="text-[#1E1E1E] font-semibold pt-3">
            Artificial Plants
          </h2>
          <p className="text-[#AAAAAA]">3,500.00 TK</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
