import { FaStar } from "react-icons/fa";

const Reviews = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-1 p-2">
      <div className="card-body">
        <div className="flex items-center justify-center w-24">
          <span>Ratings: {review?.rating}</span>
          <span>
            <FaStar className="text-red-500"></FaStar>
          </span>
        </div>
        <h2 className="card-title mr-1">User name: {review?.name}</h2>
        <span>
          <span className="font-medium mr-1">Comment:</span>
          {review?.comment}
        </span>
      </div>
    </div>
  );
};

export default Reviews;
