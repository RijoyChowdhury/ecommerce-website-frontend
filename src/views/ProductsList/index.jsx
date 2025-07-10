import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './style.css';
import Checkbox from '../../components/Checkbox';
import ColorCheckbox from '../../components/ColorCheckbox';
import ValueSlider from '../../components/ValueSlider';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import FashionSplashImg from '../../assets/images/fashion.jpg'
import FashionSplashImg2 from '../../assets/images/large-banner.jpg'
import product_img_1 from '../../assets/images/products-slider-images/blue-laptop-bag.jpg'
// import categoryImg from '../../assets/images/electronics-category-img.jpeg'
import { Divider, MenuItem, Pagination, Select } from '@mui/material';
import { IoGridOutline } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight, FaList } from 'react-icons/fa';
import img_not_found from '../../assets/images/no-img-available.png'
import Breadcrumb from '../../components/Breadcrumb';
import ProductMiniature from '../../components/ProductMiniature';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../../components/LoadingSpinner';
import { cloneDeep } from 'lodash-es';
import { actions } from '../../redux/slices/productSlice';

const defaultFilterConfiguration = {
    availability: {
        available: false,
        in_stock: false,
        na: false,
    },
    size: {
        small: false,
        medium: false,
        large: false,
        xl: false,
        xxl: false,
    },
    color: {
        grey: true,
        red: false,
        black: false,
        orange: false,
        blue: true,
        green: false,
        yellow: false,
        pink: false,
    },
    price: {
        range: [20, 85]
    },
    brand: {

    },
    condition: {
        new: false,
        refurbished: false,
        used: false,
    },
};

const createAncestorList = (selectedCategory, allCategories) => {
    if (!selectedCategory) return [];
    let ancestorList = [];
    const parentId = selectedCategory.parentCategory;
    if (parentId) {
        const parentCategory = allCategories.find(category => category._id === parentId);
        ancestorList = [...ancestorList, parentCategory.name, ...createAncestorList(parentCategory, allCategories)];
    }
    return ancestorList;
}

