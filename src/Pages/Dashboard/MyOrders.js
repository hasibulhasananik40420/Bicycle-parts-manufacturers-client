import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';

const MyOrders = () => {
      
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000', {
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()));

    //   if(isLoading){
    //       return <Spinner></Spinner>
    //   }

    return (
        <div>
      
            <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
       {
           orders?.map((order, index)=> <tr key={order._id} order={order} index={index}>

        <th>{index + 1}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>

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