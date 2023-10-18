import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {

    return (
        <div>
            <div className='p-2 rounded-full w-full border border-gray-200 hover:bg-gray-200 flex items-center justify-center gap-2 cursor-pointer'>
                <FcGoogle />
                <span className='text-black text-sm'>Login with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;