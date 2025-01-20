import { useEffect,useState } from "react";
import {MenuUrl} from "../utilis/constant"

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    //fetch data
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MenuUrl + resId)

        const json = await data.json();

        setResInfo(json)

        // console.log(json)
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories?.[0]?.itemCards?.[0]);

        //get all categories of the menu
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

        
        
       
        
        
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
        

    }

    return resInfo;
}
export default useRestaurantMenu;