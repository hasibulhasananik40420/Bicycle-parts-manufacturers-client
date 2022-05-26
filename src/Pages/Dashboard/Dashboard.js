import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth) 
    const [admin] = useAdmin(user)
   
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
       <h1  className='text-3xl text-primary font-bold'>Welcome to dashboard</h1>
       <Outlet></Outlet>
      
  </div> 
  <div className="drawer-side">
    <label for="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80  text-base-content mr-5">
    
      <li>{!admin &&  <NavLink to='/dashboard/myorders'>My Orders</NavLink>}</li>
      <li>{!admin && <NavLink to='/dashboard/addreview'>Add A Review</NavLink>}</li>
      <li><NavLink to=''>My Profil</NavLink></li>
      <li>{admin && <NavLink to='/dashboard/allusers'>Make Admin </NavLink>}</li>
      <li>{admin && <NavLink to='/dashboard/manageallorders'>Manage All Orders </NavLink>}</li>
      <li>{admin && <NavLink to='/dashboard/addproduct'>Add Product </NavLink>}</li>
      <li>{admin && <NavLink to='/dashboard/manageproducts'>Manage Products </NavLink>}</li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;