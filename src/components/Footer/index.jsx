import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import ChatLogo from '../../assets/images/chat.svg'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const Footer = () => {
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    return (
        <>
            <div className='block footer-section pb-20 border-t-2 pt-16'>
                <div className='container'>
                    <div className='footer flex'>
                        <div className='w-[25%]'>
                            <div className='footer-section-header font-medium text-lg text-black mb-6'>Contact Us</div>
                            <ul id="block-contact_list" class="flex flex-col gap-4">
                                <li class="contact">
                                    <i class="fa fa-map-marker"></i>
                                    <span>Classyshop - Mega Super Store
                                        <br />507-Union Trade Centre
                                        <br />France</span>
                                </li>
                                <li>
                                    <i class="fa fa-envelope-o"></i>
                                    <span><a href="mailto:sales@yourcompany.com">sales@yourcompany.com</a></span>
                                </li>
                                <li class="phone flex items-center text-primary text-xl">
                                    <FaPhone className='mr-2' />
                                    <span className='text-xl font-bold'> (+91) 9876-543-210</span>
                                </li>
                                <li class="expert-chat flex items-center">
                                    <div className="chat-icon w-[12%] mr-2">
                                        <img className="" src={ChatLogo} />
                                    </div>
                                    <span class="expert-text text-xl font-base">Online Chat <span>Get Expert Help</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className='w-[25%] border-l-[1px] pl-24'>
                            <div className='footer-section-header font-medium text-lg text-black mb-6'>Products</div>
                            <ul className='footer-section-submenu flex flex-col gap-2'>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Prices drop</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>New products</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Best sales</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Contact Us</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Sitemap</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Stores</Link></li>
                            </ul>
                        </div>
                        <div className='w-[25%]'>
                            <div className='footer-section-header font-medium text-lg text-black mb-6'>Our Company</div>
                            <ul className='footer-section-submenu flex flex-col gap-2'>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Delivery</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Legal Notice</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Terms and conditions of use</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>About us</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Secure payment</Link></li>
                                <li className='text-custom-dark-gray'><Link to={'#'} className='link'>Login</Link></li>
                            </ul>
                        </div>
                        <div className='w-[25%]'>
                            <div className='footer-section-header font-medium text-lg text-black mb-6'>Subscribe To Newsletters</div>
                            <span class="desc">Subscribe to our latest newsletter to get news about special discounts.</span>
                            <div className='mt-4'>
                                <form>
                                    <div className='mb-2'>
                                        <input className='border-2 rounded-md w-[80%] h-[40px] px-2' name="email" type="text" placeholder="Your Email Address" aria-labelledby="block-newsletter-label" required="" />
                                    </div>
                                    <div className='mb-2'>
                                        <button class={`btn ${privacyPolicy ? '' : 'btn-disabled'} transition-all !w-[30%] !h-[40px]`} name="submitNewsletter" disabled={true}>Subscribe</button>
                                    </div>
                                    <div class="psgdpr_consent_message mt-4">
                                        <div className='inline-block text-lg mr-1'>{privacyPolicy
                                            ? <MdOutlineCheckBox className='cursor-pointer' onClick={() => setPrivacyPolicy(false)} />
                                            : <MdOutlineCheckBoxOutlineBlank className='cursor-pointer' onClick={() => setPrivacyPolicy(true)} />}
                                        </div>
                                        <span>I agree to the terms and conditions and the privacy policy</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;