import React from 'react'
import './navbar.css';
import logo from './images/logoBar.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='text-white'>
            <header>
                <nav className='navbar'>
                    <div className="navbar-brand logo">
                        <img src={logo} alt="barlogo" height={80} width={80} />
                        <span>777</span>
                    </div>
                    <ul className="nav text-white">
                        <li className="nav-item mx-5 "><Link className='links' to='/'>Home</Link></li>
                        <li className="nav-item mx-5"><Link className='links' to='/menu'>Menu</Link></li>
                        <li className="nav-item mx-5"><Link className='links' to='/booktable'>booktable</Link></li>
                        <li className="nav-item mx-5"><Link className='links' to='/about'>About</Link></li>
                        <li className="nav-item mx-5"><Link  className='links' to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar