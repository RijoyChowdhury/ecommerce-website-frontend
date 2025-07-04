import React, { useState } from 'react';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

const Checkbox = ({ value, onChange, children }) => {
    return (
        <div className='flex items-center'>
            <div className='inline-block text-base'>
                {value
                    ? <GrCheckboxSelected className='cursor-pointer' onClick={() => onChange(false)} />
                    : <GrCheckbox className='cursor-pointer' onClick={() => onChange(true)} />
                }
            </div>
            <div className='text-sm' onClick={() => onChange(!value)}>
                <span className='align-middle leading-3 cursor-pointer'>
                    {children}
                </span>
            </div>
        </div>
    )
};

export default Checkbox;