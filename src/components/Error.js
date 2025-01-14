import { useRouteError } from "react-router";
const Error = () => {
    const error = useRouteError()
    // console.log(error);
    
    return(
        <div className="errorDIv">
            <h1>The page you are looking is not found..!</h1>
            <h2>{error.status}: {error.statusText}</h2>
        </div>
    )
}
export default Error;