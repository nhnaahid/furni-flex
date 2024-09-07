import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Products = () => {
    const { products } = useContext(AuthContext);
    const [cat, setCat] = useState("Rocking Chair");

    const categories = products.reduce((acc, cur) => {
        if (!acc.includes(cur.category)) {
            acc.push(cur.category);
        }
        return acc;
    }, [])
    console.log(categories);
    return (
        <div className="flex justify-between mt-16">
            {/* sidebar-categories */}
            <div className="w-1/5  border-r pr-5 flex flex-col gap-3">
                {
                    categories.map((category, idx) => <button onClick={() => setCat(category)} className={`btn btn-sm ${cat === category ? "bg-black text-white" : ""} hover:bg-black hover:text-white duration-500`} key={idx}>{category}</button>)
                }
            </div>
            {/* products */}
            <div className="w-3/4 border-2">
                {
                    products.map(product => <div key={product.id}>
                        {
                            cat === product.category && <div className="card bg-base-100 w-96 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;