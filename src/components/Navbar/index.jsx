import { Button } from '@mui/material';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import RocketLogo from '../../assets/images/rocket.svg'
import { MdSegment } from 'react-icons/md';
import './style.css';
import DrawerComponent from '../Drawer';
import { Link } from 'react-router-dom';
import Thumbnail1 from '../../assets/images/3-1_thumb.jpg';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const SubmenuBox = ({ children }) => {
        return (
            <div className='submenu absolute top-[170%] left-[-30%] min-w-[200px] bg-white p-5 transition-all duration-300 font-normal'>
                {children}
            </div>
        );
    };

    return (
        <>
            <nav className='nav-wrapper block sticky top-0 border-b-[1px] border-gray-200 shadow-md'>
                <div className='navbar container flex items-center justify-end p-2'>
                    <div className='navbar-categories col1 w-[20%] mr-2'>
                        <Button className='!text-black w-[100%] z-1000' onClick={toggleDrawer(true)}>
                            <div className='categories-btn w-[100%] flex items-center justify-between'>
                                <div className='text-section w-[75%] flex items-center justify-around'><MdSegment /> Shop By Categories</div>
                                <div><FaChevronRight /></div>
                            </div>
                        </Button>
                    </div>

                    <div className='navbar-quick-links col2 w-[50%] font-medium border-l-2 border-gray-150'>
                        <ul className='flex items-center justify-around'>
                            <li className='list-none transition'>
                                <Link to={'/'} className='link text-black'>Home</Link>
                            </li>
                            <li className='list-none transition relative'>
                                <Link to={'#'} className='link text-black'>Fashion</Link>
                                <SubmenuBox>
                                    <div className='flex flex-col w-[525px]'>
                                        <div className='upper flex justify-between gap-5 mb-4'>
                                            <div className='col1 w-[175px]'>
                                                <ul>
                                                    <li className='!text-black font-medium pb-1'>Apparel</li>
                                                    <li className='list-none pb-1'>Smart Tablet</li>
                                                    <li className='list-none pb-1'>Crepe T-Shirt</li>
                                                    <li className='list-none pb-1'>Leather Watch</li>
                                                    <li className='list-none pb-1'>Rolling Diamond</li>
                                                </ul>
                                            </div>
                                            <div className='col2 w-[175px]'>
                                                <ul>
                                                    <li className='!text-black font-medium pb-1'>Outerwear</li>
                                                    <li className='list-none pb-1'>Wooden Chair</li>
                                                    <li className='list-none pb-1'>Sneakers Shoes</li>
                                                    <li className='list-none pb-1'>Purse</li>
                                                    <li className='list-none pb-1'>Xbox Controller</li>
                                                </ul>
                                            </div>
                                            <div className='col3 w-[175px]'>
                                                <ul>
                                                    <li className='!text-black font-medium pb-1'>Footwear</li>
                                                    <li className='list-none pb-1'>Leather Watch</li>
                                                    <li className='list-none pb-1'>Cabinet Table</li>
                                                    <li className='list-none pb-1'>Headphones</li>
                                                    <li className='list-none pb-1'>Sunglasses</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='lower'>
                                            <img src={Thumbnail1} />
                                        </div>
                                    </div>
                                </SubmenuBox>
                            </li>
                            <li className='list-none transition'>
                                <Link to={'#'} className='link text-black'>New Arrivals</Link>
                            </li>
                            <li className='list-none transition relative'>
                                <Link to={'#'} className='link text-black'>All brands</Link>
                                <SubmenuBox>
                                    <ul>
                                        <li className='list-none pb-1'>Gadget Zone</li>
                                        <li className='list-none pb-1'>Initech space</li>
                                        <li className='list-none pb-1'>Looney Tunes</li>
                                        <li className='list-none pb-1'>Massive Dynamic</li>
                                        <li className='list-none pb-1'>Pro Tech Gear</li>
                                        <li className='list-none pb-1'>Soylent Green</li>
                                        <li className='list-none pb-1'>The Simpsons</li>
                                        <li className='list-none'>Free Authority</li>
                                    </ul>
                                </SubmenuBox>
                            </li>
                            <li className='list-none transition'>
                                <Link to={'#'} className='link text-black'>Best Deals</Link>
                            </li>
                            <li className='list-none transition relative'>
                                <Link to={'#'} className='link text-black'>Blog</Link>
                                <SubmenuBox>
                                    <ul>
                                        <li className='list-none pb-1'>Best Deals</li>
                                        <li className='list-none'>Blog</li>
                                    </ul>
                                </SubmenuBox>
                            </li>
                        </ul>
                    </div>

                    <div className='navbar-announce col3 w-[30%] !text-black font-medium flex justify-end items-center'>
                        <img src={RocketLogo} />
                        Free International Delivery
                    </div>
                </div>

            </nav>
            <DrawerComponent open={open} toggleDrawer={toggleDrawer} />
        </>
    )
};

export default Navbar;