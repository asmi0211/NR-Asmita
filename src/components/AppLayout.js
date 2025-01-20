import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import { Outlet } from "react-router";
import UserContext from "../utilis/UserContext";
import { useState, useEffect } from "react";

export const AppLayout= () =>{
    const [userInfo, setUserInfo] = useState()
useEffect(()=>{
    const data= {
        name:"Asmita"
    }
    setUserInfo(data.name)
},[])
    return(
        <UserContext.Provider value={{dummyData : userInfo, setUserInfo}}>
            <div className="app">
            <Header />
            <Outlet/>
        </div>
        </UserContext.Provider>
    )
}
export default AppLayout;