import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const AddProduct = (e) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStoreKey = '3c1f06e572f598cefb6cae407a422a8b'


    const onSubmit = async data => {

        const img = data.img[0]
        const formData = new FormData();
        formData.append('image', img);

        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.display_url
                    const product = {
                        name: data.name,
                        minQuantity: data.minQuantity,
                        maxQuantity: data.maxQuantity,
                        price: data.price,
                        des: data.des,
                        img: img
                    }
                    fetch('https://assignment-12-server-orpin.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                // toast.success('Product added successfully')
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }

                            else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',
                                    footer: '<a href="">Why do I have this issue?</a>'
                                })
                            }
                        })
                    reset()
                }
            })
    }




    return (
        <div className='mx-16'>
            <h1 className='text-2xl font-bold font-serif text-center'>Add Product for your Website</h1>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='p-2'>


                    <div className="md:flex gap-4 mt-4">
                        <input  {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} className='w-full border h-11 pl-3 rounded-md in-bord mb-3 ' type="text" placeholder="Product Name" required />
                        <input  {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })} className='w-full h-11 pl-3 border rounded-md in-bord mb-3' type="number" placeholder='Price' required />

                    </div>
                    <div className="md:flex gap-4">
                        <input   {...register("maxQuantity", {
                            required: {
                                value: true,
                                message: 'Maximum Quantity is Required'
                            }
                        })} className='w-full h-11 pl-3 border rounded-md in-bord mb-3' type="number" placeholder="Maximum Quantity" />

                        <input  {...register("minQuantity", {
                            required: {
                                value: true,
                                message: 'MinQuantity is Required'
                            }
                        })} className='w-full h-11 pl-3 border rounded-md in-bord mb-3' type="number" placeholder="Maximum Quantity" />

                    </div>

                    <textarea  {...register("des", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })} className='w-full h-32 pl-3 border rounded-md in-bord mb-3' type="text" placeholder="Product Description" />
                    <label className='my-2' htmlFor="image">Set Product Image</label>
                    <input  {...register("img", {
                        required: {
                            value: true,
                            message: 'Photo is Required'
                        }
                    })} className='w-full border h-11 pl-3 rounded-md in-bord mb-3' type="file" />

                    <button type='submit' className='p-2 bg-[#1672b8] hover:bg-[#154b77] rounded-md block mx-auto text-white'>Publish Product</button>

                </div>
            </form>






        </div>
    );
};

export default AddProduct;