import React from 'react';

const Header2 = () => {
    return (
        <div>
            <section
                className="bg-[url('https://learnwithsumit.com/_next/static/media/pattern-dark.20747baf.svg')]  min-h-[100vh] lg:flex items-center  bg-opacity-0	"
            >
                <div className=' lg:p-10 container mx-auto lg:flex gap-6'>
                    {/* text part */}
                    <div className=" p-4  w-full">
                        <h3 className='text-lg mb-4  font-bold'>Best qulity</h3>
                        <h3 className='lg:text-5xl text-2xl font-bold mb-4 font-poppins'>Bicycle  <span className='text-indigo-700'>Manufacturer </span></h3>
                        <h3 className=' mb-4  font-bold font-poppins'>Bicycle Sports OEM & ODM</h3>
                        <h3 className=' mb-4  font-bold font-poppins'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</h3>

                        <div className='flex gap-6'>
                            <button className='bg-black my-4 py-2 px-6 rounded-full  text-white  text-xl hover:bg-white hover:text-black hover:border hover:border-[#4b4b4b] duration-500'>In Details</button>

                            <button className='bg-[#859370] my-4 py-2 px-6 rounded-full hover:bg-white hover:text-black hover:border hover:border-[#4b4b4b]  text-white cardShadow text-xl duration-500'>Contact Us</button>
                        </div>
                    </div>
                    <div className=" p-4 w-full">
                        <div className='lg:w-3/4 cardShadow rounded-md p-3 mx-auto bg-white'>
                            <img className='w-full rounded-md mb-3' src="https://img.freepik.com/free-vector/set-cyclist-elements_1284-49783.jpg?size=626&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=sph" alt="" />


                        </div>
                    </div>

                </div>


            </section>
        </div>
    );
};

export default Header2;