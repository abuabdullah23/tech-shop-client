import React from 'react';
import { Link } from 'react-router-dom';

const SingleBrand = ({ brand }) => {
    const {id, title, image } = brand;
    return (
        <Link to={`/products/${title}`} className='border border-gray-300 py-7 hover:bg-gray-100 rounded hover:scale-[105%] transition-all' title={title}>
            <div className='w-full flex items-center justify-center'>
                <img className='h-16' src={image} alt="brand logo"/>
            </div>
        </Link>
    );
};

export default SingleBrand;