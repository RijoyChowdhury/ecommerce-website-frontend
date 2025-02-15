import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress, FormControl, FormControlLabel, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { MdAccountCircle, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import toast from 'react-hot-toast';
import Checkbox from '../../components/Checkbox';
import { postData } from '../../api/dataService';

const RadioStyle = {
    color: 'var(--gray)',
    '&.Mui-checked': {
        color: 'var(--primary)',
    },
};

const notifySuccess = (value) => toast.success(value);
const notifyError = (value) => toast.error(value);

const blankForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    userPrefix: '',
};

const Register = () => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState({ ...blankForm });

    const [partnerOffers, setPartnerOffers] = useState(false);
    const [newsletterSubscription, setNewsletterSubscription] = useState(false);
    const [customerDataPrivacy, setCustomerDataPrivacy] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormFields((state) => ({
            ...state,
            [name]: value,
        }));
    }

    const isBtnDisabled = () => {
        const { firstName, lastName, email, password, userPrefix } = formFields;
        return !firstName || !lastName || !email || !password || !userPrefix || !agreeToTerms;
    }

    const flushFormData = () => {
        setFormFields((state) => ({ ...blankForm }));
    }

    const submitForm = async () => {
        try {
            setLoading(true);
            const { firstName, lastName } = formFields;
            const response = await postData('/api/user/register', {
                name: `${firstName} ${lastName}`,
                ...formFields,
            });
            setLoading(false);
            if (response.success) {
                notifySuccess('User registered.');
            }
            if (response.error) {
                notifyError('User already registered with this email.');
            }
            localStorage.setItem('userEmail', formFields.email);
            flushFormData();
            navigate('/verifyaccount');
        } catch (err) {
            console.log(err);
        }
    }

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    // const handleMouseUpPassword = (event) => {
    //     event.preventDefault();
    // };

    return (
        <div className='block'>
            <div className='container sigin-wrapper py-8'>
                <header className="page-header mb-4">
                    <h1 className='text-black text-2xl font-medium'>
                        Create an account
                    </h1>
                </header>

                <section className='border-2 rounded-md p-8'>
                    <div className='mb-4'>
                        <span className='mr-1'>Already have an account?</span>
                        <Link to="/login" className='text-primary underline cursor-pointer'>Log In Instead!</Link>
                    </div>

                    <section className='sigin-form flex justify-center'>
                        <div className='form w-[65%] flex flex-col gap-6'>

                            {/* prefix section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[18%] text-base flex justify-end'>
                                    <span>Preferred Prefix<sup className='text-primary text-lg'>*</sup></span>
                                </div>
                                <div className='w-[82%] ml-2 flex'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            value={formFields.userPrefix}
                                            name="userPrefix"
                                            className='flex gap-8'
                                            onChange={e => handleInput(e)}
                                        >
                                            <FormControlLabel value="single" control={<Radio sx={RadioStyle} disableRipple={true} />} label="Mr./Ms." />
                                            <FormControlLabel value="married" control={<Radio sx={RadioStyle} disableRipple={true} />} label="Mrs." />
                                        </RadioGroup>
                                    </FormControl>
                                    <div className='flex items-center justify-end gap-2 w-[100%]'>
                                        <span className='text-primary text-2xl'>*</span>
                                        <em>Required Fields</em>
                                    </div>
                                </div>
                            </div>

                            {/* first name section */}
                            <div className="form-group row flex items-baseline gap-2">
                                <div className='w-[18%] text-base flex justify-end'>
                                    <span>First Name<sup className='text-primary text-lg'>*</sup></span>
                                </div>
                                <div className='w-[82%] flex flex-col'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" value={formFields.firstName} name='firstName' variant="outlined" size="small" onChange={e => handleInput(e)} />
                                    </FormControl>
                                    <span>Only letters and the dot (.) character, followed by a space, are allowed.</span>
                                </div>
                            </div>

                            {/* last name section */}
                            <div className="form-group row flex items-baseline gap-2">
                                <div className='w-[18%] text-base flex justify-end'><span>Last Name<sup className='text-primary text-lg'>*</sup></span></div>
                                <div className='w-[82%] flex flex-col'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" value={formFields.lastName} name='lastName' variant="outlined" size="small" onChange={e => handleInput(e)} />
                                    </FormControl>
                                    <span>Only letters and the dot (.) character, followed by a space, are allowed.</span>
                                </div>
                            </div>

                            {/* email section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[18%] text-base flex justify-end'><span>Email<sup className='text-primary text-lg'>*</sup></span></div>
                                <div className='w-[82%]'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" value={formFields.email} name="email" variant="outlined" size="small" onChange={e => handleInput(e)} />
                                    </FormControl>
                                </div>
                            </div>

                            {/* address section */}
                            {/* <div className='flex flex-col gap-6'>
                                <div className="form-group row flex items-center gap-2">
                                    <div className='w-[18%] text-base flex justify-end'><span>Address<sup className='text-primary text-lg'>*</sup></span></div>
                                    <div className='w-[82%]'>
                                        <FormControl sx={{ width: '100%' }} variant="outlined">
                                            <TextField id="outlined-basic" placeholder="House No. and Street Name" variant="outlined" size="small" />
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="form-group row flex items-center gap-2">
                                    <div className='w-[18%] text-base flex justify-end'></div>
                                    <div className='w-[82%]'>
                                        <FormControl sx={{ width: '100%' }} variant="outlined">
                                            <TextField id="outlined-basic" placeholder="Apartment Name, Area (optional)" variant="outlined" size="small" />
                                        </FormControl>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[18%] text-base flex justify-end'><span>Town/City<sup className='text-primary text-lg'>*</sup></span></div>
                                <div className='w-[82%]'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" variant="outlined" size="small" />
                                    </FormControl>
                                </div>
                            </div>


                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[18%] text-base flex justify-end'><span>State<sup className='text-primary text-lg'>*</sup></span></div>
                                <div className='w-[82%] flex justify-between'>
                                    <FormControl sx={{ width: '40%' }} variant="outlined">
                                        <TextField id="outlined-basic" variant="outlined" size="small" />
                                    </FormControl>

                                    <div className='flex w-[55%]'>
                                        <div className='text-base flex items-center mr-2'>Country<sup className='text-primary text-lg'>*</sup></div>
                                        <FormControl sx={{ width: '100%' }} variant="outlined">
                                            <TextField id="outlined-basic" variant="outlined" size="small" />
                                        </FormControl>
                                    </div>

                                </div>
                            </div> */}


                            {/* password section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[18%] text-base flex justify-end'>
                                    <span className='pr-2'>Password</span>
                                </div>
                                <div className='w-[82%]'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" value={formFields.password} name="password" type={showPassword ? 'text' : 'password'} variant="outlined" size="small"
                                            slotProps={{
                                                input: {
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label={
                                                                    showPassword ? 'hide the password' : 'display the password'
                                                                }
                                                                onClick={handleClickShowPassword}
                                                                // onMouseDown={handleMouseDownPassword}
                                                                // onMouseUp={handleMouseUpPassword}
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
                                            onChange={e => handleInput(e)}
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            {/* confirm password section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[18%] text-base flex justify-end'>
                                    <span className='pr-2'>Confirm Password</span>
                                </div>
                                <div className='w-[82%]'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" value={formFields.confirmPassword} name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} variant="outlined" size="small"
                                            slotProps={{
                                                input: {
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label={
                                                                    showConfirmPassword ? 'hide the password' : 'display the password'
                                                                }
                                                                onClick={handleClickShowConfirmPassword}
                                                                // onMouseDown={handleMouseDownPassword}
                                                                // onMouseUp={handleMouseUpPassword}
                                                                edge="end"
                                                                className='hover:text-primary'
                                                                disableRipple={true}
                                                            >
                                                                {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                            onChange={e => handleInput(e)}
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            {/* dob section */}
                            <div className="form-group row flex items-center gap-2">
                                <div className='w-[18%] text-base flex justify-end'>
                                    <span className='pr-2'>Date of Birth</span>
                                </div>
                                <div className='w-[82%]'>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <TextField id="outlined-basic" name="dateOfBirth" placeholder="DD/MM/YYYY" variant="outlined" size="small"
                                            slotProps={{
                                                input: {
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <em className='text-sm'>Optional</em>
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                            onChange={e => handleInput(e)}
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            {/* service checklist */}
                            <div className='flex justify-end'>
                                <ul className='w-[81%] flex flex-col gap-4'>
                                    <li>
                                        <div>
                                            <Checkbox value={partnerOffers} setValue={setPartnerOffers}>
                                                <span className='ml-1 link'>Receive offers from our partners</span>
                                            </Checkbox>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Checkbox value={newsletterSubscription} setValue={setNewsletterSubscription}>
                                                <span className='ml-1 link'>Sign up for our newsletter</span>
                                            </Checkbox>
                                            <em className='leading-tight text-stone-400'>
                                                You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
                                            </em>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Checkbox value={customerDataPrivacy} setValue={setCustomerDataPrivacy}>
                                                <span className='ml-1 link'>Customer data privacy</span>
                                            </Checkbox>
                                            <em className='leading-tight text-stone-400'>
                                                <span>
                                                    The personal data you provide is used to answer queries, process orders or allow access to specific information.
                                                    You have the right to modify and delete all the personal information found in the "My Account" page.
                                                </span>
                                            </em>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <Checkbox value={agreeToTerms} setValue={setAgreeToTerms}>
                                                <span className='ml-1 link'>
                                                    I agree to the terms and conditions and the privacy policy
                                                    <sup className='text-primary text-sm'>*</sup>
                                                </span>
                                            </Checkbox>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* submit btn */}
                            <div className='h-[40px] flex justify-center'>
                                <button className={`btn !w-[20%] ${isBtnDisabled() || loading ? 'btn-disabled' : ''}`} disabled={isBtnDisabled()} onClick={submitForm}>
                                    {loading ? <span className='flex justify-center'><CircularProgress sx={{ color: 'white' }} size="20px" /></span> : 'Register'}
                                </button>
                            </div>

                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
};

export default Register;