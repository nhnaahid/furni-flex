import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Cart = () => {
    const { products, cartItems, setCartItems, cart, setCart } = useContext(AuthContext);

    const cartProducts = cartItems.map(item => {
        return products.find(product => product.id === item);
    })

    console.log("Cart Products:", cartProducts);

    return (
        <div className="flex justify-between border">
            {/* Products */}
            <div className="w-3/5 border">
                <h2>An overview of your order</h2>
                {
                    cartProducts.map(product => <div key={product.id} className="flex border">
                        <div className="w-fit border ml-2 px-2 py-1 font-bold text-lg"><span> - </span> {product.quantity} <span> + </span></div>

                        <div >
                            <img src={product.image} alt="Product Image" />
                            <div>
                                <p>{product.name}</p>
                                <p>€{product.discountedPrice}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* order details */}
            <div className="w-1/3 border">
                <h2>Oder details</h2>
            </div>
        </div>
    );
};

export default Cart;