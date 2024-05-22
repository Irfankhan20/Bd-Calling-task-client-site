import AboutUs from "./aboutUs/AboutUs";
import Banner from "./banner/Banner";
import BestSellingProduct from "./bestSellingProduct/BestSellingProduct";
import Categories from "./categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestSellingProduct></BestSellingProduct>
      <AboutUs></AboutUs>
      <Categories></Categories>
    </div>
  );
};

export default Home;
