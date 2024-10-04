import React, { useEffect, useState } from "react";
import { SWIGGY_API } from "../constants/Constant";
import Recommended from "./Recommended";
import MainRes from "./MainRes";
import Slider from "react-slick";

function Home() {
  const [data, setData] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [mainRes, setMainRes] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    const getData = async () => {
      let res = await fetch(SWIGGY_API);
      if (!res.ok) {
        console.log("api can't be fetched !!!");
        return;
      }
      let json = await res.json();
      setData(json);
      setRecommended(json.data.cards[0].card.card.imageGridCards.info);
      //   console.log(json);
      // console.log(json.data.cards[0].card.card.imageGridCards.info);
      //   console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setMainRes(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    };
    getData();
  }, []);
  return (
    <div className="px-40 p-5">
      {recommended && (
        <h1 className="text-[25px] font-bold">Would you like to try ?</h1>
      )}
      <div className="mb-20">
        <Slider {...settings}>
          {recommended &&
            recommended.map((item) => (
              <Recommended
                key={item.id}
                image={item.imageId}
                name={item.description}
              />
            ))}
        </Slider>
      </div>

      <h1 className="text-[25px] font-bold mb-4">Top Restaurants Near</h1>
      <div className="grid grid-cols-5 gap-8">
        {mainRes &&
          mainRes.map((itm) => (
            <MainRes
              key={itm.info.id}
              name={itm.info.name}
              img={itm.info.cloudinaryImageId}
              place={itm.info.areaName}
              id={itm.info.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", background: "#567" }}
    ></div>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block", background: "#567" }}
    ></div>
  );
};
