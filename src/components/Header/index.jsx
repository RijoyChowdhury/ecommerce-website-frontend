import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../../assets/images/AppLogo.jpg';
import SearchBar from '../SearchBar';
import { Badge, Tooltip } from '@mui/material';
import { IoIosGitCompare, IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import './style.css';
import CartDrawer from '../CartDrawer';

const Header = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);
    const [open, setOpen] = useState(false);

    const handleCartOpen = (value) => {
        setOpen(value)
    };

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
                                <li className='list-none relative border-l-[1px] pl-4 pr-2'>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition' onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
                                        <div className='flex items-center gap-3'>
                                            <img className="lang-flag ls-is-cached lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/1.jpg" />
                                            English
                                        </div>
                                    </Link>
                                    {showDropdownMenu && <ul className="dropdown-menu bg-white" aria-labelledby="language-dropdown">
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag ls-is-cached lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/1.jpg" />
                                                English
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/2.jpg" />Français
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/3.jpg" />Español
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/4.jpg" />Deutsch
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/5.jpg" />Italiano
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/6.jpg" />Polski
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/7.jpg" />Nederlands
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/8.jpg" />Русский
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/9.jpg" />Português PT
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item">
                                                <img className="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/10.jpg" />اللغة العربية
                                            </Link>
                                        </li>
                                    </ul>}
                                </li>
                                
                                {/* currency selector */}
                                <li className='list-none border-l-[1px] pl-4 pr-2'>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition'>USD</Link>
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
                            <li className='list-none'>
                                <Link className='link transition pr-1' to={'/login'}>Login</Link>
                                /
                                <Link className='link transition pl-1' to={'/signin'}>Register</Link>
                            </li>

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
