import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';
import DeleteModal from './DeleteModal';

const ManageProducts = () => {
   
    const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products', {
        headers: {
            'content-type': 'application/json'
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

      if(isLoading){
          return <Spinner></Spinner>
      }



    return (
        <div>
            <h1 className='text-2xl text-center mt-4 mb-3'>Total Products : {products?.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, index) => <tr key={product._id} product={product} index={index} refetch={refetch} setDeleteProduct={setDeleteProduct}>


                                <th>{index + 1}</th>
                                <td>
                                    <div class="avatar">
                                        <div class="w-12 rounded-xl">
                                            <img src={product?.img} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product?.name}</td>
                                {/* <td><button onClick={()=>handleDelete(product?._id)} class="btn btn-sm btn-primary">Delete</button></td> */}
                                <label onClick={()=>setDeleteProduct(product)} for="my-modal-6" class="btn btn-sm btn-primary">Delete</label>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

                {
                    deleteProduct &&  <DeleteModal deleteProduct={deleteProduct} refetch={refetch} setDeleteProduct={setDeleteProduct}></DeleteModal>
                }      
        </div>
    );
};

export default ManageProducts;