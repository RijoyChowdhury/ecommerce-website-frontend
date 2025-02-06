import React, { useState } from 'react';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

const Checkbox = ({ value, setValue, children }) => {
    return (
        <div className='flex items-center'>
            <div className='inline-block text-base'>
                {value
                    ? <GrCheckboxSelected className='cursor-pointer' onClick={() => setValue(false)} />
                    : <GrCheckbox className='cursor-pointer' onClick={() => setValue(true)} />
                }
            </div>
            <div className='text-sm' onClick={() => setValue(!value)}>
                <span className='align-middle leading-3 cursor-pointer'>
                    {children}
                </span>
            </div>
        </div>
    )
};

export default Checkbox;