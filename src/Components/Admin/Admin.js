import React from 'react';
import ServiceData from '../ServiceData/ServiceData';

const Admin = () => {

    //ADD new service
    const handleAddService = () => {
        fetch('https://gentle-hamlet-76248.herokuapp.com/services', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ServiceData)
        })
    }

    return (
        <div>
            <h1>Admin</h1>
            <button onClick={handleAddService}>ADD</button>
        </div>
    );
};

export default Admin;