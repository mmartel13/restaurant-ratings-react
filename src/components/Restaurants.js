import React, { useEffect, useState } from "react";
import BasicRating from "./Ratings";

export default function GetRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants/")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);

  return (
    <>
      {!restaurants ? (
        <h2>Loading...</h2>
      ) : (
        <div>
            <ul>
          {restaurants.map((restaurant) => {
            return <li>
                <h2>{restaurant.name}</h2>
                <img src={restaurant.photoUrl} />
                <BasicRating rating={restaurant.rating} 
                id={restaurant.id} 
                setRestaurants={setRestaurants}/>
            </li>
          })}
          </ul>
        </div>
      )}
    </>
  );
}
