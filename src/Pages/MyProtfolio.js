import React from 'react';
import profil from '../Assest/Images/IMG-20220506-WA0065.jpg'
const MyProtfolio = () => {
    return (
        <div>

           <div  className=' w-3/4 md:flex md:justify-between md:items-center mx-auto mt-12'>
           <div>
                <h1 className='text-3xl font-bold text-pink-600 mb-4'>Hasibul Hasan </h1>
                <p className='text-2xl font-semibold mb-2'>Hello I am hasibul hasan from Rajshahi, Bangladesh.</p>
                <p className='text-xl font-semibold mb-2'>I am studing National Univarsity Honors level.</p>
                <p className='text-xl font-semibold mb-2'>I have some skills in web development .</p>
                <p className='text-xl font-semibold mb-2'> I have a good skill an font and development</p>
                <p className='text-xl font-semibold mb-2'>Backend also.</p>
                <p className='text-xl font-semibold mb-2'>Iam very much confident about react js </p>
                <p className='text-xl font-semibold mb-2'>I am using some freamwork like Tailwind , Bootstrap</p>
                <p className='text-xl font-semibold mb-2'>hasibulhasan40420@gmail.com</p>

            </div>

            <div>
                <div class="avatar">
                    <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={profil} alt=''/>
                    </div>
                </div>
            </div>
           </div>

             <h1 className='text-center font-bold text-3xl'> I make some project those are ...</h1>
        </div>
    );
};

export default MyProtfolio;