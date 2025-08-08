import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useNavigate, useSearchParams } from 'react-router-dom'
import LoadingSpinner from '../../components/LoadingSpinner';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slices/cartSlice.jsx';
import toast from 'react-hot-toast';

const notifyError = (value) => toast.error(value);

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [loading, setLoading] = useState(true);
    const [paymentDetails, setPaymentDetails] = useState(null);

    const { fetchCheckoutDetails } = actions;

    const convertEpochSecondsToDateTime = (epochSeconds) => {
        // Convert to milliseconds
        const epochMilliseconds = epochSeconds * 1000;
        // Create a Date object
        const myDate = new Date(epochMilliseconds);
        // Format the date for display
        const formattedDateLocal = myDate.toLocaleDateString();
        return formattedDateLocal;
    }

    const formatAddress = (data) => {
        const {address_line_1, address_line_2, address_line_3, city, country, pincode, state} = data;
        return (
            <>
                <span>{address_line_1},</span>
                <span>{address_line_2}, {address_line_3}</span>
                <span>{city}, {state}, {country}, Pincode: {pincode}</span>
            </>
        );
    }

    const getSessionDetails = async (sessionId) => {
        const response = await dispatch(fetchCheckoutDetails(sessionId)).unwrap();
        if (response.success) {
            setPaymentDetails(response.data);
        }
        if (response.error) {
            notifyError('Error retriving data!');
        }
        setLoading(false);
    }

    useEffect(() => {
        if (sessionId) {
            getSessionDetails(sessionId);
        }
    }, [sessionId]);

    return (
        <div className='container'>
            <section class="bg-white py-8 antialiased md:py-16">
                {!loading && paymentDetails && <div class="mx-auto max-w-2xl px-4 2xl:px-0">
                    <div className='flex items-baseline gap-2'>
                        <FaCheck className='text-green-500 text-xl' />
                        <h2 class="text-2xl font-semibold text-gray-900 sm:text-2xl mb-2">Thanks for your order!</h2>
                    </div>
                    <p class="text-gray-500 mb-6 md:mb-8">
                        <span>Your order</span>
                        <a href="#" class="mx-1 font-bold text-primary hover:underline">#{paymentDetails.client_reference_id}</a>
                        <span>will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</span>
                    </p>

                    <div class="space-y-4 sm:space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 mb-6 md:mb-8">
                        <dl class="sm:flex items-baseline justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Date</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">{convertEpochSecondsToDateTime(paymentDetails.created)}</dd>
                        </dl>
                        <dl class="sm:flex items-baseline justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Invoive</dt>
                            <dd class="font-medium text-gray-900 sm:text-end uppercase">{paymentDetails.invoice}</dd>
                        </dl>
                        <dl class="sm:flex items-baseline justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Payment Status</dt>
                            <dd class="font-medium text-green-600 sm:text-end uppercase">{paymentDetails.payment_status}</dd>
                        </dl>
                        <dl class="sm:flex items-baseline justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Payment Method</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">JPMorgan monthly installments</dd>
                        </dl>
                        <dl class="sm:flex items-baseline justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Name</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">{JSON.parse(paymentDetails.metadata.user).name}</dd>
                        </dl>
                        <dl class="sm:flex items-baseline justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Email</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">{paymentDetails.customer_email}</dd>
                        </dl>
                        <dl class="sm:flex items-baseline justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Address</dt>
                            <dd class="font-medium text-gray-900 sm:text-end flex flex-col">
                                {formatAddress(JSON.parse(paymentDetails.metadata.user).address)}
                            </dd>
                        </dl>
                        <dl class="sm:flex items-baseline justify-between gap-4">
                            <dt class="font-normal mb-1 sm:mb-0 text-gray-500">Phone</dt>
                            <dd class="font-medium text-gray-900 sm:text-end">+91 - {JSON.parse(paymentDetails.metadata.user).address.mobile}</dd>
                        </dl>
                    </div>
                    <div class="flex items-center gap-4 h-[50px]">
                        <button className='btn !bg-white !text-primary' onClick={() => navigate({ pathname: "/user", search: `?section=section3` })}>Track your order</button>
                        <button className='btn' onClick={() => navigate('/products')}>Return to shopping</button>
                    </div>
                </div>}

                {loading && <div className='h-[517px]'><LoadingSpinner text='Getting Order Information' /></div>}
            </section>
        </div>
    )
}

export default PaymentSuccess