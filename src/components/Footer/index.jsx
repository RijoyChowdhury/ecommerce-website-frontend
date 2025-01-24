import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaPhone } from 'react-icons/fa';
import ChatLogo from '../../assets/images/chat.svg'
import Checkbox from '../Checkbox';
import { FaRegCopyright } from "react-icons/fa";
import { FaXTwitter, FaFacebookF, FaYoutube, FaInstagram, FaPinterestP } from 'react-icons/fa6';
import visa from '../../assets/images/transaction_cards/visa.png'
import paypal from '../../assets/images/transaction_cards/paypal.png'
import master_card from '../../assets/images/transaction_cards/master_card.png'
import american_express from '../../assets/images/transaction_cards/american_express.png'

const Footer = () => {
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [acceptedCookieUse, setAcceptedCookieUse] = useState(false);

    return (
        <>
            <div className='block footer-section pb-20 border-t-2 pt-16'>
                <div className='container'>
                    <div className='footer flex'>
                        <div className='w-[25%]'>
                            <div className='footer-section-header font-medium text-lg text-black mb-6'>Contact Us</div>
                            <ul id="block-contact_list" className="flex flex-col gap-4">
                                <li className="contact">
                                    <i className="fa fa-map-marker"></i>
                                    <span>Classyshop - Mega Super Store
                                        <br />507-Union Trade Centre
                                        <br />France</span>
                                </li>
                                <li>
                                    <i className="fa fa-envelope-o"></i>
                                    <span><a href="mailto:sales@yourcompany.com">sales@yourcompany.com</a></span>
                                </li>
                                <li className="phone flex items-center text-primary text-xl">
                                    <FaPhone className='mr-2' />
                                    <span className='text-xl font-bold'> (+91) 9876-543-210</span>
                                </li>
                                <li className="expert-chat flex items-center">
                                    <div className="chat-icon w-[12%] mr-2">
                                        <img className="" src={ChatLogo} />
                                    </div>
                                    <span className="expert-text text-xl font-base">Online Chat <span>Get Expert Help</span></span>
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
                        <div className='w-[20%]'>
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
                        <div className='w-[30%]'>
                            <div className='footer-section-header font-medium text-lg text-black mb-6'>Subscribe To Newsletters</div>
                            <span className="desc">Subscribe to our latest newsletter to get news about special discounts.</span>
                            <div className='mt-4'>
                                <form>
                                    <div className='mb-2'>
                                        <input className='border-2 rounded-md w-[80%] h-[40px] px-2' name="email" type="text" placeholder="Your Email Address" aria-labelledby="block-newsletter-label" required="" />
                                    </div>
                                    <div className='mb-2'>
                                        <button className={`btn ${privacyPolicy ? '' : 'btn-disabled'} transition-all !w-[30%] !h-[40px]`} name="submitNewsletter" disabled={true}>Subscribe</button>
                                    </div>
                                    <div className="psgdpr_consent_message mt-4">
                                        <Checkbox>I agree to the terms and conditions and the privacy policy</Checkbox>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* disclaimer footer section */}
            <div className='block border-2'>
                <div className='container h-[70px] flex gap-2'>
                    <div className='w-[33%] flex items-center'>
                        <span>
                        <ul className='flex gap-2 text-base text-black'>
                            <li className='border-2 rounded-full p-2 hover:text-white hover:bg-primary cursor-pointer'><FaFacebookF /></li>
                            <li className='border-2 rounded-full p-2 hover:text-white hover:bg-primary cursor-pointer'><FaXTwitter /></li>
                            <li className='border-2 rounded-full p-2 hover:text-white hover:bg-primary cursor-pointer'><FaYoutube /></li>
                            <li className='border-2 rounded-full p-2 hover:text-white hover:bg-primary cursor-pointer'><FaInstagram /></li>
                            <li className='border-2 rounded-full p-2 hover:text-white hover:bg-primary cursor-pointer'><FaPinterestP /></li>
                        </ul>
                        </span>
                    </div>
                    <div className='property-disclaimer w-[33%] flex items-center justify-center'>
                        <span className='flex justify-center items-center gap-1 link cursor-pointer'><FaRegCopyright /><span className='text-sm'> 2025 - Ecommerce software by WhettaWorks<sup>TM</sup></span></span>
                    </div>
                    <div className='w-[33%] flex items-center justify-end gap-2'>
                        <span className='text-sm'>Powered By:</span>
                        <ul className='flex gap-2'>
                            <li><img src={visa} /></li>
                            <li><img src={paypal} /></li>
                            <li><img src={master_card} /></li>
                            <li><img src={american_express} /></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* cookies accept popup */}
            {!acceptedCookieUse && <div className='cookies-section text-white text-base bg-black border-2 fixed bottom-0 w-[100%] border-black h-[50px] flex justify-center items-center gap-2'>
                This site uses cookies. By continuing use this site, you are agreeing to our use of cookies.
                <span className='underline hover:no-underline cursor-pointer'>Privacy Policy</span>
                <button className='bg-white text-black rounded-md px-2 py-1 text-sm ml-2' onClick={() => setAcceptedCookieUse(true)}>ACCEPT</button>
            </div>}
        </>
    )
}

export default Footer;