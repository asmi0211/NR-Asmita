import { use, useEffect, useState } from "react"
import Shimmer from "./Shimmer";

import { useParams } from "react-router";
import useRestaurantMenu from "../utilis/useRestaurantMenu"

const RestrauntMenu = () => {
  
    // const[resInfo,setresInfo] = useState(null);
    const {resId} = useParams();

    //abstract fetching data logic
    const resInfo = useRestaurantMenu(resId)


    if(resInfo === null) return <Shimmer />;
    // const {name,city,costForTwo,avgRating} = resInfo.cards[2]?.card?.card?.info;

    const { card } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.[0];
    // const { card } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories?.[0]?.itemCards?.[0];

    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
    // const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories?.[0]?.itemCards;
    
    // console.log(itemCards?.[0]?.card?.info?.name);
    
    return(
    <div className="resdiv">
            <div className="reschild">
                <p>Name: {card?.info.name}</p>
                <p>Price: {card?.info.price/100 }</p>
                <p>Category: {card?.info.category}</p>
                <p>Description: {card?.info.description}</p>
                <ul>
                    {
                        itemCards.map((x) =>{
                            return(
                                <li key={x?.card?.info?.id}>
                                {x?.card?.info?.name} - 
                                RS:{x?.card?.info?.price/10}/-</li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>)
}
export default RestrauntMenu