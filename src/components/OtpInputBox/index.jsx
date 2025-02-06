import React, { useState } from 'react';
import OTPBox from '../OTPBox';

const OtpInputBox = ({onSubmit}) => {
    const [otp, setOTP] = useState();
    const handleChange = (value) => {
        setOTP(value);
    }
    const handleSubmit = () => {
        onSubmit(otp);
    }
    return (
        <div className='flex gap-2 justify-center'>
            <div className='flex items-center text-primary text-lg'>ENTER OTP :</div>
            <OTPBox length={6} onChange={handleChange} />
            <div className='w-[15%] ml-8'>
                <button className='btn' onClick={handleSubmit}>Verify OTP</button>
            </div>
        </div>
    )
};

export default OtpInputBox;