import RestaurantCard from "./RestaurantCard"
import resList from "../utilis/mockData"
import { useState } from "react"

  
const Body =() =>{
    const [listOfresto, setListOfresto] = useState(resList);
    return(
        <div className="bodyCont">
            <div className="bottomnav">
            <div className="search">
                Search
            </div>

            <div className="filter">
                <button className="filter_btn" onClick={() => {
                const Filtered_listOfresto = listOfresto.filter((x) => x?.card?.card?.info?.avgRating > 4.5)
                setListOfresto(Filtered_listOfresto)
                
                }}>Top Rated Restaurants</button>
            </div>
            </div>

            <div className="res-conatiner">
            {/* using map */}
           {/* {resList.filter((x)=>x?.card?.card?.info).map((x)=>
            <RestaurantCard resData={x} key={x?.card?.card?.info?.id} />
          )} */}
         {listOfresto.map((x) =>
            <RestaurantCard key={x?.card?.card?.info?.id} resData={x} />  
        )}
         
            </div>
        </div>
    )
}
export default Body;