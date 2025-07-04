import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './style.css';
import Checkbox from '../../components/Checkbox';
import ColorCheckbox from '../../components/ColorCheckbox';
import ValueSlider from '../../components/ValueSlider';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import FashionSplashImg from '../../assets/images/fashion.jpg'
import FashionSplashImg2 from '../../assets/images/large-banner.jpg'
import product_img_1 from '../../assets/images/products-slider-images/blue-laptop-bag.jpg'
import { MenuItem, Pagination, Select } from '@mui/material';
import { IoGridOutline } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight, FaList } from 'react-icons/fa';
import img_not_found from '../../assets/images/default-no-img.jpg'
import Breadcrumb from '../../components/Breadcrumb';
import ProductMiniature from '../../components/ProductMiniature';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/LoadingSpinner';

const ProductsList = () => {
    const deafultBreadcrumbList = ['Home', 'Products'];
    const [listingOrder, setListingOrder] = useState(0);
    const [displayType, setDisplayType] = useState(0);
    const [breadcrumbList, setBreadcrumbList] = useState(deafultBreadcrumbList);
    const [category, setCategory] = useState({
        name: 'All Products',
        description: 'Discover an extraordinary world of possibilities with our diverse collection of quality items for every need, desire, and occasion. From everyday essentials to unexpected treasures, our carefully curated selection promises to enhance your life\'s experiences while reflecting your unique style and values.',
        hasSubcategory: true,
        subcategories: [],
    });
    const ref = useRef(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const categoryId = searchParams.get('category') ?? 'All Products';
    const searchTerm = searchParams.get('search') ?? '';

    const { allCategories, categoriesList, loadingCategories } = useSelector(state => state.productSlice);

    const handleChange = (event) => {
        setListingOrder(event.target.value);
    };

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const createAncestorList = (selectedCategory) => {
        if (!selectedCategory) return [];
        let ancestorList = [];
        const parentId = selectedCategory.parentCategory;
        if (parentId) {
            const parentCategory = allCategories.find(category => category._id === parentId);
            ancestorList = [...ancestorList, parentCategory.name, ...createAncestorList(parentCategory)];
        }
        return ancestorList;
    }

    useEffect(() => {
        if (allCategories) {
            setCategory(state => ({ ...state, subcategories: categoriesList }));
            const selectedCategory = allCategories.find(category => category._id === categoryId);
            if (selectedCategory) {
                setCategory(selectedCategory);
                const ancestors = createAncestorList(selectedCategory).reverse();
                setBreadcrumbList(state => [...deafultBreadcrumbList, ...ancestors, selectedCategory.name])
            }
        }
    }, [categoryId, allCategories])

    return (
        <>
            <div className='container py-8'>
                <Breadcrumb breadcrumbList={breadcrumbList} />
            </div>

            <div className='block py-10'>
                <div className='container flex gap-6'>

                    {/* Left Filter Panel */}
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
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Available</span></Checkbox><span>(17)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>In Stock</span></Checkbox><span>(17)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Not Available</span></Checkbox><span>(1)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Size</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Small</span></Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Medium</span></Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Large</span></Checkbox><span>(7)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>XL</span></Checkbox><span>(1)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>XXL</span></Checkbox><span>(3)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Color</p>
                                        <ul>
                                            <li className='flex justify-between text-xl'><ColorCheckbox val={'#AAB2BD'}><span className='ml-0.5'>Grey</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox val={'#E84C3D'}><span className='ml-0.5'>Red</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox val={'#434A54'}><span className='ml-0.5'>Black</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox val={'#F39C11'}><span className='ml-0.5'>Orange</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox val={'#5D9CEC'}><span className='ml-0.5'>Blue</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox val={'#A0D468'}><span className='ml-0.5'>Green</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox val={'#F1C40F'}><span className='ml-0.5'>Yellow</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox val={'#FCCACD'}><span className='ml-0.5'>Pink</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
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
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Small</span></Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Medium</span></Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Large</span></Checkbox><span>(7)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>XL</span></Checkbox><span>(1)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>XXL</span></Checkbox><span>(3)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Condition</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>New</span></Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Refurbished</span></Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox><span className='ml-1'>Used</span></Checkbox><span>(7)</span></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* <div className='h-[500px] border-2 rounded-md'></div> */}
                    </div>

                    {/* Right Main panel */}
                    <div className='mainPanel w-[80%]'>
                        <div className='main-content'>
                            <div className='main-category-header border-b-[2px]'>
                                <div className='category-splash-cover'>
                                    <img src={FashionSplashImg2} className='rounded-md' />
                                </div>
                                <div className='category-title'>
                                    <span className='text-2xl font-semibold text-primary'>
                                        {loadingCategories ? 'Loading Category...' : category.name}
                                    </span>
                                </div>
                                <div className='category-description'>
                                    {loadingCategories ? <div className='h-[52px]'>Loading Description...</div> : category.description}
                                </div>
                            </div>

                            {/* Subcategories section */}
                            <div className='subcategory-section relative'>
                                <div className='subcategory-header py-4 text-primary font-bold text-lg'>Subcategories</div>
                                
                                {/* horizontal scroll buttons */}
                                {!loadingCategories && category.hasSubcategory && category.subcategories.length > 6 &&
                                    <div className='flex absolute right-0 top-4 w-[100px] gap-8 justify-center'>
                                        <div className='cursor-pointer text-lg hover:text-primary' onClick={() => scroll(-400)}><FaChevronLeft /></div>
                                        <div className='cursor-pointer text-lg hover:text-primary' onClick={() => scroll(400)}><FaChevronRight /></div>
                                    </div>
                                }
                                
                                <div ref={ref} className='subcategory-list overflow-x-auto no-scrollbar'>
                                    <ul className='flex gap-4 scroll-auto'>
                                        {!loadingCategories && category.hasSubcategory &&
                                            category.subcategories.map(category => <li>
                                                <div className='subcategory-img w-[150px] border-2 flex justify-center'>
                                                    <img src={img_not_found} />
                                                </div>
                                                <span className='flex justify-center truncate'>{category.name}</span>
                                            </li>)
                                        }

                                        {(loadingCategories || !category.hasSubcategory) && <li>
                                            <div className='subcategory-img w-[150px] border-2 flex justify-center'>
                                                <img src={img_not_found} />
                                            </div>
                                            <span className='flex justify-center'>{loadingCategories ? 'Loading Subcategories' : 'No Subcategories'}</span>
                                        </li>}
                                    </ul>
                                </div>
                            </div>

                            {/* Product List */}
                            <div className='product-list'>

                                {/* Listing Toolbar */}
                                <div className='product-list-toolbar py-4'>
                                    <div className='flex justify-between'>
                                        <div className='product-list-type flex items-center gap-2'>
                                            <span>Display Type:</span>
                                            <div className={`grid-type text-xl cursor-pointer ${displayType === 1 && 'text-primary'}`} onClick={() => setDisplayType(1)}>
                                                <IoGridOutline />
                                            </div>
                                            <div className={`list-type text-xl cursor-pointer ${displayType === 0 && 'text-primary'}`} onClick={() => setDisplayType(0)}>
                                                <FaList />
                                            </div>
                                        </div>

                                        <div className='product-sort-type flex items-center gap-2'>
                                            <span>Sort By:</span>
                                            <div className='dropdown-select w-[250px] h-[40px]'>
                                                <Select
                                                    value={listingOrder}
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
                                                    <MenuItem value={1}><span className='text-sm text-stone-600'>Rating, Highest to Lowest</span></MenuItem>
                                                    <MenuItem value={2}><span className='text-sm text-stone-600'>Name, A to Z</span></MenuItem>
                                                    <MenuItem value={3}><span className='text-sm text-stone-600'>Name, Z to A</span></MenuItem>
                                                    <MenuItem value={4}><span className='text-sm text-stone-600'>Price, High to Low</span></MenuItem>
                                                    <MenuItem value={5}><span className='text-sm text-stone-600'>Price, Low to High</span></MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* table listing */}
                                {displayType === 0 && <div className='product-list-table'>
                                    <div className='grid grid-cols-1 border-2 rounded-md overflow-hidden'>
                                        <ul className='divide-y-2'>
                                            {!loadingCategories && new Array(10).fill(0).map((val, index) =>
                                                <li className=''>
                                                    <ProductMiniature layout='expanded' />
                                                </li>
                                            )}

                                            {loadingCategories && <div className='h-[2528px] w-[1110px]'><LoadingSpinner /></div>}
                                        </ul>
                                    </div>
                                </div>}

                                {/* grid listing */}
                                {displayType === 1 && <div className='product-list-grid'>
                                    <div className='grid grid-cols-5 border-2 rounded-md bg-slate-200 gap-0.5 overflow-hidden'>
                                        {!loadingCategories && new Array(10).fill(0).map((val, index) =>
                                            <ProductMiniature />
                                        )}

                                        {loadingCategories && <div className='h-[700px] w-[1110px]'><LoadingSpinner /></div>}
                                    </div>
                                </div>}

                                {/* pagination */}
                                <div className='product-list-footer flex justify-between m-4'>
                                    <div className='poducts-list-count'>
                                        Showing 1-10 of 18 item(s)
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