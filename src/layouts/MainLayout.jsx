import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="max-w-screen-2xl mx-auto font-barlow text-black">
            <div className="h-20">
                {
                    location.pathname !== '/signin' && location.pathname !== '/signup' && <Navbar></Navbar>
                }
            </div>



            <Outlet></Outlet>

            {
                (location.pathname !== '/signin' || location.pathname !== '/signup') && <Footer></Footer>
            }

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Slide
            />
        </div>
    );
};

export default MainLayout;