import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Spinner = ({ props }) => {
    return (
        // <div className='flex justify-center items-center h-screen'>
        //     <button className="btn loading">loading</button>
        // </div>

        <div>
            <h1>{props?.title || <Skeleton />}</h1>
            {props?.body || <Skeleton count={10} />}
        </div>
    );
};

export default Spinner;