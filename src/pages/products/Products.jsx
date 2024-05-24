import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  // const { loading } = useAuth();
  const [Items, setItems] = useState(products);
  console.log(Items);
  const [currentPage, setCurrentPage] = useState(0);
  console.log("currentPage");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("All");

  const itemsPerPage = 6;

  useEffect(() => {
    let filteredProducts = products;

    // Apply category filter
    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Apply brand filter
    if (selectedBrand !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) => item.brand === selectedBrand
      );
    }

    // Apply sorting
    if (sortCriteria !== "All") {
      filteredProducts.sort((a, b) => {
        if (sortCriteria === "price") {
          return a.price - b.price;
        } else if (sortCriteria === "average_rating") {
          return b.average_rating - a.average_rating;
        }
        return 0;
      });
    }

    const paginatedProducts = filteredProducts.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );
    setItems(paginatedProducts);
    console.log(paginatedProducts, "12312");
  }, [currentPage, selectedCategory, selectedBrand, sortCriteria, products]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(0);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setCurrentPage(0);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    setCurrentPage(0);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedBrand === "All" || product.brand === selectedBrand)
    );
  });

  const count = filteredProducts.length;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <div className="max-w-7xl mx-auto">
      <img
        className="mb-16"
        src="https://i.ibb.co/ns6X4zK/Best-tree-Plant-tasty-1.png"
        alt=""
      />

      {/* sort and filter section  */}
      <div className="flex justify-between mb-5">
        {/* sort section  */}
        <div>
          {/* sort by price  */}
          <form>
            <div className="form-control">
              <div className="input-group">
                <select
                  onChange={handleSortChange}
                  value={sortCriteria}
                  name="sort"
                  className="select w-32 select-bordered"
                >
                  <option value="All">Sort by</option>
                  <option value="price">Price</option>
                  <option value="average_rating">Rating</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        {/* filtering  */}
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-center mt-12 mb-8 text-amber-600 font-bold text-3xl lg:text-5xl"
        >
          All Products
        </div>
        <div className="mb-12 flex justify-center">
          {/* category form  */}
          <form>
            <div className="form-control">
              <div className="input-group">
                <select
                  onChange={handleCategoryChange}
                  value={selectedCategory}
                  name="category"
                  className="select w-56 select-bordered"
                >
                  <option value="All">All Categories</option>
                  <option value="Natural Plants">Natural Plants</option>
                  <option value="Artificial Plants">Artificial Plants</option>
                  <option value="Plants Accessories">Plants Accessories</option>
                </select>
              </div>
            </div>
          </form>
          {/* brand form  */}
          <form>
            <div className="form-control">
              <div className="input-group">
                <select
                  onChange={handleBrandChange}
                  value={selectedBrand}
                  name="brand"
                  className="select w-56 select-bordered"
                >
                  <option value="All">All Brands</option>
                  <option value="GreenScape">GreenScape</option>
                  <option value="Leafy Life">Leafy Life</option>
                  <option value="GreenThumb">GreenThumb</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* card section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-3 mb-20 pl-7">
        {Items?.map((product, index) => (
          <Product key={index} product={product}></Product>
        ))}
      </div>

      {/* pagination  */}
      <div className="flex justify-center mt-16 mb-10">
        <div className="grid grid-cols-3 gap-6">
          {pages.map((page) => (
            <button
              className={currentPage === page ? "btn btn-warning" : "btn"}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
