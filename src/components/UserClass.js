import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                // passing default values
                login:"Dummy",
                id: "default",
                avatar_url:"dummy"
            }
        }
    }
   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/asmi0211")

    const json = await data.json();

    console.log(json);
    
    this.timer = setInterval(()=>{
        console.log("“welcome”")
    },1000)
    

    this.setState({
        userInfo: json,
    })  
    }
    componentDidUpdate(prevProps, prevState){
        console.log("compo updated");   
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("componentWillUnmount")
    }
    render(){
        const {login,id, avatar_url} = this.state.userInfo;
        ;
        return(
            <div className="user_card">
            <h2>Login: {login}</h2>
            <h3>ID: {id}</h3>
            <img src={avatar_url} />
            </div>
        )
    }
}
export default UserClass
