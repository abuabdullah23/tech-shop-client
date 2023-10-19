import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, brandName, price, image, rating } = product;

    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate(`/product-details/${id}`)
    }

    return (
        <div onClick={() => handleDetails(_id)} className='w-full border border-gray-300 rounded-md hover:scale-105 transition-all cursor-pointer hover:border-gray-400 dark:text-white'>
            <div className='w-full h-36 lg:h-40 bg-white rounded-t-md'>
                <img className='w-full h-full object-contain border-b border-gray-300 rounded-t-md' src={image} alt="product image" />
            </div>
            <div className='p-3 flex flex-col gap-1'>
                <h2 className='text-lg font-semibold text-cyan-600 dark:text-cyan-300' title={name}>{name.slice(0, 35)}...</h2>
                <div className='flex items-center justify-between'>
                    <h3 className='text-lg text-gray-500 dark:text-gray-50'>Brand: {brandName}</h3>
                    <h2>{rating}</h2>
                </div>
                <h2 className='text-lg font-bold text-cyan-800 dark:text-gray-50'>${price}</h2>
            </div>
        </div>
    );
};

export default ProductCard;