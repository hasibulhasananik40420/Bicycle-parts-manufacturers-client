import React from 'react';
import images from '../Assest/Images/close-up-macro-image-bicycle-tire-sport-conceptual-image_141438-1318-removebg-preview.png'
const Header = () => {
  return (
    <div>
      <div className="hero md:h-[100vh] bg-[#FFEDD5]">
        <div className="hero-content flex-col lg:flex-row ">
          <div >
            <p data-aos-duration='1000'
              data-aos-delay='200' data-aos='fade-right' className='text-xl font-serif'>Best Quality</p>
            <h1 data-aos-delay='400'
              data-aos-duration='900' data-aos='fade-right' className="md:text-3xl font-bold">Professional Bicycle parts manufacturers Service</h1>
            <p data-aos-delay='600'
              data-aos-duration='800' data-aos='fade-right' className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button data-aos='zoom-in'
              data-aos-delay='1300' className="btn btn-primary">Get Started</button>
          </div>
          <div className='h-[70vh]'>
            <img src={images} className="h-full" alt='' />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;