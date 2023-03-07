import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {

    const [allproducts, setAllProducts] = useState([])

    const navigate = useNavigate()
    const ServiceDetail = id => {
        navigate(`/singleservice/${id}`)
    }
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllProducts(data)
            })
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:m-8'>
            {
                allproducts?.map(product => <div key='product._id'>

                    <div
                        className=' shadow p-2 bg-[#F6F7FD]  w-full min-h-max max-w-xs cursor-pointer relative'>
                        <div className="border w-[302px]  h-[240px] ">
                            <img className='w-full h-full' src={product.img} alt="" />
                        </div>

                        <div className='h-[120px] p-2 w-full '>
                            <h2 className='text-xl font-bold min-h-[52px] max-h-[44px] overflow-clip'>Minimum Orider:{product.minQuantity}</h2>
                            <h5 className='font-bold text-[#515FCE]'>Available: {product.maxQuantity}</h5>

                            <div className='absolute bottom-0 w-11/12'>
                                <hr className='mt-2 border border-[#B3EAFF]' />
                                <div className=' w-full flex justify-between items-center h-[40px] '>
                                    <div className='flex'>

                                        <button onClick={() => ServiceDetail(product?._id)} className='px-3 py-1 bg-orange-600 rounded text-white fonr-medium hover:bg-yellow-600'>Details</button>

                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold text-[#515FCE]'> ৳ {product.price}</h2>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>




                </div>)
            }
        </div>
    );
};

export default AllProducts;