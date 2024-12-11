import React from "react";
import ReactDOM from "react-dom/client";

// simple braces dont have return
const Heading = () =>(
        <h1>Hello from cpomo</h1>
)

// single line component
const Match = () => <h1>I'm one line</h1>

// currly braces have return
const Title = () => {
    return(
    <React.Fragment>
        <Heading />
        <Match/>  {/* render a component */}
        <Match></Match>  {/* render a component */}
        {Match()}  {/* render a component */}
        <h1>Hello from title</h1>
    </React.Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(<Title/>)

// export function Heading(){
//     return(
//         <h1>Hello</h1>
//     )
// } 

