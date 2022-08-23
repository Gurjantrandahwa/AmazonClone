import React, {useEffect, useState} from "react";
import './orders.css'
import {db} from "../../Common/Firebase";
import {useStateValue} from "../../Common/StateProvider/StateProvider";
import SingleOrder from "./DetailsOrder/DetailsOrder";
function Orders() {
    const [{basket, user}, dispatch] = useStateValue()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created,desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
        setOrders([])
        }
    }, [user])
    return <div className={"orders"}>
        <h1>Your Orders</h1>
        <div className={"orders-order"}>
            {orders?.map(order=>(
                <SingleOrder order={order}/>
            ))}
        </div>
    </div>
}

export default Orders