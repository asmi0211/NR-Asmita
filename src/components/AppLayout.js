import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import { Outlet } from "react-router";

export const AppLayout= () =>{
    return(
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
}
export default AppLayout;