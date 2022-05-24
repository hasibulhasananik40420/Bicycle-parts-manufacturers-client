import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deleteProduct , refetch , setDeleteProduct}) => {

    const handleDelete= id=>{
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE' ,
            headers:{
               'content-type': 'application/json',
               authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount){
                toast.success(`Product deleted successfully`)
                refetch()
                setDeleteProduct()
            }
        })
    }
    return (
        <div>


            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure to delete this product? </h3>
                    <p class="py-4 text-blue-600 font-semibold">Make sure if you deleted this item .It's will deleted permanentlly .</p>
                    <div class="modal-action">
                    <td><button onClick={()=>handleDelete(deleteProduct?._id)} class="btn btn-sm btn-primary">Delete</button></td>
                        <label for="my-modal-6" class="btn btn-sm btn-primary">Cencle</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;