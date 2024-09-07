import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { RxCross1 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {

    const { products, cartItems, setCartItems, cart, setCart, subTotal, setSubTotal } = useContext(AuthContext);

    const cartProducts = cartItems.map(item => {
        return products.find(product => product.id === item);
    })

    // console.log("Cart Products:", cartProducts);

    const handleAdd = (product) => {
        setCart(cart + 1);
        setSubTotal(subTotal + product.discountedPrice);
        product.quantity += 1;
    }

    const handleRemove = (product) => {
        setCart(cart - 1);
        setSubTotal(subTotal - product.discountedPrice);
        product.quantity -= 1;
    }
    const handleDelete = (product) => {
        const newCartItems = cartItems.filter(item => item !== product.id);
        setCartItems(newCartItems);
        setCart(cart - product.quantity);
        setSubTotal(subTotal - (product.quantity * product.discountedPrice));
        product.quantity = 1;
        toast.success("Product deleted from the cart");
    }

    return (
        <div className="flex justify-between mt-16">
            {/* Products */}
            <div className="w-3/5 space-y-5">
                <h2 className="font-bold text-xl">An overview of your order</h2>
                {
                    cartProducts.map(product => <div key={product.id} className="flex justify-between items-center border rounded-lg bg-blue-50 px-7">

                        <div className="border rounded-lg px-2 py-1 flex items-center justify-between">
                            <button className={`${product.quantity < 2 && "btn-disabled text-gray-400"}`} onClick={() => handleRemove(product)}> <FaMinus /> </button>
                            <span className="font-bold text-lg ml-2 mr-2">{product.quantity}</span>
                            <button onClick={() => handleAdd(product)}> <FaPlus /> </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <img src={product.image} alt="Product Image" />
                            <div className="space-y-2">
                                <p className="font-bold text-lg">{product.name}</p>
                                <p className="font-bold text-red-500">€{product.discountedPrice}</p>
                            </div>
                        </div>

                        <RxCross1 onClick={() => handleDelete(product)} className="font-bold text-2xl cursor-pointer" />
                    </div>)
                }
            </div>
            {/* order details */}
            <div className="w-1/3 space-y-5">
                <h2 className="font-bold text-xl">Oder details</h2>
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
                        <div className="flex items-center gap-1">
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
                <Link to='/checkout' className="btn btn-sm bg-black text-white w-full hover:bg-gray-900 uppercase">Go to Checkout</Link>
            </div>
        </div>
    );
};

export default Cart;