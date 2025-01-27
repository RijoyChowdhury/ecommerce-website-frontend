import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Checkbox from '../../components/Checkbox';

const SignIn = () => {
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
            <div className='container sigin-wrapper py-8'>
                <header className="page-header mb-4">
                    <h1 className='text-black text-2xl font-medium'>
                        Create an account
                    </h1>
                </header>

                <section className='border-2 rounded-md p-8'>
                    <div className='mb-4'>Already have an account? <Link to="/login" className='link underline'>Log In Instead!</Link></div>

                    <section className='sigin-form flex justify-center'>
                        <div className='form w-[65%] flex flex-col gap-6'>
                            {/* first name section */}
                            <div className="form-group row flex justify-center">
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                                </FormControl>
                            </div>

                            {/* last name section */}
                            <div className="form-group row flex justify-center">
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                                </FormControl>
                            </div>

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

                            {/* email section */}
                            <div className="form-group row flex justify-center">
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <TextField id="outlined-basic" label="Date of Birth" placeholder="DD/MM/YYYY" variant="outlined" />
                                </FormControl>
                            </div>

                            <div className=''>
                                <ul className='flex flex-col gap-4'>
                                    <li><div><Checkbox><span className='ml-1'>Receive offers from our partners</span></Checkbox></div></li>
                                    <li><div>
                                        <Checkbox><span className='ml-1'>Sign up for our newsletter</span></Checkbox>
                                        <em className='leading-tight text-stone-400'>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em>
                                    </div></li>
                                    <li><div>
                                        <Checkbox><span className='ml-1'>Customer data privacy</span></Checkbox>
                                        <em className='leading-tight text-stone-400'>
                                            <span>
                                                The personal data you provide is used to answer queries, process orders or allow access to specific information.
                                                You have the right to modify and delete all the personal information found in the "My Account" page.
                                            </span>
                                        </em>
                                    </div></li>
                                    <li><div><Checkbox><span className='ml-1'>I agree to the terms and conditions and the privacy policy</span></Checkbox></div></li>
                                </ul>
                            </div>

                            {/* submit btn */}
                            <div className='h-[40px]'>
                                <button className='btn'>Create</button>
                            </div>

                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
};

export default SignIn;