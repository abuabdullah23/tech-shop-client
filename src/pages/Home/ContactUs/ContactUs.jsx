import React from 'react';
import { FaMobile } from 'react-icons/fa';
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ContactUs = () => {
    return (
        <div className='md:px-10 p-5 my-12 text-center'>
            <SectionTitle sectionTitle={'Contact Us'} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                {/* Phone */}
                <div className='py-10 px-5 shadow-lg border rounded-lg bg-gray-200'>
                    <div className='grid justify-items-stretch'>
                        <img className='h-12 justify-self-center' src="https://cdn-icons-png.flaticon.com/128/1151/1151429.png" alt="Phone Icon" />
                    </div>
                    <h2 className='text-2xl font-bold mt-3 mb-3'>Phone</h2>
                    <div className='flex gap-2 items-center text-lg'>
                        <FaMobile />
                        <p> +880 1457 22 54 65</p>
                    </div>
                    <div className='flex gap-2 items-center text-lg'>
                        <FaMobile />
                        <p> +880 1957 25 54 22</p>
                    </div>
                </div>

                {/* Email */}
                <div className='py-10 px-5 shadow-lg border rounded-lg bg-gray-200'>
                    <div className='grid justify-items-stretch'>
                        <img className='h-12 justify-self-center' src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="Email Icon" />
                    </div>
                    <h2 className='text-2xl font-bold mt-3 mb-3'>Email</h2>
                    <div className='flex gap-2 items-center text-lg'>
                        <HiOutlineMail />
                        <p> techshop@info.com</p>
                    </div>
                    <div className='flex gap-2 items-center text-lg'>
                        <HiOutlineMail />
                        <p> tech.shop@gmail.com</p>
                    </div>
                </div>

                {/* Location */}
                <div className='py-10 px-5 shadow-lg border rounded-lg bg-gray-200'>
                    <div className='grid justify-items-stretch'>
                        <img className='h-12 justify-self-center' src="https://cdn-icons-png.flaticon.com/128/1008/1008001.png" alt="Location Icon" />
                    </div>
                    <h2 className='text-2xl font-bold mt-3 mb-3'>Location</h2>
                    <div className='flex gap-2 items-center text-lg'>
                        <HiLocationMarker />
                        <p> Uttara 514, Dhaka, Bangladesh</p>
                    </div>
                    <div className='flex gap-2 items-center text-lg'>
                        <HiLocationMarker />
                        <p> Gulshan 514, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;