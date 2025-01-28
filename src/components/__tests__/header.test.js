global.TextEncoder = require('util').TextEncoder;
import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utilis/appStore";
import "@testing-library/jest-dom"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"



it("should load header component with login btn", () =>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
    </BrowserRouter>
    )
    // const loginbtn = screen.getByRole("button")

    // another way
    const loginbtn = screen.getByText("Login")

    expect(loginbtn).toBeInTheDcument();

    
})

it("should load cart items ", () =>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Cart />
        </Provider>
    </BrowserRouter>
    )
    // const loginbtn = screen.getByRole("button")

    // another way
    const cartbtn = screen.getByText("Cart(0)")

    expect(cartbtn).toBeInTheDcument();

    
})