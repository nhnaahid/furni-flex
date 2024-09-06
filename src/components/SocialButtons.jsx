/* eslint-disable react/prop-types */
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialButtons = ({btn1, btn2}) => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
            <button className="btn border border-gray-400">
                <FcGoogle className='text-xl' />
                {btn1}
            </button>
            <button className="btn border border-gray-400">
                <FaApple className='text-2xl' />
                {btn2}
            </button>
        </div>
    );
};

export default SocialButtons;