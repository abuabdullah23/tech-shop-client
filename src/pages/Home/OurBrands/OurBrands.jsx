import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleBrand from './SingleBrand';

const OurBrands = () => {
    const [brands, setBrands] = useState([]);
    console.log(brands);

    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className='py-12'>
            <SectionTitle sectionTitle={'Our Brands'} />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
                {
                    brands.map((brand) => <SingleBrand
                        key={brand.id}
                        brand={brand}
                    />)
                }
            </div>
        </div>
    );
};

export default OurBrands;