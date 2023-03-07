import React, { useEffect, useState } from 'react';
import AllReviews from '../AllReviews';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Swal from 'sweetalert2'

const AddReview = () => {
    const [user] = useAuthState(auth)
    console.log(user);
    const [reviews, setReviews] = useState([])
    const reviewItem = e => {
        e.preventDefault()
        const item = {
            des: e.target.des.value,
            number: e.target.number.value,
            userEmail: user.email,
            userName: user.displayName


        }
        const url = `https://assignment-12-server-orpin.vercel.app/review`
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
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Thanks for your review',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset()
            })
    }

    useEffect(() => {
        fetch('https://assignment-12-server-orpin.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])
    return (
        <div className='mt-8'>

            <div className='lg:flex w-full gap-16'>
                <form onSubmit={reviewItem} >
                    <div className='p-2 lg:w-[700px] w-full mt-8'>


                        <div className="md:flex gap-4 mt-4">
                            <input disabled name='name' value={user?.email || ''} type="text" className='w-full h-11 pl-3 rounded-md in-bord border border-[#E5E5E5] mb-3' placeholder='Your Name' required />
                            <input disabled name='email' value={user?.displayName || ''} className='w-full border border-[#E5E5E5] h-11 pl-3 rounded-md in-bord mb-3' type="text" placeholder='Your Email' required />

                        </div>
                        <div className="w-full mt-4">
                            <input name='number' type="number" min="1" max="5" placeholder="Ratting" className='w-full h-11 pl-3 rounded-md in-bord border border-[#E5E5E5] mb-3' required />

                        </div>


                        <textarea name='des' className='w-full h-32 pl-3 border border-[#E5E5E5] rounded-md in-bord mb-3' type="text" placeholder='Message' />

                        <button type='submit' className='p-3 px-4 bg-[#253D4E] hover:bg-success rounded-md  text-white font-semibold'>Sent Review</button>

                    </div>
                </form>

                {/* <div>
                    <img className='w-[350px] h-[350px]' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/contact-2.png" alt="" />
                </div> */}
            </div>

        </div>
    );
};

export default AddReview;