import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="max-w-screen-2xl mx-auto font-barlow text-black">

            {
                location.pathname !== '/signin' && location.pathname !== '/signup' && <div className="h-20"><Navbar></Navbar></div>
            }
            <div className="w-full md:w-4/5 mx-auto px-2 md:px-0">
                <Outlet></Outlet>
            </div>

            

            {
                location.pathname !== '/signin' && location.pathname !== '/signup' && <Footer></Footer>
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