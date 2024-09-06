
import { Link } from 'react-router-dom';
import SocialButtons from '../../components/SocialButtons';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CommonHero from '../../components/CommonHero';

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='flex items-center'>
            {/* left */}
            <div className="w-full md:w-3/5 text-center bg-blue-50 m-3 md:m-7 py-5 md:py-12 rounded-lg">
                <div className='space-y-1'>
                    <h3 className='text-2xl font-semibold'>Welcome To</h3>
                    <h1 className='text-4xl font-bold'>Furni<span className='text-sky-600'>Flex</span></h1>
                    <p>Signup for purchase your desire products</p>
                </div>
                {/* sign up form */}
                <form className='w-full md:w-4/5 mx-auto p-5 space-y-4 mt-3'>

                    <div className='flex gap-2'>
                        <input type="text" placeholder="First Name (Optional)" className="input input-bordered border-gray-400 w-full" />
                        <input type="text" placeholder="Last Name (Optional)" className="input input-bordered border-gray-400 w-full" />
                    </div>

                    <input type="email" placeholder="Email Address" className="input input-bordered border-gray-400 w-full" required />

                    <div className='relative'>
                        <input type={showPass ? 'text' : 'password'} placeholder="Password" className="input input-bordered border-gray-400 w-full" required />
                        <div onClick={() => setShowPass(!showPass)} className='w-fit absolute right-2 top-4 text-xl'>
                            {
                                showPass ? <FaEyeSlash /> : <FaEye />
                            }
                        </div>
                    </div>

                    <div className='flex gap-1 font-semibold'>
                        <input type="checkbox" name="tnp" id="" />
                        <p>I agree to the <a className='underline' target="_blank" href="https://ibos.io/">Terms & Policy</a></p>
                    </div>

                    <input className='btn bg-black text-white w-full hover:bg-gray-900' type="submit" value="Sign Up" />

                </form>

                {/* social login */}
                <div className="divider">or</div>

                <SocialButtons btn1="Sign up with Google" btn2="Sign up with Apple"></SocialButtons>

                <p className='font-bold mt-5'>Have an account? <Link className='text-sky-600' to="/signin">Sign In</Link> </p>

            </div>

            {/* right */}
            <CommonHero></CommonHero>
        </div>
    );
};

export default SignUp;