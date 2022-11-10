import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [reviews, setReview] = useState([])
    useTitle('Review')

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }
    return (
        <div className='my-20 drop-shadow-xl'>
            <h2 className='text-4xl py-5 text-center font-semibold text-yellow-500'>You have Total Review :{reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Title Crime</th>
                            <th>Review Description</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Review;