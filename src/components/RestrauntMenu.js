import { use, useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import {MenuUrl} from "../utilis/constant"
import { useParams } from "react-router";
const RestrauntMenu = () => {
    useEffect(() => {
        fetchMenu();
    },[])

    const[resInfo,setresInfo] = useState(null);
    const {resId} = useParams();

    const fetchMenu = async () => {
        const data = await fetch(MenuUrl + resId)

        const json = await data.json();

        console.log(data);
        
        setresInfo(json.data)

        // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories?.[0]?.itemCards?.[0]?.card?.info?.name); 
        
    }
    if(resInfo === null) return <Shimmer />;
    const {name,city,costForTwo,avgRating} = resInfo.cards[2]?.card?.card?.info;

    const { card } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories?.[0]?.itemCards?.[0];

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories?.[0]?.itemCards;
    
    console.log(itemCards?.[0]?.card?.info?.name);
    
    return(
    <div className="resdiv">
            <div className="reschild">
                <h1>Name Of Restraunt: {name}</h1>
                <h2>City: {city}</h2>
                <p>cost For Two: {costForTwo/100}</p>
                <p>Rating: {avgRating}</p>
                <p>Name: {card?.info.name}</p>
                <p>Price: {card?.info.price/10}</p>
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