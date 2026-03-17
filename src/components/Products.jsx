// import { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./product";

const Products = () => {
  const { state, dispatch } = useProductContext();
  const { allProducts, filteredProducts } = state;
  // const [searchTerm, setSearchTerm] = useState("");
  console.log(state);

  const categories = [...new Set(allProducts.map((item) => item.category))];

  return (
    <div>
      <div className="container mx-auto flex items-center justify-center mt-10">
        <form action="" className="flex gap-2 mb-4 ">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded outline-none"
            // value={searchTerm}
            onChange={(e) => dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value })}
          />
          <button
            type="submit"
            className="px-4 border bg-blue-500 border-none rounded cursor-pointer text-white font-medium text-2xl"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center">
          Products {filteredProducts.length}{" "}
        </h1>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-12 gap-4">
        <div className="col-span-2 ">
          <select
            id="category"
            className="border p-2 rounded outline-none w-full"
            onChange={(e) =>
              dispatch({
                type: "FILTER_BY_CATEGORY",
                payload: e.target.value,
              })
            }
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category} className="capitalize">
                {category}
              </option>
            ))}
          </select>
        </div>

        <ul className=" col-span-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((item) => {
            return <Product key={item.id} productItem={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
