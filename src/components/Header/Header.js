import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png'
import { Bars3BottomLeftIcon, Bars3Icon, BeakerIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex items-center justify-between bg-yellow-400 p-4 shadow relative'>

            <div className='h-10 w-10 md:hidden' onClick={()=>setOpen(!open)}>
                {
                open?<XMarkIcon />: <Bars3Icon />
                }
            </div>

            <div className='flex items-center mx-auto'>
                <img className='w-[48px] h-[48px]' src={logo} alt="" />
                <h1 className='font-mono text-2xl ml-1'>Brain Storm</h1>
            </div>
            <div className={`header bg-yellow-100 md:bg-yellow-400  md:mx-auto absolute duration-700 ease-in md:static ${open ? 'top-20': 'top-[-150px]'}`}>
                <NavLink to='home' className={({isActive})=>isActive?'active': undefined}>Home</NavLink>
                <NavLink to='chart'>Statistic</NavLink>
                <NavLink to='blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;