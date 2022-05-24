import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//
const Products = () => {
    const navigate = useNavigate() 
    const ServiceDetail=id=>{
       navigate(`/singleservice/${id}`)
    }
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div className='mt-16'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:m-8'>
                {
                    products?.map(product => <div key='product._id'>

                        <div data-aos="zoom-in" class="card w-96 bg-base-100 shadow-xl">
                            <figure><img className=' w-2/4' src={product.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{product.name}</h2>
                                <p>{product.des}</p>
                                <p className='font-medium'>Minimum Quantity: {product.minQuantity}</p>
                                <p className='font-medium'>Available Quantity: {product.maxQuantity}</p>
                                <p className='font-medium text-xl'>Price : {product.price}</p>
                                <div class="card-actions justify-start">
                                    <button  onClick={()=>ServiceDetail(product?._id)} class="btn btn-black btn-outline">Buy Now  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;