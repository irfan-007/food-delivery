import React, { useState } from "react";
import { CLOUDINARY_IMG } from "../constants/Constant";
import { useDispatch } from "react-redux";
import { cartAdd } from "./utils/CartSlice";

function MenuItem({ item }) {
  let title = item.card.card.title;
  const arr = item.card.card.itemCards;
  // console.log(arr);

  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="bg-sky-100 rounded-lg shadow-md p-6 mb-6 w-[100%]">
      <h1 className="text-2xl font-bold mb-4">
        {title}
        <span
          onClick={() => setToggle(!toggle)}
          className="float-right cursor-pointer text-blue-600"
        >
          {toggle ? "▲" : "▼"}
        </span>
      </h1>
      <div className="space-y-6">
        {arr.map((el, idx) => {
          let tem = el.card.info;
          const { name, price, imageId, description } = tem;
          return (
            toggle && (
              <div
                key={idx}
                className="flex flex-col items-center border rounded-lg p-4 bg-gray-50"
              >
                <img
                  src={`${CLOUDINARY_IMG}${imageId}`}
                  alt={name}
                  className="w-full h-[100px] object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-green-600 font-bold">
                  Price: ₹{price ? price / 100 : "450"}
                </p>
                <p className="text-gray-700 text-center mb-3">{description}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  onClick={() => dispatch(cartAdd({ ...tem, quantity: 1 }))}
                >
                  Add to Cart
                </button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default MenuItem;
