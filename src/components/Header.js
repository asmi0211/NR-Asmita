import { useState,useEffect } from "react";
import { Link } from "react-router";
const Header = () => {

    const [login, setLogin] = useState("Login");

    useEffect(() => {
        console.log("UseEffect called");      
    })
    return(
        <div className="header">
            <div className="logo">
                <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="logoimg" />
            </div>
           <div className="navbar">
           <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/contact">Contact </Link></li>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/about">About </Link></li>
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