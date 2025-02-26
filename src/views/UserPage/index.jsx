import React, { useState } from 'react';
import profile from '../../assets/images/deku.webp';
import { IoIosHeartEmpty, IoIosInformationCircleOutline, IoIosLogOut, IoMdCloudUpload } from 'react-icons/io';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import UserInfo from '../../components/UserInfo';
import { IoGridOutline, IoLocationOutline, IoLogOutOutline } from 'react-icons/io5';
import AddressInfo from '../../components/AddressInfo';
import OrderInfo from '../../components/OrderInfo';
import FavoriteList from '../../components/FavoriteList';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { logout } from '../../api/postData';
import { FaList } from 'react-icons/fa';
import { useEffect } from 'react';

const bankState = {
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
};
const notifySuccess = (value) => toast.success(value);

const UserPage = () => {
    const [gridDisplay, setGridDisplay] = useState(false);
    const [showSymbol, setShowSymbol] = useState(false);
    const [sections, setSectionState] = useState({ ...bankState, section1: true });
    const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();

    const handleSelect = (event) => {
        console.log(event);
        setSectionState((state) => ({ ...bankState, [event.target.id]: true }));
    }

    const handleLogout = async () => {
        const response = await logout('/api/user/logout');
        console.log(response);
        setIsUserLoggedIn(false);
        notifySuccess('Logout Successful');
    }

    const handleImgUpload = async (event) => {
        console.log('upload img event');
        console.log(event);
    }

    useEffect(() => {
        console.log('User page opened');
    }, []);

    return (
        <div className='block'>
            <div className='container'>
                <div className='flex gap-4 py-4'>
                    {/* user sidebar content */}
                    <div className='w-[20%] h-full border-2 rounded-md bg-global-gray overflow-hidden'>
                        {/* profile pic */}
                        <div className='flex flex-col p-4 bg-white'>
                            <div className='flex justify-center'>
                                <div className='border-4 rounded-full overflow-hidden relative'>
                                    <img src={profile} width={'150px'} />
                                    <div
                                        className='overlay flex items-center justify-center w-[100%] h-[100%] absolute top-0 left-0 hover:bg-[rgba(0,0,0,0.6)] transition-all'
                                        onMouseEnter={() => setShowSymbol(true)}
                                        onMouseLeave={() => setShowSymbol(false)}
                                    >
                                        {showSymbol && <input type="file" className='cursor-pointer absolute top-0 left-0 w-full h-full opacity-0' onChange={handleImgUpload} />}
                                        {showSymbol && <IoMdCloudUpload className='text-4xl text-white' />}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 flex flex-col items-center'>
                                <span className='text-primary text-lg font-semibold'>Rijoy Chowdhury</span>
                                <span className='text-base'>test3@test.com</span>
                            </div>
                        </div>

                        {/* profile section headers */}
                        <ul className='text-black text-base flex flex-col '>
                            <li
                                id="section1"
                                className={`flex items-center gap-2 py-3 pl-5 border-l-4 hover:bg-custom-gray hover:border-l-primary cursor-pointer ${sections.section1 ? 'border-l-primary' : ''}`}
                                onClick={handleSelect}
                            >
                                <IoIosInformationCircleOutline className='text-2xl' />Information
                            </li>
                            <li
                                id="section2"
                                className={`flex items-center gap-2 py-3 pl-5 border-l-4 hover:bg-custom-gray hover:border-l-primary cursor-pointer ${sections.section2 ? 'border-l-primary' : ''}`}
                                onClick={handleSelect}
                            >
                                <IoLocationOutline className='text-2xl' />Address
                            </li>
                            <li
                                id="section3"
                                className={`flex items-center gap-2 py-3 pl-5 border-l-4 hover:bg-custom-gray hover:border-l-primary cursor-pointer ${sections.section3 ? 'border-l-primary' : ''}`}
                                onClick={handleSelect}
                            >
                                <HiOutlineArchiveBox className='text-2xl' />My Orders
                            </li>
                            <li
                                id="section4"
                                className={`flex items-center gap-2 py-3 pl-5 border-l-4 hover:bg-custom-gray hover:border-l-primary cursor-pointer ${sections.section4 ? 'border-l-primary' : ''}`}
                                onClick={handleSelect}
                            >
                                <IoIosHeartEmpty className='text-2xl' />My Wishlist
                            </li>
                            <li
                                id="section5"
                                className={`flex items-center gap-2 py-3 pl-5 border-l-4 hover:bg-custom-gray hover:border-l-primary cursor-pointer ${sections.section5 ? 'border-l-primary' : ''}`}
                                onClick={handleLogout}
                            >
                                <IoLogOutOutline className='text-2xl' />Logout
                            </li>
                        </ul>
                    </div>

                    {/* main bar contenr */}
                    <div className='w-[80%] border-2 rounded-md overflow-hidden'>
                        {/* personal info section */}
                        <div className={`${sections.section1 ? '' : 'hidden'} flex flex-col items-center`}>
                            <div className='w-full border-b-2 p-4 text-xl'><span>Personal Information</span></div>
                            <div className='w-[77%]'><UserInfo /></div>
                        </div>

                        {/* user address section */}
                        <div className={`${sections.section2 ? '' : 'hidden'} flex flex-col items-center`}>
                            <div className='w-full border-b-2 p-4 text-xl'><span>Address</span></div>
                            <div className='w-[77%]'><AddressInfo /></div>
                        </div>

                        {/* order section */}
                        <div className={`${sections.section3 ? '' : 'hidden'} flex flex-col items-center`}>
                            <div className='w-full border-b-2 p-4 text-xl'><span>My Orders</span></div>
                            <div className='w-full h-[500px] overflow-auto'><OrderInfo /></div>
                        </div>

                        {/* wishlist section */}
                        <div className={`${sections.section4 ? '' : 'hidden'} flex flex-col items-center`}>
                            <div className='w-full border-b-2 p-4 text-xl flex justify-between items-center'>
                                <span>My Wishlist</span>
                                <div className='flex gap-4'>
                                    <div className='grid-type text-lg cursor-pointer hover:text-primary' onClick={() => setGridDisplay(true)}><IoGridOutline /></div>
                                    <div className='list-type text-lg cursor-pointer hover:text-primary' onClick={() => setGridDisplay(false)}><FaList /></div>
                                </div>
                            </div>
                            <div className='w-full h-[500px] overflow-scroll'><FavoriteList displayGrid={gridDisplay} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserPage;