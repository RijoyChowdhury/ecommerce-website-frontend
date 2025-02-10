import React, { useState } from 'react';
import profile from '../../assets/images/deku.webp';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { TiHeartOutline, TiLocationOutline } from 'react-icons/ti';
import { HiOutlineArchiveBox } from 'react-icons/hi2';

const bankState = {
    section1: false,
    section2: false,
    section3: false,
    section4: false,
};

const UserPage = () => {
    const [sections, setSectionState] = useState({...bankState});

    const handleSelect = (event) => {
        console.log(event);
        setSectionState((state) => ({...bankState, [event.target.id]: true}));
    }

    console.log(sections);

    return (
        <div className='block'>
            <div className='container'>
                <div className='flex gap-4 py-4'>
                    {/* user sidebar content */}
                    <div className='w-[20%] border-2 rounded-md bg-global-gray overflow-hidden'>
                        {/* profile pic */}
                        <div className='flex flex-col p-4 bg-white'>
                            <div className='flex justify-center'>
                                <div className='border-4 rounded-full overflow-hidden'>
                                    <img src={profile} width={'150px'} />
                                </div>
                            </div>
                            <div className='mt-4 flex flex-col items-center'>
                                <span className='text-primary text-lg font-semibold'>Rijoy Chowdhury</span>
                                <span className='text-base'>test3@test.com</span>
                            </div>
                        </div>

                        {/* profile section headers */}
                        <ul className='text-black text-base flex flex-col py-2'>
                            <li className={`flex items-center gap-2 py-2 pl-5 border-4 ${sections.section1 ? 'border-l-primary' : ''}`} id="section1" onClick={handleSelect}>
                                <IoIosInformationCircleOutline className='text-2xl' />Information
                            </li>
                            <li className={`flex items-center gap-2 py-2 pl-5 border-4 ${sections.section2 ? 'border-l-primary' : ''}`} id="section2" onClick={handleSelect}>
                                <TiLocationOutline className='text-2xl' />Address

                            </li>
                            <li className={`flex items-center gap-2 py-2 pl-5 border-4 ${sections.section3 ? 'border-l-primary' : ''}`} id="section3" onClick={handleSelect}>
                                <HiOutlineArchiveBox className='text-2xl' />My Orders

                            </li>
                            <li className={`flex items-center gap-2 py-2 pl-5 border-4 ${sections.section4 ? 'border-l-primary' : ''}`} id="section4" onClick={handleSelect}>
                                <TiHeartOutline className='text-2xl' />My Wishlist

                            </li>
                        </ul>
                    </div>

                    {/* main bar contenr */}
                    <div className='w-[80%] border-2 rounded-md h-[300px]'>Setting</div>
                </div>
            </div>
        </div>
    )
};

export default UserPage;