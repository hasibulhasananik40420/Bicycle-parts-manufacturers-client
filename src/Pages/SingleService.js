import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//onClick={()=>ServiceDetail(product?._id)}
const SingleService = () => {
    const [services, setServices] = useState({})
    console.log(services);
    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className='flex justify-evenly mt-24'>
            <div class="card w-96 bg-base-100 shadow-xl">
                            <figure><img className=' w-2/4' src={services?.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{services?.name}</h2>
                                <p>{services?.des}</p>
                                <p className='font-medium'>Minimum Quantity: {services?.minQuantity}</p>
                                <p className='font-medium'>Available Quantity: {services?.maxQuantity}</p>
                                <p className='font-medium text-xl'>Price : {services?.price}</p>
                                <div class="card-actions justify-start">
                                    <button   class="btn btn-black btn-outline">Buy Now  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>

                <div>
                    <div class="card w-96 bg-accent shadow-xl">
                        <div class="card-body">
                            <h2 class="text-center">Order Now</h2>
                            <input type="text" placeholder="Name" class="input w-full max-w-xs" />
                            <input type="email" placeholder="Email" class="input w-full max-w-xs" />
                            <input type="text" placeholder="Address" class="input w-full max-w-xs" />
                            <input type="text" placeholder="Phone" class="input w-full max-w-xs" />
                            <input type="text" placeholder="Order Id" class="input w-full max-w-xs" />
                            <div class="card-actions justify-center">
                                <button class="btn btn-accent ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleService;