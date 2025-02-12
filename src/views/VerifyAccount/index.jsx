import React from 'react';
import toast from 'react-hot-toast';
import OtpInputBox from '../../components/OtpInputBox';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { verifyOTP } from '../../api/postData';

const notifySuccess = (value) => toast.success(value);
const notifyError = (value) => toast.error(value);

const VerifyAccount = () => {
    const navigate = useNavigate();

    const submitOTP = async (otp) => {
        if (otp < 99999) {
            notifyError('Invalid OTP');
            return;
        }
        const response = await verifyOTP('/api/user/verify-email', {
            email: localStorage.getItem('userEmail'),
            otp,
        });
        if (response.success) {
            notifySuccess('Email Verified. Taking you to Login screen.');
            navigate('/login');
        }
        if (response.error) {
            notifyError('Invalid OTP');
        }
    }

    return (
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
                            <OtpInputBox onSubmit={submitOTP} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default VerifyAccount;