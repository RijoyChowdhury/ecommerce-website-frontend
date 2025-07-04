import React, { useState } from 'react';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const ColorCheckbox = ({val, checked = false, onChange, children}) => {

    return (
        <div className='flex items-center'>
            <div className={`inline-block border-[2px] rounded-full ${checked ? 'border-primary' : 'border-transparent hover:border-stone-300'}`} onClick={() => onChange(!checked)}>
                <RiCheckboxBlankCircleFill className='cursor-pointer' style={{color: `${val}`}} />
            </div>
            <div className='text-sm link' onClick={() => onChange(!checked)}><span className='align-middle leading-3'>{children}</span></div>
        </div>
    )
};

export default ColorCheckbox;