import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../src/assets/images/404/404.png'

const Error = () => {
    return (
        <div className='px-7 lg:px-16 py-12 lg:py-20 gap-10 flex flex-col lg:flex-row items-center justify-between'>
            <div className='w-full'>
                <img src={notFoundImg} alt="404 image" />
            </div>
            <div className='text-center w-full p-5 flex items-center justify-center'>
                <div>
                    <h3 className='text-3xl font-semibold mb-10'>Page Not Found!</h3>
                    <Link to='/' className='bg-cyan-500 hover:bg-cyan-400 py-3 px-6 rounded-md text-white text-xl font-bold'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;