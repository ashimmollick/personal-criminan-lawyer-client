import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')

            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <h2 className='text-4xl font-bold text-center text-yellow-500 capitalize py-6'>My Practice Areas</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='my-8  text-center text-white'>
                <Link to='/serviceTotal' className="px-10 text-3xl btn-warning font-semibold bg-yellow-600 btn ">See All</Link>
            </div>

        </div>
    );
};

export default Services;