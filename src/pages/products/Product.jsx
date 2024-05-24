import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, price, average_rating, brand, category } = product;
  console.log(_id, name, image, price, average_rating, brand, category);
  return (
    <div className="mt-8">
      <div className=" card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-[384px] h-[384px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{average_rating}</div>
          </h2>
          <p>{price} TK</p>
          <p>
            <span className="font-bold">Brand:</span> {brand}
          </p>
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/products/${_id}`}>
              <button className="badge badge-outline hover:bg-[#C1DCDC]  px-2 py-3">
                Product Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
