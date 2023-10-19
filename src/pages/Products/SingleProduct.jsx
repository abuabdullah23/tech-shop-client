import React from 'react';
import { FaEye, FaPenAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, brandName, price, image, type, rating } = product;

    return (
        <div className='flex flex-col lg:flex-row lg:items-start gap-3 lg:gap-5 mt-12'>
            <div className='lg:w-2/5 w-full'>
                <img className='w-full h-72 lg:h-56 border border-gray-300 p-3 rounded-md object-contain' src={image} alt="Product image" />
            </div>

            <div className='lg:w-3/5 w-full text-gray-500'>
                <h2 className='text-2xl text-cyan-700 font-semibold'>{name}</h2>
                <h4 className='text-lg mt-1'>Brand Name: {brandName}</h4>
                <h3 className='text-lg mt-1'>Type: {type}</h3>
                <h4 className='text-base font-semibold text-cyan-600 mt-1'>Price: ${price}</h4>
                <h3 className='text-lg mt-1'>Rating: {rating}</h3>
                <div className='mt-2 flex items-center gap-3'>
                    <Link to={`/product-update/${_id}`} className='flex items-center gap-4 py-2 px-5 bg-cyan-500 hover:bg-cyan-600 text-white rounded'>
                        <FaPenAlt />
                        <span>Update</span>
                    </Link>
                    <Link to={`/product-details/${_id}`} className='flex items-center gap-4 py-2 px-5 bg-gray-500 hover:bg-gray-600 text-white rounded'>
                        <FaEye />
                        <span>View Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;