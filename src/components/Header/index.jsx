import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../../assets/images/AppLogo.jpg';
import SearchBar from '../SearchBar';
import { Badge, Tooltip } from '@mui/material';
import { IoIosGitCompare, IoIosHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import Navbar from '../Navbar';
import './style.css';

const Header = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    return (
        <header id='header' className='bg-white'>
            <div className='top-strip py-2 border-b-[1px] border-gray-200'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col1 w-[50%]'>
                            <p className='text-[13px] font-[400]'>Get up to 50% off new season styles, limited time only</p>
                        </div>
                        <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-2'>
                                <li className='list-none pl-4 pr-2'>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition'>Help Center</Link>
                                </li>
                                <li className='list-none border-l-[1px] pl-4 pr-2'>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition'>Order Tracking</Link>
                                </li>
                                <li className='list-none border-l-[1px] pl-4 pr-2'>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition' onClick={() => setShowDropdownMenu(!showDropdownMenu)}>
                                        <div className='flex items-center gap-3'>
                                            <img class="lang-flag ls-is-cached lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/1.jpg" />
                                            English
                                        </div>
                                    </Link>
                                    {showDropdownMenu && <ul class="dropdown-menu" aria-labelledby="language-dropdown">
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag ls-is-cached lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/1.jpg" />
                                                English
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/2.jpg" />Français
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/3.jpg" />Español
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/4.jpg" />Deutsch
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/5.jpg" />Italiano
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/6.jpg" />Polski
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/7.jpg" />Nederlands
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/8.jpg" />Русский
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/9.jpg" />Português PT
                                            </Link>
                                        </li>
                                        <li class="link">
                                            <Link to='#' class="dropdown-item">
                                                <img class="lang-flag lazyloaded" src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/l/10.jpg" />اللغة العربية
                                            </Link>
                                        </li>
                                    </ul>}
                                </li>
                                <li className='list-none border-l-[1px] pl-4 pr-2'>
                                    <Link to={"#"} className='text-[13px] font-[400] link transition'>USD</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header py-5 border-b-[1px] border-gray-200'>
                <div className='container flex items-center justify-between'>
                    <div className='col1 w-[25%] flex items-center justify-center'>
                        <Link to={'#'}><img src={AppLogo} /></Link>
                    </div>
                    
                    <div className='col2 w-[45%]'>
                        <SearchBar />
                    </div>
                    
                    <div className='col3 w-[30%] flex items-center justify-center'>
                        <ul className='flex items-center gap-3'>
                            <li className='list-none'>
                                <Link className='link transition pr-1' to={''}>Login</Link>
                                /
                                <Link className='link transition pl-1' to={''}>Register</Link>
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
                                    <div className='quick-action-btn'>
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

            <Navbar />
        </header>
    )
};

export default Header;
