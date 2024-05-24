import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "./CustomerReviews.css";
import "swiper/css/pagination";

const CustomerReviews = () => {
  return (
    <section className="mt-44">
      <h1 className="text-center text-3xl text-red-600 font-medium pb-10">
        Food Gallery With Slider
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
        <SwiperSlide className="card-raw-css">
          <img
            className="w-full h-[410px] shadow-2xl"
            src="https://i.ibb.co/zJjwjXc/main-courses-1.jpg"
            alt=""
          />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Fishes
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card-raw-css">
          <img
            className="w-full h-[410px] shadow-2xl"
            src="https://i.ibb.co/sHnCB5V/pizza.jpg"
            alt=""
          />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizza
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card-raw-css">
          <img
            className="w-full h-[410px] shadow-2xl"
            src="https://i.ibb.co/nMPy5mn/spicy-1.jpg"
            alt=""
          />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Chicken
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card-raw-css">
          <img
            className="w-full h-[410px] shadow-2xl"
            src="https://i.ibb.co/JQqgw0N/main-courses-2.jpg"
            alt=""
          />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Fry
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card-raw-css">
          <img
            className="w-full h-[410px] shadow-2xl"
            src="https://i.ibb.co/nQ8FHYV/salad-potatoes-and-bread.jpg"
            alt=""
          />
          <h2 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CustomerReviews;
