const ItemList = ({items}) => {
    // console.log(items);
    
    return(
        <div className="itemsList pl-4 m-4 mx-auto text-left">
                {items.map((x)=>
                <div className="border-b-2 border-black mb-4 border-solid flex justify-between items-center" key={x?.card?.info?.id}>
                    <div className="">
                    <p>{x?.card?.info?.name}</p>
                    <p>Price: {x?.card?.info?.price/100} RS</p>
                    <p>{x?.card?.info?.description}</p>
                    </div>
                    <div className="rounded-md border-t border-gray-400 p-2 uppercase
                     text-green-600 font-bold shadow-lg">Add + </div>
                </div>
            )}
        </div>
    )
}
export default ItemList