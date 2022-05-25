import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3O63A075wgahMPXUKqu3rlTdQ90cYSLsDuKsWMH70GXlQDUteuuo2eTmki8zEHEyz5q1n3gUsTCMudqCHo0FP000aFDt7yOk');
const Payment = () => {
    const { id } = useParams()

    const { data: order, isLoading, refetch } = useQuery('myOrders', () => fetch(`http://localhost:5000/orders/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            //         //  authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    //  console.log(order);
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='md:ml-36'>
            <div class="card md:w-96 bg-base-100 shadow-xl mt-6 ml-6">
                <div class="card-body">
                    <h2 class="card-title">{order.productname}</h2>
                    <div class="swap-off">Hello ,Sir 😇</div>
                    <p className='font-bold'>Plase pay for: {order.price}</p>

                </div>
            </div>


            <div class="card md:w-96 bg-white text-primary-content ml-6 mt-4 shadow-xl">
                <div class="card-body">

                <Elements stripe={stripePromise}>
               <CheckoutForm />
                     </Elements>
                   
                </div>
            </div>
        </div>
    );
};

export default Payment;