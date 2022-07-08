import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h1 className='text-3xl text-primary font-bold'>Welcome to dashboard</h1>
        <Outlet></Outlet>

      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64  text-base-content mr-5">

          <li>{!admin && <Link className='btn btn-outline mb-2' to='/dashboard/myorders'>My Orders</Link>}</li>
          <li>{!admin && <Link className='btn btn-outline mb-2' to='/dashboard/addreview'>Add A Review</Link>}</li>
          <li><Link className='btn btn-outline mb-2' to=''>My Profil</Link></li>
          <li>{admin && <Link className='btn btn-outline mb-2' to='/dashboard/allusers'>Make Admin </Link>}</li>
          <li>{admin && <Link className='btn btn-outline mb-2' to='/dashboard/manageallorders'>Manage All Orders </Link>}</li>
          <li>{admin && <Link className='btn btn-outline mb-2' to='/dashboard/addproduct'>Add Product </Link>}</li>
          <li>{admin && <Link className='btn btn-outline mb-2' to='/dashboard/manageproducts'>Manage Products </Link>}</li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;