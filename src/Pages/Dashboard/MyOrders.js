import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../../Shared/Spinner';
import { AiOutlineDelete } from 'react-icons/ai';
const MyOrders = () => {

  const [user] = useAuthState(auth)
  const email = user?.email
  const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://pure-island-40196.herokuapp.com/myorders?email=${email}`).then(res => res.json()));

  if (isLoading) {
    return <Spinner></Spinner>
  }


  const handleOrderDelete = id => {
    fetch(`https://pure-island-40196.herokuapp.com/myorders/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Order cencle successfully`)
          refetch()

        }
      })
  }


  return (
    <div>



      <div>
        <div className='border-b-2 border-slate-100 mb-4'>
          <h1 className='text-2xl font-bold font-serif text-center'>My Order's :{myOrders?.length}</h1>
        </div>
        <div className=" overflow-x-auto rounded-md">
          <table className="w-full text-sm text-left">
            <thead className=" bg-[#F5F5F5]">
              <tr>
                <th className="px-6 py-4">
                  Name
                </th>

                <th className="px-6 py-4">
                  Order Quentity
                </th>

                <th className="px-6 py-4">
                  Payment
                </th>
                <th className="px-6 py-4">
                  Cencle Order
                </th>

              </tr>
            </thead>
            <tbody>


              {
                myOrders.map(order => <tr key={order._id}>
                  <td className="px-6 py-4">
                    {order?.productname}
                  </td>

                  <td className="px-6 py-4">
                    {order?.orderQuanty}
                  </td>

                  <td className="px-6 py-4">
                    {(order?.price && !order?.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs'>PAY</button></Link>}
                    {(order?.price && order?.paid) && <div>
                      <p><span className='text-red-500'>Paid</span></p>
                      <span className='text-red-500'>Transaction Id :{order.transactionId}</span>
                    </div>}
                  </td>

                  <td className="px-6 py-4">
                    {/* cenclemodal */}
                    {/* <button className={`${!order.paid ? '' : 'hidden'}`} > <label for="my-modal-6" className="btn btn-xs ml-4">cencle</label> </button> */}
                    <button className={`${!order.paid ? '' : 'hidden'}`} >  <label for="my-modal-6" ><AiOutlineDelete className='h-10 w-10 text-red-600 cursor-pointer'> </AiOutlineDelete></label> </button>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <h3 className="font-bold text-2xl text-rose-500">Are you sure to cencle your order? </h3>
                        <p className="py-4">If you cancle your order it's cencle parmanently.</p>
                        <div className="modal-action">
                          <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                          <label onClick={() => handleOrderDelete(order?._id)} for="my-modal-6" className="btn">Cencle Now</label>
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