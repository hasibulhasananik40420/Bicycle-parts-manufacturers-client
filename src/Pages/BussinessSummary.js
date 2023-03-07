import React from 'react';
//style={{background:`url(${back})`}}
import icon1 from '../Assest/Images/feedback.svg'
import icon2 from '../Assest/Images/clients.svg'
import icon3 from '../Assest/Images/projects.svg'
import icon4 from '../Assest/Images/flag.svg'
const BussinessSummary = () => {
    return (
        <div className=''>
            <div className='text-center mt-24 mx-auto max-w-7xl'>
                <h1 className='lg:text-3xl text-xl font-bold '>MILLOINS BUSSINESS TRUST US</h1>
                <p className='text-xl font-semibold mt-4'>Try to Understand Users Expecttation</p>
            </div>

            {/* <div className=' md:grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-20 mt-14'>
                <div>
                    <img className='w-[100px] mb-4' src={icon4} alt="" />
                    <div class="stat-value">60 +</div>
                    <h1 className='text-2xl font-bold'>Counties</h1>
                </div>
                <div>
                    <img className='w-[100px] mb-4' src={icon3} alt="" />
                    <div class="stat-value">1K +</div>
                    <h1 className='text-2xl font-bold'>Complete Projects</h1>
                </div>
                <div>
                    <img className='w-[100px] mb-4 ' src={icon2} alt="" />
                    <div class="stat-value">2.6M</div>
                    <h1 className='text-2xl font-bold'>Happy Clients</h1>
                </div>
                <div>
                    <img className='w-[100px] mb-4' src={icon1} alt="" />
                    <div class="stat-value">4,200 +</div>
                    <h1 className='text-2xl font-bold'>Feedbacks</h1>
                </div>
            </div> */}




















            <div className='md:w-3/4 justify-items-center mx-auto w-full hidden md:block shadow-xl bg-accent p-12 mt-12 '>
                <div className='flex'>
                    <div>
                        <h1 data-aos-duration='1000'
                            data-aos-delay='200' data-aos='fade-up' className='md:text-2xl font-semibold text-primary'>Have any Question about us or get a products requests</h1>
                        <p data-aos-delay='400'
                            data-aos-duration='900' data-aos='fade-right' className='md:text-xl font-medium'>Don't hesitate to contact us</p>
                    </div>
                    <div className='md:flex md:gap-4 md:mr-5'>
                        <button data-aos='zoom-in'
                            data-aos-delay='1300' class="btn  btn-primary mb-3 text-white font-medium">Request For Quote</button>
                        <button data-aos='zoom-in'
                            data-aos-delay='1000' class="btn  btn-primary text-white font-medium">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BussinessSummary;