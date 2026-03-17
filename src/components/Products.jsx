import { useProductContext } from "../context/ProductContext";
import Product from "./product";

const Products = () => {
  const { state } = useProductContext();
  console.log(state);

  return (
    <div>
      <div className="container mx-auto flex items-center justify-center mt-10">
        <form action="" className="flex gap-2 mb-4 ">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded outline-none"
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
          Products {state.length}{" "}
        </h1>
      </div>
      <div className="container mx-auto mt-10">
        <ul className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {state.map((item) => {
            return <Product key={item.id} productItem={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
