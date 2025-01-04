import {imgUrl} from "../utilis/constant"

const RestaurantCard = (props) =>{

const {resData} = props;
const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData;

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