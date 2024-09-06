import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialButtons = () => {
    return (
        <div className='flex items-center justify-center gap-5'>
            <button className="btn border border-gray-300">
                <FcGoogle className='text-xl' />
                Sign in with Google
            </button>
            <button className="btn border border-gray-300">
                <FaApple className='text-2xl' />
                Sign in with Apple
            </button>
        </div>
    );
};

export default SocialButtons;