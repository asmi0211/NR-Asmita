import React from "react";
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utilis/UserContext";
// const About = () => {
//     return(
//         <div className="about">
//             <h1>This is ABout US page</h1>
//             <p>Hello from ABout</p>
//             {/* <User name={"smita"}/> */}
//             <UserClass name={"class asmita"} location={"Mumbai class"}/>
//         </div>
//     )
// }
// export default About

class About extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
    }
    render(){
        
        return(
            <div className="about">
            <h1>This is ABout US page</h1>
            <div className="">
                LoggedInUser: <UserContext.Consumer>
                    {({dummyData})=><h1>{dummyData}</h1>}
                </UserContext.Consumer>
            </div>
            <p>Hello from ABout</p>
            {/* <User name={"smita"}/> */}
            <UserClass name={"class asmita"} location={"Mumbai class"}/>
        </div>
        )
    }

}
export default About;