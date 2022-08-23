import './App.css';
import Header from "./Componets/Header/Header";
import Home from "./Componets/Home/Home";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Checkout from "./Componets/Checkout/Checkout";
import Login from "./Componets/Login/Login";
import {useEffect} from "react";
import {auth} from "./Common/Firebase";
import {useStateValue} from "./Common/StateProvider/StateProvider";
import Payment from "./Componets/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Componets/Orders/Orders";


function App() {
    const promise = loadStripe(
        'pk_test_51LZZmWSGCy4mzY5jSwcxQJSVFiMcavyYyTqL2KqEWdnSyUan2kbiRs2DicsdtKwAq68znntVKn6COvoP07t0dp5Z00z55N0ljM');
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])
    return <BrowserRouter>
        <div className={"app"}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path={"/payment"} element={<Elements stripe={promise}>
                    <Payment/>
                </Elements>}/>
                <Route path={"/orders"} element={<Orders/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>

        </div>
    </BrowserRouter>
}

export default App;
