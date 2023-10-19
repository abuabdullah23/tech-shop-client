import React from 'react';
import { Link } from 'react-router-dom';

const SingleBrand = ({ brand }) => {
    const { id, title, image } = brand;
    return (
        <Link to={`/products/${title}`} className='border border-gray-300 py-7 hover:bg-gray-100 rounded hover:scale-[105%] transition-all text-gray-500 hover:text-gray-800' title={title}>
            <div className='w-full flex items-center justify-center'>
                <img className='h-16' src={image} alt="brand logo" />
            </div>
            <h3 className='mt-4 font-semibold text-center'>{title}</h3>
        </Link>
    );
};

export default SingleBrand;