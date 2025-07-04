import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { IoMdClose } from 'react-icons/io';
import { IconButton } from '@mui/material';
import { FaRegPlusSquare, FaRegMinusSquare } from 'react-icons/fa';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../LoadingSpinner';

const DrawerComponent = (props) => {
    const { open, toggleDrawer } = props;
    const [openedSubmenu, setOpenedSubmenu] = useState(new Set());
    const [CategoryList, setCategoryList] = useState([]);

    const { categoriesList, loadingCategories } = useSelector(state => state.productSlice);

    const toggleSubmenu = (menuId) => {
        setOpenedSubmenu(state => {
            const newState = new Set([...state]);
            isMenuOpen(menuId) ? newState.delete(menuId) : newState.add(menuId);
            return newState;
        });
    }

    const isMenuOpen = (menuId) => openedSubmenu.has(menuId);

    const addClassName = (margin) => `ml-${margin}`;

    useEffect(() => {
        setCategoryList(categoriesList ?? []);
    }, [categoriesList]);

    const listItem = (category, index, marginLeft) => {
        return (
            <>
                <li key={index} className={`flex items-center justify-between mb-2 border-b-2 pb-2 ${addClassName(marginLeft)}`}>
                    <Link to={{
                        pathname: "/products",
                        search: `?category=${category._id}`,
                    }} className='link' onClick={toggleDrawer(false)}>
                        {category.name}
                    </Link>
                    {category.hasSubcategory &&
                        (isMenuOpen(category._id) ? <FaRegMinusSquare className='cursor-pointer' onClick={() => toggleSubmenu(category._id)} /> : <FaRegPlusSquare className='cursor-pointer' onClick={() => toggleSubmenu(category._id)} />)
                    }
                </li>
                <div className={`${isMenuOpen(category._id) ? '' : 'hidden'}`}>
                    {category.hasSubcategory && <ul>
                        {category.subcategories.map((subCategory, subIndex) => (
                            <div key={subIndex} className='subMenu transition'>{listItem(subCategory, subIndex, marginLeft + 4)}</div>
                        ))}
                    </ul>}
                </div>
            </>
        );
    };


    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation" className="flex flex-col h-lvh">
            {/* Categories Heading */}
            < div className='menu-header flex items-center justify-between my-1 ml-4 mr-2 text-[16px] font-[400]' >
                Categories
                < IconButton aria-label="close-menu" onClick={toggleDrawer(false)} >
                    <IoMdClose />
                </IconButton >
            </div >
            <Divider />
            {/* Categories List */}
            {
                !loadingCategories && <div className='menu-content p-6'>
                    <ul>
                        {CategoryList.map((category, index) => <div key={index}>{listItem(category, index, 0)}</div>)}
                    </ul>
                </div>
            }
            {/* Loading */}
            {loadingCategories && <div className='h-full'><LoadingSpinner /></div>}
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