import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link><a className='font-semibold text-gray-500 text-sm'>Listed Books</a></Link>
                        <Link><a className='font-semibold text-gray-500 text-sm'>Pages to Read</a></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden md:flex items-center">
                <ul className="menu menu-horizontal px-1 flex items-center gap-4 justify-center">
                    <Link to={'/'}><a className="btn border-1.5 border-green-500 text-green-500 bg-transparent rounded-md">Home</a></Link>
                    <Link><a className='font-semibold text-gray-500 text-sm'>Listed Books</a></Link>
                    <Link><a className='font-semibold text-gray-500 text-sm'>Pages to Read</a></Link>


                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn bg-green-500 text-white border-none rounded-md">sign In</a>
                <a className="btn bg-[#59C6D2] text-white border-none rounded-md">sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;