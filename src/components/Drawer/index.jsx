import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { IoMdClose } from 'react-icons/io';
import { IconButton } from '@mui/material';
import { FaRegPlusSquare, FaRegMinusSquare } from 'react-icons/fa';
import './style.css';
import { Link } from 'react-router-dom';

const CategoryList = [
    {
        categoryId: '1',
        hasSubcategory: true,
        categoryName: 'Fashion',
        subCategories: [
            {
                categoryId: '2',
                hasSubcategory: true,
                categoryName: 'Apparel',
                subCategories: [
                    {
                        categoryId: '3',
                        hasSubcategory: false,
                        categoryName: 'Dress'
                    },
                    {
                        categoryId: '4',
                        hasSubcategory: false,
                        categoryName: 'Casual Wear'
                    },
                    {
                        categoryId: '5',
                        hasSubcategory: false,
                        categoryName: 'Shirt'
                    },
                    {
                        categoryId: '6',
                        hasSubcategory: false,
                        categoryName: 'Sweater'
                    },
                ],
            },
            {
                categoryId: '7',
                hasSubcategory: true,
                categoryName: 'Outerwear',
                subCategories: [
                    {
                        categoryId: '8',
                        hasSubcategory: false,
                        categoryName: 'Coat'
                    },
                    {
                        categoryId: '9',
                        hasSubcategory: false,
                        categoryName: 'Blazer'
                    },
                    {
                        categoryId: '10',
                        hasSubcategory: false,
                        categoryName: 'Jacket'
                    },
                    {
                        categoryId: '11',
                        hasSubcategory: false,
                        categoryName: 'Vest'
                    },
                ],
            },
            {
                categoryId: '12',
                hasSubcategory: false,
                categoryName: 'Footwear'
            },
        ],
    },
    {
        categoryId: '13',
        hasSubcategory: false,
        categoryName: 'Jewellery',
    },
    {
        categoryId: '14',
        hasSubcategory: false,
        categoryName: 'Watches',
    },
    {
        categoryId: '15',
        hasSubcategory: true,
        categoryName: 'Outerwear',
        subCategories: [
            {
                categoryId: '16',
                hasSubcategory: false,
                categoryName: 'Coat'
            },
            {
                categoryId: '17',
                hasSubcategory: false,
                categoryName: 'Blazer'
            },
            {
                categoryId: '18',
                hasSubcategory: false,
                categoryName: 'Jacket'
            },
            {
                categoryId: '19',
                hasSubcategory: false,
                categoryName: 'Vest'
            },
        ],
    },
    {
        categoryId: '20',
        hasSubcategory: false,
        categoryName: 'Cosmetics',
    },
    {
        categoryId: '21',
        hasSubcategory: false,
        categoryName: 'Accessories',
    },
    {
        categoryId: '22',
        hasSubcategory: true,
        categoryName: 'Electronic',
        subCategories: [
            {
                categoryId: '23',
                hasSubcategory: false,
                categoryName: 'Mobile'
            },
            {
                categoryId: '24',
                hasSubcategory: false,
                categoryName: 'Computer'
            },
            {
                categoryId: '25',
                hasSubcategory: false,
                categoryName: 'TV'
            },
        ],
    },
    {
        categoryId: '26',
        hasSubcategory: false,
        categoryName: 'Furniture',
    },
    {
        categoryId: '27',
        hasSubcategory: false,
        categoryName: 'Sunglasses',
    },
    {
        categoryId: '28',
        hasSubcategory: false,
        categoryName: 'Rolling Diamond',
    },
    {
        categoryId: '29',
        hasSubcategory: false,
        categoryName: 'Xbox Controller',
    },
    {
        categoryId: '30',
        hasSubcategory: false,
        categoryName: 'Leather Watch',
    },
    {
        categoryId: '31',
        hasSubcategory: false,
        categoryName: 'Smart Tablet',
    },
    {
        categoryId: '32',
        hasSubcategory: false,
        categoryName: 'Purse',
    },
    {
        categoryId: '33',
        hasSubcategory: false,
        categoryName: 'Sunglasses'
    },
];

const DrawerComponent = (props) => {
    const { open, toggleDrawer } = props;
    const [openedSubmenu, setOpenedSubmenu] = useState(new Set());
    const toggleSubmenu = (menuId) => {
        setOpenedSubmenu(state => {
            const newState = new Set([...state]);
            isMenuOpen(menuId) ? newState.delete(menuId) : newState.add(menuId);
            return newState;
        });
    }
    const isMenuOpen = (menuId) => openedSubmenu.has(menuId);
    const addClassName = (margin) => `ml-${margin}`;

    const listItem = (category, index, marginLeft) => {
        return (
            <>
                <li key={index} className={`flex items-center justify-between mb-2 ${addClassName(marginLeft)}`}>
                    <Link to={'#'} className='link'>{category.categoryName}</Link>
                    {category.hasSubcategory &&
                        (isMenuOpen(category.categoryId) ? <FaRegMinusSquare onClick={() => toggleSubmenu(category.categoryId)} /> : <FaRegPlusSquare onClick={() => toggleSubmenu(category.categoryId)} />)
                    }
                </li>
                <div className={`${isMenuOpen(category.categoryId) ? '' : 'hidden'}`}>
                    {category.hasSubcategory && <ul>
                        {category.subCategories.map((subCategory, subIndex) => (
                            <div className='subMenu transition'>{listItem(subCategory, subIndex, marginLeft + 4)}</div>
                        ))}
                    </ul>}
                </div>
            </>
        );
    };


    const DrawerList = (
        <Box sx={{ width: 320 }} role="presentation">
            <div className='menu-header flex items-center justify-between my-1 ml-4 mr-2 text-[16px] font-[400]'>
                Categories
                <IconButton aria-label="close-menu" onClick={toggleDrawer(false)}>
                    <IoMdClose />
                </IconButton>
            </div>
            <Divider />
            <div className='menu-content p-6'>
                <ul>
                    {CategoryList.map((category, index) => (
                        <>
                            {listItem(category, index, 0)}
                        </>
                    ))}
                </ul>
            </div>
        </Box>
    );

    return (
        <>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
};

export default DrawerComponent;