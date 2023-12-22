import { Link, NavLink } from "react-router-dom";
import { MdOutlineTaskAlt } from "react-icons/md";
import { Spin as Hamburger } from 'hamburger-react'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/Authproviders";
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const { user  , logout} = useContext(AuthContext)

    const handlelogOut = () => {
        logout()
        .then()
        .catch()
    }

    const navlinks = <>
        <li><NavLink to="/"  className={({ isActive }) => isActive ? 'text-sm  font-bold text-main bg-sub_color' : 'text-sm  bg-transparent text-[#f8f5f5]'}>Home</NavLink></li>
        <li><NavLink to="/dashboard">DashBoard</NavLink></li>
        <li><NavLink to="/mytasks" >My Tasks</NavLink></li>
        <li><NavLink to="/statistics" >Statistics</NavLink></li>

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
                    <a className=" text-xl text-sub_color flex items-center"><span className="text-xl md:text-2xl">Task</span><MdOutlineTaskAlt />Pulse</a>
                </div>
                <div className="navbar-end">
                    {
                         user ? <button onClick={handlelogOut} className="btn btn-sm md:btn-md text-main">Logout</button>
                         : <Link to="/login"><button className="btn btn-sm md:btn-md text-main">Lets Explore</button></Link>
                    }   
                </div>
            </div>
        </div>
    );
};

export default Navbar;