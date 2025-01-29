import React from 'react';
import { CiDeliveryTruck, CiLock } from 'react-icons/ci';
import { PiHandArrowDownLight } from 'react-icons/pi';

const DeliveryPolicies = () => {
    return (
        <div className="policies-wrapper flex flex-col gap-2">
            <div className='rounded-md bg-custom-light-gray flex py-2'>
                <span className="item-product flex items-center text-4xl mx-6 text-primary">
                    <CiLock />
                </span>
                <span>
                    <span className="block-title text-black text-base font-semibold">Security policy</span>
                    <p>(edit with the Customer Reassurance module)</p>
                </span>
            </div>
            <div className='rounded-md bg-custom-light-gray flex py-2'>
                <span className="item-product flex items-center text-4xl mx-6 text-primary">
                    <CiDeliveryTruck />
                </span>
                <span>
                    <span className="block-title text-black text-base font-semibold">Delivery policy</span>
                    <p>(edit with the Customer Reassurance module)</p>
                </span>
            </div>
            <div className='rounded-md bg-custom-light-gray flex py-2'>
                <span className="item-product flex items-center text-4xl mx-6 text-primary">
                    <PiHandArrowDownLight />
                </span>
                <span>
                    <span className="block-title text-black text-base font-semibold">Return policy</span>
                    <p>(edit with the Customer Reassurance module)</p>
                </span>
            </div>
        </div>
    )
};

export default DeliveryPolicies;