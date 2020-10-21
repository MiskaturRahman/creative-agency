import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 mt-3 text-center ">
            <Link to={`/service/${service.id}`}>
                <div className="card">
                    <img className="m-4 p-2" src={service.img} alt="" />
                    <h5 className="mt-3 mb-3 p-2">{service.name}</h5>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetail;