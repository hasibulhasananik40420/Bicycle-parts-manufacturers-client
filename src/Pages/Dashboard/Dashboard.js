import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth) 
    const [admin] = useAdmin(user)
   
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
       <h1  className='text-3xl text-primary font-bold'>Welcome to dashboard</h1>
       <Outlet></Outlet>
    
    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-accent text-base-content mr-5">
    
      <li><Link to='/dashboard'>My Orders</Link></li>
      <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
      <li><Link to='/dashboard/myprofil'>My Profil</Link></li>
      <li>{admin && <Link to='/dashboard/allusers'>Make Admin </Link>}</li>
      <li>{admin && <Link to='/dashboard/manageallorders'>Manage All Orders </Link>}</li>
      <li>{admin && <Link to='/dashboard/addproduct'>Add Product </Link>}</li>
      <li>{admin && <Link to='/dashboard/manageproducts'>Manage Products </Link>}</li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;