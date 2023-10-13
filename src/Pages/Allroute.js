import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Privateroute } from './Privateroute'
import { Product } from './Product'
import { ProductDetail } from './ProductDetail'
import { Cart } from './Cart'
import { Order } from './Order'
import { MasterProduct } from '../admin/MasterProduct'
import { ProductList } from '../admin/ProductList'
import { NoPageAccess } from './NoPageAccess'
export const Allroute = () => {
    return (
        <div>
            <div className="">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/product' element={<Product />}>

                        <Route path='/product/:catagory' element={<Product />}></Route>
                    </Route>
                    <Route path='/product/detail/:id' element={<ProductDetail />}></Route>

                    <Route path='/cart' element={<Cart />} />
                    <Route path='/orderplaced' element={<Order />} />
                    <Route path='/masterproduct' element={<MasterProduct />} >
                        <Route path="/masterproduct/:pid" element={<MasterProduct />} />
                    </Route>
                    <Route path='/productlist' element={<ProductList />} />
                    <Route path='/nopageaccess' element={<NoPageAccess/>} />
                </Routes>
            </div>
        </div>
    )
}
