import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemApiGetter } from "../constants/Constant";
import Item from "./Item";
import Loader from "./Loader";

function ShowItem() {
  const { query } = useParams();
  const tem = itemApiGetter(query);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(tem);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await res.json();
        setData(
          json.data.cards[1].groupedCard.cardGroupMap.DISH.cards.slice(1)
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [tem]);

  return (
    <div className="p-10">
      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && data.length > 0 && (
        <div className="grid grid-cols-3 gap-10">
          {data.map((el, index) => (
            <Item
              key={index}
              name={el.card.card.info.name}
              description={el.card.card.info.description}
              price={el.card.card.info.price}
              image={el.card.card.info.imageId}
            />
          ))}
        </div>
      )}
      {!loading && !error && data.length === 0 && (
        <p className="text-gray-500">No items found.</p>
      )}
    </div>
  );
}

export default ShowItem;
