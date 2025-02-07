import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../../assets/images/AppLogo.jpg';
import SearchBar from '../SearchBar';
import { Badge, Tooltip } from '@mui/material';
import { IoIosGitCompare, IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import CartDrawer from '../CartDrawer';
import flag_1 from '../../assets/images/flags/1.jpg'
import flag_2 from '../../assets/images/flags/2.jpg'
import flag_3 from '../../assets/images/flags/3.jpg'
import flag_4 from '../../assets/images/flags/4.jpg'
import flag_5 from '../../assets/images/flags/5.jpg'
import flag_6 from '../../assets/images/flags/6.jpg'
import flag_7 from '../../assets/images/flags/7.jpg'
import flag_8 from '../../assets/images/flags/8.jpg'
import flag_9 from '../../assets/images/flags/9.jpg'
import flag_10 from '../../assets/images/flags/10.jpg'
import { BsCurrencyDollar, BsCurrencyRupee } from 'react-icons/bs';
import './style.css';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiSettings3Line, RiShutDownLine } from 'react-icons/ri';

const flagMetadata = [
    { flagImg: flag_1, language: 'English' },
    { flagImg: flag_2, language: 'Français' },
    { flagImg: flag_3, language: 'Español' },
    { flagImg: flag_4, language: 'Deutsch' },
    { flagImg: flag_5, language: 'Italiano' },
    { flagImg: flag_6, language: 'Polski' },
    { flagImg: flag_7, language: 'Nederlands' },
    { flagImg: flag_8, language: 'Русский' },
    { flagImg: flag_9, language: 'Português PT' },
    { flagImg: flag_10, language: 'اللغة العربية' },
];

const Header = () => {
    const [showLanguageDropdownMenu, setShowLanguageDropdownMenu] = useState(false);
    const [showCurrencyDropdownMenu, setShowCurrencyDropdownMenu] = useState(false);
    const [showUserDropdownMenu, setShowUserDropdownMenu] = useState(false);
    const [open, setOpen] = useState(false);
    let languageMenuRef = useRef();
    let currencyMenuRef = useRef();
    let userMenuRef = useRef();

    const handleCartOpen = (value) => {
        setOpen(value)
    };

    useEffect(() => {
        let handler = (event) => {
            if (!languageMenuRef.current.contains(event.target)) {
                setShowLanguageDropdownMenu(false);
            }
            if (!currencyMenuRef.current.contains(event.target)) {
                setShowCurrencyDropdownMenu(false);
            }
            if (!userMenuRef.current.contains(event.target)) {
                setShowUserDropdownMenu(false);
            }
        }
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    });

    return (
        <header id='header' className='bg-white'>
            {/* first row */}
            <div className='top-strip py-2 border-b-[1px] border-gray-200'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[13px] font-[400]'>Get up to 50% off new season styles, limited time only</p>
                        </div>

                        <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-2'>
                                {/* help center */}
                                <li className='list-none pl-4 pr-2'>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition'>Help Center</Link>
                                </li>

                                {/* order tracking */}
                                <li className='list-none border-l-[1px] pl-4 pr-2'>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition'>Order Tracking</Link>
                                </li>

                                {/* language dropdown */}
                                <li className='list-none relative border-l-[1px] pl-4 pr-2' ref={languageMenuRef}>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition' onClick={() => setShowLanguageDropdownMenu(!showLanguageDropdownMenu)}>
                                        <div className='flex items-center gap-3'>
                                            <img className="lang-flag ls-is-cached lazyloaded" src={flag_1} />
                                            English
                                        </div>
                                    </Link>
                                    {showLanguageDropdownMenu && <ul className="dropdown-menu bg-white border-2 rounded-md" aria-labelledby="language-dropdown">
                                        {flagMetadata.map((data, index) => <li key={index} className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag" src={data.flagImg} />
                                                {data.language}
                                            </Link>
                                        </li>)}
                                    </ul>}
                                </li>

                                {/* currency selector */}
                                <li className='list-none relative border-l-[1px] pl-4 pr-2' ref={currencyMenuRef}>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition' onClick={() => setShowCurrencyDropdownMenu(!showCurrencyDropdownMenu)}>USD</Link>
                                    {showCurrencyDropdownMenu && <ul className="dropdown-menu bg-white border-2 rounded-md" aria-labelledby="language-dropdown">
                                        <li className="link">
                                            <Link to='#' className="dropdown-item flex items-center justify-between">
                                                <span>USD</span>
                                                <BsCurrencyDollar />
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item flex items-center justify-between">
                                                INR
                                                <BsCurrencyRupee />
                                            </Link>
                                        </li>
                                    </ul>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* second row */}
            <div className='header py-5 border-b-[1px] border-gray-200'>
                <div className='container flex items-center justify-between'>
                    <div className='col1 w-[20%] flex items-center justify-start'>
                        <Link to={'#'}><img src={AppLogo} /></Link>
                    </div>

                    <div className='col2 w-[55%]'>
                        <SearchBar />
                    </div>

                    <div className='col3 w-[25%] flex items-center justify-end'>
                        <ul className='flex items-center gap-5'>
                            {/* login & resiter */}
                            <li className='list-none'>
                                <Link className='link transition pr-1' to={'/login'}>Login</Link>
                                /
                                <Link className='link transition pl-1' to={'/register'}>Register</Link>
                            </li>

                            {/* user account link */}
                            {/* <li className='list-none relative' ref={userMenuRef}>
                                <Link to={"#"}  className='link transition flex items-center gap-2' onClick={() => setShowUserDropdownMenu(true)}>
                                    <FaRegCircleUser className='text-2xl' />
                                    Rijoy Chowdhury
                                </Link>
                                {showUserDropdownMenu && <ul className="dropdown-menu bg-white flex flex-col gap-2 border-2 rounded-md" aria-labelledby="language-dropdown">
                                    <li className="link">
                                        <Link to={'/user'}  className="dropdown-item flex items-center">
                                            <RiSettings3Line className='text-xl' />
                                            Settings
                                        </Link>
                                    </li>
                                    <li className="link">
                                        <Link to={'/logout'}  className="dropdown-item flex items-center">
                                            <RiShutDownLine className='text-xl' />
                                            Logout
                                        </Link>
                                    </li>
                                </ul>}
                            </li> */}

                            {/* user utilities */}
                            <li className='list-none border-l-[1px] border-gray-200 pl-2'>
                                <div className='quick-actions'>
                                    <div className='quick-action-btn'>
                                        <Tooltip title="Compare Items" arrow>
                                            <Badge badgeContent={4} color="error">
                                                <IoIosGitCompare />
                                            </Badge>
                                        </Tooltip>
                                    </div>
                                    <div className='quick-action-btn'>
                                        <Tooltip title="Wish-List" arrow>
                                            <Badge badgeContent={4} color="error">
                                                <IoIosHeartEmpty />
                                            </Badge>
                                        </Tooltip>
                                    </div>
                                    <div className='quick-action-btn cursor-pointer' onClick={() => handleCartOpen(true)}>
                                        <Tooltip title="My Cart" arrow>
                                            <Badge badgeContent={4} color="error">
                                                <IoCartOutline />
                                            </Badge>
                                        </Tooltip>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Cart Drawer */}
            <CartDrawer open={open} toggleDrawer={handleCartOpen} />

        </header>
    )
};

export default Header;
