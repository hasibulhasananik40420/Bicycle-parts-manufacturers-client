import React from 'react';

const AllReviews = ({review}) => {

    console.log(review);
    return (
        <div> 
            
            <div class="card w-96 style1 text-neutral-content mt-8">
                                <div class="card-body items-center text-center">
                                    <p className='font-mono'>User : {review?.userName}</p>
                                    <p className=''>User Email : {review?.userEmail}</p>
                                    <p className='text-xl font-thin'><span className='text-red-400 font-medium'>Reviews:</span> {review?.des}</p>
                                    <p className='text-xl font-medium'><span className='text-red-400 font-medium'>Ratting:</span> {review?.number}</p>
                                </div>
                            </div>
        </div>
    );
};

export default AllReviews;