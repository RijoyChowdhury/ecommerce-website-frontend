import React, { useEffect } from 'react';
import PageNotFoundImg from '../../assets/images/robot404page.png';

const PageNotFound = () => {
    useEffect(() => {
        document.body.classList.add('page404');
        return () => {
            document.body.classList.remove('page404');
        };
    }, []);

    return (
        <div className='container'>
            <img className='' src={PageNotFoundImg} />
        </div>
    )
}

export default PageNotFound;