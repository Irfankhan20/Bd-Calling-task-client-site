import { AiFillBank } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto mt-20 mb-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="text-[#8E8E8E] pt-3 pb-5">
          Order now and appreciate the beauty of nature
        </p>
      </div>
      <div className="grid grid-cols-3 max-w-7xl ">
        {/* div-1  */}
        <div className="text-center">
          <div className="bg-[#C1DCDC] mx-auto text-3xl p-6 w-20 h-20 rounded-full">
            <AiFillBank />
          </div>
          <h2 className="py-3 font-bold">Large Assortment</h2>
          <p className="text-[#8E8E8E]">
            we offer many different types of products with fewer variations in
            each category
          </p>
        </div>
        {/* div-2  */}
        <div className="text-center ">
          <div className="bg-[#C1DCDC] text-3xl p-6 w-20 h-20 mx-auto rounded-full">
            <LiaShippingFastSolid />
          </div>
          <h2 className="py-3 font-bold">Fast & Free Shipping</h2>
          <p className="text-[#8E8E8E]">
            4-day or less delivery time, free shipping and on expedited delivery
            option.
          </p>
        </div>
        {/* div-3  */}
        <div className=" text-center">
          <div className="bg-[#C1DCDC] mx-auto text-3xl p-6 w-20 h-20 rounded-full">
            <BiSupport />
          </div>
          <h2 className="py-3 font-bold">24/7 Support</h2>
          <p className="text-[#8E8E8E]">
            answers to any business related inquiry 24/7 and in real-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
