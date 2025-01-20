import {imgUrl} from "../utilis/constant"

const RestaurantCard = (props) =>{

const {resData} = props;
const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, promoted} = resData;

   return(
   <div className="res-card shadow-lg p-6 border-gray-200 border-2 max-w-48 hover:bg-gray-400 transition duration-600">
      <h3>{name}</h3>
{/* {console.log(promoted)} */}

      {/* {promoted ? <p>{promoted.toString()}</p> : <p>no</p>} */}
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <img src={imgUrl + cloudinaryImageId} className="w-40" />
    </div>
   )
}

// Higher order components

// input => RestaurantCard => restaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
   return (props) => {
      return(
         <div className="relative">
            <label className="absolute rounded-lg bg-black text-white px-1 left-1">
               Promoted
            </label>
            <RestaurantCard  {...props}/>
         </div>
      )
   }
}

export default RestaurantCard;