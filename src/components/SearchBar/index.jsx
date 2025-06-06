import React from 'react';
import './style.css';

const SearchBar = ({submitSearch, setSearchTerm, searchTerm}) => {
  const onKeyDown = (value) => {
    if (value === 'Enter' && searchTerm) {
      submitSearch();
    }
  }

  return (
    <div className='searchBox w-[100%] h-[40px] flex justify-between gap-2'>
      <input className='w-[90%] h-full' value={searchTerm} type='text' placeholder='Search...' onChange={e => setSearchTerm(e.target.value)} onKeyDown={e => onKeyDown(e.code)} />
      <div className='w-[15%]'>
        <button className='btn transition' onClick={submitSearch}>
          <span className='text-xs'>Search</span>
        </button>
      </div>
    </div>
  )
};

export default SearchBar;