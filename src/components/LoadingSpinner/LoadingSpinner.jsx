const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[100vh] dark:text-gray-100'>
            <p className='text-7xl font-thin'>L</p>
            <div className='w-11 h-11 border-4 border-dashed border-cyan-500 rounded-full animate-spin mt-5'></div>
            <p className='text-7xl font-thin'>ading...</p>
        </div>
    );
};

export default LoadingSpinner;