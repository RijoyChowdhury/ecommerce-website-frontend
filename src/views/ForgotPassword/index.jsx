import { FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FaCheck, FaChevronLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import OtpInputBox from '../../components/OtpInputBox';
import { postData } from '../../api/postData';
import toast from 'react-hot-toast';

const notifySuccess = (value) => toast.success(value);
const notifyError = (value) => toast.error(value);
const blankForm = {
    email: '',
    newPassword: '',
    confirmPassword: '',
};

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState({ ...blankForm });
    const [showEmailWindow, setShowEmailWindow] = useState(true);
    const [showOTPWindow, setShowOTPWindow] = useState(false);
    const [showChangePasswordWindow, setShowChangePasswordWindow] = useState(false);
    
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormFields((state) => ({
            ...state,
            [name]: value,
        }));
    }
    
    const flushFormData = () => {
        setFormFields((state) => ({ ...blankForm }));
    }
    
    const handleOTPGeneration = async () => {
        const response = await postData('/api/user/forgot-password', { email: formFields.email });
        if (response.success) {
            notifySuccess('OTP sent.');
            setShowEmailWindow(false);
            setShowOTPWindow(true);
        }
        if (response.error) {
            notifyError(response.message);
        }
    };
    
    const verifyOTP = async (otp) => {
        if (otp <= 99999) {
            notifyError('Invalid OTP');
            return;
        }
        const response = await postData('/api/user/verify-forgot-password-otp', { email: formFields.email, otp });
        if (response.success) {
            notifySuccess(response.message);
            setShowOTPWindow(false);
            setShowEmailWindow(false);
            setShowChangePasswordWindow(true);
        }
        if (response.error) {
            notifyError(response.message);
        }
    }
    
    const changePassword = async () => {
        const response = await postData('/api/user/reset-password', { ...formFields });
        if (response.success) {
            notifySuccess(response.message);
            flushFormData();
            navigate('/login');
        }
        if (response.error) {
            notifyError(response.message);
        }
    }
    
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
                    {showEmailWindow && <div className='flex flex-col'>
                        <div className='flex justify-center'>
                            <div className='flex gap-6 w-[75%]'>
                                {/* email section */}
                                <div className="form-group row w-[100%]">
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" value={formFields.email} name="email" label="Email" variant="outlined" onChange={e => handleInput(e)} />
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

                    {/* OTP input box */}
                    {showOTPWindow && <div className='flex items-center flex-col'>
                        <div className='flex border-2 border-green-500 h-[50px]'>
                            <div className='flex items-center border-r-2 border-green-500 bg-green-500 text-white p-4'>
                                <FaCheck />
                            </div>
                            <span className='flex items-center px-4'>If this email address has been registered in our shop,
                                you will receive an OTP to reset your password at <span className='text-primary pl-1'>{formFields.email}</span>.
                            </span>
                        </div>

                        <div className='mt-4'>
                            <OtpInputBox onSubmit={verifyOTP} />
                        </div>
                    </div>}

                    {/* Change password box */}
                    {showChangePasswordWindow && <div className='flex justify-center'>
                        <div className='w-[55%] flex flex-col gap-4'>
                            <div className="form-group row w-[100%]">
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <TextField id="outlined-basic" value={formFields.email} type='text' name="email" label="Email" variant="outlined" />
                                </FormControl>
                            </div>
                            <div className="form-group row w-[100%]">
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <TextField id="outlined-basic" value={formFields.newPassword} type='password' name="newPassword" label="Password" variant="outlined" onChange={e => handleInput(e)} />
                                </FormControl>
                            </div>
                            <div className="form-group row w-[100%]">
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <TextField id="outlined-basic" value={formFields.confirmPassword} type='password' name="confirmPassword" label="Confirm Password" variant="outlined" onChange={e => handleInput(e)} />
                                </FormControl>
                            </div>
                            <div className='flex justify-center'>
                                <div className='w-[300px] h-[50px]'>
                                    <button id="submit-login" className="btn" data-link-action="sign-in" type="submit" onClick={changePassword}>
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </section>
                <div className='flex'>
                    <Link to="/login" className='flex gap-2 items-center link mt-4'>
                        <FaChevronLeft /> Back to login
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ForgotPassword;