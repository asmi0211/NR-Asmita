import { use, useEffect, useState } from "react"
import Shimmer from "./Shimmer";

import { useParams } from "react-router";
import useRestaurantMenu from "../utilis/useRestaurantMenu"
import ResCategory from "./ResCategory";

const RestrauntMenu = () => {
  
    // const[resInfo,setresInfo] = useState(null);
    const {resId} = useParams();

    const [show, setShow] = useState(null)

    
    //abstract fetching data logic
    const resInfo = useRestaurantMenu(resId)
    

    if(resInfo === null) return <Shimmer />;
    // const {name,city,costForTwo,avgRating} = resInfo.cards[2]?.card?.card?.info;

    const { card } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.[0];
    // const { card } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories?.[0]?.itemCards?.[0];

    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;

    // console.log(resInfo);
    
    // const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories?.[0]?.itemCards;
    
    // console.log(itemCards?.[0]?.card?.info?.name);
    
    //get all categories of the menu
    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
    <div className="resdiv">
            <div className="reschild text-center">
                <p className="font-bold p-2 text-xl">Name: {card?.info.name}</p>
                <p><span className="font-bold text-lg">Price:</span> {card?.info.price/100 }</p>
                <p><span className="font-bold text-lg">Category:</span> {card?.info.category}</p>
                <p><span className="font-boldtext-lg">Description:</span> {card?.info.description}</p>
                {categories.map((x,index)=><ResCategory data={x?.card?.card}
                show={index === show}
                setShow={()=>setShow(index === show ? null : index)}
                />)}


            </div>
        </div>)
}
export default RestrauntMenu