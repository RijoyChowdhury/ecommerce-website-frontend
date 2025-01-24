import React, { useState } from 'react';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const ColorCheckbox = ({val, children}) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className='flex items-center'>
            <div className='inline-block border-[2px] border-transparent hover:border-stone-300 rounded-full'>
                <RiCheckboxBlankCircleFill className='cursor-pointer' style={{color: `${val}`}} onClick={() => setChecked(true)} />
            </div>
            <div className='text-sm link' onClick={() => setChecked(!checked)}><span className='align-middle leading-3'>{children}</span></div>
        </div>
    )
};

export default ColorCheckbox;