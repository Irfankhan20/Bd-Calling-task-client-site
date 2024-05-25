import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "./CustomerReviews.css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

const CustomerReviews = () => {
  return (
    <section className="mt-44">
      <h1 className=" text-3xl  ml-52 font-bold pb-10">
        What customers say about <br /> GREDMIND?
      </h1>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        {/* card 1 */}
        <SwiperSlide className="card-raw-css">
          <div className="w-full h-[410px] shadow-2xl bg-[#C1DCDC]">
            <p className="pt-20 px-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eaque, at odit voluptatum non aperiam id perferendis ea.
              Necessitatibus, sint?"
            </p>

            <div className="font-semibold flex justify-between px-10 pt-10 text-xl">
              <h2>Irfan khan </h2>
              <p className="flex items-center gap-2">
                <span>
                  <FaStar />
                </span>{" "}
                4.5
              </p>
            </div>
            <p className="pl-10 pt-10 text-5xl">
              <FaQuoteLeft />
            </p>
          </div>
        </SwiperSlide>
        {/* card 2 */}
        <SwiperSlide className="card-raw-css">
          <div className="w-full h-[410px] shadow-2xl bg-[#C1DCDC]">
            <p className="pt-20 px-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eaque, at odit voluptatum non aperiam id perferendis ea.
              Necessitatibus, sint?"
            </p>

            <div className="font-semibold flex justify-between px-10 pt-10 text-xl">
              <h2>Irfan khan </h2>
              <p className="flex items-center gap-2">
                <span>
                  <FaStar />
                </span>{" "}
                4.5
              </p>
            </div>
            <p className="pl-10 pt-10 text-5xl">
              <FaQuoteLeft />
            </p>
          </div>
        </SwiperSlide>
        {/* card 3 */}
        <SwiperSlide className="card-raw-css">
          <div className="w-full h-[410px] shadow-2xl bg-[#C1DCDC]">
            <p className="pt-20 px-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eaque, at odit voluptatum non aperiam id perferendis ea.
              Necessitatibus, sint?"
            </p>

            <div className="font-semibold flex justify-between px-10 pt-10 text-xl">
              <h2>Irfan khan </h2>
              <p className="flex items-center gap-2">
                <span>
                  <FaStar />
                </span>{" "}
                4.5
              </p>
            </div>
            <p className="pl-10 pt-10 text-5xl">
              <FaQuoteLeft />
            </p>
          </div>
        </SwiperSlide>
        {/* card 4 */}
        <SwiperSlide className="card-raw-css">
          <div className="w-full h-[410px] shadow-2xl bg-[#C1DCDC]">
            <p className="pt-20 px-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              eaque, at odit voluptatum non aperiam id perferendis ea.
              Necessitatibus, sint?"
            </p>

            <div className="font-semibold flex justify-between px-10 pt-10 text-xl">
              <h2>Irfan khan </h2>
              <p className="flex items-center gap-2">
                <span>
                  <FaStar />
                </span>{" "}
                4.5
              </p>
            </div>
            <p className="pl-10 pt-10 text-5xl">
              <FaQuoteLeft />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CustomerReviews;
