import { FormControl, TextField } from '@mui/material';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
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
                                <button id="submit-login" className="btn" data-link-action="sign-in" type="submit">
                                    Send Reset Link
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <Link to="/login" className='flex gap-2 items-center link mt-4'><FaChevronLeft /> Back to login</Link>
            </div>
        </div>
    )
};

export default ForgotPassword;