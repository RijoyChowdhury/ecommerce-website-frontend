import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import './style.css';
import ProductSlider from '../../components/ProductSlider';

const ProductDetails = () => {
    const breadcrumbList = ['Home', 'Fashion', 'Cropped Satin Bomber Jacket'];

    return (
        <>
            <div className='container py-8'>
                <Breadcrumb breadcrumbList={breadcrumbList} />
            </div>

            <div className='block py-10'>
                <div className='container'>
                    <div className='product-details-wrapper border-2 flex'>
                        <div className='product-img-wrapper w-[50%] h-[500px] border-2 flex'>
                            <div className='img-selector-wrapper w-[20%] h-[250px] border-2'></div>
                            <div className='img-selector-wrapper w-[80%] h-[250px] border-2'></div>
                        </div>
                        <div className='product-info-wrapper w-[50%] h-[500px] border-2'></div>
                    </div>

                    <div className='product-description-wrapper pb-8'></div>

                    <div className='pb-8'><ProductSlider /></div>

                    <div><ProductSlider /></div>
                </div>
            </div>
        </>
    )
};

export default ProductDetails;