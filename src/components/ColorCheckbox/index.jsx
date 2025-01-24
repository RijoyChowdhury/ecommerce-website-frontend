import React, { useState } from 'react';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const ColorCheckbox = ({val, children}) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className='flex items-center'>
            <div className='inline-block mr-1 border-[2px] border-white hover:border-stone-300 rounded-full'>
                <RiCheckboxBlankCircleFill className='cursor-pointer' style={{color: `${val}`}} onClick={() => setChecked(true)} />
            </div>
            <div className='text-sm link' onClick={() => setChecked(!checked)}><span className='align-middle leading-3'>{children}</span></div>
        </div>
    )
};

export default ColorCheckbox;