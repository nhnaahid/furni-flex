import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/logo1.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut, cart } = useContext(AuthContext);
    //console.log(user);
    //console.log(user?.photoURL);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logout successful!")
            })
            .catch(error => toast.error(error.message));
    }

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/categories'>Categories</NavLink>
        <NavLink to='/custom'>Custom</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
    </>

    return (
        <nav className="navbar bg-base-100 shadow-md max-w-screen-2xl mx-auto fixed px-3 z-10">
            <div className="navbar-start">
                {/* Small screen */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1 font-bold">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>

            {/* medium screen */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 font-bold">
                    {navLinks}
                </ul>
            </div>

            {/* cart + avatar */}
            <div className="flex justify-end items-center w-1/2">
                <div className="flex items-center gap-1 md:gap-5">
                    {/* cart */}
                    <div className="dropdown dropdown-end">
                        <Link to='/cart'>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 md:h-7 w-5 md:w-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm md:badge-md indicator-item text-sky-600">{cart}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* avatar */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 md:w-10 rounded-full">
                                <img src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="User Image" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
                            <li>
                                <Link className="justify-between">Profile</Link>
                            </li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;