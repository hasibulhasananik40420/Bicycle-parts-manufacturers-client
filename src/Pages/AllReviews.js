import React from 'react';

const AllReviews = ({ review }) => {
    return (
        <div className=' mt-12 '>
            <div class="card md:w-96  shadow-xl image-full">
            <figure> <img src="https://as2.ftcdn.net/v2/jpg/05/03/42/35/1000_F_503423590_Zqy4vc8HIHLkAuPOqOck3SwoaW3yQgEc.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 className="card-title text-white">{review?.userName}</h2>
                    <p className='text-white'> {review?.userEmail}</p>
                    <p title={review.des} className='text-xl font-thin text-white'><span className='text-red-400 font-medium'>Reviews:</span> {review?.des.slice(0,50)}...</p>
                    <p className='text-xl font-medium text-white'><span className='text-red-400 font-medium'>Ratting:</span> {review?.number} Star</p>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;