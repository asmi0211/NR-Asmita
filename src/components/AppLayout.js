import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import { Outlet } from "react-router";
import UserContext from "../utilis/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "../utilis/appStore";

export const AppLayout= () =>{
    const [userInfo, setUserInfo] = useState()
useEffect(()=>{
    const data= {
        name:"Asmita"
    }
    setUserInfo(data.name)
},[])
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{dummyData : userInfo, setUserInfo}}>
            <div className="app">
            <Header />
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
export default AppLayout;