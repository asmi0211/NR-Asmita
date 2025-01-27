import { useDispatch } from "react-redux"
import { addItem } from "../utilis/cartSLice";

const ItemList = ({items}) => {
    // console.log(items);
    
    // dispatch hook
    const dispatch = useDispatch();

    const handleAddItem = () => {
        // dispatch an action
        dispatch(addItem(items))
        // when we dispatch action it create object and payload action


    }
    return(
        <div className="itemsList pl-4 m-4 mx-auto text-left">
                {items.map((x)=>
                <div className="border-b-2 border-black mb-4 border-solid flex justify-between items-center" key={x?.card?.info?.id}>
                    <div className="">
                    <p>Name: {x?.card?.info?.name}</p>
                    <p>Price: {x?.card?.info?.price/100} RS</p>
                    <p>Des: {x?.card?.info?.description}</p>
                    </div>
                    <div className="rounded-md border-t border-gray-400 p-2 uppercase
                     text-green-600 font-bold shadow-lg cursor-pointer" onClick={()=>handleAddItem(items)}>Add + </div>
                </div>
            )}
        </div>
    )
}
export default ItemList