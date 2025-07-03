import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { RiSettings3Line, RiShutDownLine } from 'react-icons/ri';
import useAuth from '../../hooks/useAuth';
import { LiaBoxOpenSolid } from 'react-icons/lia';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { actions } from '../../redux/slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FcSynchronize } from 'react-icons/fc';

const notifySuccess = (value) => toast.success(value);

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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading } = useSelector(state => state.userSlice);
    const { cart } = useSelector(state => state.cartSlice);
    const [showLanguageDropdownMenu, setShowLanguageDropdownMenu] = useState(false);
    const [showCurrencyDropdownMenu, setShowCurrencyDropdownMenu] = useState(false);
    const [showUserDropdownMenu, setShowUserDropdownMenu] = useState(false);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    let languageMenuRef = useRef();
    let currencyMenuRef = useRef();
    let userMenuRef = useRef();
    const { logoutUser } = actions;

    const onSearch = () => {
        if (searchTerm) {
            navigate({
                pathname: "/products",
                search: `?search=${searchTerm}`,
            });
            setSearchTerm('');
        }
    }

    const closeMenu = () => {
        setShowLanguageDropdownMenu(false);
        setShowCurrencyDropdownMenu(false);
        setShowUserDropdownMenu(false);
    }

    const handleCartOpen = (value) => {
        setOpen(value)
    };

    const handleLogout = async () => {
        closeMenu();
        const response = await dispatch(logoutUser()).unwrap();
        if (response.success) {
            notifySuccess(response.message);
        }
    }

    useEffect(() => {
        let handler = (event) => {
            if (languageMenuRef?.current && !languageMenuRef?.current.contains(event.target)) {
                setShowLanguageDropdownMenu(false);
            }
            if (currencyMenuRef?.current && !currencyMenuRef?.current.contains(event.target)) {
                setShowCurrencyDropdownMenu(false);
            }
            if (userMenuRef?.current && !userMenuRef?.current.contains(event.target)) {
                setShowUserDropdownMenu(false);
            }
        }
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    }, []);

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
                                    {showCurrencyDropdownMenu && <ul className="dropdown-menu bg-white border-2 rounded-md" aria-labelledby="currency-dropdown">
                                        <li className="link">
                                            <Link to='#' className="dropdown-item justify-between">
                                                <span>USD</span>
                                                <BsCurrencyDollar />
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to='#' className="dropdown-item justify-between">
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
                    {/* application logo */}
                    <div className='col1 w-[20%] flex items-center justify-start'>
                        <Link to={'#'}><img src={AppLogo} /></Link>
                    </div>

                    {/* search bar */}
                    <div className='col2 w-[55%]'>
                        <SearchBar submitSearch={onSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                    </div>

                    <div className='col3 w-[25%] flex items-center justify-end'>
                        <ul className='flex items-center gap-5'>

                            {/* Loading user msg */}
                            {isLoading && <li className='list-none'>
                                <Link to={"#"} className='link transition flex items-center justify-between'>
                                    <div className='w-[120px] flex justify-center' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        Loading User...
                                    </div>
                                    <FcSynchronize className='text-3xl' />
                                </Link>
                            </li>}

                            {/* login/register */}
                            {!isLoading && !user && <li className='list-none'> {/* login & resiter */}
                                    <Link className='link transition pr-1' to={'/login'}>Login</Link>
                                    /
                                    <Link className='link transition pl-1' to={'/register'}>Register</Link>
                            </li>}

                            {/* when user is logged in */}
                            {user && < li className='list-none relative' ref={userMenuRef}> {/* user account link */}

                                    <Link to={"#"} className='link transition flex items-center justify-between' onClick={() => setShowUserDropdownMenu(true)}>
                                        <div className='w-[120px] flex justify-center' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div>
                                        <HiOutlineUserCircle className='text-3xl' />
                                    </Link>

                                    {showUserDropdownMenu && <ul className="dropdown-menu bg-white flex flex-col gap-2 border-2 rounded-md" aria-labelledby="user-dropdown">
                                        <li className="link">
                                            <Link to={'/user'} className="dropdown-item" onClick={closeMenu}>
                                                <RiSettings3Line className='text-xl' />
                                                Settings
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to={'/user'} className="dropdown-item" onClick={closeMenu}>
                                                <LiaBoxOpenSolid className='text-xl' />
                                                My Orders
                                            </Link>
                                        </li>
                                        <li className="link">
                                            <Link to={'#'} className="dropdown-item" onClick={handleLogout}>
                                                <RiShutDownLine className='text-xl' />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>}
                            </li>}

                            {/* user utilities */}
                            <li className='list-none border-l-[1px] border-gray-200 pl-2'>
                                <div className='quick-actions'>
                                    <div className='quick-action-btn'>
                                        <Tooltip title="Compare Items" placement="top" arrow>
                                            <Badge badgeContent={user ? 4 : 0} color="error">
                                                <IoIosGitCompare />
                                            </Badge>
                                        </Tooltip>
                                    </div>
                                    <div className='quick-action-btn'>
                                        <Tooltip title="Wish-List" placement="top" arrow>
                                            <Badge badgeContent={user ? 4 : 0} color="error">
                                                <IoIosHeartEmpty />
                                            </Badge>
                                        </Tooltip>
                                    </div>
                                    <div className='quick-action-btn cursor-pointer' onClick={() => handleCartOpen(true)}>
                                        <Tooltip title="My Cart" placement="top" arrow>
                                            <Badge badgeContent={cart ? cart.length : 0} color="error">
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
