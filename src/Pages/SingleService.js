import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const SingleService = () => {
    const [services, setServices] = useState({})
    console.log(services);
    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div>
              <div className='md:flex md:justify-evenly md:w-2/4 mx-auto shadow-2xl p-12'>
                  <div>
                  <img className=' ' src={services?.img} alt="Shoes" />
                  </div>
                  <div className='md:ml-8'>
                  <h2 class="text-2xl font-bold">{services?.name}</h2>
                                <p className='text-xl font-sans mt-2'>{services?.des}</p>
                                <p className='font-medium text-xl mt-2'>Minimum Quantity: {services?.minQuantity}</p>
                                <p className='font-medium text-xl mt-2'>Available Stoks: {services?.maxQuantity}</p>
                                <p className='font-medium text-xl mt-2'>Price : {services?.price}</p>

                                 <div>
                                     <form>
                                    <input className='w-2/4 px-6 py-2 border border-primary rounded mt-1' type="text" name="" placeholder='Add Quantity'/>
                                      <button class="btn btn-sm ml-8 btn-primary">Order</button>
                                     </form>
                                 </div>
                               
                  </div>
              </div>
        


            <section className='bg-accent p-16 mt-6 flex justify-center'>
                    <div class="card w-96 bg-accent shadow-xl">
                        <div class="card-body">
                            <h2 class="text-center text-2xl font-semibold">Order Now</h2>
                            <input type="text" placeholder="Name" class="input w-full max-w-xs" />
                            <input type="email" placeholder="Email" class="input w-full max-w-xs" />
                            <input type="number" placeholder="Available Quantity" class="input w-full max-w-xs" />
                            <input type="number" placeholder="Minimum Quantity" class="input w-full max-w-xs" />
                            <input type="text" placeholder="Address" class="input w-full max-w-xs" />
                            <input type="text" placeholder="Phone" class="input w-full max-w-xs" />
                            <input type="text" placeholder="Order Id" class="input w-full max-w-xs" />
                            <div class="card-actions justify-center">
                            <button class="btn btn-active btn-primary">Order Now</button>   
                           </div>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default SingleService;