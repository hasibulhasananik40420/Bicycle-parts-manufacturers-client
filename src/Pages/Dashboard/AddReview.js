import React, { useEffect, useState } from 'react';
import AllReviews from '../AllReviews';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const [reviews, setReviews] = useState([])
    const reviewItem = e => {
        e.preventDefault()
        const item = {
            des: e.target.des.value,
            number: e.target.number.value,
            userEmail: user.email ,
            userName: user.displayName
            

        }
        const url = `https://pure-island-40196.herokuapp.com/review`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset()
            })
    }

    useEffect(() => {
        fetch('https://pure-island-40196.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])
    return (
        <div className='mt-24'>

            <div className="card w-96 bg-primary text-primary-content md:ml-40">
                <div className="card-body">
                    <h2 className="card-title">Add Review</h2>
                    <form onSubmit={reviewItem}>
                        <textarea name='des' className='sm:w-1/4 md:w-full border  py-6 mb-2 rounded px-3' type="textarea" placeholder='Review' />
                        <br />
                        <input disabled name='name' value={user?.email || ''} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mb-2" />
                        <input disabled name='email' value={user?.displayName || ''} type="text" placeholder="email" className="input input-bordered w-full max-w-xs mb-2" />
                        <input min="1" max="5" name='number' type="number" placeholder="Ratting" className="input input-bordered w-full max-w-xs" />
                        <button className="btn btn-accent mt-2">Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;