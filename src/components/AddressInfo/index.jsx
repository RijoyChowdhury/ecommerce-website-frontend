import React from 'react';
import { CircularProgress, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import countriesJson from '../../assets/countries.json';
import { useState } from 'react';
import { actions } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const RadioStyle = {
    color: 'var(--gray)',
    '&.Mui-checked': {
        color: 'var(--primary)',
    },
};

const blankForm = {
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: 'WB',
    pincode: '',
    country: 'IND',
    mobile: '',
    location_type: 'home',
    status: 'active',
};

const AddressInfo = ({ data }) => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState({ ...blankForm });
    const loading = false;

    const handleInput = (event) => {
        const { name, value } = event.target;
        if (name === 'country' && formFields.country !== value) {
            formFields.state = countriesJson.filter((country) => country.code3 === value)[0].states[0]?.code ?? '';
        }
        // console.log(formFields.state);
        setFormFields((state) => ({
            ...state,
            [name]: value,
        }));
    }

    const updateUserAddress = () => {
        dispatch(actions.updateUserAddress(formFields));
    }

    console.log(formFields)

    return (
        <div>
            <div className='form flex flex-col gap-6'>

                {/* delivery style prefix section */}
                <div className="form-group row flex items-center gap-2">
                    <div className='w-[18%] text-base flex justify-end'>
                        <span>Location Type<sup className='text-primary text-lg'>*</sup></span>
                    </div>
                    <div className='w-[82%] ml-2 flex'>
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                value={formFields.location_type}
                                name="location_type"
                                className='flex'
                                onChange={e => handleInput(e)}
                            >
                                <FormControlLabel value="home" control={<Radio sx={RadioStyle} disableRipple={true} />} label={<span>Home <em className='text-stone-400'>(between 8AM - 10PM)</em></span>} />
                                <FormControlLabel value="office" control={<Radio sx={RadioStyle} disableRipple={true} />} label={<span>Office <em className='text-stone-400'>(between 9AM - 7PM)</em></span>} />
                            </RadioGroup>
                        </FormControl>
                        <div className='flex items-center justify-end gap-2 w-[22%]'>
                            <span className='text-primary text-2xl'>*</span>
                            <em>Required Fields</em>
                        </div>
                    </div>
                </div>


                {/* address section */}
                <div className='flex flex-col gap-6'>
                    <div className="form-group row flex items-center gap-2">
                        <div className='w-[18%] text-base flex justify-end'><span>Address<sup className='text-primary text-lg'>*</sup></span></div>
                        <div className='w-[82%]'>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <TextField id="outlined-basic" name='address_line_1' value={formFields.address_line_1} placeholder="House No. and Street Name" variant="outlined" size="small" onChange={e => handleInput(e)} />
                            </FormControl>
                        </div>
                    </div>
                    <div className="form-group row flex items-center gap-2">
                        <div className='w-[18%] text-base flex justify-end'></div>
                        <div className='w-[82%]'>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <TextField id="outlined-basic" name='address_line_2' value={formFields.address_line_2} placeholder="Apartment Name, Area (optional)" variant="outlined" size="small" onChange={e => handleInput(e)} />
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="form-group row flex items-center gap-2">
                    <div className='w-[18%] text-base flex justify-end'><span>Town/City<sup className='text-primary text-lg'>*</sup></span></div>
                    <div className='w-[82%]'>
                        <FormControl sx={{ width: '100%' }} variant="outlined">
                            <TextField id="outlined-basic" name='city' value={formFields.city} variant="outlined" size="small" onChange={e => handleInput(e)} />
                        </FormControl>
                    </div>
                </div>


                {/* state and country dropdown */}
                <div className="form-group row flex items-center gap-2">
                    <div className='w-[18%] text-base flex justify-end'><span>State<sup className='text-primary text-lg'>*</sup></span></div>
                    <div className='w-[82%] flex justify-between'>
                        <div className='dropdown-select h-[40px]'>
                            <Select
                                value={formFields.state}
                                name='state'
                                onChange={e => handleInput(e)}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            maxHeight: 300,
                                            boxShadow: 'none',
                                            border: '1px solid #0000003b',
                                            'overflow': 'auto',
                                            borderRadius: '5px',
                                            scrollbarGutter: 'stable'
                                        }
                                    }
                                }}
                                sx={{
                                    "& fieldset": {
                                        border: "1px solid #0000003b !important",
                                    },
                                    "ul": { color: 'blue !important' },
                                    "width": "290px"
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                className='h-full !text-sm'
                            >
                                {countriesJson.filter((country) => country.code3 === formFields.country)[0].states.map((state) => <MenuItem key={state.code} value={state.code}><span className='text-sm text-stone-600'>{state.name}</span></MenuItem>)}
                            </Select>
                        </div>

                        <div className='flex justify-end'>
                            <div className='text-base flex items-center mr-2'>Country<sup className='text-primary text-lg'>*</sup></div>
                            <div className='dropdown-select h-[40px]'>
                                <Select
                                    value={formFields.country}
                                    name='country'
                                    onChange={e => handleInput(e)}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                maxHeight: 300,
                                                boxShadow: 'none',
                                                border: '1px solid #0000003b',
                                                'overflow': 'auto',
                                                borderRadius: '5px',
                                                scrollbarGutter: 'stable'
                                            }
                                        }
                                    }}
                                    sx={{
                                        "& fieldset": {
                                            border: "1px solid #0000003b !important",
                                        },
                                        "width": "290px",
                                    }}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className='h-full !text-sm'
                                >
                                    {countriesJson.map((country) => <MenuItem key={country.code3} value={country.code3}><span className='text-sm text-stone-600'>{country.name}</span></MenuItem>)}
                                </Select>
                            </div>
                        </div>

                    </div>
                </div>

                {/* pin code and phone */}
                <div className="form-group row flex items-center gap-2">
                    <div className='w-[18%] text-base flex justify-end'><span>Pincode / ZIP<sup className='text-primary text-lg'>*</sup></span></div>
                    <div className='w-[82%] flex justify-between'>
                        <div className='dropdown-select w-[270px] h-[40px]'>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <TextField id="outlined-basic" name='pincode' value={formFields.pincode} variant="outlined" size="small" onChange={e => handleInput(e)} />
                            </FormControl>
                        </div>

                        <div className='flex justify-end'>
                            <div className='text-base flex items-center mr-2'>Phone Number<sup className='text-primary text-lg'>*</sup></div>
                            <div className='dropdown-select w-[270px] h-[40px]'>
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <TextField id="outlined-basic" name='mobile' value={formFields.mobile} variant="outlined" size="small" onChange={e => handleInput(e)} />
                                </FormControl>
                            </div>
                        </div>

                    </div>
                </div>


                {/* submit btn */}
                <div className='h-[40px] flex justify-center'>
                    <button className={`btn !w-[20%] ${loading ? 'btn-disabled' : ''}`} onClick={updateUserAddress}>
                        {loading ? <span className='flex justify-center'><CircularProgress sx={{ color: 'white' }} size="20px" /></span> : 'Update'}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AddressInfo;