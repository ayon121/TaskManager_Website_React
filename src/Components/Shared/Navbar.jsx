import { NavLink } from "react-router-dom";
import { MdOutlineTaskAlt } from "react-icons/md";
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const navlinks = <>
        <li><NavLink to="/"  className={({ isActive }) => isActive ? 'text-sm  font-bold text-main bg-sub_color' : 'text-sm  bg-transparent text-[#f8f5f5]'}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career" >Career</NavLink></li>

    </>

    return (
        <div className=" bg-main font-poppins ">
            <div className="navbar max-w-6xl mx-auto px-5 ">
                <div className="navbar-start">
                <div className="dropdown">
                        <div tabIndex={0} role="button" className="text-sub_color" >
                            <Hamburger size={20} toggled={isOpen} toggle={setOpen} direction="left" duration={0.8} />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}

                        </div>
                        {
                            isOpen &&  <ul tabIndex={0} className="menu menu-md dropdown-content dropdown-left mt-3 z-[1] p-2 shadow bg-main text-xl rounded-box w-64 text-sub_color ">
                            {navlinks}
                        </ul>
                        }
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl text-sub_color">Task<MdOutlineTaskAlt />Pulse</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;