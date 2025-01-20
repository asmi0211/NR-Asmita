import { useState } from "react";
import ItemList from "./ItemList"
const ResCategory = ({ data, show, setShow }) => {
    // console.log(data);
    
    
    const handletoggle = () => {
    setShow()
    }
    return (
        <div className="text-center">
            <div className="w-1/2 mx-auto bg-gray-100 p-2 shadow-lg mb-6 ">
            <div className="c_header  flex justify-between items-center m-2 cursor-pointer"
                onClick={handletoggle}
            >
                <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
                <span>^</span>
            </div>
            <div className="cbody">
                {show && <ItemList items={data.itemCards}/> }
            </div>
            </div>

           
        </div>
    );
};

export default ResCategory;
