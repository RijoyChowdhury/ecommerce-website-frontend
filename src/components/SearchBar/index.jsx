import React from 'react';
import './style.css';

const SearchBar = () => {
  return (
    <div className='searchBox w-[100%] h-[40px] flex justify-between gap-2'>
      <input className='w-[90%] h-full' type='text' placeholder='Search...' />
      <div className='w-[15%]'>
        <button className='btn transition'>
          <span className='text-xs'>Search</span>
        </button>
      </div>
    </div>
  )
};

export default SearchBar;