import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Spinner from '../../Shared/Spinner';

const MyProfil = () => {
 

  const [user] = useAuthState(auth)
  const email= user?.email
  const handleInfo = e => {
    e.preventDefault()
    const info = {
      name: user.displayName,
      email: user.email,
      education: e.target.education.value,
      profil: e.target.profil.value,
      city: e.target.city.value,
      phone: e.target.phone.value
    }
    const url = `http://localhost:5000/myprofil/${email}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Profil information saved')
        e.target.reset()
       
      })
  }

  //  const { data: profil, isLoading, refetch } = useQuery('profil', () => fetch(`https://pure-island-40196.herokuapp.com/myprofil/${user?.email}`).then(res => res.json()));
   const { data: profil, isLoading, refetch } = useQuery('profil', () => fetch(`http://localhost:5000/myprofil/${user?.email}`).then(res => res.json()));
 
       
       if(isLoading){
         return <Spinner></Spinner>
       }
   

  return (
    <div className='md:flex '>
      <div className='md:w-2/4 w-full p-5 bg-secondary md:ml-24 mt-6'>
        <h1 className='md:text-2xl font-medium'>Leave us Your Information</h1>
        <form onSubmit={handleInfo} className='mt-3'>

          <input disabled className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='name' value={user?.displayName || ''} placeholder='Name' />
          <input disabled className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="email" name='email' value={user?.email || ''} placeholder='Email' />
          <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='education' defaultValue={profil[0].education}  placeholder='Education' />
          <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='profil' defaultValue={profil[0].profil} placeholder='Linkdin Profil' />
          <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='city' defaultValue={profil[0].city} placeholder='City/district)' />
          <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='phone' defaultValue={profil[0].phone} placeholder='Phone ' />
          <button className='bg-yellow-600 px-8 py-3 rounded text-white font-bold mb-2 mt-2'>Send Now</button>
        </form>
      </div>

      {/* edit prodil modal */}
      <div className='ml-24 mt-16'>
        <div class="avatar">
          <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src='https://api.lorem.space/image/face?hash=28212' alt='' />
          </div>
        </div>

        <div>
          
          <h1>{user?.displayName}</h1>
          <p>{user?.email}</p>

         


        </div>
        <div className='mt-4 ml-6'>

          <label for="my-modal-6" class="btn modal-button">Edit Profil</label>

          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box"> 
              <h1 className='md:text-2xl font-medium'>Edit Your Information</h1>
              <form onSubmit={handleInfo} className='mt-3'>
                <input disabled className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='name' value={user?.displayName || ''} placeholder='Name' />
                <input disabled className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="email" name='email' value={user?.email || ''} placeholder='Email' />
                <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='education' placeholder='Education' />
                <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='profil' placeholder='Linkdin Profil' />
                <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='city' placeholder='City/district)' />
                <input className='sm:w-1/4 md:w-full border  py-3 mb-3 rounded px-3' type="text" name='phone' placeholder='Phone ' />
                <button className='bg-yellow-600 px-8 py-3 rounded text-white font-bold mb-2 mt-2'>Send Now</button>
              </form>

              <div class="modal-action">
                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default MyProfil;