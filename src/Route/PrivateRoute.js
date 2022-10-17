import React,{useContext}from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './../context/UserContext';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
 if(loading){
    return<div><progress className="bg-red-600 progress w-56"></progress></div>
 }       
    if(user&&user.uid){
        return children;
    }

    return <Navigate to={'/login'}>Log in</Navigate>
};

export default PrivateRoute;