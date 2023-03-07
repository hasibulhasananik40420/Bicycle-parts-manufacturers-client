import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const OurTeams = () => {
    return (

        <div className='py-10 max-w-7xl mx-auto container px-6'>
            <div className='my-4'>
                <h1 className='font-bold text-center md:text-[48px] text-2xl py-2'>Our Team</h1>
                <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/wave.png" alt="" className='mx-auto' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-6'>
                <div className='px-4'>
                    <h3 className='font-bold md:text-[48px] text-2xl font-Quicksand text-[#253D4E] leading-normal'>Meet Our <br /> Expert Team</h3>
                    <p className='md:text-[16px] py-3 text-[#7E7E7E]'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    <p className='md:text-[16px]  text-[#7E7E7E] py-3'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                    <button className='px-6 py-3 bg-[#3BB77E] my-4 text-white rounded font-bold'>View All Members</button>
                </div>
                <div className='md:w-[350px] md:h-[400px] mb-16 rounded-lg mx-auto'>
                    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-6.png" alt="" />
                    <div className='relative mt-[-20%] translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer border bg-white w-[300px]  mx-auto rounded-xl shadow-lg p-5'>
                        <h1 className='text-center font-bold text-[24px] pt-3'>Dilan Specter</h1>
                        <h3 className='text-center text-[18px] text-[#7E7E7E]'>Head Engineer</h3>
                        <div className='flex flex-wrap gap-4 justify-center py-6 text-success text-[20px]'>
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaInstagram></FaInstagram>
                            <FaYoutube></FaYoutube>
                        </div>

                    </div>

                </div>
                <div className='w-[350px] h-[400px] rounded-lg mx-auto'>
                    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-8.png" alt="" />
                    <div className='relative mt-[-20%] translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer border bg-white w-[300px]  mx-auto rounded-xl shadow-lg p-5'>
                        <h1 className='text-center font-bold text-[24px] pt-3'>Dilan Specter</h1>
                        <h3 className='text-center text-[18px] text-[#7E7E7E]'>Head Engineer</h3>
                        <div className='flex flex-wrap gap-4 justify-center py-6 text-success text-[20px]'>
                            <FaFacebookF></FaFacebookF>
                            <FaTwitter></FaTwitter>
                            <FaInstagram></FaInstagram>
                            <FaYoutube></FaYoutube>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurTeams;