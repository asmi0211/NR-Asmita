import {imgUrl} from "../utilis/constant"

const RestaurantCard = (props) =>{

const {resData} = props;
  // Safely access resData?.card?.card?.info
  const info = resData?.card?.card?.info;

  // If 'info' is not available or missing any necessary fields, return null
  if (!info || !info.name || !info.cuisines || !info.avgRating || !info.costForTwo || !info.cloudinaryImageId) {
    return null; // Don't render anything if any required data is missing
  }

const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = info;

   return(
      <div className="res-card">
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <img src={imgUrl + cloudinaryImageId} />
    </div>
   )
}
export default RestaurantCard;