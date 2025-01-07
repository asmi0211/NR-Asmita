import { useEffect } from "react"

const User = (props) => {
    // const {name} = props

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("useeffect welcome")
        }, 1000)

        return()=>{
            clearInterval(timer)
        }
    })
    return(
        <div className="user_card">
            <h2>Name: {props.name}</h2>
            <h3>Location: Mumbai</h3>
            <h4>Contact: asmimane0211</h4>
        </div>
    )
}
export default User