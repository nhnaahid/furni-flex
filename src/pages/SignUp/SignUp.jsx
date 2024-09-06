import hero from '../../assets/hero.png'
import { Link } from 'react-router-dom';
import SocialButtons from '../../components/SocialButtons';

const SignUp = () => {
    return (
        <div className='flex items-center'>
            {/* left */}
            <div className="w-3/5 text-center">
                <h3 className='text-2xl font-semibold'>Welcome To</h3>
                <h1 className='text-4xl font-bold'>Furni<span className='text-sky-600'>Flex</span></h1>
                <p>Signup for purchase your desire products</p>

                <form className='w-4/5 mx-auto p-5 space-y-3'>

                    <div className='flex gap-2'>
                        <input type="text" placeholder="First Name (Optional)" className="input input-bordered w-full" />
                        <input type="text" placeholder="Last Name (Optional)" className="input input-bordered w-full" />
                    </div>

                    <input type="email" placeholder="Email Address" className="input input-bordered w-full" />

                    <input type="password" placeholder="Password" className="input input-bordered w-full" />
                    <div className='flex gap-1 font-semibold'>
                        <input type="checkbox" name="tnp" id="" />
                        <p>I agree to the <a className='underline' href="#">Terms & Policy</a></p>
                    </div>
                    <input className='btn btn-neutral w-full' type="submit" value="Sign Up" />

                </form>
                <div className="divider">or</div>

                <SocialButtons></SocialButtons>

                <p className='font-bold mt-5'>Have an account? <Link className='text-sky-600' to="/signin">Sign In</Link> </p>
                
            </div>

            {/* right */}
            <div className="w-2/5 border border-red-500">
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default SignUp;