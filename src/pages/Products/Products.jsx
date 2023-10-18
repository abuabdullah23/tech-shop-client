import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

// for slider
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Products = () => {
    const brands = useLoaderData();
    const { title } = useParams();
    const [products, setProducts] = useState([]);

    // get product by brand name
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_API}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // filter targeted brand products
    const filteredProduct = products.filter((p) => p.brandName === title);

    // for slider images targeted brand
    const brandSliderImages = brands.filter((b) => b.title === title);
    const { slider_images } = brandSliderImages[0];

    return (
        <>
            {filteredProduct.length > 0 ?
                <div className='mb-16'>
                    <div>
                        <AutoplaySlider
                            play={true}
                            interval={2000}
                            animation="foldOutAnimation"
                            className="h-[400px] w-full -z-10 rounded-md"
                        >
                            {
                                slider_images.map((img, i) => <div
                                    key={i}
                                    data-src={img}
                                />)
                            }
                        </AutoplaySlider>
                    </div>

                    <div className='mt-24'>
                        <SectionTitle sectionTitle={"Products"} />
                        {
                            filteredProduct.map((product) => <SingleProduct
                                key={product._id}
                                product={product}
                            />)
                        }
                    </div>
                </div>
                :
                <EmptyContent emptyText={'No products found in this brand. Please select another brand.'} />

            }
        </>
    );
};

export default Products;