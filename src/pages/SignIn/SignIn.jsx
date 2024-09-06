import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialButtons from "../../components/SocialButtons";
import { Link } from "react-router-dom";
import CommonHero from "../../components/CommonHero";

const SignIn = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='flex items-center'>
            {/* left */}
            <div className="w-full md:w-3/5 text-center bg-blue-50 m-3 md:m-7 py-5 md:py-12 rounded-lg">
                <div className='space-y-1'>
                    <h3 className='text-3xl font-semibold'>Welcome Back!</h3>
                    <p>Enter your Credentials to access your account</p>
                </div>
                {/* sign in form */}
                <form className='w-full md:w-4/5 mx-auto p-5 space-y-4 mt-3'>

                    <input type="email" placeholder="Email Address" className="input input-bordered border-gray-400 w-full" required />

                    <div className='relative'>
                        <input type={showPass ? 'text' : 'password'} placeholder="Password" className="input input-bordered border-gray-400 w-full" required />
                        <div onClick={() => setShowPass(!showPass)} className='w-fit absolute right-2 top-4 text-xl'>
                            {
                                showPass ? <FaEyeSlash /> : <FaEye />
                            }
                        </div>
                    </div>

                    <div className="w-full text-end">
                        <Link className="text-blue-700">Forgot Password?</Link>
                    </div>

                    {/* <div className='flex gap-1 font-semibold'>
                        <input type="checkbox" name="tnp" id="" />
                        <p>I agree to the <a className='underline' target="_blank" href="https://ibos.io/">Terms & Policy</a></p>
                    </div> */}

                    <input className='btn bg-black text-white w-full hover:bg-gray-900' type="submit" value="Sign In" />

                </form>

                {/* social login */}
                <div className="divider">or</div>

                <SocialButtons btn1="Sign in with Google" btn2="Sign in with Apple"></SocialButtons>

                <p className='font-bold mt-5'>Don't have an account? <Link className='text-sky-600' to="/signup">Sign Up</Link> </p>

            </div>

            {/* right */}
            <CommonHero></CommonHero>
        </div>
    );
};

export default SignIn;