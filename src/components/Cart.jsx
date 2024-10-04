import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLOUDINARY_IMG } from "../constants/Constant";
import { cartRemove, cartAdd } from "./utils/CartSlice";

function Cart() {
  const cartStorage = useSelector((store) => store.cartStorage);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    // Add your checkout logic here
    console.log("Proceeding to checkout...");
  };

  return (
    <div className="container mx-auto p-4 relative mb-32">
      {cartStorage.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartStorage.map((item) => {
            const { id, name, description, imageId, price, quantity } = item;
            return (
              <div
                key={id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
              >
                <img
                  src={CLOUDINARY_IMG + imageId}
                  alt={name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="text-lg font-semibold mb-2">{name}</div>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-green-500">
                    Price: ₹{price ? price / 100 : "450"}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => dispatch(cartRemove(item))}
                      className="bg-red-500 text-white w-8 h-8 rounded-full flex justify-center items-center"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => dispatch(cartAdd(item))}
                      className="bg-green-500 text-white w-8 h-8 rounded-full flex justify-center items-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-xl mt-8">
          Your cart is empty.
        </p>
      )}

      {/* Sticky Checkout Button */}
      {cartStorage.length > 0 && (
        <button
          onClick={handleCheckout}
          className="fixed bottom-4 right-4 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 animate-colorChange"
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
