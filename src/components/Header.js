import { useState,useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";
const Header = () => {

    const [login, setLogin] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {dummyData}= useContext(UserContext)
    // console.log(dummyData);
    
    useEffect(() => {
        // console.log("UseEffect called");      
    })
    return(
        <div className="header bg-orange-500 flex flex-items items-center p-4 justify-between">
            <div className="logo w-40">
                <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="logoimg" />
            </div>
           <div className="navbar">
           <ul className="flex justify-between text-white gap-4">
                <li>Online Status:{onlineStatus ? "On" : "Off"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/contact">Contact </Link></li>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/grocery">Grocery </Link></li>
                <li className="font-bold">{dummyData}</li>
                
                <button onClick={ () => 
                setLogin(login==="Login" ? "Logout" : "Login")
                }>
                    {login}
                </button>
                {/* <li onClick={
                    setLogin ? " login" : "logout "
                }>Login</li> */}
            </ul>   
           </div>
        </div>
    )
}
export default Header;