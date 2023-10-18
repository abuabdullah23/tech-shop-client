import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaCartPlus } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, name, image, description, price, rating, brandName, type } = product;
    const { user } = useAuth();

    // handle add to cart product
    const handleAddToCart = () => {
        const productInfo = {
            productId: _id,
            email: user?.email,
            name,
            image,
            price,
            brandName
        }

        fetch(`${import.meta.env.VITE_BASE_API}/add-cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productInfo)
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Add To Cart Successful.');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className='my-16'>
            <SectionTitle sectionTitle={'Product Details'} />

            <div className='flex flex-col lg:flex-row items-start justify-between gap-6'>
                <div className='flex items-center justify-center w-full lg:w-2/5'>
                    <img className='w-full h-72 object-contain p-5 border-2 border-gray-200 rounded-md' src={image} alt="product image" />
                </div>

                <div className='flex flex-col gap-1 w-full lg:w-3/5'>
                    <h2 className='text-2xl text-cyan-700 font-semibold'>{name}</h2>
                    <h4 className='text-lg'>Brand Name: {brandName}</h4>
                    <h3 className='text-lg'>Type: {type}</h3>
                    <h4 className='text-base font-semibold text-cyan-600'>Price: ${price}</h4>
                    <h3 className='text-lg'>Rating: {rating}</h3>

                    <button onClick={handleAddToCart} className='flex items-center gap-4 py-2 px-5 bg-cyan-500 hover:bg-cyan-600 text-white rounded mt-3 w-fit'>
                        <FaCartPlus />
                        <span className='font-semibold'>Add To Cart</span>
                    </button>
                </div>
            </div>
            <div className='mt-7'>
                <strong>Description:</strong> {description}
            </div>
        </div>
    );
};

export default ProductDetails;