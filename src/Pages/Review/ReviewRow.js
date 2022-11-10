import React from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, author, email, reviewName, message } = review
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold capitalize">{author}</div>
                        <div className="text-sm opacity-50">{email}</div>

                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{reviewName}</div>

            </td>
            <td>
                {message}

            </td>

            <th>

                <button onClick={() => handleDelete(_id)} className="btn btn-ghost hover:bg-yellow-500">X</button>
            </th>
        </tr>
    );
};

export default ReviewRow;