import React from 'react';
import profil from '../Assest/Images/IMG-20220506-WA0065.jpg'
import sideimg from '../Assest/Images/Milestones of business projects-bro(1).png'
import ss1 from '../Assest/Images/Screenshot_4.png'
import ss2 from '../Assest/Images/Screenshot_5.png'
import ss3 from '../Assest/Images/Screenshot_6.png'
const MyProtfolio = () => {
    return (
        <div>

            <div className=' w-3/4 md:flex md:justify-between md:items-center mx-auto mt-12'>
                <div>
                    <h1 className='text-3xl font-bold text-pink-600 mb-4'>Hasibul Hasan </h1>
                    <p className='text-2xl font-semibold mb-2'>Hello I am hasibul hasan from Rajshahi, Bangladesh.</p>
                    <p className='text-xl font-semibold mb-2'>I am studing National Univarsity Honors level.</p>
                    <p className='text-xl font-semibold mb-2'>I have some skills in web development .</p>
                    <p className='text-xl font-semibold mb-2'> I have a good skill an font and development</p>
                    <p className='text-xl font-semibold mb-2'>Backend also.</p>
                    <p className='text-xl font-semibold mb-2'>Iam very much confident about react js </p>
                    <p className='text-xl font-semibold mb-2'>I am using some freamwork like Tailwind , Bootstrap</p>
                    <p className='text-xl font-semibold mb-8'>hasibulhasan40420@gmail.com</p>


                    <div className="stats shadow-xl ">

                        <div className="stat place-items-center">
                            <div className="stat-title">Projects</div>
                            <div className="stat-value">15 +</div>
                            <div className="stat-desc">From January 1st to May 1st</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Happy Client</div>
                            <div className="stat-value text-secondary">12 + </div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">Problem Solving</div>
                            <div className="stat-value">60 + </div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>

                <div className=''>
                    <div className="avatar">
                        <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={profil} alt='' />
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='text-center mt-8'>
            <h1 className='text-center font-bold md:text-3xl'> I make some project those are ...</h1>
               <a className='text-xl font-semibold text-yellow-600'> First website click here</a>
               <br />
               <a className='text-xl font-semibold text-yellow-600' href="https://assignment-10-48fb0.web.app/?fbclid=IwAR2Lz75zQ0QYm6LtT-HIaThZrq9bUh8zuwhLi3z38Z50YvESblvj_1B4jcw"> Second website click here</a>
               <br />
               <a className='text-xl font-semibold text-yellow-600' <button className="btn btn-wide"> </button>
 > Third website click here</a>
            </div> */}

            <div className='mt-16'>
                <h1 className='text-3xl font-blod text-center '> My Skills </h1>
                <div className='text-center'> <progress className="progress w-56"></progress></div>

                <div className='md:flex md:justify-between md:w-3/4 mx-auto'>
                    <div>
                        <img className='w-[450px]' src={sideimg} alt="" />
                    </div>

                    <div className='mt-24'>
                        <div><label className='font-bold' htmlFor="">HTML</label> <br />
                            <progress className="progress progress-primary  w-80" value="98" max="100"></progress>
                        </div>
                        <div><label className='font-bold' htmlFor="">CSS</label> <br />
                            <progress className="progress progress-success  w-80" value="90" max="100"></progress>
                        </div>
                        <div><label className='font-bold' htmlFor="">JAVASCRIPT</label> <br />
                            <progress className="progress progress-yellow w-80" value="85" max="100"></progress>
                        </div>
                        <div>
                            <label className='font-bold' htmlFor="">REACT JS</label> <br />
                            <progress className="progress progress-error w-80" value="80" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <h1 className='text-3xl font-bold text-center'> My Projects</h1>
                <div className='text-center'> <progress className="progress progress-primary w-56"></progress></div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-8'>

                    <div className="card md:w-96 bg-base-100 shadow-xl">
                        <figure><img src={ss1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                               Barbar Shop
                            </h2>
                            <p>Barbar Shop is a service web Website.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Manufacturer</div>
                                <div className="badge badge-outline"><a  href="https://assignment-10-48fb0.web.app/?fbclid=IwAR2Lz75zQ0QYm6LtT-HIaThZrq9bUh8zuwhLi3z38Z50YvESblvj_1B4jcw">Visit here</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="card md:w-96 bg-base-100 shadow-xl">
                        <figure><img src={ss2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Mobil showroom
                               
                            </h2>
                            <p>Mobile Shop is buying and selling website</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Manufacturer</div>
                                <div className="badge badge-outline"><a href="https://agitated-heisenberg-275ee3.netlify.app/?fbclid=IwAR2VRh4glnFX5zGCLAyAXfgCNi8BYGeSWsR27ZxuWcvW5Jq6NWM4WTD8dI0">Visite here</a></div>
                            </div>
                        </div>
                    </div>


                    <div className="card md:w-96 bg-base-100 shadow-xl">
                        <figure><img src={ss3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                              Izmo stock
                               
                            </h2>
                            <p>Izmo Stock is a werehouse Website.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Manufacturer</div>
                                <div className="badge badge-outline"><a  href="https://assginment-11.web.app/?fbclid=IwAR1zogsFIGFrt8xhITj1iwgOpuFEsRt6Hks59emxek-t6wtrXt7xie_YNFM">Visit here</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProtfolio;