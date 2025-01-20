import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"
import { useEffect, useState, useContext } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utilis/useOnlineStatus";  
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";

const Body =() =>{


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return(
        <h1>Looks like u r offline, check ur internet connect</h1>
    )

    const [listOfresto, setListOfresto] = useState([]);
    const [searchTxt, setSearchtxt] = useState([]);

    
    const [filteredresto,setFilteredresto] = useState("")
    
    useEffect(() => {
        fetchData();
        
    }, [])

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

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

const {dummyData, setUserInfo} = useContext(UserContext);


   return listOfresto.length===0 ? 
   (<Shimmer />) 
   :
   (
        <div className="bodyCont">
            <div className="bottomnav flex gap-10 items-start p-4">
            <div className="search">
                <input 
                    type="text" 
                    id="searchtext" 
                    value={searchTxt} 
                    onChange={(e) => setSearchtxt(e.target.value)}
                    className="border border-gray-800"
                    />
                <button 
                className="px-1 border-gray-800 border-solid border" 
                onClick={() =>{
                    const filteredresto = listOfresto.filter(
                        (x) => x.name.toLowerCase().includes(searchTxt.toLowerCase())
                    );
                    setFilteredresto(filteredresto)
                }}>Search</button>
            </div>

            <div className="filter">
                <button className="filter_btn border-gray-800 border-solid border px-4 py-0 " 
                onClick={() => {
                const Filtered_listOfresto = listOfresto.filter((x) => x.avgRating > 4.5)
                setFilteredresto(Filtered_listOfresto);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="flex gap-1">
                    <label>UserName</label>
                    <input className="border-gray-500 border-solid border" 
                   value={dummyData} 
                   onChange={(e)=>setUserInfo(e.target.value)} />

                </div>
            </div>

                

            <div className="res-conatiner flex justify-center gap-6 flex-wrap w-full p-8">
            {filteredresto.map((x) => {
                return <Link to={"/restarants/" + x.id}>
                    {/* if restaurant is promoted then return it */}
                    {/* {console.log(x.promoted)} */}
                    
                {x.promoted ? (<RestaurantCardPromoted key={x.id} resData={x} /> ): (<RestaurantCard key={x.id} resData={x} />)}
                {/* <RestaurantCard key={x.id} resData={x} /> */}
                </Link>;
            })}

         
            </div>
        </div>
    )
}
export default Body;