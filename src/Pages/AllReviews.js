import React from 'react';

const AllReviews = ({ review }) => {
    return (
        <div className='mt-12 '>
            <div className="card md:w-96 w-full shadow-xl image-full">
             <img src="https://as2.ftcdn.net/v2/jpg/05/03/42/35/1000_F_503423590_Zqy4vc8HIHLkAuPOqOck3SwoaW3yQgEc.jpg" alt="" />
                <div className="card-body">
                    <h2 className="card-title ">{review?.userName}</h2>
                    <p className=''> {review?.userEmail}</p>
                    <p title={review.des} className='text-xl font-thin '><span className='text-red-400 font-medium'>Reviews:</span> {review?.des.slice(0,50)}...</p>
                    <p className='text-xl font-medium '><span className='text-red-400 font-medium'>Ratting:</span> {review?.number} Star</p>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;