import React, {useEffect, useState} from "react";
import "./payment.css"
import {useStateValue} from "../../Common/StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import {Link, useNavigate} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getCartTotal} from "../../Common/Reducer/reducer";
import axios from "../../Common/Axios/axios";
import {db} from "../../Common/Firebase";

function Payment() {
    {/* for processing payment upgrade firebase plan to blaze otherwise payments will not working*/
    }
    const navigate = useNavigate();
    const [{cart, user}, dispatch] = useStateValue();
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])
    console.log('the secret', clientSecret)
    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true);
            setProcessing(false);
            setError(null);
            dispatch({
                type: "EMPTY_CART"
            })
            navigate("/orders")
        })
    }
    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")

    }
    return <div className={"payment"}>
        <div className={"payment-container"}>
            <h1>
                Checkout(<Link to={"/checkout"}>{cart?.length} items</Link>)
            </h1>
            {/*delivery*/}
            <div className={"payment-section"}>
                <div className={"payment-title"}>
                    <h3>Delivery Address</h3>
                </div>
                <div className={"payment-address"}>
                    <p>{user?.email}</p>
                    <p>123 lane</p>
                    <p>Los angles,CA</p>
                </div>
            </div>
            {/*Review*/}
            <div className={"payment-section"}>
                <div className={"payment-title"}>
                    <h3>Reviews and Delivery</h3>
                </div>
                <div className={"payment-items"}>
                    {cart.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/*Payment*/}
            <div className={"payment-section"}>
                <div className={"payment-title"}>
                    <h3>Payment Method</h3>
                </div>
                <div className={"payment-details"}>
                    <form onClick={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className={"payment-price-container"}>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>

                                    </>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}/>
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>

                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default Payment