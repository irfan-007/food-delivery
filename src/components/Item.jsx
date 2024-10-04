// import React from "react";
// import PropTypes from "prop-types";
// import { CLOUDINARY_IMG } from "../constants/Constant";

// function Item({ name, price, description, image, onAddToCart }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
//       <img
//         src={`${CLOUDINARY_IMG}${image}`}
//         alt={name}
//         className="w-full h-48 object-cover"
//       />
//       <h3 className="text-lg font-semibold mt-2">{name}</h3>
//       <p className="text-green-600 font-bold">${price.toFixed(2)}</p>
//       <p className="text-gray-600 mt-1">{description}</p>
//       <button
//         onClick={onAddToCart}
//         className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// // Adding prop types for validation
// Item.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   onAddToCart: PropTypes.func.isRequired,
// };

// export default Item;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { CLOUDINARY_IMG } from "../constants/Constant";

function Item({ name, price, description, image, onAddToCart }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
      <img
        src={`${CLOUDINARY_IMG}${image}`}
        alt={name}
        className={`w-full h-48 object-cover ${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity`}
        onLoad={() => setLoading(false)}
      />
      {loading && <div className="h-48 bg-gray-200 animate-pulse" />}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-lg text-green-600 font-bold mt-1">
          ${price.toFixed(2)}
        </p>
        <p className="text-gray-600 mt-2">{description}</p>
        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// Adding prop types for validation
Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Item;
