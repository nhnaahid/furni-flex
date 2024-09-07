import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { CiCircleInfo } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
    const { products, cartItems, subTotal, setCartItems, setCart, setSubTotal } = useContext(AuthContext);
    const navigate = useNavigate();

    const cartProducts = cartItems.map(item => {
        return products.find(product => product.id === item);
    })
    const handleCheckout = () => {
        cartProducts.map(product => product.quantity = 1);
        setCart(0);
        setCartItems([]);
        setSubTotal(0);
        navigate('/products');
        toast.success("Success! Order Placed.");
    }

    return (
        <div className="mt-12">
            <div className="overflow-x-auto bg-blue-50 rounded-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            cartProducts.map((data, index) => <tr key={data._id}>
                                <td>
                                    {index + 1}
                                </td>
                                {
                                    data.image && <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.image} alt="item image" />
                                            </div>
                                        </div>
                                    </td>
                                }

                                {
                                    data.name && <td>{data.name}</td>
                                }

                                {
                                    data.quantity && <td>{data.quantity}</td>
                                }
                                {
                                    data.discountedPrice && <td>{data.quantity * data.discountedPrice}</td>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <div className="w-full md:w-1/3 space-y-5 mt-5">
                    <div className="border rounded-lg bg-blue-50 py-3 px-7 font-semibold space-y-2">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>{subTotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1 lg:gap-3">
                                <p>Estimated Tax</p>
                                <CiCircleInfo />
                            </div>
                            <p>0</p>
                        </div>
                        <div className="flex justify-between text-xl">
                            <p>Total</p>
                            <p>{subTotal}</p>
                        </div>
                    </div>
                    <button onClick={handleCheckout} className="btn btn-sm bg-black text-white w-full hover:bg-gray-900 uppercase">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;