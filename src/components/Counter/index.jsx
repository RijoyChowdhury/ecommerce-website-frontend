import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Counter = (props) => {
    const {start, limit, step} = props;
    const [count, setCount] = useState(start);
    
    const handleStepUp = () => setCount(state => state + step);
    
    const handleStepDown = () => setCount(state => state - step);

    return (
        <div className='border-[1px] border-stone-300 h-[100%] w-[100%] flex'>
            <div className='w-[75%] flex items-center text-base pl-2'>
                <span>{count}</span>
            </div>
            <div className='w-[25%] border-l-[1px] border-stone-300 flex flex-col'>
                <div className='h-[50%] text-xs border-b-[1px] border-stone-300 text-black hover:bg-custom-gray transition-all flex justify-center items-center' onClick={handleStepUp}>
                    <FaChevronUp />
                </div>
                <div className='h-[50%] text-xs text-black hover:bg-custom-gray transition-all flex justify-center items-center' onClick={handleStepDown}>
                    <FaChevronDown />
                </div>
            </div>
        </div>
    )
};

export default Counter;