import React from 'react'
import { useProductContext } from '../context/ProductContext';

const Cart = () => {
  const { cart, setCart } = useProductContext();
  console.log(cart);
  
   if(cart.length === 0){
    return <h2 className='text-center text-3xl mt-10'>Your cart is empty</h2>
   }
    
const increment = (id) => {
  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      // Prevent going over stock
      if (item.quantity < item.stock) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item; // keep as is
      }
    }
    return item;
  });
  setCart(updatedCart);
};

   const decrement = (id) => {
  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      // Prevent going below 1
      if (item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item; // keep as is
      }
    }
    return item;
  });
  setCart(updatedCart);
};
 const total = cart.reduce((acc, item)=>{
   return acc + Number(item.price) * Number(item.quantity)
 }, 0 )
    
  return (
  <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>

      <ul className="space-y-5">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white border rounded-2xl p-5 shadow-md hover:shadow-lg transition"
          >
            {/* LEFT */}
            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain bg-gray-100 p-2 rounded-lg"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* Quantity UI */}
                <div className="flex items-center gap-3 mt-3">
                  <button className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600"
                  onClick={()=>decrement(item.id)}>
                    −
                  </button>

                  <span className="text-lg font-medium">
                    {item.quantity}
                  </span>

                  <button className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600"
                  onClick={()=>increment(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-right">
              <p className="text-xl font-bold text-gray-800">
                ${item.price * item.quantity}
              </p>
              <p className="text-sm text-gray-500">
                ${item.price} each
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* TOTAL SECTION */}
      <div className="mt-8 border-t pt-5 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Total</h3>
        <p className="text-2xl font-bold">${Number(total)}</p>
      </div>

      {/* CHECKOUT BUTTON */}
      <div className="mt-6 text-right">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        onClick={()=>setCart([])}>
          Checkout
        </button>
      </div>
    </div>
  )
}


export default Cart

