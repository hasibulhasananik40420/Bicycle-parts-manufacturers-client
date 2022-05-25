import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Spinner from '../../Shared/Spinner';

const MyOrders = () => {
      const [user] = useAuthState(auth) 
       const email = user?.email
    const { data: myOrders, isLoading, refetch } = useQuery('myOrders', () => fetch(`http://localhost:5000/myorders?email=${email}`).then(res => res.json()));
    
     console.log(myOrders);
      if(isLoading){
          return <Spinner></Spinner>
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
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
     
       {
           myOrders?.map((order, index)=> <tr key={order._id} order={order} index={index}>

        <th>{index + 1}</th>
        <td>{order.productname}</td>
        <td>{order.orderQuanty}</td>
        <td>{order.price}</td>
        <td></td>

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