import { useQuery } from "react-query";
import Spinner from "../../Shared/Spinner";

const ManageAllOrder = () => {
  
    const { data: allOrders, isLoading, refetch } = useQuery('allOrders', () => fetch('https://pure-island-40196.herokuapp.com/orders').then(res => res.json()));
    
       if(isLoading){
           return <Spinner></Spinner>
       }
    return (
        <div>
         

         <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Order Quantity</th>
        {/* <th>Payment</th> */}
      </tr>
    </thead>
    <tbody>
     
          {
             allOrders?.map((order , index)=> <tr key={order._id} order={order} index={index}>

         <th>{index + 1}</th>
         <td>{order.productname}</td>
          <td>{order.email}</td>
        <td>{order.price}</td>
        <td>{order.orderQuanty}</td>
         {/* <td><button className="btn btn-xs">Paid</button>
         <button className="btn btn-xs ml-2">cencle</button>
         </td> */}
             </tr>)
          }

    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default ManageAllOrder;