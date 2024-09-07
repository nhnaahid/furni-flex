import { FaFacebookF, FaInstagram, FaLinkedinIn, } from 'react-icons/fa';
import icon from '../../assets/icon.png';
import usa from '../../assets/usa.png';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-black text-white p-3 md:p-7 mt-16'>
            <div className="footer flex flex-col md:flex-row mt-5">
                <aside className='flex items-center w-full md:w-1/3 justify-center md:justify-start'>
                    <img className='w-10' src={icon} alt="" />
                    <p className='text-3xl font-bold'>Furni<span className='text-sky-500'>Flex</span></p>
                </aside>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full md:w-3/5'>
                    <nav className='flex flex-col gap-1 w-full text-center md:text-start'>
                        <h6 className="footer-title">About Us</h6>
                        <a className="link link-hover">Master Plan</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Invest</a>
                        <a className="link link-hover">Pressroom</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav className='flex flex-col gap-1 w-full text-center md:text-start'>
                        <h6 className="footer-title">Explore EEVE</h6>
                        <a className="link link-hover">Unlock my Robot Power</a>
                        <a className="link link-hover">Starlight</a>
                        <a className="link link-hover">Robot Platform</a>
                        <a className="link link-hover">EEVE Roadmap</a>
                    </nav>
                    <nav className='flex flex-col gap-1 w-full text-center md:text-start'>
                        <h6 className="footer-title">Community & Support</h6>
                        <a className="link link-hover">Willow X Community</a>
                        <a className="link link-hover">Developer & Maker Access</a>
                        <a className="link link-hover">Special Cases</a>
                    </nav>
                </div>
            </div>

            <div className="divider divider-neutral mt-20 mb-7"></div>

            <div className='flex flex-col md:flex-row justify-between items-center gap-3 text-sm md:text-base'>
                <div className='flex items-center gap-2 mb-5 md:mb-0'>
                    <Link><FaFacebookF /></Link>
                    <Link><FaInstagram /></Link>
                    <Link><FaXTwitter /></Link>
                    <Link><FaLinkedinIn /></Link>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3 md:mb-0'>
                    <Link>March22 Recap</Link>
                    <Link>Privacy Policy</Link>
                    <Link>General Terms</Link>
                    <Link>Contact</Link>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={usa} alt="" />
                    <p>United States (English)</p>
                </div>
            </div>

            <p className='text-center text-gray-600 mt-7 text-sm md:text-base'>EEVE © 2024. All rights reserved.</p>
        </footer>
    );
};

export default Footer;