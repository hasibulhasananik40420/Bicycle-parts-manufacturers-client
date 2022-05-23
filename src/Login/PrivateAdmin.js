import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase.init';
import useAdmin from '../hooks/useAdmin';

const PrivateAdmin = ({children}) => {
    const [user,loading]= useAuthState(auth)
     const [admin ,adminLoading] = useAdmin(user)
    const location = useLocation()

      if(loading || adminLoading){
          return <Spinner></Spinner>
      }

      if(!user || !admin){
          return <Navigate to="/login" state={{from:location}} replace></Navigate>
      }
    return children

};

export default PrivateAdmin;