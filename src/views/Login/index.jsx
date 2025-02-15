import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { CircularProgress, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slices/userSlice';

const notifySuccess = (value) => toast.success(value);
const notifyError = (value) => toast.error(value);

const blankForm = {
    email: '',
    password: '',
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState({ ...blankForm });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const { loginUser } = actions;

    const handleClickShowPassword = () => setShowPassword((show) => !show);

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

    const submitForm = async () => {
        setIsLoggingIn(true);
        const response = await dispatch(loginUser({ ...formFields })).unwrap();
        setIsLoggingIn(false);
        if (response.success) {
            flushFormData();
            notifySuccess(response.message);
            navigate('/');
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
                        Log in to your account
                    </h1>
                </header>
                <section className='border-2 rounded-md p-8'>
                    <section id="content" className='border-b-2 flex justify-center'>
                        <div id="login-form" className='w-[50%]'>
                            <div className='flex flex-col gap-6'>
                                {/* email section */}
                                <div className="form-group row flex justify-center">
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" value={formFields.email} name="email" label="Email" variant="outlined" onChange={e => handleInput(e)} />
                                    </FormControl>
                                </div>

                                {/* password section */}
                                <div className="form-group row flex justify-center">
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={formFields.password}
                                            name="password"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label={
                                                            showPassword ? 'hide the password' : 'display the password'
                                                        }
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                        className='hover:text-primary'
                                                        disableRipple={true}
                                                    >
                                                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                            onChange={e => handleInput(e)}
                                        />
                                    </FormControl>
                                </div>

                                {/* forgot password */}
                                <div className="forgot-password flex justify-center">
                                    <Link className='link' to="/forgotpassword" >
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            {/* sign in button */}
                            <footer className="form-footer text-sm-center clearfix my-4 h-[50px]">
                                <button id="submit-login" className={`btn ${isLoggingIn ? '!bg-white !text-primary' : ''}`} disabled={isLoggingIn} onClick={submitForm}>
                                    {isLoggingIn
                                        ? <span className='flex justify-center'>
                                            <CircularProgress sx={{ color: '#ff5252' }} size="20px" className='mr-4' />
                                            Signing In..
                                        </span>
                                        : 'Sign In'
                                    }
                                </button>
                            </footer>
                        </div>
                    </section>

                    {/* no account */}
                    <div id="no-account" className='flex justify-center mt-6'>
                        <Link className='link' to='/register'>
                            No account? Create one here
                        </Link>
                    </div>

                </section>
            </div>
        </div>
    )
};

export default Login;