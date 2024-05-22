import AboutUs from "./aboutUs/AboutUs";
import Banner from "./banner/Banner";
import BestSellingProduct from "./bestSellingProduct/BestSellingProduct";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestSellingProduct></BestSellingProduct>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
