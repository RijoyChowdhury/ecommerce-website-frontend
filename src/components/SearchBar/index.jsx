import React from 'react';
import './style.css';
import { Button } from '@mui/material';

const SearchBar = () => {
  return (
    <div className='searchBox w-[100%] h-[40px] flex justify-between gap-2'>
        <input className='w-[90%] h-full' type='text' placeholder='Search...' />
        <Button variant="contained" className='submit-btn bg-primary'>Search</Button>
    </div>
  )
};

export default SearchBar;