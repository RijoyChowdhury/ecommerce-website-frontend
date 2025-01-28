import React, { useState } from 'react';
import './style.css';

const OTPBox = ({ length, onChange }) => {
    const [otp, setOTP] = useState(new Array(length).fill(''));

    const handleChange = (event, index) => {
        console.log('cjange')
        const value = event.value;
        if (isNaN(value)) return;

        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);
        onChange(newOTP.join(''));

        if (value && index < length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    }

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    }

    return (
        <div className='otp-wrapper flex w-[30%] gap-2'>
            {otp.map((data, index) => <input
                key={index}
                autoFocus={index === 0 ? true : false}
                id={`otp-input-${index}`}
                type='text' maxlength="1"
                value={otp[index]}
                className='border-2 border-primary rounded-md p-2 w-[20%] text-lg'
                onChange={e => handleChange(e.target, index)}
                onKeyDown={e => handleKeyDown(e, index)}
            />)}
        </div>
    );
}

export default OTPBox;