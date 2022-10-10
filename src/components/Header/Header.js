import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='flex items-center justify-between bg-yellow-400 p-4'>
            <div className='flex items-center mx-auto'>
                <img className='w-[48px] h-[48px]' src={logo} alt="" />
                <h1 className='font-mono text-2xl'>Brain Storm</h1>
            </div>
            <div className='header mx-auto'>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='chart'>Statistic</NavLink>
                <NavLink to='blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;