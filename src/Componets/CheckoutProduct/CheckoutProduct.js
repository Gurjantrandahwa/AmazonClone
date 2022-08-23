import React from "react";
import "./CheckoutProduct.css";
import star from "../../Images/star.png"
import img from "../../Images/product1.png";
import {useStateValue} from "../../Common/StateProvider/StateProvider";

function CheckoutProduct({id, title, image, price, rating,hideButton}) {
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_TO_CART",
            id: id
        })
    }
    return <div className={"checkoutProduct"}>
        <img className={"checkoutProduct-img"} src={image} alt={""}/>
        <div className={"checkoutProduct-info"}>
            <p className={"checkoutProduct-title"}>  {title}</p>
            <p className={"checkoutProduct-price"}>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className={"checkoutProduct-rating"}>
                {Array(rating).fill()
                    .map((_, i) => (
                        <p><img src={star} alt=""/></p>
                    ))}
            </div>
            {!hideButton &&(
                <button onClick={removeFromCart}>Remove from cart</button>
            )}

        </div>
    </div>
}

export default CheckoutProduct