import React, { useEffect, useState } from 'react'
import Checkbox from '../../components/Checkbox';
import ColorCheckbox from '../../components/ColorCheckbox';
import ValueSlider from '../../components/ValueSlider';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { at, set, isEmpty, cloneDeep } from 'lodash-es';

const intialData = {
    "prices": {
        "maxPrice": 0,
        "minPrice": 0,
        "totalDocs": 0
    },
    "brands": [
        {
            "_id": "MINIM",
            "count": 0
        },
        {
            "_id": "Nokia",
            "count": 0
        }
    ],
    "inStockCount": 0,
    "sizes": [
        {
            "_id": "XL",
            "count": 0
        },
        {
            "_id": "S",
            "count": 0
        },
        {
            "_id": "XS",
            "count": 0
        },
        {
            "_id": "M",
            "count": 0
        },
        {
            "_id": "XXL",
            "count": 0
        },
        {
            "_id": "L",
            "count": 0
        }
    ],
    "colors": [
        {
            "_id": "Grey",
            "count": 0
        },
        {
            "_id": "Silver",
            "count": 0
        },
        {
            "_id": "Orange",
            "count": 0
        },
        {
            "_id": "Green",
            "count": 0
        },
        {
            "_id": "Black",
            "count": 0
        },
        {
            "_id": "Blue",
            "count": 0
        },
        {
            "_id": "White",
            "count": 0
        },
        {
            "_id": "Gray",
            "count": 0
        },
        {
            "_id": "Red",
            "count": 0
        },
        {
            "_id": "Pink",
            "count": 0
        }
    ],
    "conditions": [
        {
            "_id": "New",
            "count": 0
        },
        {
            "_id": "Refurbished",
            "count": 0
        },
        {
            "_id": "Used",
            "count": 0
        },
    ],
    "totalPages": 0,
    "currentPage": 0,
    "totalDocs": 0
};

const initialSelection = {};

const FilterPane = ({ filtersData, noFilters, onFiltersChange }) => {
    const [filters, setFilters] = useState(intialData);
    const [selected, setSelected] = useState({});

    const isFilterSelected = (filterObject, filter) => {
        if (isEmpty(filterObject)) {
            return false;
        }
        return at(filterObject, filter)[0];
    }

    const updateFilters = (path, value) => {
        const filterObject = cloneDeep(selected);
        set(filterObject, path, value);
        setSelected(state => filterObject);
        onFiltersChange(filterObject);
    }

    useEffect(() => {
        if (filtersData && noFilters) {
            setFilters(filtersData);
        }
    }, [filtersData]);

    return (
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
                        <p className="h6 facet-title hidden-md-down text-[15px] font-semibold text-primary">Availability</p>
                        <ul>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'stock.inStock')} onChange={(value) => updateFilters('stock.inStock', value)}><span className='ml-1'>In Stock</span></Checkbox><span>({filters.inStockCount})</span></li>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'stock.na')} onChange={(value) => updateFilters('stock.na', value)}><span className='ml-1'>Not Available</span></Checkbox><span>({filters.totalDocs - filters.inStockCount})</span></li>
                        </ul>
                    </section>

                    <section className='filters-section pb-6'>
                        <p className="h6 facet-title hidden-md-down text-[15px] font-semibold text-primary">Size</p>
                        <ul>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'size.small')} onChange={(value) => updateFilters('size.small', value)}><span className='ml-1'>Small</span></Checkbox><span>({filters.sizes.length ? filters.sizes.find(size => size._id === 'S')?.count ?? 0 : 0})</span></li>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'size.medium')} onChange={(value) => updateFilters('size.medium', value)}><span className='ml-1'>Medium</span></Checkbox><span>({filters.sizes.length ? filters.sizes.find(size => size._id === 'M')?.count ?? 0 : 0})</span></li>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'size.large')} onChange={(value) => updateFilters('size.large', value)}><span className='ml-1'>Large</span></Checkbox><span>({filters.sizes.length ? filters.sizes.find(size => size._id === 'L')?.count ?? 0 : 0})</span></li>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'size.xl')} onChange={(value) => updateFilters('size.xl', value)}><span className='ml-1'>XL</span></Checkbox><span>({filters.sizes.length ? filters.sizes.find(size => size._id === 'XL')?.count ?? 0 : 0})</span></li>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'size.xxl')} onChange={(value) => updateFilters('size.xxl', value)}><span className='ml-1'>XXL</span></Checkbox><span>({filters.sizes.length ? filters.sizes.find(size => size._id === 'XXL')?.count ?? 0 : 0})</span></li>
                        </ul>
                    </section>

                    <section className='filters-section pb-6'>
                        <p className="h6 facet-title hidden-md-down text-[15px] font-semibold text-primary">Condition</p>
                        <ul>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'condition.new')} onChange={(value) => updateFilters('condition.new', value)}><span className='ml-1'>New</span></Checkbox><span>({filters.conditions.length ? filters.conditions.find(condition => condition._id === 'New')?.count ?? 0 : 0})</span></li>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'condition.refurbished')} onChange={(value) => updateFilters('condition.refurbished', value)}><span className='ml-1'>Refurbished</span></Checkbox><span>({filters.conditions.length ? filters.conditions.find(condition => condition._id === 'Refurbished')?.count ?? 0 : 0})</span></li>
                            <li className='flex justify-between'><Checkbox value={isFilterSelected(selected, 'condition.used')} onChange={(value) => updateFilters('condition.used', value)}><span className='ml-1'>Used</span></Checkbox><span>({filters.conditions.length ? filters.conditions.find(condition => condition._id === 'Used')?.count ?? 0 : 0})</span></li>
                        </ul>
                    </section>

                    <section className='filters-section pb-6'>
                        <p className="h6 facet-title hidden-md-down text-[15px] font-semibold text-primary">Price</p>
                        <div className=''>
                            <ValueSlider minValue={10} maxValue={2000} low={filters.prices.minPrice} high={filters.prices.maxPrice} onChange={(range) => updateFilters('price', 'range', range)} />
                        </div>
                    </section>

                    {filters && filters.colors.length > 0 && <section className='filters-section pb-6'>
                        <p className="h6 facet-title hidden-md-down text-[15px] font-semibold text-primary">Color</p>
                        <ul className='flex flex-col gap-1'>
                            {filters.colors && filters.colors.map(color =>
                                <li className='flex justify-between text-xl'><ColorCheckbox checked={isFilterSelected(selected, `color.${color._id}`)} onChange={(value) => updateFilters(`color.${color._id}`, value)} val={'#FCCACD'}><span className='ml-1'>{color._id}</span></ColorCheckbox><span className='text-sm'>({color.count})</span></li>
                            )}
                        </ul>
                    </section>}

                    {filters && filters.brands.length > 0 && <section className='filters-section pb-6'>
                        <p className="h6 facet-title hidden-md-down text-[15px] font-semibold text-primary">Brand</p>
                        <ul>
                            {filters.brands && filters.brands.map(brand => <li className='flex justify-between'><Checkbox checked={isFilterSelected()} onChange={(value) => updateFilters('brand', '', brand._id)}><span className='ml-1'>{brand._id}</span></Checkbox><span>({brand.count})</span></li>)}
                        </ul>
                    </section>}
                </div>
            </div>
        </div>
    )
}

export default FilterPane