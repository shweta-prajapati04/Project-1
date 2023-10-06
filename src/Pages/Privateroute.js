import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Privateroute = ({ child }) => {

    let isLogin = useSelector((data) => data.Reducer.isLogin)
    return (
        isLogin ? child : <Navigate to='/login'></Navigate>
    )
}
