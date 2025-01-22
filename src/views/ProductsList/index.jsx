import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Checkbox from '../../components/Checkbox';
import ColorCheckbox from '../../components/ColorCheckbox';
import ValueSlider from '../../ValueSlider';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import FashionSplashImg from '../../assets/images/fashion.jpg'
import product_img_1 from '../../assets/images/products-slider-images/blue-laptop-bag.jpg'
import { MenuItem, Pagination, Select } from '@mui/material';
import { IoGridOutline } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import img_not_found from '../../assets/images/default-no-img.jpg'

const ProductsList = () => {
    const [age, setAge] = useState(0);
    const [displayType, setDisplayType] = useState(0);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div className='container py-8'>
                <div className='breadcrumb'>
                    <ol className='flex'>
                        <li>
                            <Link><span>Home</span></Link>
                        </li>
                        <li>
                            <Link><span>Fashion</span></Link>
                        </li>
                    </ol>
                </div>
            </div>

            <div className='block py-10'>
                <div className='container flex gap-6'>
                    <div className='sidePanel w-[19%]'>
                        <div className='border-[1px] rounded-md'>
                            <div id='search_filters' className=''>
                                <h4 className="block_title text-black text-lg border-b-[1px] py-2 pl-4">Filter By</h4>
                                <div className='clear-filter-section flex justify-center'>
                                    <div className='clear-filter-button w-[50%] h-[30px] mt-4 rounded flex justify-center items-center border-[2px] leading-6 cursor-pointer'>
                                        <IoIosCloseCircleOutline className='text-lg mr-1' />
                                        Clear All
                                    </div>
                                </div>
                                <div className='block_content px-5 py-4'>
                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Availability</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox>Available</Checkbox><span>(17)</span></li>
                                            <li className='flex justify-between'><Checkbox>In Stock</Checkbox><span>(17)</span></li>
                                            <li className='flex justify-between'><Checkbox>Not Available</Checkbox><span>(1)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Size</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox>Small</Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox>Medium</Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox>Large</Checkbox><span>(7)</span></li>
                                            <li className='flex justify-between'><Checkbox>XL</Checkbox><span>(1)</span></li>
                                            <li className='flex justify-between'><Checkbox>XXL</Checkbox><span>(3)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Color</p>
                                        <ul>
                                            <li className='flex justify-between'><ColorCheckbox val={'#AAB2BD'}>Grey</ColorCheckbox><span>(6)</span></li>
                                            <li className='flex justify-between'><ColorCheckbox val={'#E84C3D'}>Red</ColorCheckbox><span>(6)</span></li>
                                            <li className='flex justify-between'><ColorCheckbox val={'#434A54'}>Black</ColorCheckbox><span>(6)</span></li>
                                            <li className='flex justify-between'><ColorCheckbox val={'#F39C11'}>Orange</ColorCheckbox><span>(6)</span></li>
                                            <li className='flex justify-between'><ColorCheckbox val={'#5D9CEC'}>Blue</ColorCheckbox><span>(6)</span></li>
                                            <li className='flex justify-between'><ColorCheckbox val={'#A0D468'}>Green</ColorCheckbox><span>(6)</span></li>
                                            <li className='flex justify-between'><ColorCheckbox val={'#F1C40F'}>Yellow</ColorCheckbox><span>(6)</span></li>
                                            <li className='flex justify-between'><ColorCheckbox val={'#FCCACD'}>Pink</ColorCheckbox><span>(6)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Price</p>
                                        <div className=''>
                                            <ValueSlider />
                                        </div>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Brand</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox>Small</Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox>Medium</Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox>Large</Checkbox><span>(7)</span></li>
                                            <li className='flex justify-between'><Checkbox>XL</Checkbox><span>(1)</span></li>
                                            <li className='flex justify-between'><Checkbox>XXL</Checkbox><span>(3)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Condition</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox>New</Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox>Refurbished</Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox>Used</Checkbox><span>(7)</span></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* <div className='h-[500px] border-2 rounded-md'></div> */}
                    </div>

                    <div className='mainPanel w-[80%]'>
                        <div className='main-content'>
                            <div className='main-category-header border-b-[2px]'>
                                <div className='category-splash-cover'>
                                    <img src={FashionSplashImg} className='rounded-md' />
                                </div>
                                <div className='category-title'>Fashion</div>
                                <div className='category-description'>
                                    Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which has since evolved.
                                </div>
                            </div>

                            <div className='subcategory-section'>
                                <div className='subcategory-header py-4'>Subcategories</div>
                                <div className='subcategory-list'>
                                    <ul className='flex gap-2'>
                                        <li>
                                            <div className='subcategory-img w-[150px] border-2 flex justify-center'>
                                                <img src={img_not_found} />
                                            </div>
                                            <span className='flex justify-center'>Apparel</span>
                                        </li>
                                        <li>
                                            <div className='subcategory-img w-[150px] border-2 flex justify-center'>
                                                <img src={img_not_found} />
                                            </div>
                                            <span className='flex justify-center'>Outerwear</span>
                                        </li>
                                        <li>
                                            <div className='subcategory-img w-[150px] border-2 flex justify-center'>
                                                <img src={img_not_found} />
                                            </div>
                                            <span className='flex justify-center'>Footwear</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='product-list'>
                                <div className='product-list-toolbar py-4'>
                                    <div className='flex justify-between'>
                                        <div className='product-list-type flex items-center gap-2'>
                                            <div className='grid-type text-lg cursor-pointer' onClick={() => setDisplayType(1)}><IoGridOutline /></div>
                                            <div className='list-type text-lg cursor-pointer' onClick={() => setDisplayType(0)}><FaList /></div>
                                            <span>There are 18 products.</span>
                                        </div>

                                        <div className='product-sort-type flex items-center gap-2'>
                                            <span>Sort By:</span>
                                            <div className='dropdown-select w-[250px] h-[40px]'>
                                                <Select
                                                    value={age}
                                                    onChange={handleChange}
                                                    sx={{
                                                        "& fieldset": {
                                                            border: "1px solid var(--gray) !important",
                                                        },
                                                        "ul": { color: 'blue !important' }
                                                    }}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                    className='w-[100%] h-[100%] !text-sm'
                                                >
                                                    <MenuItem value={0}><span className='text-sm text-stone-600'>Relevance</span></MenuItem>
                                                    <MenuItem value={1}><span className='text-sm text-stone-600'>Sales, Highest to Lowest</span></MenuItem>
                                                    <MenuItem value={2}><span className='text-sm text-stone-600'>Name, A to Z</span></MenuItem>
                                                    <MenuItem value={3}><span className='text-sm text-stone-600'>Name, Z to A</span></MenuItem>
                                                    <MenuItem value={4}><span className='text-sm text-stone-600'>Price, High to Low</span></MenuItem>
                                                    <MenuItem value={5}><span className='text-sm text-stone-600'>Price, Low to High</span></MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {displayType === 0 && <div className='product-list-table'>
                                    <div className='grid grid-cols-1 border-2'>
                                        <ul>
                                            {new Array(8).fill(0).map((val, index) =>
                                                <li>
                                                    <div className=''>
                                                        <img key={index} src={product_img_1} />
                                                    </div>
                                                </li>)
                                            }
                                        </ul>
                                    </div>
                                </div>}

                                {displayType === 1 && <div className='product-list-grid'>
                                    <div className='grid grid-cols-5 border-2'>
                                        {new Array(18).fill(0).map((val, index) =>
                                            <img key={index} src={product_img_1} className='w-[100%]' />)
                                        }
                                    </div>
                                </div>}

                                <div className='product-list-footer flex justify-between m-4'>
                                    <div className='poducts-list-count'>
                                        Showing 1-18 of 18 item(s)
                                    </div>
                                    <div className='poducts-list-pagination'>
                                        <Pagination count={10} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProductsList;