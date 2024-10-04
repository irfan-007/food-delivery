import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../constants/Constant";
import MenuItem from "./MenuItem";
import Loader from "./Loader";
function Menu() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(MENU_API + id);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();
        setData(
          json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2, -2)
        );
        // console.log(
        //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(2, -2)
        // );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-20 w-7/12 mx-auto mt-10">
      {loading && <Loader />}
      {!loading &&
        data &&
        data.map((item, i) => <MenuItem key={i} item={item} />)}
    </div>
  );
}

export default Menu;
