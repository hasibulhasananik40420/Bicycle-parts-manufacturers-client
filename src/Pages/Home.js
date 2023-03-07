import React, { useEffect, useState } from 'react';
import AllReviews from './AllReviews';
import BussinessSummary from './BussinessSummary';
import Contact from './Contact';
import Header from './Header';
import Header2 from './Header2';
import OurTeams from './OurTeams';
import Products from './Products';

const Home = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [])
    return (
        <div>
            {/* <Header></Header> */}
            <Header2 />
            <div className='mx-8'>
                <Products></Products>
                <BussinessSummary></BussinessSummary>

                <div>
                    <h1 className='text-3xl font-bold text-center mt-16'> CUSTOMAR REVIEWS </h1>
                    {/* <div className='text-center'> <progress class="progress progress-warning w-80"></progress></div> */}
                    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/wave.png" alt="" className='mx-auto' />

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-12'>
                        {
                            reviews?.map(review => <AllReviews key={review._id} review={review}></AllReviews>)
                        }
                    </div>
                </div>
                <OurTeams></OurTeams>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;