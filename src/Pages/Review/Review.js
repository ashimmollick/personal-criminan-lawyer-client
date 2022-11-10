import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [reviews, setReview] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])
    return (
        <div>
            <h2 className='text-5xl'>You have Total Review :{reviews.length}</h2>
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

                            ></ReviewRow>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Review;