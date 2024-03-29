import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate()

    const ServiceDetail = id => {
        navigate(`/singleservice/${id}`)
    }
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://assignment-12-server-orpin.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data)
            })
    }, [])
    return (
        <div className='mt-8 max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Tools</h1>
            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/wave.png" alt="" className='mx-auto' />
            <Link to='/allproducts' className='text-xl font-medium cursor-pointer flex justify-end text-red-600'>See more</Link>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {
                    products?.slice(0, 6).map(product => <div key='product._id'>

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
        </div>
    );
};

export default Products;