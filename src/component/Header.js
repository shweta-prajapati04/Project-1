import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (

        <div>
            <div className='headerbar'>
                <NavLink className="navlink" to='/' >Home</NavLink>
                <NavLink className="navlink"  to='/login'>Login</NavLink>
                <NavLink className="navlink"  to='/signup'>Sign Up</NavLink>

            </div>
        </div>
    )
}