const ProductsList = () => {
    const deafultBreadcrumbList = ['Home', 'Products'];
    // const [productList, setProductList] = useState(null);
    // const [loadingProductList, setLoadingProductList] = useState(true);
    const [filters, setFilters] = useState(cloneDeep(defaultFilterConfiguration));
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

    const dispatch = useDispatch();
    const { allCategories, categoriesList, loadingCategories, loadingProductList, productList } = useSelector(state => state.productSlice);
    const { getAllProducts } = actions;

    const handleChange = (event) => {
        setListingOrder(event.target.value);
    };

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const updateFilters = (section, property, value) => {
        filters[section][property] = value;
        setFilters(state => ({ ...filters }));
    }

    const fetchAllProducts = async (categoryId) => {
        console.log('Fetching all products');
        const response = await dispatch(getAllProducts(categoryId)).unwrap();
        // if (response.success) {
        //     setProductList(response.data);
        // }
        // setLoadingProductList(false);
    }

    useEffect(() => {
        fetchAllProducts(categoryId);
    }, [categoryId])

    useEffect(() => {
        if (allCategories) {
            setCategory(state => ({ ...state, subcategories: categoriesList }));
            const selectedCategory = allCategories.find(category => category._id === categoryId);
            if (selectedCategory) {
                setCategory(selectedCategory);
                const ancestors = createAncestorList(selectedCategory, allCategories).reverse();
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
                                    <div className='clear-filter-button w-[50%] h-[30px] mt-4 rounded flex justify-center items-center border-[2px] leading-6 cursor-pointer hover:text-primary' onClick={() => setFilters(state => cloneDeep(defaultFilterConfiguration))}>
                                        <IoIosCloseCircleOutline className='text-lg mr-1' />
                                        Clear All
                                    </div>
                                </div>
                                <div className='block_content px-5 py-4'>
                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Availability</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox value={filters.availability.available} onChange={(value) => updateFilters('availability', 'available', value)}><span className='ml-1'>Available</span></Checkbox><span>(17)</span></li>
                                            <li className='flex justify-between'><Checkbox value={filters.availability.in_stock} onChange={(value) => updateFilters('availability', 'in_stock', value)}><span className='ml-1'>In Stock</span></Checkbox><span>(17)</span></li>
                                            <li className='flex justify-between'><Checkbox value={filters.availability.na} onChange={(value) => updateFilters('availability', 'na', value)}><span className='ml-1'>Not Available</span></Checkbox><span>(1)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Size</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox value={filters.size.small} onChange={(value) => updateFilters('size', 'small', value)}><span className='ml-1'>Small</span></Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox value={filters.size.medium} onChange={(value) => updateFilters('size', 'medium', value)}><span className='ml-1'>Medium</span></Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox value={filters.size.large} onChange={(value) => updateFilters('size', 'large', value)}><span className='ml-1'>Large</span></Checkbox><span>(7)</span></li>
                                            <li className='flex justify-between'><Checkbox value={filters.size.xl} onChange={(value) => updateFilters('size', 'xl', value)}><span className='ml-1'>XL</span></Checkbox><span>(1)</span></li>
                                            <li className='flex justify-between'><Checkbox value={filters.size.xxl} onChange={(value) => updateFilters('size', 'xxl', value)}><span className='ml-1'>XXL</span></Checkbox><span>(3)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Color</p>
                                        <ul className='flex flex-col gap-1'>
                                            <li className='flex justify-between text-xl'><ColorCheckbox checked={filters.color.grey} onChange={(value) => updateFilters('color', 'grey', value)} val={'#AAB2BD'}><span className='ml-1'>Grey</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox checked={filters.color.red} onChange={(value) => updateFilters('color', 'red', value)} val={'#E84C3D'}><span className='ml-1'>Red</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox checked={filters.color.black} onChange={(value) => updateFilters('color', 'black', value)} val={'#434A54'}><span className='ml-1'>Black</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox checked={filters.color.orange} onChange={(value) => updateFilters('color', 'orange', value)} val={'#F39C11'}><span className='ml-1'>Orange</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox checked={filters.color.blue} onChange={(value) => updateFilters('color', 'blue', value)} val={'#5D9CEC'}><span className='ml-1'>Blue</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox checked={filters.color.green} onChange={(value) => updateFilters('color', 'green', value)} val={'#A0D468'}><span className='ml-1'>Green</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox checked={filters.color.yellow} onChange={(value) => updateFilters('color', 'yellow', value)} val={'#F1C40F'}><span className='ml-1'>Yellow</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                            <li className='flex justify-between text-xl'><ColorCheckbox checked={filters.color.pink} onChange={(value) => updateFilters('color', 'pink', value)} val={'#FCCACD'}><span className='ml-1'>Pink</span></ColorCheckbox><span className='text-sm'>(6)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Price</p>
                                        <div className=''>
                                            <ValueSlider min={10} max={100} low={filters.price.range[0]} high={filters.price.range[1]} onChange={(range) => updateFilters('price', 'range', range)} />
                                        </div>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Brand</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox onChange={(value) => updateFilters('brand', '', value)}><span className='ml-1'>Small</span></Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox onChange={(value) => updateFilters('brand', '', value)}><span className='ml-1'>Medium</span></Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox onChange={(value) => updateFilters('brand', '', value)}><span className='ml-1'>Large</span></Checkbox><span>(7)</span></li>
                                            <li className='flex justify-between'><Checkbox onChange={(value) => updateFilters('brand', '', value)}><span className='ml-1'>XL</span></Checkbox><span>(1)</span></li>
                                            <li className='flex justify-between'><Checkbox onChange={(value) => updateFilters('brand', '', value)}><span className='ml-1'>XXL</span></Checkbox><span>(3)</span></li>
                                        </ul>
                                    </section>

                                    <section className='filters-section pb-6'>
                                        <p className="h6 facet-title hidden-md-down">Condition</p>
                                        <ul>
                                            <li className='flex justify-between'><Checkbox value={filters.condition.new} onChange={(value) => updateFilters('condition', 'new', value)}><span className='ml-1'>New</span></Checkbox><span>(6)</span></li>
                                            <li className='flex justify-between'><Checkbox value={filters.condition.refurbished} onChange={(value) => updateFilters('condition', 'refurbished', value)}><span className='ml-1'>Refurbished</span></Checkbox><span>(5)</span></li>
                                            <li className='flex justify-between'><Checkbox value={filters.condition.used} onChange={(value) => updateFilters('condition', 'used', value)}><span className='ml-1'>Used</span></Checkbox><span>(7)</span></li>
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
                            <div className='main-category-header'>
                                <div className='category-splash-cover'>
                                    <img src={FashionSplashImg2} className='rounded-md' />
                                </div>
                                <Divider />
                                <div className='category-title mt-4'>
                                    <span className='text-2xl font-semibold text-primary'>
                                        {loadingCategories ? 'Loading Category...' : category.name}
                                    </span>
                                </div>
                                <div className='category-description'>
                                    {loadingCategories ? <div className='h-[52px]'>Loading Description...</div> : category.description}
                                </div>
                            </div>

                            {/* Subcategories section */}
                            <div className='subcategory-section relative pb-4'>
                                <div className='subcategory-header py-4 text-primary font-bold text-lg'>Subcategories</div>

                                {/* horizontal scroll buttons */}
                                {!loadingCategories && category.hasSubcategory && category.subcategories.length > 6 &&
                                    <div className='flex absolute right-0 top-4 gap-2 w-[100px] justify-center'>
                                        <div className='cursor-pointer text-lg hover:text-primary hover:border-primary border-2 p-1' onClick={() => scroll(-400)}><FaChevronLeft /></div>
                                        <div className='cursor-pointer text-lg hover:text-primary hover:border-primary border-2 p-1' onClick={() => scroll(400)}><FaChevronRight /></div>
                                    </div>
                                }

                                <div ref={ref} className='subcategory-list overflow-x-auto no-scrollbar'>
                                    <ul className='flex gap-4 scroll-auto'>
                                        {!loadingCategories && category.hasSubcategory &&
                                            category.subcategories.map(category =>
                                                <Link to={{
                                                    pathname: "/products",
                                                    search: `?category=${category._id}`,
                                                }}>
                                                    <li className='cursor-pointer hover:text-primary'>
                                                        <div className='subcategory-img w-[150px] h-[150px] border-2 hover:border-primary flex justify-center'>
                                                            {category.images.length ? <img src={category.images[0]} /> : <img src={img_not_found} />}
                                                            {/* <img src={categoryImg} /> */}
                                                        </div>
                                                        <span className='flex justify-center truncate'>{category.name}</span>
                                                    </li>
                                                </Link>)
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
                                            <span className='text-base text-primary'>Display Type:</span>
                                            <div className={`grid-type text-xl cursor-pointer border-2 p-2 ${displayType === 1 ? 'border-primary' : 'border-transparent'}`} onClick={() => setDisplayType(1)}>
                                                <IoGridOutline />
                                            </div>
                                            <div className={`list-type text-xl cursor-pointer border-2 p-2 ${displayType === 0 ? 'border-primary' : 'border-transparent'}`} onClick={() => setDisplayType(0)}>
                                                <FaList />
                                            </div>
                                        </div>

                                        <div className='product-sort-type flex items-center gap-2'>
                                            <span className='text-base text-primary'>Sort By:</span>
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
                                            {!loadingProductList && productList.map((productData, index) =>
                                                <li className=''>
                                                    <ProductMiniature key={index} layout='expanded' data={productData} />
                                                </li>
                                            )}

                                            {loadingProductList && <div className='h-[2528px] w-[1110px]'><LoadingSpinner /></div>}
                                        </ul>
                                    </div>
                                </div>}

                                {/* grid listing */}
                                {displayType === 1 && <div className='product-list-grid'>
                                    <div className='grid grid-cols-5 border-2 rounded-md bg-slate-200 gap-0.5 overflow-hidden'>
                                        {!loadingCategories && productList.map((productData, index) =>
                                            <ProductMiniature key={index} data={productData} />
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