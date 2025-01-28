const Contact = () => {
    return(
        <div className="contact font-bold text-xl p-1 m-1">
            <h1>This is Contact US page</h1>
            <p>Hello from Contact</p>
            <form>
            <input type="text" className="border-black  border-solid border p-2 m-2" placeholder="name"/>
                <input type="text" className="border-black  border-solid border p-2 m-2" placeholder="Surname"/>
                <button className="border-black  border-solid border p-2 m-2" >Submit</button>
            </form>
        </div>
    )
}
export default Contact