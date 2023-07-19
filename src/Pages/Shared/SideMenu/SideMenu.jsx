import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CgGoogleTasks } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { LiaHomeSolid } from "react-icons/lia";
import { MdTaskAlt } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";



const SideMenu = () => {
    const [open, setOpen] = useState(true);

    const closeOpenMenuButton = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1024) {
            setOpen(false);
        }else if(windowWidth >= 1024) {
            setOpen(true);
        }
    };

    useEffect(() => {
        closeOpenMenuButton();
        window.addEventListener('resize', closeOpenMenuButton);
        return () => {
            window.removeEventListener('resize', closeOpenMenuButton);
        };
    }, []);

    const active = 'flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded-md bg-gray-100 duration-200 text-blue-600 group';
    const notActive = 'flex gap-3.5 items-center text-sm font-medium py-3 px-4 rounded-md hover:bg-blue-700 duration-200 group';

    return (
        <section className={`bg-gradient-to-l from-blue-500 to-blue-800 text-gray-100 h-screen ${open ? 'w-60' : 'w-16'} duration-500`}>
            <article className="flex flex-col h-full pb-10">
                <div className="flex justify-between items-center py-3 px-4 ">
                    <h2 className={`whitespace-pre duration-500 ${!open && 'opacity-0 -translate-x-20 overflow-hidden'}  delay-0 tracking-[5px] text-2xl`} >Side Menu</h2>
                    {/* <button
                        className="hidden md:flex lg:hidden justify-end">
                        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => { setOpen(!open) }} />
                    </button> */}
                </div>
                <div
                    className="flex mt-10 md:mt-4 flex-col gap-4 relative px-2">
                    <NavLink to={'/'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(LiaHomeSolid, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-0`}>Home</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Home</p>
                    </NavLink>
                    <NavLink to={'/about'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(FaTasks, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-75`}>About</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >My Tasks</p>
                    </NavLink>
                    <NavLink to={'/contact'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(CgGoogleTasks, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-100`}>Contact</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Add Task</p>
                    </NavLink>
                    <NavLink to={'/projects'}
                        className={({ isActive }) => isActive ? active : notActive}>
                        <div>{React.createElement(MdTaskAlt, { size: '20' })}</div>
                        <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'} delay-150`}>Projects</span>
                        <p
                            className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                        >Projects</p>
                    </NavLink>
                </div>
                <div className="px-4 mt-10 flex-grow">
                    <hr className="border-gray-400" />
                </div>
                <div
                    className="flex mt-10 md:mt-4 flex-col gap-4 relative px-2">
                    {
                        false && (<Link
                            className={notActive}>
                            {
                                user?.photoURL ?
                                    <img src={user.photoURL} className="h-6 w-6 ring-2 ring-gray-100 rounded-full" />
                                    : <div>{React.createElement(BiUser, { size: '20' })}</div>
                            }
                            <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-200`}>Profile</span>
                            <p
                                className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                            >Profile</p>
                        </Link>)
                    }
                    {
                        !false && (<Link to={'/signUp'}
                            className={notActive}>
                            <div>{React.createElement(AiOutlineLogout, { size: '20' })}</div>
                            <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-200`}>Sign Up</span>
                            <p
                                className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                            >Sign Up</p>
                        </Link>)
                    }
                    {
                        true && (<Link
                            className={notActive}>
                            <div>{React.createElement(FiSettings, { size: '20' })}</div>
                            <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-300`}>Settings</span>
                            <p
                                className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                            >Settings</p>
                        </Link>)
                    }
                    {
                        true && (<button
                            className={notActive}>
                            <div>{React.createElement(AiOutlineLogout, { size: '20' })}</div>
                            <span className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}  delay-500`}>Log Out</span>
                            <p
                                className={`${open && 'hidden'} absolute left-40 text-sm font-medium whitespace-pre text-blue-600 bg-white shadow-xl rounded-md group-hover:px-4 group-hover:py-2 w-0 overflow-hidden group-hover:left-16 group-hover:w-fit group-hover:duration-700`}
                            >Log Out</p>
                        </button>)
                    }
                </div>
            </article>

        </section>
    );
};

export default SideMenu;