import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import UserRow from './UserRow';
const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h1>all user : {users?.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Job</th>
      </tr>
    </thead>
    <tbody>
    
       
    {
         users.map(user=> <UserRow key={user._id} user={user} refetch={refetch} ></UserRow>)
      }
     
     
    </tbody>
  </table>
</div>


            
        </div>
    );
};

export default AllUsers;