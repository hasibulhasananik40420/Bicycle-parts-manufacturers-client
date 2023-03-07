import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteProduct, refetch, setDeleteProduct }) => {

    const handleDelete = id => {
        fetch(`https://assignment-12-server-orpin.vercel.app/products/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product deleted successfully`)
                    refetch()
                    setDeleteProduct()
                }
            })
    }
    return (
        <div>


            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure to delete this product? </h3>
                    <p className="py-4 text-blue-600 font-semibold">Make sure if you deleted this item .It's will deleted permanentlly .</p>
                    <div className="modal-action">
                        <td><button onClick={() => handleDelete(deleteProduct?._id)} className="btn btn-sm btn-primary">Delete</button></td>
                        <label for="my-modal-6" className="btn btn-sm btn-primary">Cencle</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;