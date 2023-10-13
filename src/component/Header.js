import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { funLogout } from '../redux/Action';
export const Header = () => {
    let data = useSelector((data) => data.Reducer)
    let isLogin = data.isLogin;
    let user = data.user.name;
    let dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(funLogout());
    }
    return (

        <div >

            <header className=' header_fix'>

                <div className='heder_top'>
                    <div className='logo'>
                        <img src="https://www.libertyshoesonline.com/pub/static/frontend/Greenhonchos/styletag/en_US/images/logo.svg"></img>
                    </div>

                    {isLogin ? (<div>
                        <h4>Wel-come {user}</h4>
                    </div>)
                        : null}
                    {data.user.isadmin ? (<div className='alert alert-success'>
                        <Link to="/productlist" className='btn btn-danger'> ADMIN PRODUCT</Link>
                    </div>) : null
                    }

                    <div>

                        {!isLogin ? (<NavLink className="navlink" to='/login'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg> login</NavLink>)
                            : null}
                        {!isLogin ? (<NavLink className="navlink" to='/signup'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg> sign Up</NavLink>)
                            : null}
                        <NavLink className="navlink" to='/cart' ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag-heart" viewBox="0 0 16 16">
                            <path  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                        </svg> cart</NavLink>
                        {isLogin ? (<button onClick={handleLogout} className="btn btn-outline-danger" >Logout</button>) : null}
                    </div>

                </div>
                <div className='headerbar'>
                    <NavLink className="navlink" to='/' >Home</NavLink>
                    <NavLink className="navlink" to='/product' >Product</NavLink>
                    <NavLink className="navlink" to='/product/mens' >Men</NavLink>
                    <NavLink className="navlink" to='/product/womens' >Women</NavLink>
                    <NavLink className="navlink" to='/product/kids' >kids</NavLink>

                </div>
            </header>
        </div>

    )
}
