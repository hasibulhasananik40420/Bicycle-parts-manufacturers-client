import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase.init';
const SingleService = () => {
    const [user] = useAuthState(auth)
    const [services, setServices] = useState({})
     const {  price, name, minQuantity, maxQuantity, des, img }  = services 
     const [orderQuanty, setOrderQnty] = useState(minQuantity)
     let availableQnty = Number(maxQuantity)
    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


     const parsesQuantity = e=>{
         e.preventDefault() 
        
         const parcesQuantityUpdate = Number(e.target.orderQuantity.value) 
         if (parcesQuantityUpdate > availableQnty) {
            toast.warning(`We Have No ${parcesQuantityUpdate} Piece . We Have Only ${availableQnty}`)
           
        }
        else if (parcesQuantityUpdate < minQuantity) {
            toast.warning(`Minimum Order Quantity is ${minQuantity}`)
        }
        else {
            setOrderQnty(parcesQuantityUpdate)
            window.scroll({
                top: 1000,
                behavior: 'smooth'
               
            });
        }
     }

//    my order
       const addOrder = e=>{
        e.preventDefault() 

        const order = {
            productname: e.target.name.value ,
            email: e.target.email.value ,
            orderQuanty: e.target.orderQuanty.value ,
            price: e.target.price.value ,
            address: e.target.address.value ,
            phone: e.target.phone.value ,
            orderId: e.target.orderId.value

        }

        const url = `http://localhost:5000/orders`
        fetch(url , {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            e.target.reset()
        })

       }




    return (
        <div>
              <div className='md:flex md:justify-evenly md:w-2/4 mx-auto shadow-2xl p-12'>
                  <div>
                  <img className=' ' src={img} alt="Shoes" />
                  </div>
                  <div className='md:ml-8'>
                  <h2 class="text-2xl font-bold">{name}</h2>
                                <p className='text-xl font-sans mt-2'>{des}</p>
                                <p className='font-medium text-xl mt-2'>Minimum Quantity: {minQuantity}</p>
                                <p className='font-medium text-xl mt-2'>Available Stoks: {maxQuantity}</p>
                                <p className='font-medium text-xl mt-2'>Price : {price}</p>

                                 <div >
                                     <form className='md:flex' onSubmit={parsesQuantity}>
                                      <input defaultValue={minQuantity} name='orderQuantity' className='w-2/4 px-6 py-2 border border-primary rounded mt-1' type="text"  placeholder='Add Quantity'/>
                                      <button  class="btn btn-sm ml-8 btn-primary">Purchase</button>
                                     </form>
                                 </div>
                               
                  </div>
              </div>
        


            <section className='bg-accent p-16 mt-6 flex justify-center'>
                    <div class="card w-96 bg-accent shadow-xl">
                        <div class="card-body">
                            <h2 class="text-center text-2xl font-semibold">Order Now</h2>

                           <form onSubmit={addOrder}>
                           <input disabled name='name' value={name || ''} type="text" placeholder="Name" class="input w-full max-w-xs mb-2" />
                            <input disabled name='email' value={user?.email || ''} type="email" placeholder="Email" class="input w-full max-w-xs mb-2" />
                            <input disabled name='orderQuanty' value={orderQuanty} type="number" placeholder="Order Quantity" class="input w-full max-w-xs mb-2" />
                            <input  disabled name='price' value={price || ''} price='price' type="number" placeholder="price" class="input w-full max-w-xs mb-2" />
                            <input required name='address' type="text" placeholder="Address" class="input w-full max-w-xs mb-2" />
                            <input required name='phone' type="number" placeholder="Phone" class="input w-full max-w-xs mb-2" />
                            <input name='orderId' type="text" placeholder="Order Id" class="input w-full max-w-xs mb-2" />
                            <div class="card-actions justify-center mt-2">
                            <button class="btn btn-active btn-primary">Order Now</button>   
                           </div>
                           </form>

                        </div>
                    </div>
                </section>
        </div>
    );
};

export default SingleService;