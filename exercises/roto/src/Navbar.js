import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='nav'>
            <Link to='/' className='nav-item'>Main</Link>
            <Link to='/about' className='nav-item'>About</Link>
            <Link to='/services' className='nav-item'>Services</Link>
        </div>
    )
}



export default Navbar