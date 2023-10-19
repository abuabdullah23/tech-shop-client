import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useAuth();

    // redirect after login to target page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                toast.success('Login with Google Successful');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <div onClick={handleGoogleLogin} className='p-2 rounded-full w-full border border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center gap-2 cursor-pointer'>
                <FcGoogle />
                <span className='text-black dark:text-white text-sm'>Login with Google</span>
            </div>
        </div>
    );
};

export default SocialLogin;