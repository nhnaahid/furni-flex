import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";


const Products = () => {
    const { products, cart, setCart, cartItems, setCartItems } = useContext(AuthContext);
    const [cat, setCat] = useState("Rocking Chair");

    const categories = products.reduce((acc, cur) => {
        if (!acc.includes(cur.category)) {
            acc.push(cur.category);
        }
        return acc;
    }, [])
    // console.log(categories);

    const handleAddCart = (product) => {
        setCartItems([...cartItems, product.id])
        setCart(cart + 1);
        toast.success("Success! Product added to the Cart.");
    }
    // console.log(cartItems);

    return (
        <div className="flex justify-between mt-16">
            {/* sidebar-categories */}
            <div className="w-1/5  md:border-r md:pr-5 flex flex-col gap-3">
                {
                    categories.map((category, idx) => <button onClick={() => setCat(category)} className={`btn btn-sm ${cat === category ? "bg-black text-white" : ""} hover:bg-black hover:text-white duration-500`} key={idx}>{category}</button>)
                }
            </div>
            {/* products */}
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    products.map(product => <>
                        {
                            cat === product.category &&
                            <div className="card bg-base-100 shadow-xl border">
                                <figure className="px-10 pt-10 ">
                                    <img
                                        src={product.image}
                                        alt="Chair"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-xl">{product.name}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 font-bold">
                                        <p>€{product.discountedPrice}</p>
                                        <p className="line-through text-gray-400">{product.mainPrice}</p>
                                        <p className="text-red-500">{product.discountPercent}% OFF</p>
                                    </div>
                                    <p className="text-sm">{product.description}</p>
                                    <button onClick={() => handleAddCart(product)} className={`btn btn-sm bg-black text-white w-full hover:bg-gray-900 ${cartItems.includes(product.id) && "btn-disabled"}`}>{cartItems.includes(product.id) ? 'Added' : 'Add to Cart'}</button>
                                </div>
                            </div>
                        }
                    </>

                    )
                }
            </div>
        </div>
    );
};

export default Products;