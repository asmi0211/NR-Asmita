import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utilis/cartSLice";

const Cart = () => {

    // read cart items we have to subsrcibe the store using useSelector, it give access to whole store
    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        // dispatch action
        dispatch(clearCart());
    }
    const handleItemCart = () => {
        dispatch(removeItem());
    }
 
    return(
        <div className="cart text-center m-4 p-4 ">
            <h1 className="font-bold text-xl ">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-md text-center" onClick={handleClearCart}>Clearcart</button>
            <button className="p-2 m-2 bg-black text-white rounded-md text-center" onClick={handleItemCart}>Remove Item</button>
            {cartItems.length === 0 && <h1>Cart is empty please add items in it</h1>}
            <div className="w-1/2">
                <ItemList items={cartItems}/>
            </div>
        </div>

        // to show cart items

    )
}
export default Cart;