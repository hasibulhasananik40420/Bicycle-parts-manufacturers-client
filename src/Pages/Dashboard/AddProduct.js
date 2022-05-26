import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = (e) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageStoreKey = '3c1f06e572f598cefb6cae407a422a8b'
    
    
     const onSubmit= async data =>{

    const img = data.img[0]
    const formData = new FormData();
    formData.append('image', img);

       const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
        fetch(url , {
          method:'POST',
          body: formData
        })
        .then(res => res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.display_url
                const product ={
                    name: data.name ,
                    minQuantity: data.minQuantity,
                    maxQuantity: data.maxQuantity ,
                    price:data.price ,
                    des: data.des ,
                    img: img 
                }
                fetch('https://pure-island-40196.herokuapp.com/products', {
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res=> res.json())
                .then(data =>{
                    console.log(data);
                    if(data.insertedId){
                        toast.success('Product added successfully')

                    }
                    else {
                        toast.error('Failed to added product. Try again letter')
                    }
                })
            }
        })
     }

    return (
        <div>
            <div className='mt-6 md:ml-16'>
                <div className="card w-96 bg-primary text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> Add Product </h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}

                                    type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}
                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                              
                                <input
                                    {...register("maxQuantity", {
                                        required: {
                                            value: true,
                                            message: 'Maximum Quantity is Required'
                                        }
                                    })}

                                    type="number" placeholder="Maximum Quantity" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.maxQuantity?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.maxQuantity.message}</span>}
                                </label>
                            </div> 
                          

                            <div className="form-control w-full max-w-xs">
                              
                                <input
                                    {...register("minQuantity", {
                                        required: {
                                            value: true,
                                            message: 'MinQuantity is Required'
                                        }
                                    })}

                                    type="number" placeholder="Maximum Quantity" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.minQuantity.message}</span>}
                                </label>
                            </div> 
                              


                            <div className="form-control w-full max-w-xs">
                               
                                <input
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Price is Required'
                                        }
                                    })}

                                    type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.price.message}</span>}
                                </label>
                            </div> 



                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("des", {
                                        required: {
                                            value: true,
                                            message: 'Description is Required'
                                        }
                                    })}

                                    type="text" placeholder="Product Description" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}
                                </label>
                            </div>

                          
                            <div className="form-control w-full max-w-xs">
                                <input
                                    {...register("img", {
                                        required: {
                                            value: true,
                                            message: 'Photo is Required'
                                        }
                                    })}

                                    type="file" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}
                                </label>
                            </div>

                            <input className="btn btn-accent btn-outline text-white w-full max-w-xs" type="submit" value="ADD" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;