import React from "react";
function WebHosting ({id, title, price, text}){
    return(
        <div className="product">
            <p>{title}</p>
            <p className="product_price"></p>
            <small>€</small>
            <strong>{price}</strong>
            <div className="text-1">{text}</div>
        </div>
    )
}
export default WebHosting;