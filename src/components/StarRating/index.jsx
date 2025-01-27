import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    return (
        <>
            <div className="star text-yellow"><FaStar /></div>
            <div className="star text-yellow"><FaStar /></div>
            <div className="star text-yellow"><FaStar /></div>
            <div className="star text-custom-gray"><FaStar /></div>
            <div className="star text-custom-gray"><FaStar /></div>
        </>
    )
};

export default StarRating;