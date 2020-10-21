import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import NavBar from '../Home/NavBar/NavBar';


const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://gentle-hamlet-76248.herokuapp.com/orderHistory?email=' + loggedInUser.email)
            .then(response => response.json())
            .then(data => setOrderList(data));
    }, [])
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div class="jumbotron" style={{ textAlign: 'center' }}>

                <h1>Your Dashboard</h1>
                <h3>You have registered for: {orderList.length} programs.</h3>
                {
                    orderList.map(
                        order =>
                            <li>Name: <b>{order.name}</b> Your Email: <b>{order.email}</b>
            Registered Program:<b>{order.data.activity}</b>
                            </li>
                    )
                }
            </div>
        </div>
    );
};

export default OrderList;