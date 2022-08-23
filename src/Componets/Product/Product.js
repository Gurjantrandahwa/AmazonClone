import React from "react";
import "./Product.css"
import img from "../../Images/product1.png"
import star from "../../Images/star.png"
import {useStateValue} from "../../Common/StateProvider/StateProvider";

function Product({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }
    return <div className={"product"}>
        <div className={"product-info"}>
            <p>{title}</p>
            <p className={"product-price"}>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className={"product-rating"}>
                {Array(rating).fill()
                    .map((_, i) => (
                        <p><img src={star} alt=""/></p>
                    ))}
            </div>
        </div>
        <img src={image} alt={""}/>
        <button onClick={addToCart}>Add to cart</button>
    </div>
}


export default Product