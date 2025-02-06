import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

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
                        <form id="login-form" className='w-[70%]'>
                            <div className='flex flex-col gap-6'>
                                {/* email section */}
                                <div className="form-group row flex justify-center">                                    
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                                    </FormControl>
                                </div>

                                {/* password section */}
                                <div className="form-group row flex justify-center">
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label={
                                                            showPassword ? 'hide the password' : 'display the password'
                                                        }
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        onMouseUp={handleMouseUpPassword}
                                                        edge="end"
                                                        className='hover:text-primary'
                                                    >
                                                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
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
                                <button id="submit-login" className="btn" data-link-action="sign-in" type="submit">
                                    Sign in
                                </button>
                            </footer>
                        </form>
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