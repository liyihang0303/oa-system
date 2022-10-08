import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Auth(props) {
    const infos = useSelector((state)=> state.users.infos);
    if( infos && infos.accessToken ){
        return props.children
    }
    else{
        return <Navigate to="/login" />
    }
}