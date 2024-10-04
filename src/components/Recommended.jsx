import React from "react";
import { CLOUDINARY_IMG } from "../constants/Constant";
import { useNavigate } from "react-router-dom";

function Recommended({ image, name }) {
  const navigate = useNavigate();
  return (
    <div>
      <img
        name={name}
        src={`${CLOUDINARY_IMG}${image}`}
        alt="loading..."
        onClick={() => navigate("/show/" + name)}
      />
    </div>
  );
}

export default Recommended;
