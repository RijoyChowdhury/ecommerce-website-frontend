import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import OtpInputBox from '../../components/OtpInputBox';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const notifySuccess = (value) => toast.success(value);
const notifyError = (value) => toast.error(value);

const VerifyAccount = () => {
    const navigate = useNavigate();

    const verifyOTP = (otp) => {
        console.log('OTP:', otp);
        if (otp < 99999) {
            notifyError('Invalid OTP');
        } else {
            notifySuccess('Email Verified. Taking you to Login screen.');
            setTimeout(() => navigate('/login'), 5000);
        }
    }

    return (
        <>
            <div className='block'>
                <div className='container verify-otp-wrapper py-8'>
                    <header className="page-header mb-4">
                        <h1 className='text-black text-2xl font-medium'>
                            Verify Account
                        </h1>
                    </header>
                    <section>
                        <div className=' flex flex-col items-center py-4 border-2'>
                            <div className='flex border-2 border-green-500 h-[50px] mb-4'>
                                <div className='flex items-center border-r-2 border-green-500 bg-green-500 text-white p-4'><FaCheck /></div>
                                <span className='flex items-center px-4'>Please enter the 6-digit OTP that has been sent to your registered email address.</span>
                            </div>

                            <div className=''>
                                <OtpInputBox onSubmit={verifyOTP} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Toaster />
        </>
    )
};

export default VerifyAccount;