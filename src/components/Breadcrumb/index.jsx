import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Breadcrumb = (props) => {
    const { breadcrumbList } = props;

    return (
        <div className='breadcrumb'>
            <ol className='flex'>
                {breadcrumbList.map((item, index) => <li key={index}><Link><span>{item}</span></Link></li>)}
            </ol>
        </div>
    )
};

export default Breadcrumb;