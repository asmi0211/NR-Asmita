import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router";
  
const Body =() =>{
    const [listOfresto, setListOfresto] = useState([]);
    const [searchTxt, setSearchtxt] = useState([]);

    const [filteredresto,setFilteredresto] = useState("")
    
    useEffect(() => {
        fetchData();
        
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=80440&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const json = await data.json();
        console.log(json);
        
        const restaurantData = json?.data?.cards
            ?.filter((card) => card?.card?.card?.info) // Filters cards with valid `info` object
            ?.map((card) => card.card.card.info); // Extracts the `info` object
    
        setListOfresto(restaurantData);
        setFilteredresto(restaurantData)
    }

   return listOfresto.length===0 ? 
   (<Shimmer />) 
   :
   (
        <div className="bodyCont">
            <div className="bottomnav">
            <div className="search">
                <input 
                    type="text" 
                    id="searchtext" 
                    value={searchTxt} 
                    onChange={(e) => setSearchtxt(e.target.value)}
                    />
                <button onClick={() =>{
                    const filteredresto = listOfresto.filter(
                        (x) => x.name.toLowerCase().includes(searchTxt.toLowerCase())
                    );
                    setFilteredresto(filteredresto)
                }}>Search</button>
            </div>

            <div className="filter">
                <button className="filter_btn" onClick={() => {
                const Filtered_listOfresto = listOfresto.filter((x) => x.avgRating > 4.5)
                setFilteredresto(Filtered_listOfresto);
                }}>Top Rated Restaurants</button>
            </div>
            </div>

            <div className="res-conatiner">
            {filteredresto.map((x) => {
                return <Link to={"/restarants/" + x.id}><RestaurantCard key={x.id} resData={x} /></Link>;
            })}

         
            </div>
        </div>
    )
}
export default Body;