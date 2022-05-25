import React from 'react';

const Contact = () => {
    return (
        <div className='mt-24'>
             {/* <h1 className='text-4xl  font-bold mt-6 mb-6'>Contact Us</h1> */}
          <div className='md:flex md:justify-between bg-black border-2 p-16'>
          <div className='md:w-2/4 text-white font-medium p-6'>
                <p className='text-3xl mb-4'>Our Address</p>
                <p >715 Fake Ave, Apt. 34, New York, NY 10021 USA  </p>
                   <p> Email: stroyka@example.com</p>
                    <p>Phone Number: +1 754 000-00-00</p>
               
                <p className='pt-3'>
                    <p className='md:text-2xl mb-3'>Opening Hours</p>
                   <p> Monday to Friday: 8am-8pm</p>
                   <p> Saturday: 8am-6pm</p>
                    <p>Sunday: 10am-4pm</p>
                </p>
                <p className='md:text-2xl pt-2'>Comment</p>
                <p className='pt-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
             <div className='md:w-2/4 p-5'>
                 <h1 className='md:text-2xl text-white font-medium'>Leave us a Message</h1>
                 <form className='md:mt-6'>
                  <div className='md:flex gap-4 mb-3'>
                  <input type="text" placeholder="Your Name" class="input md:w-2/4 w-full max-w-xs mt-3" /> 
                   
                   <input type="text" placeholder="Email Address" class="input md:w-2/4 w-full max-w-xs mt-3" />
                </div>                 
                <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" placeholder='Subject'/>
                <textarea className='w-full md:w-full border  py-6 mb-2 rounded px-3' type="textarea" placeholder='Message'/>
                 </form>
                 <button className='bg-yellow-600 px-8 py-3 rounded text-white font-bold mb-6 mt-3'>Send Message</button>
             </div>
          </div>
        </div>
    );
};

export default Contact;