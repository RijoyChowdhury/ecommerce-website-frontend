import React from 'react';
import { Tooltip } from '@mui/material';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ value = 0, showTooltip = true }) => {
    return (
        <Tooltip title={`Rating: ${value}`} placement="top" arrow>
            <div className='flex'>
                {new Array(Math.floor(value)).fill(0).map((val, index) => <div key={index} className="star text-yellow"><FaStar /></div>)}
                {new Array(Math.ceil(5 - value)).fill(0).map((val, index) => <div className="star text-custom-gray"><FaStar /></div>)}
            </div>
        </Tooltip>
    )
};

export default StarRating;