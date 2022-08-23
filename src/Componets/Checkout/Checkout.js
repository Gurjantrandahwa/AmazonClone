import React from "react";
import "./Checkout.css";
import add from "../../Images/add.png";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import {useStateValue} from "../../Common/StateProvider/StateProvider";

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();
    return <div className={"checkout"}>
        <div className={"checkout-left"}>
            <img className={"checkout-add"} src={add}
                 alt={""}/>
            <div>
                {user && <h3>Hello, {user?.email}</h3>}

                <h2 className={"checkout-left-title"}>
                    Your Shopping Cart
                </h2>
                {cart.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                ))}

            </div>
        </div>
        <div className={"checkout-right"}>
            <Subtotal/>
        </div>
    </div>
}

export default Checkout