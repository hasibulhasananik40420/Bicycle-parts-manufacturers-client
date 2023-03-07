import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import UserRow from './UserRow';
const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://assignment-12-server-orpin.vercel.app/user').then(res => res.json()))

  if (isLoading) {
    return <Spinner></Spinner>
  }

  return (
    <div className='mt-6'>

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Make </th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>


            {
              users.map((user, index) => <UserRow key={user._id} user={user} refetch={refetch} index={index}></UserRow>)
            }


          </tbody>
        </table>
      </div>



    </div>
  );
};

export default AllUsers;