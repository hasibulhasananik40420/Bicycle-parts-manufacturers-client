import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../../Shared/Spinner';

const MyOrders = () => {
  
  const [user] = useAuthState(auth)
  const email = user?.email
  const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://pure-island-40196.herokuapp.com/myorders?email=${email}`).then(res => res.json()));
    
   if(isLoading){
     return <Spinner></Spinner>
   }


  const handleOrderDelete = id =>{
    console.log(id);
    fetch(`https://pure-island-40196.herokuapp.com/myorders/${id}`,{
     method: 'DELETE' ,
     headers:{
         'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
     }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount){
              toast.success(`Order cencle successfully`)
                refetch()
                    
            }
    })
}


  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-3 mb-3'>Your Orders : {myOrders?.length}</h1>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Order Quantity</th>
                <th>PAYMENT</th>
                <th>Cencle Order</th>
              </tr>
            </thead>
            <tbody>

              {
                myOrders?.map((order, index) => <tr key={order._id} order={order} index={index}>

                  <th>{index + 1}</th>
                  <td>{order?.productname}</td>
                  <td>{order?.orderQuanty}</td>
                  <td>{(order?.price && !order?.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs'>PAY</button></Link>}
                  {(order?.price && order?.paid) &&  <div>
                    <p><span className='text-red-500'>Paid</span></p>
                    <span className='text-red-500'>Transaction Id :{order.transactionId}</span>
                    </div>}
                  </td>
                
                  <td>
                     
                     {/* cenclemodal */}
                    <button className={`${!order.paid? '' : 'hidden'}`} > <label  for="my-modal-6" class="btn btn-xs ml-4">cencle</label> </button>

                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                      <div class="modal-box">
                        <h3 class="font-bold text-2xl text-rose-500">Are you sure to cencle your order? </h3>
                        <p class="py-4">If you cancle your order it's cencle parmanently.</p>
                        <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                          <label onClick={()=>handleOrderDelete(order?._id)} for="my-modal-6" class="btn">Cencle Now</label>
                        </div>
                      </div>
                    </div>


                  </td>

                </tr>)
              }

            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
};

export default MyOrders;