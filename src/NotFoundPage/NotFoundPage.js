import React from 'react';
import { Link } from 'react-router-dom';
import pages from '../Assest/Images/woman-watching-page-found-message-computer-404-error-isometric-vector_163786-938.webp'
const NotFoundPage = () => {
    return (
         
        <div>
            <div> <Link to='/' class="btn btn-outline m-8 px-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg> Back To Home Page</Link></div>
           <div className='flex justify-center'>
           <img src={pages} alt="" />
           </div>
        </div>
    );
};

export default NotFoundPage;