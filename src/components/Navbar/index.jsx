import { Button } from '@mui/material';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import RocketLogo from '../../assets/images/rocket.svg'
import { MdSegment } from 'react-icons/md';
import './style.css';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar container flex items-center justify-end p-2'>
                <div className='col1 w-[20%] mr-2'>
                    <Button className='!text-black w-[100%]'>
                        <div className='categories-btn w-[100%] flex items-center justify-between'>
                            <div className='text-section w-[60%] flex items-center justify-around'><MdSegment /> Shop By Categories</div>
                            <div><FaChevronRight /></div>
                        </div>
                    </Button>
                </div>

                <div className='col2 w-[50%] !text-black font-medium border-l-2 border-gray-150'>
                    <ul className='flex items-center justify-around'>
                        <li className='link list-none transition'>Home</li>
                        <li className='link list-none transition'>Fashion</li>
                        <li className='link list-none transition'>New Arrivals</li>
                        <li className='link list-none transition'>All brands</li>
                        <li className='link list-none transition'>Best Deals</li>
                        <li className='link list-none transition'>Blog</li>
                    </ul>
                </div>

                <div className='col3 w-[30%] !text-black font-medium flex justify-end items-center'>
                    <img src={RocketLogo} />
                    Free International Delivery
                </div>
            </div>
        </nav>
    )
};

export default Navbar;