import { useState } from "react";

const Header = () => {

    const [login, setLogin] = useState("Login");

    return(
        <div className="header">
            <div className="logo">
                <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="logoimg" />
            </div>
           <div className="navbar">
           <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Share</li>
                <li>Like</li>
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