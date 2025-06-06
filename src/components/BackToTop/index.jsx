import React, { useEffect, useState } from 'react'
import { RiArrowUpDoubleLine } from 'react-icons/ri'
import './style.css'

const index = () => {
  const [showBtn, setShowBtn] = useState(false);

  const onScroll = () => {
    window.scrollY > 1500 ? setShowBtn(true) : setShowBtn(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  useEffect(() => {
    onScroll();
  }, []);

  return (
    <div className={showBtn ? 'showBtn' : 'hideBtn'}>
      <button className="goToTop !w-[70px] !h-[70px] border-2 rounded-md border-primary flex justify-center items-center animate-bounce bg-white hover:bg-primary hover:text-white" onClick={scrollToTop}>
        <RiArrowUpDoubleLine />
      </button>
    </div>
  )
}

export default index