export const SWIGGY_API =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999";
export const CLOUDINARY_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

export const itemApiGetter = (name) => {
  return `https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.7040592&lng=77.10249019999999&str=${name}&trackingId=undefined&submitAction=ENTER`;
};

export const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=";
