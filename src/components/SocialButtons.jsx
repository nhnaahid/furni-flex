/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialButtons = ({ btn1, btn2 }) => {
    const { googleSignIn, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const name = result.user.displayName;
                const email = result.user.email;
                const photo = result.user.photoURL;
                updateUser(name, email, photo)
                    .then(() => {
                        toast.success('Sign in successful!');
                        navigate('/products');
                    })
                    .catch(error => toast.error(error.message));
            })
    }

    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
            <button onClick={handleGoogleSignIn} className="btn border border-gray-400">
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