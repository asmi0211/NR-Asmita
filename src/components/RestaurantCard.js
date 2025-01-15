import {imgUrl} from "../utilis/constant"

const RestaurantCard = (props) =>{

const {resData} = props;
const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData;

   return(
   <div className="res-card shadow-lg p-6 border-gray-200 border-2 max-w-48 hover:bg-gray-400 transition duration-600">
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <img src={imgUrl + cloudinaryImageId} className="w-40" />
    </div>
   )
}
export default RestaurantCard;