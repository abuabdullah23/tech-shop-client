import React from 'react';

const SectionTitle = ({ sectionTitle, sectionDescription }) => {
    return (
        <div className='mb-12'>
            <h3 className='text-center text-4xl text-cyan-500 dark:text-white transition-colors font-semibold'>
                {sectionTitle}
            </h3>
            <p className='text-center text-xl text-gray-600 dark:text-white transition-colors px-5 md:px-12 lg:px-32 mt-4'>{sectionDescription}</p>
        </div>
    );
};

export default SectionTitle;