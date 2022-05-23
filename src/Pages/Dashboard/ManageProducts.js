import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const ManageProducts = () => {
    const [user] = useAuthState(auth)

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
        <div>
        <h1 className='text-2xl text-center mt-4 mb-3'>Total Products : {products.length}</h1>



            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                         {
                             products.map((product,index)=> <tr key={product._id} product={product} index={index}>


                            <th>{index + 1}</th>
                            <td>{user?.email}</td>
                            <td>{product?.name}</td>
                            <td><button class="btn btn-sm btn-primary">Delete</button></td>
                             </tr>)
                         }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;