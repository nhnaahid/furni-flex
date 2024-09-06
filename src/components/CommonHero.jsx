import hero from '../assets/hero.png'
import logo from '../assets/logo.png'

const CommonHero = () => {
    return (
        <div className="w-2/5 h-full relative hidden md:block">
            <img className='h-full w-full' src={hero} alt="" />
            <div className='absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-2'>
                <img className='w-1/4' src={logo} alt="" />
                <p className='text-white text-center w-4/5'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
            </div>
        </div>
    );
};

export default CommonHero;