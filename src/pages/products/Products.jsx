import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Products = () => {
  const products = useLoaderData();
  const { loading } = useAuth();
  const [Items, setItems] = useState(products);

  const count = products.length;
  const itemsPerPage = 6;
  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch(
      `http://localhost:5000/pagination/?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [currentPage]);

  if (loading)
    return (
      <div className="flex justify-center my-10">
        {/* <Spinner className="h-8 w-8" /> */}
      </div>
    );

  // category function
  const handleSelectChange = (e) => {
    e.preventDefault();
    const plant = e.target.value;
    console.log(plant);
    if (plant === "All") {
      const remaining = products.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      setItems(remaining);
    } else {
      const remaining = products?.filter((item) => item.category === plant);
      setItems(remaining.slice(0, itemsPerPage));
    }
  };
  // brands function
  const handleChange = (e) => {
    e.preventDefault();
    const plant = e.target.value;
    console.log(plant);
    if (plant === "All") {
      const remaining = products.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      setItems(remaining);
    } else {
      const remaining = products?.filter((item) => item.brand === plant);
      setItems(remaining.slice(0, itemsPerPage));
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <img
        className="mb-16"
        src="https://i.ibb.co/ns6X4zK/Best-tree-Plant-tasty-1.png"
        alt=""
      />

      {/* sort and filter section  */}
      <div className="flex justify-between mb-5">
        <div>sorting</div>

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
                  onChange={(e) => handleSelectChange(e)}
                  name="plants"
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
                  onChange={(e) => handleChange(e)}
                  name="plants"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-3 mb-20 pl-7  ">
        {Items.map((product, index) => (
          <Product key={index} product={product}></Product>
        ))}
      </div>

      {/* pagination  */}
      <div className="flex justify-center mt-16 mb-10">
        <div className="grid grid-cols-3 gap-6">
          {pages.map((page) => (
            <button
              className={currentPage === page ? "btn btn-warning" : undefined}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}{" "}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
