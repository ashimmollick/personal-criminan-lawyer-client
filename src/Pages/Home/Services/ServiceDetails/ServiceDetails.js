import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';

const ServiceDetails = () => {
    const { _id, title, img, price, description } = useLoaderData()
    const { user } = useContext(AuthContext)
    useTitle('details');
    const handleReview = event => {

        event.preventDefault()
        const form = event.target;
        const name = form.firstName.value;
        const email = user?.email || 'Unregister'
        const message = form.message.value
        const review = {
            reviews_id: _id,
            reviewName: title,
            author: name,
            email,
            message
        }

        fetch('https://personal-criminan-lawyer-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset()
                }
                console.log(data)

            })
            .catch(er => console.error(er))
    }
    return (
        <div className="card w-3/4 bg-base-100 mx-auto my-10 shadow-xl">
            <figure><img w-full src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}

                    <div className="badge badge-secondary py-3"> Total Coast: ${price}</div>
                </h2>
                <p>{description}</p>

            </div>
            <div className="divider w-4/5 mx-auto"></div>
            <div className='p-8'>
                <h2 className='text-4xl text-yellow-500 mb-5 font-semibold text-center'>Write Your Review</h2>
                <div>
                    <form onSubmit={handleReview}>
                        <div className='grid grid-cols-1  lg:grid-cols-2 gap-4'>
                            <input name='firstName' type="text" placeholder="Name" className="input input-bordered w-full" />
                            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                        </div>

                        <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Review" required></textarea>
                        <input type="submit" className='btn' value="Place Review" />
                    </form>
                </div>
            </div>


        </div>

    );
};

export default ServiceDetails;