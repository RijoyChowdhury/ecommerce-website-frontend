import React, { useState } from 'react';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

const Checkbox = ({children}) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className='flex items-center'>
            <div className='inline-block text-base mr-1'>{checked
                ? <GrCheckbox className='cursor-pointer' onClick={() => setChecked(false)} />
                : <GrCheckboxSelected className='cursor-pointer' onClick={() => setChecked(true)} />}
            </div>
            <div className='text-sm link' onClick={() => setChecked(!checked)}><span className='align-middle leading-3'>{children}</span></div>
        </div>
    )
};

export default Checkbox;