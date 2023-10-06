import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Privateroute } from './Privateroute'
import { Product } from './Product'

export const Allroute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/product' element={<Product />}>
                   
                    <Route path='/product/:catagory' element={<Product />}></Route>
                </Route>



            </Routes>
        </div>
    )
}
