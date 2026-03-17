
import { FaShoppingCart } from "react-icons/fa";
import { useProductContext } from "../context/ProductContext";

const Navbar = () => {
    const {cart} = useProductContext()
  return (
    <>
    <div className=" bg-gray-800 sticky top-0 z-50">
        <nav className="flex justify-between items-center container mx-auto text-white py-4">
            <h1 className="text-3xl">Shoping Card</h1>
            <div className="flex gap-4 items-center">
                <div className="relative ">
                    <span className="absolute text-red-600 font-bold text-4xl -top-5 -right-2">{cart.length}</span>
                    <span className="text-4xl"><FaShoppingCart /></span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    Cart
                </button>
            </div>
        </nav>
    </div>
    </>
  );
};

export default Navbar;
