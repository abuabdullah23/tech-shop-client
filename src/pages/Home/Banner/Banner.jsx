import { Link } from 'react-router-dom';
import banner_img from '../../../assets/images/Banner/Banner_image.webp'

const Banner = () => {
    return (
        <div className='md:px-10 p-5 lg:flex sm:flex-row-reverse gap-10 justify-between items-center bg-gray-200 mb-12'>
            <div className='flex items-end'>
                <img className='w-full' src={banner_img} alt="Banner Image" />
            </div>
            <div className='lg:w-4/5 md:pt-8 text-left flex flex-col justify-start gap-4'>
                <p className='md:text-4xl text-3xl font-bold md:leading-snug leading-snug mt-2'>Discover the Future of <span className='text-cyan-500'> Tech</span></p>
                <p className='text-lg font-semibold'>
                    Your One-Stop Shop for Cutting-Edge Electronics
                </p>
                <ul className='ml-4'>
                    <ol>1. Huge Selection of Smartphones, Laptops, and Gadgets.</ol>
                    <ol>2. Expert Support and Product Knowledge.</ol>
                    <ol>3. Fast and Secure Shipping Worldwide.</ol>
                </ul>
                <Link to='' className='py-2 px-5 w-fit rounded-md border-2 border-cyan-500 font-semibold hover:bg-cyan-500 hover:text-white text-xl mb-5'>Explore Now</Link>
            </div>
        </div>
    );
};

export default Banner;