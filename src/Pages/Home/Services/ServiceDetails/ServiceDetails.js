import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, img, price, description } = useLoaderData()
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">Total Coast: ${price}</div>
                </h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default ServiceDetails;