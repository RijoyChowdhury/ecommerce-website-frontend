import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import './style.css';

const ProductDetails = () => {
    const breadcrumbList = ['Home', 'Fashion', 'Cropped Satin Bomber Jacket'];

    return (
        <>
            <div className='container py-8'>
                <Breadcrumb breadcrumbList={breadcrumbList} />
            </div>

            <div className='block py-10'>
                <div className='container'>
                    <div className='w-[100%] h-[500px] border-2'></div>
                </div>
            </div>
        </>
    )
};

export default ProductDetails;