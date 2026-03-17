import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

const Product = ({ productItem }) => {
  const {id, name, price, description, image, title, rating, discountPrice, category } =
    productItem;

  const { cart, setCart } = useProductContext();
  const [open , setOpen]=useState(false)

 const handleCart = (productItem) => {
    setOpen(true)
  const isExist = cart.find((item) => item.id === productItem.id);
  if (isExist) {
    alert("Item is already in the cart!");
    return;
  }
  setCart((prev) => [...prev, productItem]);
};
const handleCancel = (id) => {
    setOpen(false)
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-500">{description}</p>{" "}
        <h3 className="card-title bg-amber-600 text-white w-fit px-6 py-1 rounded">{category}</h3>
        <p>Original Price: ${price.toFixed(2)}</p>
        <p>Discount Price: ${discountPrice.toFixed(2)}</p>
        <p>Rating: {rating} stars</p>
        <div className="card-actions flex justify-between items-center">
            <div>
                {
                    open ? <button className="btn btn-warning"
                    onClick={()=>handleCancel(id)}>Cencel</button> : null
                }
            </div>
            <div>

                {
                    open ? <button className="btn btn-secondary">added to cart</button> : <button className="btn btn-primary" onClick = {()=>handleCart(productItem)}>add to cart</button>
                }
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Product;
