// import React from 'react';
// import { toast } from 'react-toastify';

// const OrderDeleteModal = () => {
      
                  
//        const handleOrderDelete = id =>{
//            console.log(id);
//            fetch(`http://localhost:5000/myorders/${id}`,{
//             method: 'DELETE' ,
//             headers:{
//                 'content-type': 'application/json',
//                 //    authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             }
//            })
//            .then(res => res.json())
//            .then(data => {
//                console.log(data);
//                if(data.deletedCount){
//                      toast.success(`Order cencle successfully`)
//                         //   refetch()
                           
//                    }
//            })
//        }

         


//     return (
//         <div>

// <input type="checkbox" id="my-modal-6" class="modal-toggle" />
// <div class="modal modal-bottom sm:modal-middle">
//   <div class="modal-box">
//     <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
//     <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//     <div class="modal-action">
//       <label onClick={()=>handleOrderDelete(OrderModal._id)} for="my-modal-6" class="btn">delete</label>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default OrderDeleteModal;