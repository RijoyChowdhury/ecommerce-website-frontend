import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { MdAccountCircle, MdVisibility, MdVisibilityOff } from 'react-icons/md';
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

                            {/* prefix section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[15%] text-base flex justify-end'><span>Preferred Prefix</span></div>
                                <div className='w-[85%] ml-2'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="single" control={<Radio />} label="Mr./Ms." />
                                            <FormControlLabel value="married" control={<Radio />} label="Mrs." />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>

                            {/* first name section */}
                            <div className="form-group row flex items-baseline gap-2">
                                <div className='w-[15%] text-base flex justify-end'><span>First Name</span></div>
                                <div className='w-[85%] flex flex-col'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" variant="outlined" size="small" />
                                    </FormControl>
                                    <span>Only letters and the dot (.) character, followed by a space, are allowed.</span>
                                </div>
                            </div>

                            {/* last name section */}
                            <div className="form-group row flex items-baseline gap-2">
                                <div className='w-[15%] text-base flex justify-end'><span>Last Name</span></div>
                                <div className='w-[85%] flex flex-col'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" variant="outlined" size="small" />
                                    </FormControl>
                                    <span>Only letters and the dot (.) character, followed by a space, are allowed.</span>
                                </div>
                            </div>

                            {/* email section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[15%] text-base flex justify-end'><span>Email</span></div>
                                <div className='w-[85%]'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" variant="outlined" size="small" />
                                    </FormControl>
                                </div>
                            </div>

                            {/* password section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[15%] text-base flex justify-end'><span>Password</span></div>
                                <div className='w-[85%]'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" type={showPassword ? 'text' : 'password'} variant="outlined" size="small"
                                            slotProps={{
                                                input: {
                                                    endAdornment: (
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
                                                                disableRipple={true}
                                                            >
                                                                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            {/* dob section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[15%] text-base flex justify-end'><span>Date of Birth</span></div>
                                <div className='w-[85%]'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" placeholder="DD/MM/YYYY" variant="outlined" size="small" />
                                    </FormControl>
                                </div>
                            </div>

                            {/* service checklist */}
                            <div className='flex justify-end'>
                                <ul className='w-[84%] flex flex-col gap-4'>
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
                            <div className='h-[40px] flex justify-center'>
                                <button className='btn !w-[20%]'>Create</button>
                            </div>

                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
};

export default SignIn;