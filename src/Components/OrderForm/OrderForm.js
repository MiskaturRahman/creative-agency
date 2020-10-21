import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import NavBar from '../Home/NavBar/NavBar';
import './OrderForm.css';




const OrderForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();

    const onSubmit = data => {
        const OrderDetail = { ...loggedInUser, data, orderTime: new Date() }

        fetch('https://gentle-hamlet-76248.herokuapp.com/serviceRegistration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(OrderDetail)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Order successful');
                    history.push(`/home`);

                }
            })

    };



    return (

        <div>
            <div>
                <NavBar />
            </div>
            <div>

                <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>

                    <h1>Hello! {loggedInUser.name}</h1>
                    <h4>Register here..</h4>

                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                    {errors.name && <span className="error">Name is required</span>}
                    <br />

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                    {errors.email && <span className="error">Email is required</span>}
                    <br />
                    <input name="activity" ref={register({ required: true })} placeholder="Your Activity" />
                    {errors.activity && <span className="error">activity is required</span>}
                    <br />
                    <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                    {errors.address && <span className="error">Address is required</span>}
                    <br />
                    <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                    {errors.phone && <span className="error">Phone Number is required</span>}
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default OrderForm;