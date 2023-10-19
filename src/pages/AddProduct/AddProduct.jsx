import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const AddProduct = () => {
    const [loader, setLoader] = useState(false);
    const { user } = useAuth();

    // Add product method
    const handleAddProduct = (event) => {
        event.preventDefault();
        setLoader(true);
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const productInfo = {
            name,
            userMail: user?.email,
            image,
            brandName,
            type,
            price: parseInt(price),
            rating: parseInt(rating),
            description
        }

        fetch(`${import.meta.env.VITE_BASE_API}/add-product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productInfo)
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success('Product add successful.');
                form.reset('');
                setLoader(false);
            })
            .catch((error) => {
                toast.error(error.message);
                setLoader(false);
            })
    }

    return (
        <div className='md:px-10 my-10'>
            <SectionTitle sectionTitle={'Add A New Product'} />
            <div>
                <form onSubmit={handleAddProduct} className='mt-5 border rounded-lg p-5 bg-slate-100 dark:bg-slate-800'>
                    {/* row 1 */}
                    <div className='md:flex gap-4'>
                        <div className='w-full'>
                            <p className='text-lg font-semibold ps-3 mb-1 mt-2 dark:text-white'>Product Name <span className='text-red-400'>*</span> </p>
                            <input required className='py-2 px-3 border rounded-md w-full' type="text" name="name" id="name" placeholder='Product Name' />
                        </div>
                        <div className='w-full'>
                            <p className='text-lg font-semibold ps-3 mb-1 mt-2 dark:text-white'>Image Url <span className='text-red-400'>*</span> </p>
                            <input required className='py-2 px-3 border rounded-md w-full' type="text" name="image" id="image" placeholder='Products Image Url' />
                        </div>
                    </div>
                    {/* row 2 */}
                    <div className='md:flex gap-4'>
                        <div className='w-full'>
                            <p className='text-lg font-semibold ps-3 mb-1 mt-2 dark:text-white'>Brand Name <span className='text-red-400'></span> </p>
                            <select required className='py-2 px-3 border rounded-md w-full' type="text" name="brandName" id="brandName" placeholder='Brand Name' >
                                <option value=''>-- select brand --</option>
                                <option value='Apple'>Apple</option>
                                <option value='Google'>Google</option>
                                <option value='Intel'>Intel</option>
                                <option value='Philips'>Philips</option>
                                <option value='Samsung'>Samsung</option>
                                <option value='Sony'>Sony</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <p className='text-lg font-semibold ps-3 mb-1 mt-2 dark:text-white'>Type<span className='text-red-400'>*</span> </p>
                            <select required className='py-2 px-3 border rounded-md w-full' type="text" name="type" id="type" >
                                <option value=''>-- select type --</option>
                                <option value='Computer'>Computer</option>
                                <option value='Camera'>Camera</option>
                                <option value='Development Tools'>Development Tools</option>
                                <option value='Electronics'>Electronics</option>
                                <option value='Headphone'>Headphone</option>
                                <option value='Health'>Health</option>
                                <option value='Laptop'>Laptop</option>
                                <option value='Laptop Accessories'>Laptop Accessories</option>
                                <option value='Mobile'>Mobile</option>
                                <option value='Mobile Accessories'>Mobile Accessories</option>
                                <option value='Monitor'>Monitor</option>
                                <option value='Memory'>Memory</option>
                                <option value='Smart Speaker'>Smart Speaker</option>
                                <option value='Servers'>Servers</option>
                                <option value='Smart Tools'>Smart Tools</option>
                                <option value='Software'>Software</option>
                                <option value='TV'>TV</option>
                                <option value='Tablet'>Tablet</option>
                                <option value='USB'>USB</option>
                                <option value='Watch'>Watch</option>
                            </select>
                        </div>
                    </div>
                    {/* row 3 */}
                    <div className='md:flex gap-4'>
                        <div className='w-full'>
                            <p className='text-lg font-semibold ps-3 mb-1 mt-2 dark:text-white'>Price <span className='text-red-400'>*</span> </p>
                            <input required className='py-2 px-3 border rounded-md w-full' type="number" name="price" id="price" placeholder='$ Price in Dollar' min={0} />
                        </div>
                        <div className='w-full'>
                            <p className='text-lg font-semibold ps-3 mb-1 mt-2 dark:text-white'>Rating <span className='text-red-400'>*</span> </p>
                            <input required className='py-2 px-3 border rounded-md w-full' type="number" name="rating" id="rating" placeholder='Rating' min={0} />
                        </div>
                    </div>
                    {/* row 4 */}
                    <div className='md:flex gap-4'>
                        <div className='w-full'>
                            <p className='text-lg font-semibold ps-3 mb-1 mt-2 dark:text-white'>Short Description</p>
                            <textarea className='py-2 px-3 border rounded-md w-full' type="text" name="description" id="description" placeholder='Short Description' />
                        </div>
                    </div>
                    <button className='py-2 px-5 mt-5 w-full rounded-md border-2 border-cyan-500 font-semibold bg-slate-300 hover:bg-cyan-500 hover:text-white text-xl mb-5' type='submit'>
                        {
                            loader ? <Loader loadingText={'Adding Product...'} /> : 'Add Product'
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;