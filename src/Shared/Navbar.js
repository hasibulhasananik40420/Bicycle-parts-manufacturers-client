import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

//bg-gradient-to-r from-secondary to-primary 
const Navbar = () => {
  const [user] = useAuthState(auth)
  const handleSingOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  return (
    <div className="navbar bg-[#4000ff]">
      <div className="navbar-start max-w-7xl mx-auto px-20">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#7F167F] rounded-box w-52">
            <li><Link className='font-medium text-white' to='/'>Home</Link></li>
            <li><Link className='font-medium text-white' to='/blogs'>Blogs</Link></li>
            <li><Link className='font-medium text-white' to='/myprotfolio'>My Portfolio</Link></li>
            {
              user && <li><Link className='font-medium text-white' to='/dashboard'>Dashboard</Link></li>
            }
            <li><Link className='font-medium text-white' to='/contact'>Contact Us</Link></li>

            {user ? <button onClick={handleSingOut} className='font-medium text-white'>SingOut</button> : <li><Link className='font-medium text-white' to='/login'>Login</Link></li>}
          </ul>
        </div>
        <Link className="md:text-xl text-black  md:ml-3" to="/"><span className='text-red-600 font-serif font-semibold md:text-2xl'>I</span><span className='text-gray-700 font-serif font-semibold md:text-2xl'>zmo</span> <span className='text-red-600 font-serif font-semibold md:text-2xl'>S</span><span className='text-gray-700 font-serif font-semibold text-2xl'>tor</span> </Link>
      </div>

      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 md:ml-96">
          <li><Link className='font-medium text-white' to='/'>Home</Link></li>
          <li><Link className='font-medium text-white' to='/blogs'>Blogs</Link></li>
          <li><Link className='font-medium text-white' to='/myprotfolio'>My Portfolio</Link></li>

          {
            user && <li><Link className='font-medium text-white' to='/dashboard'>Dashboard</Link></li>
          }
          <li><Link className='font-medium text-white' to='/contact'>Contact Us</Link></li>

          {user ? <button onClick={handleSingOut} className='font-medium text-white'>SingOut</button> : <li><Link className='font-medium text-white' to='/login'>Login</Link></li>}
        </ul>
      </div>


      <div className="navbar-end">
        <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>

    </div>
  );
};

export default Navbar;