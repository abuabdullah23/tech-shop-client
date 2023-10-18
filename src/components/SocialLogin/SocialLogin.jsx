import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                toast.success('Login with Google Successful')
            })
    }

    return (
        <div>
            <div onClick={handleGoogleLogin} className='p-2 rounded-full w-full border border-gray-200 hover:bg-gray-200 flex items-center justify-center gap-2 cursor-pointer'>
                <FcGoogle />
                <span className='text-black text-sm'>Login with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;