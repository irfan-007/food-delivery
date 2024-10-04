import React from "react";
import { CLOUDINARY_IMG } from "../constants/Constant";
import { useNavigate } from "react-router-dom";

function MainRes({ name, img, place, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/restaurant/" + id)}
      className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden transition-all duration-300  hover:shadow-xl"
    >
      <img
        src={CLOUDINARY_IMG + img}
        alt={name}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        <p className="text-gray-600">{place}</p>
      </div>
    </div>
  );
}

export default MainRes;
