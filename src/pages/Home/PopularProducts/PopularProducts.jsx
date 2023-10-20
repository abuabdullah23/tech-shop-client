import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
    const [products, setProducts] = useState([]);

    // get product by brand name
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_API}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='my-12' id='popular-products'>
            <SectionTitle sectionTitle={'Our Popular Products'} />

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    products.slice(0, 8).map((product) => <ProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default PopularProducts;