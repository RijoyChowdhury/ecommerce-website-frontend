import { FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FaCheck, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OTPBox from '../../components/OTPBox';
import OtpInputBox from '../../components/OtpInputBox';

const ForgotPassword = () => {
    const [showOTPWindow, setShowOTPWindow] = useState(false);
    const handleOTPGeneration = () => {
        setShowOTPWindow(true);
    };
    return (
        <div className='block'>
            <div className='container login-wrapper py-8'>
                <header className="page-header mb-4">
                    <h1 className='text-black text-2xl font-medium'>
                        Forgot your password?
                    </h1>
                </header>
                <section className='border-2 rounded-md p-8'>
                    <div className='mb-4'>Please enter the email address you used to register. You will receive a temporary link to reset your password.</div>
                    {!showOTPWindow && <div className='flex flex-col'>
                        <div className='flex justify-center'>
                            <div className='flex gap-6 w-[75%]'>
                                {/* email section */}
                                <div className="form-group row w-[100%]">
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                                    </FormControl>
                                </div>

                                {/* submit button */}
                                <div className='w-[300px]'>
                                    <button id="submit-login" className="btn" data-link-action="sign-in" type="submit" onClick={handleOTPGeneration}>
                                        Send Reset Link
                                    </button>
                                </div>
                                {/* <div className='w-[20%]'><button className='btn'>Change Password</button></div> */}
                            </div>
                        </div>
                    </div>}
                    {showOTPWindow && <div className='flex items-center flex-col'>
                        <div className='flex border-2 border-green-500 h-[50px]'>
                            <div className='flex items-center border-r-2 border-green-500 bg-green-500 text-white p-4'><FaCheck /></div>
                            <span className='flex items-center px-4'>If this email address has been registered in our shop, you will receive an OTP to reset your password at yuiyuiuyi@jkjhk.com.</span>
                        </div>

                        <div className='mt-4'>
                            <OtpInputBox />
                        </div>
                    </div>}
                </section>
                <div className='flex'><Link to="/login" className='flex gap-2 items-center link mt-4 border-2'><FaChevronLeft /> Back to login</Link></div>
            </div>
        </div>
    )
};

export default ForgotPassword;