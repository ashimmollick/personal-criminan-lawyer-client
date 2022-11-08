import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/logo.svg';

const Header = () => {
    const menuItem = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
    </>

    return (
        <div className="navbar bg-base-100 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}

                    </ul>
                </div>
                <Link className=" normal-case text-xl">
                    <img className='rounded-lg max-h-16' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}


                </ul>
            </div>
            <div className="navbar-end w-3/12">
                <a href="/" className="btn capitalize text-accent font-semibold border-none hover:bg-yellow-600 bg-yellow-500">Free Consolution</a>
            </div>
        </div>
    );
};

export default Header;